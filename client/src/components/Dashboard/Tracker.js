import React, { useState } from "react";
import Sidebar from "./Sidebar";
import Transaction from "./Transaction";
import Userpannel from "./Userpannel";

const Tracker = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isUserpannelOpen, setIsUserpannelOpen] = useState(false);

  return (
    <div class="flex h-screen antialiased text-gray-900 bg-gray-100">
      {isSidebarOpen && (
        <>
          <div
            onClick={() => setIsSidebarOpen(false)}
            class="fixed inset-0 z-10 bg-green-800 md:hidden"
            style={{ opacity: 0.5 }}
          ></div>
        </>
      )}

      <Sidebar isSidebarOpen={isSidebarOpen} />
      <div class="flex flex-1 h-screen overflow-y-scroll">
        <main class="flex-1">
          <header class="flex items-center justify-between p-4">
            <div class="flex items-center space-x-4 md:space-x-0">
              <button class="p-1 text-green-400 transition-colors duration-200 rounded-md bg-green-50 md:hidden hover:text-green-600 hover:bg-green-100 focus:outline-none focus:ring">
                <span class="sr-only">Open main manu</span>
                <span>
                  <svg
                    onClick={() => setIsSidebarOpen(true)}
                    class="w-8 h-8"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                </span>
              </button>
              <h1 class="text-2xl md:text-3xl font-bold p-4">Money Tracker</h1>
            </div>
            <div class="space-x-2">
              <button class="p-1 text-green-400 transition-colors duration-200 rounded-md bg-green-50 xl:hidden hover:text-green-600 hover:bg-green-100 focus:outline-none focus:ring">
                <span class="sr-only">Open user panel</span>
                <span>
                  <svg
                    onClick={() => setIsUserpannelOpen(true)}
                    class="w-8 h-8"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
                    />
                  </svg>
                </span>
              </button>
            </div>
          </header>
          <section class="flex flex-wrap items-center justify-between px-8 py-3 space-y-4 md:space-y-0 md:space-x-4">
            <div class="flex flex-auto rounded-md bg-white shadow-md w-80 h-40 p-2">
              <h1 class="font-medium px-4 py-2">Inflow</h1>
            </div>
            <div class="flex flex-auto rounded-md bg-white shadow-md w-80 h-40 p-2">
              <h1 class="font-medium px-4 py-2">Outflow</h1>
            </div>
          </section>
          {/* <section class="flex flex-wrap items-center justify-around space-y-8 sm:space-y-0 my-5">
            <div class="flex flex-auto mx-8 rounded-md bg-white shadow-md w-80 h-40 p-2">
              <h1 class="font-medium px-4 py-2">Inflow</h1>
            </div>
            <div class="flex flex-auto mx-8 rounded-md bg-white shadow-md w-80 h-40 p-2">
              <h1 class="font-medium px-4 py-2">Outflow</h1>
            </div>
          </section> */}
          <div class="flex justify-between px-8 py-3 font-medium">
            <p class="text-2xl font-semibold md:text-3xl">Transactions</p>
            <button class="p-2 text-center bg-white rounded-md shadow-md bg-green-600 text-white hover:bg-green-700 cursor-pointer">
              + Add Transaction
            </button>
          </div>

          <div class="grid grid-cols-1 gap-4 px-8 py-4">
            <Transaction />
            <Transaction />
            <Transaction />
          </div>
        </main>
        {isUserpannelOpen && (
          <>
            <div
              onClick={() => setIsUserpannelOpen(false)}
              class="fixed inset-0 z-10 bg-green-800 xl:hidden"
              style={{ opacity: 0.5 }}
            ></div>
          </>
        )}
        <Userpannel isUserpannelOpen={isUserpannelOpen} />
      </div>
    </div>
  );
};

export default Tracker;
