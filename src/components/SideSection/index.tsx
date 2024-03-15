import React from 'react'

const SideSection = () => {
  return (
    <aside className='col-span-4 p-6 flex flex-col space-y-4'>
          <div>
            <h3 className='font-semibold my-6 text-lg'>Poeple you might be intered</h3>
            <div>
              {
                Array.from({length: 4}).map((_, index) => (
                  <div key={index} className='items-center flex flex-row space-x-5 py-2'>
                    <div className='bg-gray-300 w-10 h-10 rounded-full flex-none'></div>
                    <div>
                      <div className='text-gray-900 text-sm font-bold'>John Doe</div>
                      <div className='text-xs'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum in voluptate et expedita!</div>
                    </div>
                    <div>
                      <button className='flex transition hover:border-gray-900 hover:text-gray-900 items-center space-x-3 px-4 py-2.5 border-gray-400/50 rounded border'>
                        Follow
                      </button>
                    </div>
                  </div>
                ))
              }
            </div>
          </div>
          <div className='stiky top-20'>
            <h3 className='font-semibold my-6 text-lg'>Your reading list</h3>
            <div className='fle flex-col space-y-4'>
              {
                Array.from({length: 4}).map((_, index) => (
                  <div key={index} className='flex space-x-6 items-center group'>
                    <div className='w-2/5 bg-gray-300 aspect-square rounded-xl'></div>
                    <div className='w-3/5 flex flex-col space-y-2'>
                      <div className='text-lg font-semibold group-hover:underline decoration-indigo-600'>Lorem ipsum dolor sit amet consectetur.</div>
                      <div className='text-sm text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas facilis unde nihil mollitia corrupti?</div>
                      <div className='flex space-x-1 items-center w-full'>
                        <div className='w-5 h-5 bg-gray-300 rounded-full'></div>
                        <div className='text-xs font-semibold'>Donald FALY &#x2022;</div>
                        <div className='text-xs font-semibold'>08 Feb. 2024</div>
                      </div>
                    </div>
                  </div>
                ))
              }
            </div>
          </div>
        </aside>
  )
}

export default SideSection