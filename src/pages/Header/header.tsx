import { useState } from "react";
import { Link } from "react-router-dom";

const AppHeader = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [examplesOpen, setExamplesOpen] = useState(false);
  const [formsOpen, setFormsOpen] = useState(false);

  return (
    <header className="w-full border-b bg-white shadow-sm">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold tracking-wide text-blue-600">
          VP
        </Link>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="rounded-md border p-2 lg:hidden"
        >
          ☰
        </button>

        {/* Navigation */}
        <div
          className={`${
            menuOpen ? "flex" : "hidden"
          } absolute left-0 top-16 z-50 w-full flex-col bg-white shadow-md lg:static lg:flex lg:w-auto lg:flex-row lg:items-center lg:space-x-6 lg:bg-transparent lg:shadow-none`}
        >
          <Link
            to="layout"
            className="px-4 py-2 text-gray-700 transition hover:text-blue-600"
          >
            Dashboard
          </Link>

          <Link
            to="second-component"
            className="px-4 py-2 text-gray-700 transition hover:text-blue-600"
          >
            Two
          </Link>

          <Link
            to="third"
            className="px-4 py-2 text-gray-700 transition hover:text-blue-600"
          >
            Three
          </Link>

          <Link
            to="vendor-directory"
            className="px-4 py-2 text-gray-700 transition hover:text-blue-600"
          >
            Vendor Directory
          </Link>

          <div className="relative">
            <button
              onClick={() => setExamplesOpen(!examplesOpen)}
              className="flex w-full items-center justify-between px-4 py-2 text-gray-700 hover:text-blue-600 lg:w-auto"
            >
              Examples
              <span className="ml-2">▼</span>
            </button>

            {examplesOpen && (
              <div className="absolute left-0 mt-2 w-64 rounded-md border bg-white shadow-lg">
                <Link
                  className="block px-4 py-2 hover:bg-gray-100"
                  to="tableOne"
                >
                  Tables
                </Link>

                <Link
                  className="block px-4 py-2 hover:bg-gray-100"
                  to="webSocketOne"
                >
                  WebSocket Example
                </Link>

                <Link
                  className="block px-4 py-2 hover:bg-gray-100"
                  to="google-map"
                >
                  Google Map
                </Link>

                <Link
                  className="block px-4 py-2 hover:bg-gray-100"
                  to="lazyLoading"
                >
                  Lazy Loading
                </Link>

                <Link
                  className="block px-4 py-2 hover:bg-gray-100"
                  to="GraphqlAPI"
                >
                  GraphQL API
                </Link>

                <Link
                  className="block px-4 py-2 hover:bg-gray-100"
                  to="subchild"
                >
                  Sub Child
                </Link>

                <Link
                  className="block px-4 py-2 hover:bg-gray-100"
                  to="jwt-token"
                >
                  JWT Token
                </Link>

                <Link
                  className="block px-4 py-2 hover:bg-gray-100"
                  to="common-form"
                >
                  Common Form
                </Link>

                <Link
                  className="block px-4 py-2 hover:bg-gray-100"
                  to="detail-table"
                >
                  Table Detail Popup
                </Link>

                <Link
                  className="block px-4 py-2 hover:bg-gray-100"
                  to="scroll-load"
                >
                  Scroll Load More
                </Link>
              </div>
            )}
          </div>

          <div className="relative">
            <button
              onClick={() => setFormsOpen(!formsOpen)}
              className="flex w-full items-center justify-between px-4 py-2 text-gray-700 hover:text-blue-600 lg:w-auto"
            >
              Common Forms
              <span className="ml-2">▼</span>
            </button>

            {formsOpen && (
              <div className="absolute left-0 mt-2 w-72 rounded-md border bg-white shadow-lg">
                <Link
                  className="block px-4 py-2 hover:bg-gray-100"
                  to="normal-form"
                >
                  Normal Form
                </Link>

                <Link
                  className="block px-4 py-2 hover:bg-gray-100"
                  to="step-form"
                >
                  Step Form
                </Link>

                <Link
                  className="block px-4 py-2 hover:bg-gray-100"
                  to="google-map"
                >
                  Tabbed Form
                </Link>

                <Link
                  className="block px-4 py-2 hover:bg-gray-100"
                  to="lazyLoading"
                >
                  Dynamic Form
                </Link>

                <Link
                  className="block px-4 py-2 hover:bg-gray-100"
                  to="GraphqlAPI"
                >
                  Repeated / Field Array
                </Link>

                <Link
                  className="block px-4 py-2 hover:bg-gray-100"
                  to="subchild"
                >
                  Modal Form
                </Link>

                <Link
                  className="block px-4 py-2 hover:bg-gray-100"
                  to="jwt-token"
                >
                  Search / Filter
                </Link>

                <Link
                  className="block px-4 py-2 hover:bg-gray-100"
                  to="common-form"
                >
                  Progressive Form
                </Link>

                <Link
                  className="block px-4 py-2 hover:bg-gray-100"
                  to="detail-table"
                >
                  File Upload
                </Link>

                <Link
                  className="block px-4 py-2 hover:bg-gray-100"
                  to="heavy-validation-form"
                >
                  Validation Heavy
                </Link>
              </div>
            )}
          </div>
        </div>
      </nav>
    </header>
  );
};

export default AppHeader;
