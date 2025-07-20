import 'boxicons/css/boxicons.min.css'
import { useEffect, useState } from 'react'

const Header = () => {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const toggleMobileMenu = () => {
    const mobileMenu = document.getElementById("mobileMenu")
    if (mobileMenu.classList.contains('hidden')) {
      mobileMenu.classList.remove("hidden")
    } else {
      mobileMenu.classList.add("hidden")
    }
  }

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'backdrop-blur-md bg-black/30' : 'bg-transparent'} flex justify-between items-center py-4 px-4 lg:px-20`}>
      <a data-aos="fade-down"
        data-aos-easing="linear"
        data-aos-duration="1000"
        className="text-xl md:text-2xl lg:text-3xl m-0 font-bold bg-gradient-to-r from-[#b85c1e] via-[#e99b63] to-[#a8551a] bg-clip-text text-transparent"
        href='#'>
        Harsh
      </a>

      {/* Nav Links */}
      <nav className="hidden md:flex items-center gap-12">
        {['Home', 'About', 'Skills', 'Services'].map((item, index) => (
          <a
            key={item}
            data-aos="fade-down"
            data-aos-easing="linear"
            data-aos-duration={1100 + index * 200}
            href="#"
            className="relative text-base tracking-wider transition-all duration-300 text-white z-50 
                       after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-[2px] 
                       after:w-0 after:bg-gradient-to-r from-[#b85c1e] via-[#e99b63] to-[#a8551a] 
                       after:transition-all after:duration-300 hover:after:w-full 
                       hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r from-[#b85c1e] via-[#e99b63] to-[#a8551a]"
          >
            {item}
          </a>
        ))}
      </nav>

      {/* Contact Me Button */}
      <a
        href="#contact"
        className="hidden md:block relative font-medium rounded-full transition-all duration-500 z-50 border-2 border-white group"
      >
        <span className="block px-6 py-2 rounded-full bg-white text-black group-hover:bg-transparent group-hover:text-white transition-all duration-500">
          Contact Me
        </span>
      </a>

      {/* Mobile menu toggle */}
      <button onClick={toggleMobileMenu} className='md:hidden text-3xl p-2 z-50'>
        <i className='bx bx-menu'></i>
      </button>

      {/* Mobile menu */}
      <div id='mobileMenu' className='hidden fixed top-16 bottom-0 right-0 left-0 p-5 md:hidden z-40 bg-black bg-opacity-70 backdrop-blur-md'>
        <nav className='flex flex-col gap-6 items-center'>
          {['Home', 'About', 'Skills', 'Services'].map(item => (
            <a
              key={item}
              className="text-base tracking-wider transition-colors duration-300 hover:text-gray-300 z-50"
              href="#"
            >
              {item}
            </a>
          ))}
        </nav>
      </div>
    </header>
  )
}

export default Header
