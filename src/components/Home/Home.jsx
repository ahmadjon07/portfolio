import React from 'react'
import './Home.scss'
import Social from './Social'
import Data from './Data'
const Home = () => {
  return (
    <section className='home' id='home'>
      <div className="home__container container__grid">
        <div className="home__content">
            <Social/>

            <div className="home__img"></div>

            <Data />
            
        </div>
      </div>
    </section>
  )
}

export default Home
