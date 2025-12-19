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
    </>
  );
}
