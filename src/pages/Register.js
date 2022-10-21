import React from 'react'
import logo from '../components/logo.png'
import logobig from '../components/greenlight_logo_big1.png'

const Register = () => {
  return (
    <>
     
      <div className="flex min-h-full">

      <div className=" hidden w-6/12 lg:block">

        <div className='relative float-right mt-0 p-10'>
        {/* <div className='text-white text-5xl absolute mt-32 ml-16 font-semibold '>Greenlight</div>
        <img className="h-[330px] w-auto " src= {logo} alt="Greenlight"/> */}
       <img className="h-[330px] w-auto " src= {logobig} alt="Greenlight"/>

        <div className=' text-4xl text-center mt-5 font-semibold text-[#a8aec1]'>
          Start a 14-day <br></br>
           free trial
        </div>
        <div className='text-sm text-center mt-5 font-semibold text-[#a8aec1] '>
         MANAGEMENT SYSTEM <br></br> COMPLIANCE
        </div>

        <div className=' text-sm text-center mt-5 font-semibold text-[#a8aec1] '>
         No Credit Cards. Obligation free. You will get access <br></br> 
         to a full version of our software for 14 days ao that <br></br>
         you can experience Greenlight for yourself.
        </div>
        </div>

    

      </div>

   

        <div className="flex flex-1 flex-col justify-center py-12 px-4 sm:px-6 lg:flex-none lg:px-20 xl:px-24 ">
        <div className="mx-auto w-full max-w-sm lg:w-96">
        <div>

<div className='lg:hidden mb-8 '>

<div className='flex justify-center'><img className="h-[330px] w-auto " src= {logobig} alt="Greenlight"/></div>
<div className=' text-4xl text-center mt-5 font-semibold text-[#a8aec1]'>
          Start a 14-day 
           free trial
        </div>
        <div className='text-sm text-center mt-5 font-semibold text-[#a8aec1] '>
         MANAGEMENT SYSTEM COMPLIANCE
        </div>

        <div className=' text-sm text-center mt-5 font-semibold text-[#a8aec1] '>
         No Credit Cards. Obligation free. You will get access <br></br> 
         to a full version of our software for 14 days ao that <br></br>
         you can experience Greenlight for yourself.
        </div>
</div>


              <div className="mt-0 flex pl-9 lg:pl-0">
                <form action="#" method="POST" className="space-y-3 ">                

                  <div className="space-y-1">
                  <label htmlFor="password" className="register_label">First Name <span className='text-[#c15656]'>&#x2a;</span></label>
                  <div className="mt-1">
                  <input className="register_input"/>
                  </div>
                  </div>

                  <div className="space-y-1">
                  <label htmlFor="password" className="register_label">Last Name <span className='text-[#c15656]'>&#x2a;</span></label>
                  <div className="mt-1">
                  <input className="register_input"/>
                  </div>
                  </div>

                  <div className="space-y-1">
                  <label htmlFor="email" className="register_label">Email <span className='text-[#c15656]'>&#x2a;</span></label>
                  <div className="mt-1">
                  <input id="email" name="email" type="email" autoComplete="email" require className="register_input"/>
                  </div>
                  </div>
                           


                  {/* <div className="space-y-1">
                  <label htmlFor="password" className="register_label">Password</label>
                  <div className="mt-1">
                  <input className="register_input"/>
                  </div>
                  </div> */}



                  <div className="space-y-1">
                  <label htmlFor="password" className="register_label">Phone <span className='text-[#c15656]'>&#x2a;</span></label>
                  <div className="mt-1">
                  <input className="register_input"/>
                  </div>
                  </div>



                  <div className="space-y-1">
                  <label htmlFor="password" className="register_label">Organisation <span className='text-[#c15656]'>&#x2a;</span></label>
                  <div className="mt-1">
                  <input className="register_input"/>
                  </div>
                  </div>


                  <div className="space-y-1">
                  <label htmlFor="password" className="register_label">Location <span className='text-[#c15656]'>&#x2a;</span></label>
                  <div className="mt-1">
                  <input className="register_input"/>
                  </div>
                  </div>

               
    <div className="flex h-20 items-center ">
    <input type="checkbox" className="h-6 w-6 border-[#5fba99] text-indigo-600  bg-transparent -mt-6"/>
          <div className="ml-3 text-sm ">
          <label htmlFor="comments" className="font-medium text-indigo-500">
          I’ve read and agreed to the terms of use, privacy notice and offer details: Terms of use, privacy notice, and offer details. 
          </label>
          </div>
        </div>
                 

                  <div className='flex pt-7 pb-8 w-full -ml-3 justify-center '>
                    <button
                      type="submit"
                      className=" flex w-28 justify-center rounded-2xl border border-transparent bg-[#43e095] py-2 px-4 text-sm font-medium text-[#2d2c2c] shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                    >
                      Submit
                    </button>
                  </div>

                  <div className='text-center'>
<span className='text-indigo-500  text-xs font-normal'>© Greenlight Copyright Software 2022 All rights reserved </span>
</div>   
  
                </form>
              </div>
              
            </div>
          </div>
        </div>
       
      </div>
    
    </>
  )
}

export default Register