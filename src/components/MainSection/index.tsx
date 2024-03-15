import React from 'react'
import { CiSearch } from 'react-icons/ci'
import { HiChevronDown } from 'react-icons/hi'
import { AiOutlineLoading3Quarters } from 'react-icons/ai'
import dayjs from 'dayjs'
import Image from 'next/image'
import { trpc } from '../../utils/trpc'
import Link from 'next/link'

const MainSection = () => {

    const posts = trpc.post.getPosts.useQuery()

  return (
    <main className='col-span-8 w-full border-r border-gray-300 h-full px-24'>
      <div className='flex flex-col space-y-4 w-full py-10'>
        <div className='flex space-x-4 items-center w-full'>
          <label htmlFor="search" className='relative w-full border-gray-800 border rounded-3xl'>
            <div className='absolute h-full flex items-center left-2'>
              <CiSearch />
            </div>
            <input type="text" id="search" name='search' className='outline-none pl-7 px-4 py-1 placeholder:text-gray-300 placeholder:text-xm w-full rounded-3xl' placeholder='search...'/>
          </label>
          <div className='flex items-center w-full space-x-4 justify-end'>
            <div>
              My Topics:
            </div>
            <div className='flex items-center space-x-2'>
              {
                Array.from({length: 4}).map((_, index) => (
                  <div key={index} className='bg-gray-200/50 rounded-3xl py-3 px-4'>
                    Tag {index}
                  </div>
                ))
              }
            </div>
          </div>
        </div>
        <div className='w-full justify-between flex items-center border-b border-gray-300 pb-8'>
          <div>
            Articles
          </div>
          <div>
            <button className='flex space-x-2 items-center border-gray-800 border rounded-3xl px-4 py-1.5 font-semibold'>
              <div>
                Following
              </div>
              <div>
                <HiChevronDown className='text-xl'/>
              </div>
            </button>
          </div>
        </div>
      </div>
      <div className='w-full flex flex-col justify-center space-y-4'>
        {
          posts.isLoading &&
          <div className='w-full h-full flex justify-center items-center space-y-4'>
            <div>Loading...</div>
            <div>
              <AiOutlineLoading3Quarters className='animate-spin' />
            </div>
          </div>
        }
        {
          posts.isSuccess && posts.data.map((post) => (
            <Link
              href={`/${post.slug}`}
              key={post.id}
              className='flex flex-col space-y-4 pb-8 border-b border-gray-300 last:border-none group'
            >
              <div className='flex w-full items-center space-x-2'>
                <div className='h-10 w-10 relative bg-gray-400 rounded-full'>
                  {post.author.image &&
                  <Image
                    src={post.author.image}
                    fill
                    alt={post.author.name ?? ''}
                    className='rounded-full'
                  />}
                </div>
                <div>
                  <p className='font-semibold'>{post.author.name} &#x2022; {dayjs(post.createdAt).format('DD-MM-YYYY')}</p>
                  <p className='text-sm'>Founder, Full Stack JS dev</p>
                </div>
              </div>
              <div  className='grid grid-cols-12 w-full gap-4'>
                <div className='col-span-8 flex flex-col space-y-4'>
                  <p className='text-2xl font-bold text-gray-800 group-hover:underline decoration-indigo-600'>
                    {post.title}
                  </p>
                  <p className='text-sm text-gray-500 break-words'>
                    {post.description}
                  </p>
                </div>
                <div className='col-span-4'>
                  <div className='h-full w-full bg-gray-300 rounded-xl transition hover:scale-105 hover:shadow-xl duration-200 transform'></div>
                </div>
              </div>
              <div>
                <div className='flex items-center w-full space-x-4 justify-start'>
                  <div>My Topics:</div>
                  <div className='flex items-center space-x-2'>
                    {
                      Array.from({length: 4}).map((_, index) => (
                        <div key={index} className='bg-gray-200/50 rounded-2xl py-3 px-5'>
                          Tag {index}
                        </div>
                      ))
                    }
                  </div>
                </div>
              </div>
            </Link>
          ))
        }
      </div>
    </main>
  )
}

export default MainSection