import { Transition } from "@headlessui/react";
import { useState } from "react";
import OutsideAlerter from "./components/OutsideClickHandler";

function App() {
  const [isOpen, setOpen] = useState(false);

  return (
    <div className="flex justify-center pt-20">
      <OutsideAlerter onClickOutside={() => isOpen && setOpen(false)}>
        <div
          className="relative inline-block text-left"
          onClick={() => setOpen(!isOpen)}
        >
          <div>
            <button
              type="button"
              className="inline-flex justify-center w-full px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500"
              id="menu-button"
            >
              Options
              <svg
                className="w-5 h-5 ml-2 -mr-1"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div>

          <Transition
            show={isOpen}
            enter="transition-opacity duration-75"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity duration-150"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div
              className="absolute right-0 w-56 mt-2 origin-top-right bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
              role="menu"
            >
              <div className="py-1" role="none">
                <a
                  href="/"
                  className="block px-4 py-2 text-sm text-gray-700"
                  role="menuitem"
                  id="menu-item-0"
                >
                  Account settings
                </a>
                <a
                  href="/"
                  className="block px-4 py-2 text-sm text-gray-700"
                  role="menuitem"
                  id="menu-item-1"
                >
                  Support
                </a>
                <a
                  href="/"
                  className="block px-4 py-2 text-sm text-gray-700"
                  role="menuitem"
                  id="menu-item-2"
                >
                  License
                </a>
                <form method="POST" action="#" role="none">
                  <button
                    type="submit"
                    className="block w-full px-4 py-2 text-sm text-left text-gray-700"
                    role="menuitem"
                    id="menu-item-3"
                  >
                    Sign out
                  </button>
                </form>
              </div>
            </div>
          </Transition>
        </div>
      </OutsideAlerter>
    </div>
  );
}

export default App;
