import React from 'react'

// import HeroImg from '../../assets/images/hero.svg'
// import CountUp from 'react-countup'

const Hero = () => {
  return (
    <section className='py-16' id='about'>
        <div className="container">
            <div className='md:flex items-center justify-between sm:flex-col md:flex-row'>
                    {/* hero left content */}
                    <div className="w-full md:basis-1/2 text-center sm:text-left"> 
                        <h5 data-aos='fade-right' data-aos-duration='1500' className=' text-stone-700
                        text-lg font-[600]'>
                            Hello welcome
                        </h5>
                        <h1 data-aos='fade-up' data-aos-duration='1800' data-aos-delay='200' className='mt-5 text-stone-900 font-[800]
                            text-[1.8rem] sm:text-[40px] leading-[35px] sm:leading-[46px]'>I'm Meyzan Al Yutra 
                            <br /> 
                            <span className='text-[1.4rem] sm:text-[40px]'>
                                Software Developer
                            </span> 
                        </h1>

                        <div data-aos='fade-up' data-aos-duration='1800' data-aos-delay='200' 
                            className='flex items-center justify-center sm:justify-normal gap-6 py-6'>
                            <a href="#contact">
                                <button className="px-4 py-2 rounded-lg bg-primary text-white font-[500] flex items-center gap-2
                                hover:bg-smallTextColor ease-in duration-300">
                                    <i class="ri-mail-line"></i>Hire me
                                </button>
                            </a>
                            <a href="#portopolio" className='text-stone-700 font-[600] text-[16px] border-b border-solid border-stone-700'>
                                See portopolio
                            </a>

                        </div>
                        
                        <p data-aos='fade-up' data-aos-duration='1500' 
                            className='flex gap-2 text-stone-700 font-[500] text-[15px] 
                            leading-7  sm:pr-10 '>
                            <span>
                                <i class='ri-apps-2-line'></i>
                            </span>    
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe corrupti eos expedita a porro tenetur minima non animi quod vero?
                        </p>

                        <div className='mt-8 flex items-center justify-center sm:justify-normal gap-4'>
                            {/* <span className='text-stone-700 text-[15px] '>Follow me :</span> */}

                                <span>
                                    <a href="" className='sm:w-12 sm:h-12 w-9 h-9
                                            rounded-full justify-center border
                                            border-slate-300 hover:border-primary
                                            transition-all duration-300 hover:ease-in hover:scale-125
                                            hover:text-white  flex items-center text-white bg-primary'><i class='ri-youtube-line'></i></a>
                                </span>
                                <span>
                                    <a href="" className='sm:w-12 sm:h-12 w-9 h-9
                                            rounded-full justify-center border
                                            border-slate-300 hover:border-primary
                                            transition-all duration-300 hover:ease-in hover:scale-125
                                            hover:text-white  flex items-center text-white bg-primary'><i class='ri-youtube-line'></i></a>
                                </span>
                                <span>
                                    <a href="" className='sm:w-12 sm:h-12 w-9 h-9
                                            rounded-full justify-center border
                                            border-slate-300 hover:border-primary
                                            transition-all duration-300 hover:ease-in hover:scale-125
                                            hover:text-white  flex items-center text-white bg-primary'><i class='ri-youtube-line'></i></a>
                                </span>
                                <span>
                                    <a href="" className='sm:w-12 sm:h-12 w-9 h-9
                                            rounded-full justify-center border
                                            border-slate-300 hover:border-primary
                                            transition-all duration-300 hover:ease-in hover:scale-125
                                            hover:text-white  flex items-center text-white bg-primary'><i class='ri-youtube-line'></i></a>
                                </span>
                                <span>
                                    <a href="" className='sm:w-12 sm:h-12 w-9 h-9
                                            rounded-full justify-center border
                                            border-slate-300 hover:border-primary
                                            transition-all duration-300 hover:ease-in hover:scale-125
                                            hover:text-white  flex items-center text-white bg-primary'><i class='ri-youtube-line'></i></a>
                                </span>
                            
                        </div>
                    </div>
                    
                    {/* end hero content */}
            </div>
        </div>
    </section>
  )
}

export default Hero
