import React from 'react'
import imghome from '../assets/home.png'
export default function HomeI() {
  return (
    <section className='home' id='home'>
        <div className='home_container bd-container bd-grid' >
        <div class="home__data">
                        <h1 class="home__title">Tasty food</h1>
                        <h2 class="home__subtitle">Try the best food of <br/>the week.</h2>
                        <a href="#" class="button">View Menu</a>
                    </div>
        <img src={imghome} alt="home" className='home_img' />
        </div>
    </section>
  )
}
