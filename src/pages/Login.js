import logo from '../components/logo.png'
import { EnvelopeIcon } from '@heroicons/react/24/outline'

export default function Login() {
  return (
    <>
      <div className="flex flex-col items-center justify-start h-screen sm:px-6 pt-32 lg:px-8 ">

        <div className="sm:mx-auto sm:w-full sm:max-w-md  ">
        <div className="flex justify-center p-2 -ml-3">
           <img className="h-12 w-auto" src= {logo} alt="Greenlight"/>
            <span className='ml-2 text-4xl text-stone-50 font-light pt-1 shadow-2xl'>Greenlight</span>
        </div>
        </div>

        <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
          <div className="bg-[transparent] py-8 px-4 shadow sm:rounded-lg sm:px-10">
            <form className="space-y-6" action="#" method="POST">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-[#e6e3e3]">
                  Email Address
                </label>
                <div className="mt-1">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    className="block w-full appearance-none rounded-xl border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="password" className="block text-sm font-medium text-[#e6e3e3]">
                  Password
                </label>
                <div className="mt-1">
                  <input
                    id="password"
                    name="password"
                    type="password"
                    autoComplete="current-password"
                    required
                    className="block w-full appearance-none rounded-xl border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                  />
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <input
                    id="remember-me"
                    name="remember-me"
                    type="checkbox"
                    className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                  />
                  <label htmlFor="remember-me" className="ml-2 block text-sm text-[white]">
                    Remember me
                  </label>
                </div>

        <button
        type="button"
        className="inline-flex items-center bg-[transparent] px-3 py-2 text-sm  text-[#fcf9f9] hover:text-indigo-300 "
      >
          <a href="#" className=" flex ">
          <EnvelopeIcon className="-ml-0.5 mr-2 h-5 w-5 text-indigo-400" aria-hidden="true" />
          Forgot password ?
          </a>
     
      </button>
              </div>

              <div className='flex justify-center'>
                <button
                  type="submit"
                  className="flex w-64 justify-center rounded-xl border border-transparent bg-[#49da85df] py-2 px-4 text-base font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                >
                  LOGIN
                </button>
              </div>
            </form>

<div className='mt-5 text-center'>
<span className='text-indigo-500 font-normal text-base'>Looking for the Greenlight website ? <a href ='#' className='hover:text-indigo-300 underline'>Click here!</a></span>
</div>     
<div className='mt-2 text-center'>
<span className='text-indigo-500 text-xs font-normal'>© Greenlight Copyright Software 2022 All rights reserved </span>
</div>     
          </div>
        </div>
      </div>
    </>
  )
}
