import React from 'react';

interface SideProps {
  isSidebarOpen: boolean;
}

function Sidebar({ isSidebarOpen }: SideProps) {
  return (
    <aside
      className={`fixed top-0 left-0 z-40 w-64 h-screen pt-20 bg-primary border-r shadow border-r shadow-sm dark:bg-primary dark:border-hover transition-transform duration-300 ease-in-out transform ${!isSidebarOpen ? 'translate-x-0' : '-translate-x-full'}`}
    >
      sidebar
    </aside>
  );
}

export default Sidebar;
