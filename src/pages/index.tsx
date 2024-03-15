import React from 'react'

import MainSection from '../components/MainSection'
import MainLayout from '../layouts/MainLayout'
import WriteformModal from '../components/WriteformModal'
import SideSection from '../components/SideSection'

const HomePage = () => {


  return (
    <MainLayout>
      <section className='grid grid-cols-12'>
        <MainSection />
        <SideSection />
      </section>
      <WriteformModal />
    </MainLayout>
  )
}

export default HomePage