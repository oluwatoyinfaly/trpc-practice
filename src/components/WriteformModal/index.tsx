import React, {useContext} from 'react'
import { GlobalContext } from '../../contexts/GlobalContextProvider'
import Modal from "../Modal"
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { trpc } from '../../utils/trpc'
import { toast } from 'react-hot-toast'
import { AiOutlineLoading3Quarters } from 'react-icons/ai'

type WriteformType = {
    title: string
    description: string
    text: string
}

export const writeFormSchema = z.object({
    title: z.string().min(2),
    description: z.string().min(50),
    text: z.string().min(100)
})

const WriteformModal = () => {
    const {isWriteModalOpen, setIsWriteModalOpen} = useContext(GlobalContext)

    const {
        register,
        handleSubmit,
        formState:{errors},
        reset
    } = useForm<WriteformType>({
        resolver: zodResolver(writeFormSchema)
    })

    const postRoute = trpc.useUtils().post

    const createPost = trpc.post.createPost.useMutation({
        onSuccess: () => {
            toast.success('post created successfully!')
            setIsWriteModalOpen(false)
            reset()
            postRoute.getPosts.invalidate()
        }
    })

    const onSubmit = (data: WriteformType) => {
        createPost.mutate(data)
    }

    return (
        <Modal
            isOpen={isWriteModalOpen}
            onClose={() => setIsWriteModalOpen(false)}
        >
            <form
                onSubmit={handleSubmit(onSubmit)}
                className='flex relative flex-col space-y-4 justify-center items-center'
            >
                {createPost.isLoading && <div className='absolute w-full h-full flex items-center justify-center'>
                    <AiOutlineLoading3Quarters className='animate-spin' />
                </div>}
                <input
                    type="text"
                    id="title"
                    className='w-full h-full border-gray-300 focus:border-gray-600 outline-none border p-4 rounded-xl'
                    placeholder='title of the article'
                    {
                        ...register('title')
                    }
                />
                <p className='w-full text-left text-sm text-red-500'>
                    {
                        errors.title?.message
                    }
                </p>
                <input
                    type="text"
                    id="shortDescription"
                    className='w-full h-full border-gray-300 focus:border-gray-600 outline-none border p-4 rounded-xl'
                    placeholder='write a short description'
                    {
                        ...register('description')
                    }
                />
                <p className='w-full text-left text-sm text-red-500'>
                    {
                        errors.description?.message
                    }
                </p>
                <textarea
                    {
                        ...register('text')
                    }
                    id="mainBoday"
                    cols={10}
                    rows={10}
                    className='w-full h-full border-gray-300 focus:border-gray-600 outline-none border p-4 rounded-xl'
                    placeholder='article main content...'
                />
                <p className='w-full text-left text-sm text-red-500'>
                    {
                        errors.text?.message
                    }
                </p>
                <div className='w-full flex justify-end'>
                    <button
                        type='submit'
                        className='flex transition hover:border-gray-900 hover:text-gray-900 items-center space-x-3 px-4 py-2 border-gray-200 rounded border'
                    >
                    Publish
                    </button>
                </div>
            </form>
        </Modal>
    )
}

export default WriteformModal