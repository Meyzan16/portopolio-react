import React from 'react'

// import HeroImg from '../../assets/images/hero.svg'
// import HeroImg from '../../assets/images/meyzan.png'
import HeroImg from '../../assets/images/preview-poto.png'
import CountUp from 'react-countup'

const Hero = () => {
  return (
    <section className='py-8' id='about'>
        <div className="container">
            <div className='md:flex items-center justify-between sm:flex-col md:flex-row'>
                    {/* hero left content */}
                    <div className="w-full md:basis-1/2 text-center md:text-left"> 
                        <h5 data-aos='fade-right' data-aos-duration='1500' className=' text-stone-700
                        text-lg md:text-xl font-[600]'>
                            Hello welcome
                        </h5>
                        <h1 data-aos='fade-up' data-aos-duration='1800' data-aos-delay='200' className='py-4 text-stone-900 font-[800]
                            text-[1.8rem] sm:text-[40px] leading-[35px] sm:leading-[46px]'>I'm Meyzan Al Yutra 
                            <br /> 
                            <span className='text-[1.4rem] sm:text-[40px]'>
                                Software Developer
                            </span> 
                        </h1>

                        <div data-aos='fade-up' data-aos-duration='1800' data-aos-delay='200' 
                            className='flex items-center justify-center md:justify-normal gap-6 py-4'>
                            <a href="mailto:meyzan1605@gmail.com">
                                <button className="px-4 py-2 rounded-lg bg-primary text-white font-[500] flex items-center gap-2
                                hover:bg-smallTextColor ease-in duration-300">
                                    <i class="ri-mail-line"></i>Hire me
                                </button>
                            </a>
                            <a href="#portopolio" className='hover:text-primary hover:border-primary text-stone-700 font-[600] text-[16px] border-b border-solid border-stone-700'>
                                See portopolio
                            </a>

                        </div>
                        
                        <p data-aos='fade-up' data-aos-duration='1500' 
                            className='w-full flex gap-2 text-stone-700 font-[500] text-[15px] 
                            leading-7  md:pr-10 py-4'>
                            <span>
                                <i class='ri-apps-2-line'></i>
                            </span>    
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe corrupti eos expedita a porro tenetur minima non animi quod vero?
                        </p>

                        <div className='flex items-center justify-center md:justify-normal gap-4 py-4'>
                            {/* <span className='text-stone-700 text-[15px] '>Follow me :</span> */}

                                <span data-aos='zoom-in' data-aos-duration='800' data-aos-delay='100'>
                                    <a href="https://github.com/meyzan16" className="sm:w-12 sm:h-12 w-10 h-10
                                            rounded-full justify-center border
                                            border-slate-300 hover:border-primary
                                            transition-all duration-300 hover:ease-in hover:scale-125
                                            hover:text-white  flex items-center text-white bg-primary text-[18px] sm:text-[29px]" target="_blank">
                                                <i class="ri-github-fill"></i>
                                    </a>
                                </span>
                                <span data-aos='zoom-in' data-aos-duration='800' data-aos-delay='200'>
                                    <a href="https://www.linkedin.com/in/meyzan-al-yutra-s-kom-4017b2221/" className="sm:w-12 sm:h-12 w-10 h-10
                                            rounded-full justify-center border
                                            border-slate-300 hover:border-primary
                                            transition-all duration-300 hover:ease-in hover:scale-125
                                            hover:text-white  flex items-center text-white bg-primary text-[18px] sm:text-[29px]" target="_blank">
                                                <i class="ri-linkedin-box-fill"></i>
                                    </a>
                                </span>
                                <span data-aos='zoom-in' data-aos-duration='800' data-aos-delay='300'>
                                    <a href={'https://www.linkedin.com/in/meyzan-al-yutra-s-kom-4017b2221/'}  className="sm:w-12 sm:h-12 w-10 h-10 
                                            rounded-full justify-center border
                                            border-slate-300 hover:border-primary
                                            transition-all duration-300 hover:ease-in hover:scale-125
                                            hover:text-white  flex items-center text-white bg-primary text-[18px] sm:text-[29px]"  target="_blank"
                                            >
                                               <i class="ri-instagram-line"></i>
                                    </a>
                                </span>
                                <span data-aos='zoom-in' data-aos-duration='800' data-aos-delay='400'>
                                    <a href={'https://api.whatsapp.com/send/?phone=6285783248518&amp;text=Hi, Meyzan Al Yutra&amp;type=phone_number&amp;app_absent=0'} className="sm:w-12 sm:h-12 w-10 h-10
                                            rounded-full justify-center border
                                            border-slate-300 hover:border-primary
                                            transition-all duration-300 hover:ease-in hover:scale-125
                                            hover:text-white  flex items-center text-white bg-primary text-[18px] sm:text-[29px]"   target="_blank">
                                               <i class="ri-whatsapp-line"></i>
                                    </a>
                                </span>
                        </div>
                    </div>
                    {/* end hero content */}

                    {/* img */}
                    <div className='md:basis-1/3 py-4 md:py-12'>
                        <figure data-aos='zoom-in' data-aos-duration='1500' data-aos-delay='200' className='flex items-center justify-center bg-primary  w-60  md:w-[20rem]  mx-auto  rounded-full  overflow-hidden'>
                            <img src={HeroImg} alt="" className='w-full'/>
                            {/* asda */}
                        </figure>
                    </div>
                    {/* end img */}
                    <div className='basis-1/5  flex justify-between text-center flex-wrap gap-4
                        md:flex-col md:justify-end md:text-end'>
                            <div className="mb-2 md:mb-10">
                                <h2 className='text-stone-700 font-[700] text-xl  md:text-[32px]'>
                                    <CountUp start={0} end={4} duration={2} suffix='+'/>
                                </h2>
                                <h4 className='text-stone-700 font-[600]  text-md md:text-[18px]'
                                >Years of exprience</h4>
                            </div>

                            <div className="mb-2 md:mb-10">
                                <h2 className='text-stone-700 font-[700]  text-xl md:text-[32px]'>
                                    <CountUp start={0} end={100} duration={2} suffix='%'/>
                                </h2>
                                <h4 className='text-stone-700 font-[600]  text-md md:text-[18px]'
                                >Success Rate</h4>
                            </div>

                            {/* <div className="mb-2 md:mb-10">
                                <h2 className='text-stone-700 font-[700]  text-xl md:text-[32px]'>
                                    <CountUp start={0} end={96} duration={2} suffix='+'/>
                                </h2>
                                <h4 className='text-stone-700 font-[600]  text-md md:text-[18px]'
                                >Happy Clients</h4>
                            </div> */}

                            <div className="mb-2 md:mb-10">
                                <h2 className='text-stone-700 font-[700]  text-xl md:text-[32px]'>
                                    <CountUp start={0} end={21} duration={2} suffix='+'/>
                                </h2>
                                <h4 className='text-stone-700 font-[600]  text-md md:text-[18px]'
                                >Project Complate</h4>
                            </div>
                    </div>
            </div>
        </div>
    </section>
  )
}

export default Hero
