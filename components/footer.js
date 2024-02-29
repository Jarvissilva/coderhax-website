import Link from "next/link";

const Footer = ({ poppins }) => {
  return (
    <>
      <footer
        className={`flex flex-col justify-center items-center gap-4 ${poppins.className} px-5 py-10 border-t border-gray-200`}
      >
        <nav>
          <ul className="flex flex-wrap justify-center gap-4 capitalize">
            <li>
              <Link
                href="/"
                className="text-lg font-medium hover:text-blue-500"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/about-us"
                className="text-lg font-medium hover:text-blue-500"
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                href="/contact-us"
                className="text-lg font-medium hover:text-blue-500"
              >
                Contact Us
              </Link>
            </li>
            <li>
              <Link
                href="/privacy-policy"
                className="text-lg font-medium hover:text-blue-500"
              >
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link
                href="/terms-of-service"
                className="text-lg font-medium hover:text-blue-500"
              >
                Terms Of Service
              </Link>
            </li>
          </ul>
        </nav>
        <div>
          <p>&copy; 2023 All Rights Reserved</p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
