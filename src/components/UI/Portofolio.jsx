import React, {useState, useEffect} from 'react';
import data from "../../assets/data/portfolioData";
import Modal from "./Modal";

const Portofolio = () => {

  const [getItems, setItems] = useState(4);


  const [portfolios, setPortofolios] = useState(data);
  const [selectTab, setSelectTab] = useState('all');

  const [showModal, setShowModal] = useState(false);
  const [activeID, setactiveID] = useState(null);

  const loadMoreHandler = ()=> {
    setItems(prev => prev+2)
  }

  const showModalHandler = id=>{
    setShowModal(true)
    setactiveID(id)
  }



  useEffect(() => {
    if(selectTab === 'all'){
      setPortofolios(data)
    }
    if(selectTab === 'aa'){
      const filteredData = data.filter(item=> item.category==='Fullstack')
      console.log(filteredData)
      setPortofolios(filteredData)
    }
    if(selectTab === 'Front-end'){
      const filteredDataa = data.filter(item=> item.category==='Frontend')
      console.log(filteredDataa)
      setPortofolios(filteredDataa)
    }
  },[selectTab])


  return (
    <section className="pt-8 sm:pt-0 pb-32" id="portofolio">
        <div className="container">
                <h2 data-aos="fade-up" data-aos-duration="1200" className="text-center text-stone-700 text-4xl pb-8">
                            My recent portofolio
                </h2>

                {/* <div className="flex items-center justify-center gap-3 pb-8">
                        <button onClick={() => setSelectTab('all')} className="text-stone-700 border border-solid border-primary py-2 px-2 rounded-lg hover:bg-primary hover:text-white">All</button>
                        <button onClick={() => setSelectTab('aa')}  className="text-stone-700 border border-solid border-primary py-2 px-2 rounded-lg hover:bg-primary hover:text-white">Fullstack</button>
                        <button onClick={() => setSelectTab('Front-end')}  className="text-stone-700 border border-solid border-primary py-2 px-2 rounded-lg hover:bg-primary hover:text-white">Frontend</button>
                </div> */}

                <div className="lg:px-12 flex items-center justify-between 
                flex-wrap md:grid md:grid-cols-2  md:gap-8 lg:gap-12">
                    {data?.slice(0, getItems)?.map((portfolios,index)=> (
                          <div 
                          data-aos="zoom-in" 
                          data-aos-duration="1100"
                          data-aos-delay="100"
                          
                          key={index}
                          className="group relative z-[1] w-full mb-8 md:mb-4 rounded-lg overflow-hidden shadow-xl
                          shadow-slate-700 
                           hover:scale-105 transition-all duration-300"> 
                              <figure>
                                <img className="rounded-lg" src={portfolios.imgUrl} alt="" />
                              </figure>

                              <div className="w-full h-full rounded-lg bg-primary bg-opacity-50 absolute top-0
                              left-0 z-[5] hidden group-hover:block">
                                <div className="w-full h-full flex items-center justify-center">
                                  <button onClick={()=> showModalHandler(portfolios.id)} className="text-white bg-headingcolor hover:bg-primary py-2 px-4
                                  rounded-lg text-lg ease-in duration-200">
                                    see details
                                  </button>
                                  

                                </div>

                              </div>
                          </div>
                        ))
                    }
                </div>

                <div className="text-center mt-6">
               

                    {
                      // kalo data 4 pertama kurang dari data asli maka munculkan load more dan kalo seluruh data lebih besar dari 4 maka munculkan load more
                      getItems < portfolios.length && data.length > 2 && (

                      <button onClick={loadMoreHandler} className=" text-stone-700 border border-solid border-primary py-2 px-4 rounded-lg
                      ease-in duration-300 hover:bg-primary hover:text-white">
                        Load More
                      </button>
                      )
                    }
                    
                </div>
        </div>

        {
          showModal && <Modal setShowModal={setShowModal} activeID={activeID} />
        }
        
    </section>
  )
}

export default Portofolio
