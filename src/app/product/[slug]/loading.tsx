export default function Loading() {
  return (
    <div className="min-h-screen bg-white">
      <div className="bg-stone-50 border-b">
        <div className="container mx-auto px-4 py-3">
          <div className="h-4 w-32 bg-stone-200 rounded animate-pulse" />
        </div>
      </div>
      <div className="container mx-auto px-4 py-8 lg:py-12">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          <div className="aspect-square rounded-xl bg-stone-100 animate-pulse" />
          <div className="space-y-6">
            <div className="h-8 w-3/4 bg-stone-200 rounded animate-pulse" />
            <div className="h-10 w-1/3 bg-stone-200 rounded animate-pulse" />
            <div className="space-y-2">
              <div className="h-4 w-full bg-stone-100 rounded animate-pulse" />
              <div className="h-4 w-5/6 bg-stone-100 rounded animate-pulse" />
              <div className="h-4 w-2/3 bg-stone-100 rounded animate-pulse" />
            </div>
            <div className="h-12 w-full bg-orange-200 rounded-lg animate-pulse" />
          </div>
        </div>
      </div>
    </div>
  );
}
