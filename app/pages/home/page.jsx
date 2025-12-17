import HeroCarousel from "@/app/components/HeroCarousel/HeroCarousel";
export default function HomePage() {
  return (
    <>
      <HeroCarousel />
      <div className="flex min-h-screen justify-center bg-zinc-50 font-sans dark:bg-black">
        <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-center bg-white dark:bg-black sm:items-center">
          <div>
            We are building the Next.js based project And this is our Home page.
          </div>
        </main>
      </div>
    </>
  );
}
