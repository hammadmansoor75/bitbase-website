import React from 'react'
import Home from '../../components/home/Home'
import Skills from '../../components/skills/Skills'
import Qualification from '../../components/qualification/Qualification'
import Contact from '../../components/contact/Contact'

const HomePage = () => {
  return (
    <main className='main'>
        <Home></Home>
        {/* <About></About> */}
        <Skills></Skills>
        {/* <Service2></Service2> */}
        <Qualification></Qualification>
        <Contact></Contact>
    </main>
  )
}

export default HomePage
