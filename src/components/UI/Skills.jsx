import React from 'react'
import css from '../../assets/img/skills/CSS3_logo.png'
import html from '../../assets/img/skills/html.svg'
import tailwindcss from '../../assets/img/skills/Tailwind_CSS_Logo.png'
import laravel from '../../assets/img/skills/laravel.png'
import react from '../../assets/img/skills/react.png'
import nextjs from '../../assets/img/skills/nextjs.png'
import nodejs from '../../assets/img/skills/node.png'
import mysql from '../../assets/img/skills/mysql.png'
import express from '../../assets/img/skills/express js.png'
import mongodb from '../../assets/img/skills/mongodb.png'
import js from '../../assets/img/skills/js.png'
import ts from '../../assets/img/skills/ts.png'


export const Skills = () => {
  return (
    <div className="pt-8 sm:pt-0 pb-8" id="skills">
        <div className="container">
                <div className='text-center w-full pb-8' >
                    <h2 data-aos="fade-up" data-aos-duration="1200" className="text-center 
                    text-stone-700 text-4xl pb-4">
                                My Skills
                    </h2>

                    <p data-aos="fade-up" data-aos-duration="1200" className='text-secondary'>A skill that I have quite mastered and is still being developed</p>

                </div>

                <div className='w-full mt-6'>
                    <div className='w-full grid grid-cols-2 gap-4 md:gap-8 lg:grid-cols-4 mx-auto  '>
                           
                            <div 
                                data-aos="fade-right"
                                data-aos-duration="1000"
                                data-aos-delay="100"

                                className='p-2 bg-slate-100 flex  items-center justify-center 
                                    overflow-hidden shadow-xl 
                                    shadow-slate-300 hover:scale-105 transition-all duration-500 rounded-2xl mb-4'>

                                    <figure className='w-1/2 flex items-center justify-center py-2 '>
                                        <img src={css} alt="" className='w-14'/>
                                    </figure>
                                    <h5 class="w-1/3 inline-block text-left  
                                    font-bold  text-medium text-lg  sm:text-xl text-stone-700 ">
                                        css
                                    </h5>
                            </div>
                            <div data-aos="fade-right"
                                data-aos-duration="1000"
                                data-aos-delay="200" className='p-2 bg-slate-100 flex  items-center justify-center 
                                    overflow-hidden shadow-xl 
                                    shadow-slate-300 hover:scale-105 transition-all duration-500 rounded-2xl mb-4'>

                                    <figure className='w-1/2 flex items-center justify-center py-2 '>
                                        <img src={html} alt="" className='w-14'/>
                                    </figure>
                                    <h5 class="w-1/3 inline-block text-left  
                                    font-bold  text-medium text-lg  sm:text-xl text-stone-700 ">
                                        html
                                    </h5>
                            </div>
                            <div  data-aos="fade-right"
                                data-aos-duration="1000"
                                data-aos-delay="300" className='p-2 bg-slate-100 flex  items-center justify-center 
                                    overflow-hidden shadow-xl 
                                    shadow-slate-300 hover:scale-105 transition-all duration-500 rounded-2xl mb-4'>

                                    <figure className='w-1/2 flex items-center justify-center py-2 '>
                                        <img src={tailwindcss} alt="" className='w-14'/>
                                    </figure>
                                    <h5 class="w-1/3 inline-block text-left  
                                    font-bold  text-medium text-lg  sm:text-xl text-stone-700 ">
                                        tailwindcss
                                    </h5>
                            </div>
                            
                            <div data-aos="fade-right"
                                data-aos-duration="1000"
                                data-aos-delay="400" className='p-2 bg-slate-100 flex  items-center justify-center 
                                    overflow-hidden shadow-xl 
                                    shadow-slate-300 hover:scale-105 transition-all duration-500 rounded-2xl mb-4'>

                                    <figure className='w-1/2 flex items-center justify-center py-2 '>
                                        <img src={laravel} alt="" className='w-14'/>
                                    </figure>
                                    <h5 class="w-1/3 inline-block text-left  
                                    font-bold  text-medium text-lg  sm:text-xl text-stone-700 ">
                                        laravel
                                    </h5>
                            </div>

                            <div data-aos="fade-right"
                                data-aos-duration="1000"
                                data-aos-delay="500" className='p-2 bg-slate-100 flex  items-center justify-center 
                                    overflow-hidden shadow-xl 
                                    shadow-slate-300 hover:scale-105 transition-all duration-500 rounded-2xl mb-4'>

                                    <figure className='w-1/2 flex items-center justify-center py-2 '>
                                        <img src={react} alt="" className='w-14'/>
                                    </figure>
                                    <h5 class="w-1/3 inline-block text-left  
                                    font-bold  text-medium text-lg  sm:text-xl text-stone-700 ">
                                        reactjs
                                    </h5>
                            </div>

                            <div data-aos="fade-right"
                                data-aos-duration="1000"
                                data-aos-delay="500" className='p-2 bg-slate-100 flex  items-center justify-center 
                                    overflow-hidden shadow-xl 
                                    shadow-slate-300 hover:scale-105 transition-all duration-500 rounded-2xl mb-4'>

                                    <figure className='w-1/2 flex items-center justify-center py-2 '>
                                        <img src={js} alt="" className='w-14'/>
                                    </figure>
                                    <h5 class="w-1/3 inline-block text-left  
                                    font-bold  text-medium text-lg  sm:text-xl text-stone-700 ">
                                        Javascript
                                    </h5>
                            </div>

                            <div data-aos="fade-right"
                                data-aos-duration="1000"
                                data-aos-delay="500" className='p-2 bg-slate-100 flex  items-center justify-center 
                                    overflow-hidden shadow-xl 
                                    shadow-slate-300 hover:scale-105 transition-all duration-500 rounded-2xl mb-4'>

                                    <figure className='w-1/2 flex items-center justify-center py-2 '>
                                        <img src={ts} alt="" className='w-14'/>
                                    </figure>
                                    <h5 class="w-1/3 inline-block text-left  
                                    font-bold  text-medium text-lg  sm:text-xl text-stone-700 ">
                                        TypeScript
                                    </h5>
                            </div>
                           
                            <div data-aos="fade-right"
                                data-aos-duration="1000"
                                data-aos-delay="600" className='p-2 bg-slate-100 flex  items-center justify-center 
                                    overflow-hidden shadow-xl 
                                    shadow-slate-300 hover:scale-105 transition-all duration-500 rounded-2xl mb-4'>

                                    <figure className='w-1/2 flex items-center justify-center py-2 '>
                                        <img src={nextjs} alt="" className='w-14'/>
                                    </figure>
                                    <h5 class="w-1/3 inline-block text-left  
                                    font-bold  text-medium text-lg  sm:text-xl text-stone-700 ">
                                        nextjs
                                    </h5>
                            </div>

                            <div data-aos="fade-right"
                                data-aos-duration="1000"
                                data-aos-delay="600" className='p-2 bg-slate-100 flex  items-center justify-center 
                                    overflow-hidden shadow-xl 
                                    shadow-slate-300 hover:scale-105 transition-all duration-500 rounded-2xl mb-4'>

                                    <figure className='w-1/2 flex items-center justify-center py-2 '>
                                        <img src={express} alt="" className='w-14'/>
                                    </figure>
                                    <h5 class="w-1/3 inline-block text-left  
                                    font-bold  text-medium text-lg  sm:text-xl text-stone-700 ">
                                        expressJs
                                    </h5>
                            </div>
                            <div data-aos="fade-right"
                                data-aos-duration="1000"
                                data-aos-delay="700" className='p-2 bg-slate-100 flex  items-center justify-center 
                                    overflow-hidden shadow-xl 
                                    shadow-slate-300 hover:scale-105 transition-all duration-500 rounded-2xl mb-4'>

                                    <figure className='w-1/2 flex items-center justify-center py-2 '>
                                        <img src={nodejs} alt="" className='w-14'/>
                                    </figure>
                                    <h5 class="w-1/3 inline-block text-left  
                                    font-bold  text-medium text-lg  sm:text-xl text-stone-700 ">
                                        nodejs
                                    </h5>
                            </div>
                            <div data-aos="fade-right"
                                data-aos-duration="1000"
                                data-aos-delay="800" className='p-2 bg-slate-100 flex  items-center justify-center 
                                    overflow-hidden shadow-xl 
                                    shadow-slate-300 hover:scale-105 transition-all duration-500 rounded-2xl mb-4'>

                                    <figure className='w-1/2 flex items-center justify-center py-2 '>
                                        <img src={mongodb} alt="" className='w-14'/>
                                    </figure>
                                    <h5 class="w-1/3 inline-block text-left  
                                    font-bold  text-medium text-lg  sm:text-xl text-stone-700 ">
                                        mongoDB
                                    </h5>
                            </div>
                           
                            <div data-aos="fade-right"
                                data-aos-duration="1000"
                                data-aos-delay="800" className='p-2 bg-slate-100 flex  items-center justify-center 
                                    overflow-hidden shadow-xl 
                                    shadow-slate-300 hover:scale-105 transition-all duration-500 rounded-2xl mb-4'>

                                    <figure className='w-1/2 flex items-center justify-center py-2 '>
                                        <img src={mysql} alt="" className='w-14'/>
                                    </figure>
                                    <h5 class="w-1/3 inline-block text-left  
                                    font-bold  text-medium text-lg  sm:text-xl text-stone-700 ">
                                        mysql
                                    </h5>
                            </div>
                           

                    </div>
                </div>
        </div>
    </div>

  )
}
