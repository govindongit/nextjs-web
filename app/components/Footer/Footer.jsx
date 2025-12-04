export default function Footer() {
  return (
    <footer className="bg-gray-100 py-10">
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-10">
        <div>
          <h3 className="font-semibold text-lg mb-4">Company</h3>
          <p className="text-gray-600 text-sm">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>

        <div>
          <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
          <ul className="text-gray-700 text-sm space-y-2">
            <li>
              <a href="/about" className="hover:text-black">
                About
              </a>
            </li>
            <li>
              <a href="/services" className="hover:text-black">
                Services
              </a>
            </li>
            <li>
              <a href="/contact" className="hover:text-black">
                Contact
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold text-lg mb-4">Social</h3>
          <ul className="text-gray-700 text-sm space-y-2">
            <li>
              <a href="#" className="hover:text-black">
                Instagram
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-black">
                LinkedIn
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-black">
                Twitter
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="text-center text-gray-500 text-sm mt-8">
        © {new Date().getFullYear()} Your Company. All rights reserved.
      </div>
    </footer>
  );
}
