import React from 'react'


const Layout = ({children}) => {
  return (
   
    <div  className="flex flex-1 flex-col md:pl-64 ">
    <div className="py-6 bg-[#040d2f] md:h-screen ">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8">
            {children}
            </div>
            </div>
            </div>
         
            
  )
}

export default Layout