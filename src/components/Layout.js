import React from "react";
import SideNav from "./Sidebar";
import NavBar from "./Navbar";

export default function Layout({ children }) {
  return (
    <div className="bg-gray-100 dark:bg-gray-900 dark:text-white text-gray-600 h-screen flex overflow-hidden text-sm">
      <SideNav />
      <div className="flex-grow overflow-hidden h-full flex flex-col">
        <NavBar />
        {children}
      </div>
    </div>
  );
}
