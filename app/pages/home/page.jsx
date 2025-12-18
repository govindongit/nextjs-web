import HeroCarousel from "@/app/components/HeroCarousel/HeroCarousel";
export default function HomePage() {
  return (
    <>
      <HeroCarousel />
      <section className="flex min-h-screen justify-center bg-zinc-50 font-sans dark:bg-black">
        <div>
          We are building the Next.js based project And this is our Home page.
        </div>
      </section>
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              About Us
            </h2>
            <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
              We create meaningful digital experiences that help brands grow and
              connect with their audience.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div>
              <img
                src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d"
                alt="About us"
                className="rounded-2xl shadow-lg w-full"
              />
            </div>

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

              <a
                href="#"
                className="inline-block bg-black text-white px-6 py-3 rounded-full text-sm font-medium hover:bg-gray-800 transition"
              >
                Learn More
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
