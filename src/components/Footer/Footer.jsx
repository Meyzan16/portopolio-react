import React from 'react'

const Footer = () => {
  return (
   <footer className=' bg-[#12141e] pt-12'>
      <div className="container">
        <div className='md:flex items-center justify-between md:gap-8'>

            <div className='w-full md:w-1/2 mb-5 py-4'>
              <h2 className='text-xl leading-10 text-white mb-4 md:text-2xl '>
                Do you want to make beautiful products ?
              </h2>
              <a href="mailto:meyzan1605@gmail.com">
                                <button className="px-4 py-2 rounded-lg bg-primary text-white font-[500] 
                                flex items-center gap-2
                                hover:bg-smallTextColor ease-in duration-300">
                                    <i class="ri-mail-line"></i>Hire me
                                </button>
              </a>
            </div>

            <div className='w-full md:1/2 py-4 mb-5'>
                <p className='text-gray-300 leading-7 mb-4 md:text-xl md:text-center'>Copyright © 2023 - All right reserved by Meyzan Al Yutra! </p>
  
                <div className=' flex items-center gap-4 flex-wrap md:gap-4 md:justify-center'>
                  <span className='text-gray-300 text-md'>Follow Me :</span>

                  <span>
                                    <a href="https://github.com/meyzan16" className="w-10 h-10 bg-primary flex items-center justify-center
                                            text-2xl rounded-full text-white sm:text-2xl
                                            transition-all duration-300 hover:ease-in hover:scale-125">
                                                
                                                <i class="ri-github-fill"></i>
                                    </a>
                  </span>
                  <span>
                                    <a href={"https://www.linkedin.com/in/meyzan-al-yutra-s-kom-4017b2221/"} className="w-10 h-10 bg-primary flex items-center justify-center
                                            text-2xl rounded-full text-white sm:text-2xl
                                            transition-all duration-300 hover:ease-in hover:scale-125">
                                                
                                                <i class="ri-linkedin-box-fill"></i>
                                    </a>
                  </span>
                  <span>
                                    <a href={"https://www.instagram.com/adzanmagrib.e/"}  className="w-10 h-10 bg-primary flex items-center justify-center
                                            text-2xl rounded-full text-white sm:text-2xl
                                            transition-all duration-300 hover:ease-in hover:scale-125">
                                                
                                                <i class="ri-instagram-line"></i>
                                    </a>
                  </span>
                  <span>
                                    <a href={"https://api.whatsapp.com/send/?phone=6285783248518&amp;text=Hi, Meyzan Al Yutra&amp;type=phone_number&amp;app_absent=0"} className="w-10 h-10 bg-primary flex items-center justify-center
                                            text-2xl rounded-full text-white sm:text-2xl
                                            transition-all duration-300 hover:ease-in hover:scale-125">
                                                
                                                <i class="ri-whatsapp-line"></i>
                                    </a>
                  </span>

                </div>
            </div>
        </div>
      </div>

   </footer>
  )
}

export default Footer
