import 'boxicons/css/boxicons.min.css'
const Header = () => {
    const toggleMobileMenu=()=>{
        const mobileMenu=document.getElementById("mobileMenu")
        if(mobileMenu.classList.contains('hidden')){
            mobileMenu.classList.remove("hidden")
        }
        else{
            mobileMenu.classList.add("hidden")
        }
    }
  return (
   <header className="flex justify-between items-center py-4 px-4 lg:px-20">
    <a data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="1000"
     className="text-xl md:text-2xl lg:text-3xl m-0 font-bold bg-gradient-to-r from-[#b85c1e] via-[#e99b63] to-[#a8551a] bg-clip-text text-transparent"
     href='#'>
        Harsh
    </a>
    <nav className="hidden md:flex items-center gap-12">
        <a data-aos="fade-down"
        data-aos-easing="linear"
        data-aos-duration="1100" className="text-base tracking-wider tranistion-colors hover:text-gray-300 z-50" href="#">Home</a>
        <a data-aos="fade-down"
        data-aos-easing="linear"
        data-aos-duration="1300" className="text-base tracking-wider tranistion-colors hover:text-gray-300 z-50" href="#">About</a>
        <a data-aos="fade-down"
        data-aos-easing="linear"
        data-aos-duration="1500" className="text-base tracking-wider tranistion-colors hover:text-gray-300 z-50" href="#">Skills</a>
        <a data-aos="fade-down"
        data-aos-easing="linear"
        data-aos-duration="1700" className="text-base tracking-wider tranistion-colors hover:text-gray-300 z-50" href="#">Services</a>
    </nav>
    <button className="hidden md:block bg-[#a7a7a7] text-black py-3 px-8 rounded-full border-none font-medium transition-all duration-500 hover:bg-white cursor-pointer z-50">Contact me</button>

    {/* Mobile menu button */}
    <button onClick={toggleMobileMenu} className='md:hidden text-3xl p-2 z-50'>
        <i class='bx bx-menu'></i>
    </button>
    {/* mobile menu */}

    <div id='mobileMenu' className='hidden fixed top-16 bottom-0 right-0 left-0 p-5 md:hidden z-40 bg-black bg-opacity-70 backdrop-blur-md'>
        <nav className='flex flex-col gap-6 items-center'>
            <a className="text-base tracking-wider tranistion-colors hover:text-gray-300 z-50" href="#">Home</a>
            <a className="text-base tracking-wider tranistion-colors hover:text-gray-300 z-50" href="#">About</a>
            <a className="text-base tracking-wider tranistion-colors hover:text-gray-300 z-50" href="#">Skills</a>
            <a className="text-base tracking-wider tranistion-colors hover:text-gray-300 z-50" href="#">Services</a>

        </nav>
    </div>

   </header>
  )
}

export default Header
