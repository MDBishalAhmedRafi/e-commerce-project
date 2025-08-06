import Link from "next/link"
import Menu from "./Menu"
import Image from "next/image"
import SearchBar from "./SearchBar"
import NavbarIcons from "./NavbarIcons"

const Navbar = () => {

                
  return (
    <div className='h-20 px-4 md:px-8 lg:px-16 xl:32 2xl:px-64 relative'>
                <div className="h-full flex items-center justify-between md:hidden">

        {/* mobile */}
    <Link href={"/"}>
    <div className="text-2xl tracking-wide">
                LAMA
    </div>
</Link>
<Menu></Menu>
</div>

                {/* bigger screens */}

                <div className="hidden md:flex items-center justify-between gap-8 h-full">
                                {/* Left */}

                <div className="w-1/3"> 
                <Link href={"/"} className="flex items-center gap-3"> 
                <Image src={"/logo.png"} alt="LOGO Image" width={24} height={24}></Image>
                <div className="text-2xl tracking-wide">
                LAMA
    </div>
                </Link>
                </div>
                {/* Right */}
                 <div className="w-2/3 flex items-center justify-between gap-8 "> 
                <SearchBar></SearchBar>
                <NavbarIcons></NavbarIcons>
                </div>
                </div>
    </div>



  )
}

export default Navbar