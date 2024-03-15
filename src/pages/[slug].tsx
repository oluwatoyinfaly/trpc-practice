import { useRouter } from 'next/router'
import React from 'react'
import MainLayout from '../layouts/MainLayout'

const PostPage = () => {

    const router = useRouter()

    console.log(router.query)

  return (
    <MainLayout>
        <div className='flex flex-col w-full h-full items-center justify-center p-10'>
            <div className='flex flex-col w-full max-w-screen-lg space-y-6'>
                <div className='h-[60vh] rounded-xl bg-gray-300 shadow-lg w-full'>
                    {/*image */}
                </div>
                <div className='border-l-4 border-gray-800 pl-6'>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consectetur deleniti consequuntur iste amet sed officiis maxime et quas aspernatur explicabo.
                </div>
                <div>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nulla nostrum, magnam officia sequi debitis ab quae, inventore accusamus minima ratione vero ex nihil laborum, libero saepe quia facere culpa sunt tempora cupiditate doloribus? Nostrum aliquam voluptas iure! Facilis quam iusto facere? Unde mollitia tenetur officiis saepe velit minima exercitationem quia ipsam sit, illum debitis atque nulla sint libero tempore maiores esse facere recusandae ut illo voluptatem architecto sapiente? Rerum consectetur dolores deserunt delectus neque vel obcaecati eveniet! Nostrum ullam error nulla natus? Nam reiciendis minima explicabo, ad accusantium omnis aliquam sunt doloribus, culpa incidunt expedita facilis hic officia nemo maiores.
                </div>
            </div>
        </div>
    </MainLayout>
  )
}

export default PostPage