import React from 'react'
import imgAbout from '../assets/about.jpg'
export default function About() {
    return (
        <section className='' id=''>
            <div className=''>
                <div className=''>
                    <span>About us</span>
                    <h2>We cook the best tasty food</h2>
                    <p> web cook best food </p>
                    <a href="#" className=''> Explore history</a>

                </div>
<img src={imgAbout} alt="" />
            </div>
        </section>
    )
}
