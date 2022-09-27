import React from 'react'
import { ClipboardDocumentCheckIcon,BookOpenIcon,PencilSquareIcon,
    ArrowsPointingOutIcon,PresentationChartLineIcon,NewspaperIcon,
    CircleStackIcon , ClipboardIcon, CheckBadgeIcon , Bars3BottomLeftIcon} from '@heroicons/react/24/outline'

const Document_Library = () => {

const options = [
    { name: 'POLICIES',  icon: ClipboardDocumentCheckIcon },
    { name: 'MANUALS',  icon: BookOpenIcon },
    { name: 'PLANS',  icon: PencilSquareIcon },
    { name: 'PROCEDURES',  icon: ArrowsPointingOutIcon },
    { name: 'FLOWCHARTS',  icon: Bars3BottomLeftIcon },
    { name: 'FORMS',  icon: NewspaperIcon },
    { name: 'REGISTERS',  icon: CircleStackIcon },
    { name: 'TEMPLATES',  icon: ClipboardIcon },
    { name: 'STANDARDS',  icon: CheckBadgeIcon },
    { name: '.....................',  icon: CheckBadgeIcon },
    { name: '......................',  icon: CheckBadgeIcon },
    { name: '.....................',  icon: CheckBadgeIcon },
]


  return (



 <div className='flex flex-row flex-wrap gap-7 mt-10 justify-center'>
     {options.map((item) => {
   
   return(
  <button
    type="button"
    className="inline-flex items-center w-72 rounded-lg  bg-[#1e2f44] px-16 py-5 text-lg font-medium text-white shadow-lg hover:bg-[#86efac] hover:text-black"
  >
    {item.name}
    < item.icon className="ml-5 -mr-1 h-5 w-5" aria-hidden="true" />
  </button>
   
     )})}

  </div>

 

)}

export default Document_Library