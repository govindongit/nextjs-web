import HeroCarousel from "@/app/components/HeroCarousel/HeroCarousel";
import Image from "next/image";
import Button from "@/app/components/UI/Button";
export default function HomePage() {
  return (
    <>
      <HeroCarousel />

      <section className="bg-white py-10">
        <div className="max-w-7xl mx-auto px-5">
          {/* Header */}
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              About Us
            </h2>
            <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
              We create meaningful digital experiences that help brands grow and
              connect with their audience.
            </p>
          </div>

          {/* Content */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            {/* Image */}
            <div className="relative w-full h-[350px]">
              <Image
                src="/img/hero/hey-honey-crop-top-mocha-muse-desk.webp"
                alt="About us"
                fill
                className="rounded-2xl shadow-lg object-cover"
                priority
              />
            </div>

            {/* Text */}
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                Who We Are
              </h3>

              <p className="text-gray-600 mb-4">
                We are a team of designers and developers passionate about
                building high-quality websites and digital solutions. Our focus
                is on performance, usability, and clean design.
              </p>

              <p className="text-gray-600 mb-6">
                From startups to established brands, we collaborate closely with
                clients to transform ideas into successful digital products.
              </p>

              {/* <Link
                href="/pages/about"
                className="inline-block bg-black text-white px-6 py-3 rounded-2xl text-sm font-medium hover:bg-gray-800 transition"
              >
                Learn More
              </Link> */}
              <Button href="/pages/about">Learn More</Button>
              <Button href="/pages/contact" variant="secondary">
                Contact Us
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-5">
          {/* Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Our Services
            </h2>
            <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
              We offer end-to-end digital solutions designed to help your
              business stand out and grow.
            </p>
          </div>

          {/* Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="bg-white rounded-2xl shadow-md p-6 hover:shadow-lg transition">
              <div className="w-12 h-12 flex items-center justify-center bg-black text-white rounded-xl mb-4">
                💻
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Web Development
              </h3>
              <p className="text-gray-600">
                High-performance, responsive websites built with modern
                technologies like Next.js and Tailwind CSS.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-white rounded-2xl shadow-md p-6 hover:shadow-lg transition">
              <div className="w-12 h-12 flex items-center justify-center bg-black text-white rounded-xl mb-4">
                🎨
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                UI / UX Design
              </h3>
              <p className="text-gray-600">
                Clean, user-focused designs that create engaging and intuitive
                experiences for your audience.
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-white rounded-2xl shadow-md p-6 hover:shadow-lg transition">
              <div className="w-12 h-12 flex items-center justify-center bg-black text-white rounded-xl mb-4">
                🚀
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Brand & Growth
              </h3>
              <p className="text-gray-600">
                We help shape your brand identity and build digital strategies
                that drive growth and visibility.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Clients />
    </>
  );
}
