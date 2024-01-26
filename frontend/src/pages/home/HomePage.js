import React from 'react'
import Home from '../../components/home/Home'
import Skills from '../../components/skills/Skills'
import Qualification from '../../components/Principles/Qualification'
import Contact from '../../components/contact/Contact'
import Service2 from '../../components/services/Service2'

const HomePage = () => {
  return (
    <main className='main'>
        <Home></Home>
        {/* <About></About> */}
        <Skills></Skills>
        <Qualification></Qualification>
        <Service2></Service2> 
        <Contact></Contact>
    </main>
  )
}

export default HomePage
