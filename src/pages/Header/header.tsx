import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

const AppHeader = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [examplesOpen, setExamplesOpen] = useState(false);

  const dropdownRef = useRef<HTMLDivElement>(null);

  const closeMenus = () => {
    setMenuOpen(false);
    setExamplesOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setExamplesOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <header className="w-full border-b bg-skyblue-300 shadow-sm">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link
          to="/"
          className="text-2xl font-bold tracking-wide text-blue-600"
          onClick={closeMenus}
        >
          FieldNerve Technology
        </Link>

        <button
          onClick={() => setMenuOpen((prev) => !prev)}
          className="rounded-md border p-2 lg:hidden"
        >
          ☰
        </button>

        <div
          className={`${
            menuOpen ? "flex" : "hidden"
          } absolute left-0 top-16 z-50 w-full flex-col bg-white shadow-md lg:static lg:flex lg:w-auto lg:flex-row lg:items-center lg:space-x-6 lg:bg-transparent lg:shadow-none`}
        >
          <Link
            to="kpicard"
            onClick={closeMenus}
            className="px-4 py-2 text-gray-700 transition hover:text-blue-600"
          >
            KPI Cards
          </Link>

          <Link
            to="charts"
            onClick={closeMenus}
            className="px-4 py-2 text-gray-700 transition hover:text-blue-600"
          >
            Charts
          </Link>

          <div className="relative" ref={dropdownRef}>
            <button
              onClick={() => setExamplesOpen((prev) => !prev)}
              className="flex w-full items-center justify-between px-4 py-2 text-gray-700 hover:text-blue-600 lg:w-auto"
            >
              Vendor
              <span className="ml-2">{examplesOpen ? "▲" : "▼"}</span>
            </button>

            {examplesOpen && (
              <div className="absolute left-0 mt-2 w-64 rounded-md border bg-white shadow-lg">
                <Link
                  to="vendor-directory"
                  onClick={closeMenus}
                  className="block px-4 py-2 hover:bg-gray-100"
                >
                  Directory
                </Link>

                <Link
                  to="create-vendor"
                  onClick={closeMenus}
                  className="block px-4 py-2 hover:bg-gray-100"
                >
                  Create Vendor
                </Link>

                <Link
                  to="performance"
                  onClick={closeMenus}
                  className="block px-4 py-2 hover:bg-gray-100"
                >
                  Performance
                </Link>

                <Link
                  to="approval-workflow"
                  onClick={closeMenus}
                  className="block px-4 py-2 hover:bg-gray-100"
                >
                  Approval Workflow
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
