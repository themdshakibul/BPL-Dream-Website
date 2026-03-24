import footerLogo from "../../assets/logo-footer.png";

const Footer = () => {
  return (
    <footer className="relative mt-52">
      <div className="relative z-10 -mb-40 max-w-5xl mx-auto px-4">
        <div className="bg-[url('/src/assets/bg-shadow.png')] bg-no-repeat bg-cover bg-center rounded-3xl overflow-hidden shadow-xl h-80 bg-white border border-gray-100">
          <div className="flex flex-col items-center justify-center h-full p-8 text-center">
            <h3 className="text-3xl font-bold mb-2 text-black">
              Subscribe to our Newsletter
            </h3>
            <p className="text-xl mb-6 text-gray-600">
              Get the latest updates and news right in your inbox!
            </p>
            <form className="flex flex-wrap justify-center items-center gap-4 w-full max-w-md">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 rounded-md py-3 px-4 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#d97db1] text-black"
              />
              <input
                type="button"
                value="Subscribe"
                className="py-3 px-6 rounded-md font-bold bg-linear-to-r from-[#d97db1] to-[#facc59] text-white cursor-pointer hover:opacity-90 transition-all shadow-md"
              />
            </form>
          </div>
        </div>
      </div>
      <div className="bg-black text-white relative pt-52 pb-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center justify-center mb-16">
            <img src={footerLogo} alt="Footer Logo" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="space-y-4">
              <h3 className="text-xl font-bold">About Us</h3>
              <p className="text-gray-400 leading-relaxed">
                We are a passionate team dedicated to providing the best
                services to our customers.
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-bold">Quick Links</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Services
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    About
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-bold">Subscribe</h3>
              <p className="text-gray-400">
                Subscribe to our newsletter for the latest updates.
              </p>
              <form className="flex items-center">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="bg-white py-3 px-4 rounded-l-md text-black focus:outline-none w-full"
                />
                <input
                  type="button"
                  value="Subscribe"
                  className="py-3 px-5 text-white font-bold rounded-r-md bg-linear-to-r from-[#d97db1] to-[#facc59] cursor-pointer"
                />
              </form>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-16 pt-8 text-center text-gray-400 text-sm">
          <p>© 2026 Your Company. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
