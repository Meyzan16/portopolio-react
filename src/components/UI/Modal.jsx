
import React from "react"
import portfolios from "../../assets/data/portfolioData"


const Modal = ({activeID, setShowModal}) => {

    const data = portfolios.find(portofolio=> portofolio.id === activeID)

  return (
    <div className="w-full h-full fixed top-0 left-0 z-10 bg-dark bg-opacity-70">
        <div className="w-96 md:w-[600px] absolute top-1/2 left-1/2 z-20 bg-white rounded-lg
             transform -translate-x-1/2 -translate-y-1/2 p-5">
            <div>
                <figure>
                    <img className="rounded-lg border-primary border border-solid shadow-xl " src={data.imgUrl} alt="" />
                </figure>
            </div>

            <div>
                <h2 className="text-2xl text-stone-700 my-4">{data.title}</h2>

                <p className="text-secondary leading-relaxed text-sm text-left">description  : {data.description}</p>

                <div className="mt-5 flex items-center  gap-3 flex-wrap">
                    <h4 className="text-stone-700 text-md">Techonologies :</h4>

                    {
                        data.technologies.map((item,index)=>
                            <span key={index} className="bg-gray-200 py-1 px-2 rounded-lg text-md leading-0">{item}</span>
                        )
                    }
                </div>
                <a href={data.siteUrl} >
                    <button className="text-stone-700 border border-primary hover:bg-primary hover:text-white py-2 px-4 rounded-lg my-4">Live site</button>
                </a>
            </div>



            <button onClick={()=> setShowModal(false)} className="w-[1.8rem] h-[1.8rem] text-white
             bg-dark absolute top-[-0.5rem] right-[-0.5rem] text-lg rounded-lg
            flex items-center justify-center cursor-pointer leading-0
            ">
                    &times;
            </button>

        </div>
      
    </div>
  )
}

export default Modal
