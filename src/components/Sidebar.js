
import { Fragment, useState } from 'react'
import { Dialog, Menu, Transition } from '@headlessui/react'
import logo from './logo.png'
import {Link} from 'react-router-dom'
import {Bars3BottomLeftIcon,BellIcon,CalendarIcon,ChartBarIcon,HomeIcon,InboxIcon,UsersIcon, XMarkIcon,ChatBubbleLeftEllipsisIcon,
        DocumentIcon, ExclamationCircleIcon, ShieldExclamationIcon, CursorArrowRaysIcon
} from '@heroicons/react/24/outline'

import { DocumentTextIcon, MagnifyingGlassIcon } from '@heroicons/react/20/solid'
import { useLocation } from 'react-router-dom'

const navigation = [
  { name: 'Home', href: '/Home', icon: HomeIcon },
  { name: 'Dashboard', href: '/Dashboard', icon: UsersIcon},
  { name: 'Updates', href: '#', icon: ChatBubbleLeftEllipsisIcon },
  { name: 'Document Library', href: '/Document_Library', icon: DocumentIcon },
  { name: 'Records', href: '#', icon: InboxIcon },
  { name: 'My Actions', href: '#', icon: CursorArrowRaysIcon },
  { name: 'Calendar', href: '#', icon: CalendarIcon },
  { name: 'Report : Incident', href: '#', icon: ExclamationCircleIcon },
  { name: 'Report : Hazard', href: '#', icon: ShieldExclamationIcon },
  { name: 'Improvements', href: '#', icon: ChartBarIcon },
]
const userNavigation = [
  { name: 'Your Profile', href: '#' },
  { name: 'Settings', href: '#' },
  { name: 'Sign out', href: '#' },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

function todaysdate(){

  const monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];

  var dateObj = new Date();
  var day = dateObj.getUTCDate();

  
  return day + '-' + monthNames[dateObj.getMonth()];
}

export default function Sidebar({children}) {

    const [sidebarOpen, setSidebarOpen] = useState(false)
    const { pathname } = useLocation();

  return (
    <>
    
      <div>
        <Transition.Root show={sidebarOpen} as={Fragment}>
          <Dialog as="div" className="relative z-40 md:hidden" onClose={setSidebarOpen}>
            <Transition.Child
              as={Fragment}
              enter="transition-opacity ease-linear duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="transition-opacity ease-linear duration-300"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-gray-600 bg-opacity-75" />
            </Transition.Child>

            <div className="fixed inset-0 z-40 flex">
              <Transition.Child
                as={Fragment}
                enter="transition ease-in-out duration-300 transform"
                enterFrom="-translate-x-full"
                enterTo="translate-x-0"
                leave="transition ease-in-out duration-300 transform"
                leaveFrom="translate-x-0"
                leaveTo="-translate-x-full"
              >
                <Dialog.Panel className="relative flex w-full max-w-xs flex-1 flex-col bg-[#0b1228] pt-5 pb-4">
                  <Transition.Child
                    as={Fragment}
                    enter="ease-in-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in-out duration-300"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                  >
                    <div className="absolute top-0 right-0 -mr-12 pt-2">
                      <button
                        type="button"
                        className="ml-1 flex h-10 w-10 items-center justify-center rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                        onClick={() => setSidebarOpen(false)}
                      >
                        <span className="sr-only">Close sidebar</span>
                        <XMarkIcon className="h-6 w-6 text-white" aria-hidden="true" />
                      </button>
                    </div>
                  </Transition.Child>
                  <div className="flex flex-shrink-0 items-center px-4">
                    <img
                      className="h-8 w-auto"
                      src= {logo}
                      alt="Greenlight"
                    />
                  <span className='ml-2 text-2xl text-stone-50 '>Greenlight</span>
                  </div>
                  <div className="mt-5 h-0 flex-1 overflow-y-auto">
                    <nav className="space-y-1 px-2">
                    {navigation.map((item) => {

const isActive = pathname === item.href;
return(

<Link  key={item.name} to={item.href} 
    className={classNames(
      isActive? 'bg-green-300 text-black' : 'text-indigo-100 hover:bg-[#d7d7d77f]',
      'group flex items-center px-2 py-2 text-sm font-medium rounded-md'
    )}
  >
    <item.icon className= {classNames(
      isActive? 'mr-3 h-6 w-6 flex-shrink-0 text-black':'mr-3 h-6 w-6 flex-shrink-0 text-slate-100')} aria-hidden="true" />
    {item.name}
  </Link>
)})}
                    </nav>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
              <div className="w-14 flex-shrink-0" aria-hidden="true">
                {/* Dummy element to force sidebar to shrink to fit close icon */}
              </div>
            </div>
          </Dialog>
        </Transition.Root>

      
        {/*  ************************** DESKTOP ************************************/}

        {/* Static sidebar for desktop */}
        <div id = 'sidebar' className="hidden md:fixed md:inset-y-0 md:flex md:w-64 md:flex-col">
          {/* Sidebar component, swap this element with another sidebar if you like */}
          <div  className="flex flex-grow flex-col overflow-y-auto bg-[#0b1228] pt-5">
            <div className="flex flex-shrink-0 items-center px-4 mb-3">
              <img className="h-8 w-auto"  src= {logo}  alt= "Greenlight" />
              <span className='ml-2 text-2xl text-stone-50 '>Greenlight</span>
            </div>
            <div className="mt-5 flex flex-1 flex-col">
              <nav className="flex-1 space-y-2 px-2 pb-4">

                {navigation.map((item) => {
                const isActive = pathname === item.href;
                return(

                 <Link  key={item.name} to={item.href} 
                    className={classNames(
                    isActive? 'bg-green-300 text-black' : 'text-indigo-100 hover:bg-[#bcffd63d]',
                      'group flex items-center px-2 py-2 text-sm font-medium rounded-md'
                    )}
                  >
                  <item.icon className= {classNames(
                    isActive? 'mr-3 h-6 w-6 flex-shrink-0 text-black':'mr-3 h-6 w-6 flex-shrink-0 text-slate-100')} aria-hidden="true" />
                    {item.name}
                  </Link>
)})}
              </nav>
            </div>
          </div>
        </div>

       {/* Main div */}

        <div  className="flex flex-1 flex-col md:pl-64 ">
           {/* space on top */}

          <div className="sticky top-0 z-10 flex h-16 flex-shrink-0 bg-[#040d2f] ">

              {/* Mobile toggle button  */}
            <button type="button"
              className="border-r border-gray-200 px-4 text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset  md:hidden"
              onClick={() => setSidebarOpen(true)}>
              <Bars3BottomLeftIcon className="h-6 w-6" aria-hidden="true" />
            </button>
              
              
            
            <div className="flex flex-1 justify-between px-4 items-center  ">

             <span className='text-white text-xl '> {pathname.toUpperCase().replace('_', ' ').split('/')}</span>

              <div className="ml-4 flex items-center md:ml-6 gap-2">

              <span className='text-white text-xl pr-2 '> {todaysdate()}</span>
             {/* notifications button*/}
                <button
                  type="button"
                  className="rounded-full bg-inherit p-1 text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                >
                  <span className="sr-only">View notifications</span>
                  <BellIcon className="h-6 w-6" aria-hidden="true" />
                </button>

                {/* Profile dropdown */}
                <Menu as="div" className="relative ml-3">
                  <div>
                    <Menu.Button className="flex max-w-xs items-center rounded-full bg-white text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                      <span className="sr-only">Open user menu</span>
                      <img
                        className="h-8 w-8 rounded-full"
                        src="https://previews.123rf.com/images/remodesigner/remodesigner1906/remodesigner190600575/131360456-portrait-of-a-young-man-with-beard-and-hair-style-male-avatar-vector-illustration-.jpg"
                        alt=""
                      />
                    </Menu.Button>
                  </div>
                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                      {userNavigation.map((item) => (
                        <Menu.Item key={item.name}>
                          {({ active }) => (
                            <a
                              href={item.href}
                              className={classNames(
                                active ? 'bg-gray-100' : '',
                                'block px-4 py-2 text-sm text-gray-700'
                              )}
                            >
                              {item.name}
                            </a>
                          )}
                        </Menu.Item>
                      ))}
                    </Menu.Items>
                  </Transition>
                </Menu>
              </div>
            </div>
          </div>


                 {/* Main Content*/}

          <main>
            <div className="py-6 bg-[#040d2f] h-screen ">
      
                 <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8">
              
                 {children}  

                </div>


            </div>
          </main>
        </div>
      </div>
    </>
  )
}



