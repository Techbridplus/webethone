import React from 'react'
import {  SidebarDemo } from "@/components/SidebarDemo";
function Layout({children}) {
    return (
        <div className="dark:bg-boxdark-2 dark:text-bodydark w-screen">
        {/* <!-- ===== Page Wrapper Start ===== --> */}
          <div className="flex w-full  h-screen overflow-hidden">
            {/* <!-- ===== Sidebar Start ===== --> */}
            <SidebarDemo>
            {/* <!-- ===== Sidebar End ===== --> */}

            {/* <!-- ===== Content Area Start ===== --> */}
            
              {/* <!-- ===== Header Start ===== --> */}
              {/* <!-- ===== Header End ===== --> */}

              {/* <!-- ===== Main Content Start ===== --> */}
              <main className=' flex flex-1 flex-col overflow-y-auto overflow-x-hidden'>
                <div className=" w-full  ">
                  {children}
                </div>
              </main>

              </SidebarDemo>
              {/* <!-- ===== Main Content End ===== --> */}
            {/* <!-- ===== Content Area End ===== --> */}
          </div>
          {/* <!-- ===== Page Wrapper End ===== --> */}
      </div>
    )
}

export default Layout
