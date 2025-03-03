import React from "react";

interface LayoutProps {
  children: React.ReactNode;
}

function Layout({ children }: LayoutProps) {
  return (
    <div className="p-6 bg-gray-100 dark:bg-gray-900 min-h-screen w-full text-black">
      {children}
    </div>
  );
}

export default Layout;
