import ImageCarousel from "@/components/ImageCarousel";

export default function ProductSection() {
  return (
    <section className="bg-[#f3f3f3] px-3 py-6 sm:px-6 lg:px-2 lg:py-10">
      <div className="rounded-3xl bg-green-800 px-4 py-10 sm:px-8 sm:py-14 lg:px-0 lg:py-16">
        {/* Heading */}
        <div className="mb-8 flex items-center justify-center lg:mb-12">
          <h2 className="relative right-52 text-3xl font-light tracking-tight text-white/35 sm:text-5xl lg:text-6xl">
            Discover Our Smart{" "}
            <span className="font-medium text-lime-300">Products</span>
          </h2>
        </div>

        {/* Carousel */}
        <ImageCarousel />
      </div>
    </section>
  );
}
