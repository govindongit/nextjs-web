import HeroCarousel from "@/app/components/HeroCarousel/HeroCarousel";
import Image from "next/image";
import Button from "@/app/components/UI/Button";
import { ClientsCarousel } from "@/app/components/ClientsCarousel/ClientsCarousel";
import Faq from "@/app/components/Faq/Faq";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
export default function HomePage() {
  return (
    <>
      <HeroCarousel />
      {/* About Us */}
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
                className="rounded-xl shadow-lg object-cover"
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

              <Button href="/pages/about">Learn More</Button>
              <Button href="/pages/contact" variant="secondary">
                Contact Us
              </Button>
            </div>
          </div>
        </div>
      </section>
      {/* Our Services */}
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
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 text-center ">
            {/* Card 1 */}
            <div className="bg-white rounded-2xl shadow-md p-6 hover:shadow-lg transition justify-items-center">
              <div className="w-12 h-12 flex items-center justify-center bg-black text-white rounded-xl mb-4">
                💻
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Website Design & Development
              </h3>
              <p className="text-gray-600">
                We offer comprehensive website design and development services
                that bring your brand’s digital presence to life.
              </p>
              <HoverCard>
                <HoverCardTrigger>Hover</HoverCardTrigger>
                <HoverCardContent>
                  We offer comprehensive website design and development services
                  that bring your brand’s digital presence to life. From
                  intuitive UI/UX design and responsive layouts to robust
                  development and SEO-friendly architecture, we create websites
                  that enhance user experience, increase online visibility, and
                  convert visitors into loyal customers.
                </HoverCardContent>
              </HoverCard>
            </div>

            {/* Card 2 */}
            <div className="bg-white rounded-2xl shadow-md p-6 hover:shadow-lg transition justify-items-center">
              <div className="w-12 h-12 flex items-center justify-center bg-black text-white rounded-xl mb-4">
                🎨
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Website Maintenance & Security
              </h3>
              <p className="text-gray-600">
                Clean, user-focused designs that create engaging and intuitive
                experiences for your audience.
              </p>
              <HoverCard>
                <HoverCardTrigger>Hover</HoverCardTrigger>
                <HoverCardContent>
                  We offer comprehensive website design and development services
                  that bring your brand’s digital presence to life. From
                  intuitive UI/UX design and responsive layouts to robust
                  development and SEO-friendly architecture, we create websites
                  that enhance user experience, increase online visibility, and
                  convert visitors into loyal customers.
                </HoverCardContent>
              </HoverCard>
            </div>

            {/* Card 3 */}
            <div className="bg-white rounded-2xl shadow-md p-6 hover:shadow-lg justify-items-center">
              <div className="w-12 h-12 flex items-center justify-center bg-black text-white rounded-xl mb-4">
                🚀
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                SEO-Optimised Architecture
              </h3>
              <p className="text-gray-600">
                We help shape your brand identity and build digital strategies
                that drive growth and visibility.
              </p>
              <HoverCard>
                <HoverCardTrigger>Hover</HoverCardTrigger>
                <HoverCardContent>
                  Structuring content and metadata for better search engine
                  rankings.
                </HoverCardContent>
              </HoverCard>
            </div>
          </div>
        </div>
      </section>
      <Faq />
      <ClientsCarousel />
    </>
  );
}
