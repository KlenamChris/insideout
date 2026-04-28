import ProductCarousel from "@/components/ProductCarousel";

export default function Page() {
  return (
    <main className="bg-green-800 min-h-screen w-screen max-w-full text-white py-20">
      <div className="max-w-full px-16">
        
        {/* Heading */}
        <h1 className="text-4xl md:text-5xl font-light mb-14">
          Discover Our{" "}
          <span className="font-medium text-lime-300">
            Smart Products
          </span>
        </h1>

        {/* Carousel */}
        <ProductCarousel />
      </div>

    </main>
  );
}