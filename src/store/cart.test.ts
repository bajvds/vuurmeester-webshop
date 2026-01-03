import { describe, it, expect, beforeEach } from "vitest";
import { useCart } from "./cart";
import { Product } from "@/lib/woocommerce/client";

// Mock product factory
function createMockProduct(overrides: Partial<Product> = {}): Product {
  return {
    id: 1,
    name: "Test Haardhout",
    slug: "test-haardhout",
    permalink: "https://vuurmeester.shop/product/test-haardhout",
    type: "simple",
    short_description: "Test product",
    description: "Test product description",
    sku: "TEST-001",
    prices: {
      price: "9900", // €99.00 in cents
      regular_price: "9900",
      sale_price: "",
      currency_code: "EUR",
      currency_symbol: "€",
      currency_minor_unit: 2,
    },
    price_html: "€99,00",
    on_sale: false,
    average_rating: "5.0",
    review_count: 10,
    images: [],
    categories: [],
    is_purchasable: true,
    is_in_stock: true,
    has_options: false,
    attributes: [],
    variations: [],
    ...overrides,
  };
}

describe("useCart", () => {
  // Reset store state before each test
  beforeEach(() => {
    useCart.setState({ items: [], isOpen: false });
  });

  describe("addItem", () => {
    it("adds a new product to cart", () => {
      const product = createMockProduct();
      useCart.getState().addItem(product);

      const { items } = useCart.getState();
      expect(items).toHaveLength(1);
      expect(items[0].product.id).toBe(1);
      expect(items[0].quantity).toBe(1);
    });

    it("adds with custom quantity", () => {
      const product = createMockProduct();
      useCart.getState().addItem(product, 3);

      const { items } = useCart.getState();
      expect(items[0].quantity).toBe(3);
    });

    it("increases quantity when adding same product", () => {
      const product = createMockProduct();
      useCart.getState().addItem(product, 2);
      useCart.getState().addItem(product, 3);

      const { items } = useCart.getState();
      expect(items).toHaveLength(1);
      expect(items[0].quantity).toBe(5);
    });

    it("adds different products separately", () => {
      const product1 = createMockProduct({ id: 1, name: "Product 1" });
      const product2 = createMockProduct({ id: 2, name: "Product 2" });

      useCart.getState().addItem(product1);
      useCart.getState().addItem(product2);

      const { items } = useCart.getState();
      expect(items).toHaveLength(2);
    });
  });

  describe("removeItem", () => {
    it("removes item from cart", () => {
      const product = createMockProduct();
      useCart.getState().addItem(product);
      useCart.getState().removeItem(1);

      const { items } = useCart.getState();
      expect(items).toHaveLength(0);
    });

    it("only removes specified product", () => {
      const product1 = createMockProduct({ id: 1 });
      const product2 = createMockProduct({ id: 2 });

      useCart.getState().addItem(product1);
      useCart.getState().addItem(product2);
      useCart.getState().removeItem(1);

      const { items } = useCart.getState();
      expect(items).toHaveLength(1);
      expect(items[0].product.id).toBe(2);
    });
  });

  describe("updateQuantity", () => {
    it("updates item quantity", () => {
      const product = createMockProduct();
      useCart.getState().addItem(product);
      useCart.getState().updateQuantity(1, 5);

      const { items } = useCart.getState();
      expect(items[0].quantity).toBe(5);
    });

    it("removes item when quantity is 0", () => {
      const product = createMockProduct();
      useCart.getState().addItem(product);
      useCart.getState().updateQuantity(1, 0);

      const { items } = useCart.getState();
      expect(items).toHaveLength(0);
    });

    it("removes item when quantity is negative", () => {
      const product = createMockProduct();
      useCart.getState().addItem(product);
      useCart.getState().updateQuantity(1, -1);

      const { items } = useCart.getState();
      expect(items).toHaveLength(0);
    });
  });

  describe("clearCart", () => {
    it("removes all items", () => {
      const product1 = createMockProduct({ id: 1 });
      const product2 = createMockProduct({ id: 2 });

      useCart.getState().addItem(product1);
      useCart.getState().addItem(product2);
      useCart.getState().clearCart();

      const { items } = useCart.getState();
      expect(items).toHaveLength(0);
    });
  });

  describe("cart drawer state", () => {
    it("opens cart", () => {
      useCart.getState().openCart();
      expect(useCart.getState().isOpen).toBe(true);
    });

    it("closes cart", () => {
      useCart.getState().openCart();
      useCart.getState().closeCart();
      expect(useCart.getState().isOpen).toBe(false);
    });

    it("toggles cart", () => {
      expect(useCart.getState().isOpen).toBe(false);
      useCart.getState().toggleCart();
      expect(useCart.getState().isOpen).toBe(true);
      useCart.getState().toggleCart();
      expect(useCart.getState().isOpen).toBe(false);
    });
  });

  describe("getItemCount", () => {
    it("returns 0 for empty cart", () => {
      expect(useCart.getState().getItemCount()).toBe(0);
    });

    it("returns total quantity of all items", () => {
      const product1 = createMockProduct({ id: 1 });
      const product2 = createMockProduct({ id: 2 });

      useCart.getState().addItem(product1, 2);
      useCart.getState().addItem(product2, 3);

      expect(useCart.getState().getItemCount()).toBe(5);
    });
  });

  describe("getSubtotal", () => {
    it("returns 0 for empty cart", () => {
      expect(useCart.getState().getSubtotal()).toBe(0);
    });

    it("calculates subtotal correctly", () => {
      const product = createMockProduct({
        prices: {
          price: "9900", // €99.00
          regular_price: "9900",
          sale_price: "",
          currency_code: "EUR",
          currency_symbol: "€",
          currency_minor_unit: 2,
        },
      });

      useCart.getState().addItem(product, 2);

      // 99.00 * 2 = 198.00
      expect(useCart.getState().getSubtotal()).toBe(198);
    });

    it("calculates subtotal with multiple products", () => {
      const product1 = createMockProduct({
        id: 1,
        prices: {
          price: "9900", // €99.00
          regular_price: "9900",
          sale_price: "",
          currency_code: "EUR",
          currency_symbol: "€",
          currency_minor_unit: 2,
        },
      });
      const product2 = createMockProduct({
        id: 2,
        prices: {
          price: "5000", // €50.00
          regular_price: "5000",
          sale_price: "",
          currency_code: "EUR",
          currency_symbol: "€",
          currency_minor_unit: 2,
        },
      });

      useCart.getState().addItem(product1, 1); // 99.00
      useCart.getState().addItem(product2, 2); // 100.00

      // 99 + 100 = 199.00
      expect(useCart.getState().getSubtotal()).toBe(199);
    });
  });
});
