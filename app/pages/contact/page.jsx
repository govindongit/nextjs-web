import ContactForm from "@/app/components/ContactForm/ContactForm";

export default function ContactPage() {
  return (
    <>
      <div className="flex flex-col md:flex-row items-center justify-center min-h-screen gap-8 px-2 py-2 dark:bg-black bg-zinc-50">
        <div className="max-w-md text-center md:text-left">
          <p className=" md:text-lg">
            We are building a Next based Website from the scratch with the help
            of the AI and this is our Contact Page.
          </p>
        </div>

        <ContactForm />
      </div>
    </>
  );
}
