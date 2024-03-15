import React, { useContext } from 'react'
import { IoReorderThreeOutline } from "react-icons/io5";
import { BsBell } from "react-icons/bs";
import { FiEdit } from "react-icons/fi";
import { HiLogout } from 'react-icons/hi';
import { signIn, signOut, useSession } from 'next-auth/react';
import { GlobalContext } from '../../contexts/GlobalContextProvider';

const Header = () =>  {

    const {status} = useSession()

    const {setIsWriteModalOpen} = useContext(GlobalContext)

  return (
      <header className='h-20 w-full flex flex-row justify-around items-center bg-white border-b-[1px] border-gray-300'>
        <div>
          <IoReorderThreeOutline className='text-2xl text-gray-600 ' />
        </div>
        <div className='text-xl font-thin'>BLOG</div>
        {status === 'authenticated' ? (<div className='flex items-center space-x-2'>
          <div>
            <BsBell className='text-2xl text-gray-600'/>
          </div>
          <div>
            <div className='w-5 h-5 bg-gray-600 rounded-full'/>
          </div>
          <div>
            <button onClick={()=>setIsWriteModalOpen(true)} className='flex transition hover:border-gray-900 hover:text-gray-900 items-center space-x-3 px-4 py-2 border-gray-200 rounded border'>
              <div>Write</div>
              <div>
                <FiEdit/>
              </div>
            </button>
          </div>
          <div>
            <button onClick={()=>signOut()} className='flex transition hover:border-gray-900 hover:text-gray-900 items-center space-x-3 px-4 py-2 border-gray-200 rounded border'>
                <div>Logout</div>
                <div>
                    <HiLogout />
                </div>
            </button>
        </div>
        </div>)
        :
        (<div>
            <button onClick={()=>signIn()} className='flex transition hover:border-gray-900 hover:text-gray-900 items-center space-x-3 px-4 py-2 border-gray-200 rounded border'>
                Signin
            </button>
        </div>
        )}
      </header>
  )
}

export default Header