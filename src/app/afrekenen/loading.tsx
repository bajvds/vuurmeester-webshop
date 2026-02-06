export default function Loading() {
  return (
    <div className="min-h-screen bg-stone-50">
      <div className="container mx-auto px-4 py-8">
        <div className="h-8 w-48 bg-stone-200 rounded animate-pulse mb-8" />
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-white rounded-xl p-6 shadow-sm space-y-4">
              <div className="h-6 w-40 bg-stone-200 rounded animate-pulse" />
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="h-10 bg-stone-100 rounded animate-pulse" />
                <div className="h-10 bg-stone-100 rounded animate-pulse" />
              </div>
            </div>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-sm h-64 animate-pulse" />
        </div>
      </div>
    </div>
  );
}
