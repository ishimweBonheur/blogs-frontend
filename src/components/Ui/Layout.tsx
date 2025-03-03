import React from "react";


interface LayoutProps {
  children: React.ReactNode;
}

function Layout({ children }: LayoutProps) {
  return (
    <div className="bg-black"> 
      {children}
    </div>
  );
}

export default Layout;
