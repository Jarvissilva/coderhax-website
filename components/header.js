import { useState } from "react";
import Link from "next/link";
import { IoAddOutline, IoSearchOutline } from "react-icons/io5";
import { IoMdClose } from "react-icons/io";
import Search from "components/search";

const Header = ({ loggedUser, poppins, redressed }) => {
  const [showSearchDrawer, setShowSearchDrawer] = useState(false);

  return (
    <>
      <header className="flex justify-between px-[clamp(1rem,5vw,2.25rem)] py-[clamp(1rem,5vw,1.75rem)] lg:px-[clamp(2.25rem,10vw,8rem)] border-b border-b-gray-200">
        <div className="flex items-center justify-center">
          <Link
            href="/"
            className={`text-[clamp(2.5rem,5vw,3rem)] ${redressed.className} font-semibold leading-none `}
          >
            Coderhax
          </Link>
        </div>
        <div className="flex gap-[clamp(.8rem,2.5vw,1.6rem)]">
          <div className="flex justify-center items-center">
            <button
              type="button"
              onClick={() => setShowSearchDrawer(true)}
              aria-label="Search"
              title="Search"
            >
              <IoSearchOutline size={30} className="hover:scale-110" />
            </button>
          </div>
          <div className="flex justify-center items-center">
            <Link
              href="/snippets/new"
              rel="nofollow"
              title="Create new snippet"
              aria-label="Create new snippet"
            >
              <IoAddOutline size={40} className="hover:scale-110" />
            </Link>
          </div>
          <div className="flex justify-center items-center">
            {loggedUser ? (
              <Link href={`/users/${loggedUser.username}`} title="My Account">
                <div className="w-9 h-9 flex justify-center items-center bg-blue-500 rounded-full hover:bg-blue-600 focus:bg-blue-600 focus:ring focus:ring-blue-300">
                  <span className="text-white text-xl font-medium capitalize">
                    {loggedUser.username.charAt(0)}
                  </span>
                </div>
              </Link>
            ) : (
              <Link
                href="/users/login"
                className={`bg-blue-600 text-white ${poppins.className} font-medium px-[clamp(1.25rem,5vw,1.5rem)] py-[clamp(0.5rem,5vw,.6rem)] rounded-md hover:bg-blue-700 focus:bg-blue-600 focus:ring focus:ring-blue-300`}
              >
                Login
              </Link>
            )}
          </div>
        </div>
        {showSearchDrawer && (
          <div className="flex flex-col justify-between items-center px-[clamp(1.25rem,6vw,6rem)] py-[clamp(1.25rem,6vw,3rem)] lg:px-[clamp(3rem,14vw,12rem)] fixed inset-0 z-50 backdrop-blur">
            <Search />
            <div>
              <button
                className="bg-white text-black p-3 border border-gray-200 rounded-md"
                onClick={() => setShowSearchDrawer(false)}
                title="Close search"
                aria-label="Close search"
              >
                <IoMdClose size={25} />
              </button>
            </div>
          </div>
        )}
      </header>
    </>
  );
};

export default Header;
