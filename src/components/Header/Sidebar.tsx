import React from 'react'
interface SideProps{
  isSidebarOpen:boolean;
  toggleSidebar: () => void;
}

function Sidebar({isSidebarOpen,toggleSidebar}:SideProps) {
  return (
    <aside className={`fixed top-0 left-0 z-40 w-64 h-screen pt-20 bg-primary border-r shadow-sm sm:translate-x-0 dark:bg-primary dark:border-hover transition-transform ${isSidebarOpen?"translate-x-0":"-translate-x-full"}`}>
   
  sidebar
    </aside>
  )
}

export default Sidebar