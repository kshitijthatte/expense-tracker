import React from "react";

const Sidebar = ({ isSidebarOpen }) => {
  return (
    <aside
      class="fixed inset-y-0 z-10 flex flex-shrink-0 bg-white border-r md:static focus:outline-none hidden md:block"
      style={{ display: `${isSidebarOpen ? "block" : ""}` }}
    >
      <nav class="flex flex-col flex-shrink-0 h-full px-2 py-4 border-r">
        <div class="flex flex-col items-center justify-center flex-1 space-y-4">
          <a
            href="/"
            class="p-2 text-white transition-colors duration-200 bg-green-600 rounded-full hover:text-green-600 hover:bg-green-100 focus:outline-none focus:bg-green-100 focus:ring-green-800"
          >
            <span class="sr-only">Home</span>
            <svg
              class="w-7 h-7"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
              />
            </svg>
          </a>
          <a
            href="/"
            class="p-2 text-green-400 transition-colors duration-200 rounded-full bg-green-50 hover:text-green-600 hover:bg-green-100 focus:outline-none focus:bg-green-100 focus:ring-green-800"
          >
            <span class="sr-only">Messages</span>
            <svg
              class="w-7 h-7"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"
              />
            </svg>
          </a>
          <a
            href="/"
            class="p-2 text-green-400 transition-colors duration-200 rounded-full bg-green-50 hover:text-green-600 hover:bg-green-100 focus:outline-none focus:bg-green-100 focus:ring-green-800"
          >
            <span class="sr-only">Another Link</span>
            <svg
              class="w-7 h-7"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z"
              />
            </svg>
          </a>
          <a
            href="/"
            class="p-2 text-green-400 transition-colors duration-200 rounded-full bg-green-50 hover:text-green-600 hover:bg-green-100 focus:outline-none focus:bg-green-100 focus:ring-green-800"
          >
            <span class="sr-only">Users</span>
            <svg
              class="w-7 h-7"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
              />
            </svg>
          </a>
        </div>
        <form action="#" class="flex items-center justify-center flex-shrink-0">
          <button class="p-2 text-green-400 transition-colors duration-200 rounded-full bg-green-50 hover:text-green-600 hover:bg-green-100 focus:outline-none focus:bg-green-100 focus:ring-green-800">
            <span class="sr-only">Logout</span>
            <svg
              class="w-7 h-7"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
              />
            </svg>
          </button>
        </form>
      </nav>
    </aside>
  );
};

export default Sidebar;
