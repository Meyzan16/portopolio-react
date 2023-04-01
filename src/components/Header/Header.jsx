import React, {useEffect, useRef} from "react"

const Header = () => {

    const headerRef = useRef(null);
    const menuRef = useRef(null);

    const stickyHeaderFunc = ()=> {
        window.addEventListener('scroll', () => {
            if(document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
                headerRef.current.classList.add('sticky_header')
            }else{
                headerRef.current.classList.remove('sticky_header')
            }
        })
    }
    useEffect(()=> {
        stickyHeaderFunc()
        return window.removeEventListener("scroll", stickyHeaderFunc);
    }, []);

    const handleClick = e => {
        e.preventDefault()

        const targetAttr = e.target.getAttribute('href')
        const location = document.querySelector(targetAttr).offsetTop

        window.scrollTo({
            top:location - 80,
            left:0,
        })
    }

    const toggleMenu = () => menuRef.current.classList.toggle('show_menu')

  return (
        <header ref={headerRef} className="w-full h-[80px] leading-[80px] flex items-center">
            <div className="container">
                <div className="flex items-center justify-between">
                    {/* logo */}
                    <div className="flex items-center gap-2">
                        <span className="w-[35px] h-[35px]  bg-gradient-to-r
                            from-primary to-gray-400 text-white text-lg font-[500] rounded-full flex items-center justify-center">M</span>
                    
                        <div className="leading-relaxed">
                            <h2 className="text-lg text-primary font[700]">Meyzan</h2>
                            <p className="text-slate-400 text-xs font[500] px-2">personal</p>
                        </div>
                    </div>
                    {/* logoo end */}

                    {/* menu start */}
                    <div className="menu" ref={menuRef} onClick={toggleMenu}>
                        <ul className="flex items-center gap-10">
                            <li><a onClick={handleClick} className="text-stone-700 text-base font-[600] hover:text-primary" href="#about">About</a></li>
                            <li><a onClick={handleClick} className="text-stone-700 text-base font-[600] hover:text-primary" href="#services">Services</a></li>
                            <li><a onClick={handleClick} className="text-stone-700 text-base font-[600] hover:text-primary" href="#portofolio">Portopolio</a></li>
                           
                        </ul>
                    </div>
                    {/* menu end */}
                    <div className="flex items-center gap-4">
                        <button className="flex items-center justify-center gap-2 text-stone-700 font-[600] border border-solid
                        border-smallTextColor py-2 px-4 rounded-lg max-h-[40px] hover:bg-primary hover:border-primary hover:text-white hover:font-[500] ease-in duration-200">
                            <i class="ri-send-plane-line"></i> 
                                    Let"s talk
                        </button>

                        <span onClick={toggleMenu} className="text-2xl text-stone-700 md:hidden cursor-pointer">
                            <i className="ri-menu-line"></i></span>
                    </div>
                    {/* menu right */}
                </div>
            </div>
        </header>
  )
}

export default Header
