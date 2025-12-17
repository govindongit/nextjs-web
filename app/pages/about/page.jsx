import HeroCarousel from "@/app/components/HeroCarousel/HeroCarousel";

export default function AboutPage() {
  return (
    <>
      <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
        <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-center">
          <div>
            We are building the Next project and this is our About Page.
          </div>
        </main>
      </div>
    </>
  );
}
