// WooCommerce Product Types

export interface ProductImage {
  id: number;
  src: string;
  alt: string;
}

export interface ProductCategory {
  id: number;
  name: string;
  slug: string;
}

export interface ProductAttribute {
  id: number;
  name: string;
  options: string[];
}

export interface Product {
  id: number;
  name: string;
  slug: string;
  permalink: string;
  type: 'simple' | 'variable' | 'grouped' | 'external';
  status: 'publish' | 'draft' | 'pending' | 'private';
  description: string;
  short_description: string;
  sku: string;
  price: string;
  regular_price: string;
  sale_price: string;
  on_sale: boolean;
  stock_status: 'instock' | 'outofstock' | 'onbackorder';
  stock_quantity: number | null;
  images: ProductImage[];
  categories: ProductCategory[];
  attributes: ProductAttribute[];
  related_ids: number[];
  meta_data: { key: string; value: string }[];
}

// Cart Types
export interface CartItem {
  key: string;
  product_id: number;
  product: Product;
  quantity: number;
  subtotal: number;
}

export interface Cart {
  items: CartItem[];
  subtotal: number;
  shipping: number;
  total: number;
}

// Shipping Types
export interface ShippingZone {
  id: number;
  name: string;
  order: number;
}

export interface ShippingLocation {
  code: string;
  type: 'postcode' | 'state' | 'country' | 'continent';
}

export interface ShippingMethod {
  instance_id: number;
  title: string;
  method_id: string;
  cost: string;
}

// Order Types
export interface OrderLineItem {
  product_id: number;
  quantity: number;
  name?: string;
  price?: number;
}

export interface OrderBilling {
  first_name: string;
  last_name: string;
  email: string;
  phone: string;
  address_1: string;
  address_2?: string;
  postcode: string;
  city: string;
  country: string;
}

export interface OrderShipping {
  first_name: string;
  last_name: string;
  address_1: string;
  address_2?: string;
  postcode: string;
  city: string;
  country: string;
}

export interface CreateOrderData {
  payment_method: string;
  payment_method_title: string;
  set_paid: boolean;
  billing: OrderBilling;
  shipping: OrderShipping;
  line_items: OrderLineItem[];
  shipping_lines: { method_id: string; method_title: string; total: string }[];
}

export interface Order {
  id: number;
  status: string;
  total: string;
  billing: OrderBilling;
  shipping: OrderShipping;
  line_items: OrderLineItem[];
  date_created: string;
}
