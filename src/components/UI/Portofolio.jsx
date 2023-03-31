import React from "react"
import portfolios from "../../assets/data/portfolioData"

const Portofolio = () => {
  return (
    <section className="pt-8 sm:pt-0 pb-32" id="portofolio">
        <div className="container">
                <h2 data-aos="fade-up" data-aos-duration="1200" className="text-center text-stone-700 text-4xl pb-8">
                            My recent portofolio
                </h2>

                <div className="flex items-center justify-center gap-3 pb-8">
                        <button className="text-stone-700 border border-solid border-primary py-2 px-2 rounded-lg hover:bg-primary hover:text-white">All</button>
                        <button className="text-stone-700 border border-solid border-primary py-2 px-2 rounded-lg hover:bg-primary hover:text-white">Frontend</button>
                        <button className="text-stone-700 border border-solid border-primary py-2 px-2 rounded-lg hover:bg-primary hover:text-white">Fullstack</button>
                </div>

                <div className="lg:px-12 flex items-center justify-between flex-wrap md:grid md:grid-cols-2  md:gap-8 lg:gap-12">
                    {portfolios?.map((portofolio,index)=> (
                          <div className="group relative z-[1] w-full mb-4 rounded-lg overflow-hidden shadow-xl
                          shadow-slate-700 
                           hover:scale-105 transition-all duration-500"> 
                              <figure>
                                <img className="rounded-lg" src={portofolio.imgUrl} alt="" />
                              </figure>

                              <div className="w-full h-full rounded-lg bg-primary bg-opacity-50 absolute top-0
                              left-0 z-[5] hidden group-hover:block">
                                <div className="w-full h-full flex items-center">
                              

                                    <button className="text-white bg-headingcolor hover:bg-primary py-2 px-4
                                    rounded-lg text-lg ease-in duration-200">
                                      see details
                                    </button>
                                    
                                  <button className="text-white bg-headingcolor hover:bg-primary py-2 px-2
                                  rounded-lg text-sm ease-in duration-200">
                                    move to website
                                  </button>
                        

                                </div>

                              </div>
                          </div>
                        ))
                    }
                </div>
        </div>
        
    </section>
  )
}

export default Portofolio
