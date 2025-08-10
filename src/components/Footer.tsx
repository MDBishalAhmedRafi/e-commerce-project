
import Image from "next/image"
import Link from "next/link"

const Footer = () => {
  return (
    <div className='px-4 md:px-8 lg:px-16 xl:32 2xl:px-64 bg-gray-100 text-sm mt-24 py-24'>
      {/* Top */}
      <div className="flex flex-col md:flex-row justify-between gap-24"> 
        {/* Left */}
        <div className="w-full md:w-1/2 lg:w-1/4 flex flex-col gap-8"> 
          <Link href={"/"}>
          <div className="text-2xl tracking-wide">LAMA</div>
          </Link>
          <p className="">
            80/A Shahjalal Complex Malibagh, Dhaka-1217
          </p>
          <span className="font-semibold">mdbishalahmedrafi55@gmail.com</span>
          <span className="font-semibold">+8801518371336</span>
          <div className="flex gap-6 ">
            <Image src="/facebook.png" alt="" width={16} height={16}></Image>
            <Image src="/instagram.png" alt="" width={16} height={16}></Image>
            <Image src="/youtube.png" alt="" width={16} height={16}></Image>
            <Image src="/pinterest.png" alt="" width={16} height={16}></Image>
            <Image src="/x.png" alt="" width={16} height={16}></Image>
          </div>
        </div>
        {/* Center */}
        <div className="hidden lg:w-1/2 lg:flex justify-between"> 
        <div className="flex flex-col gap-6"> 
          <h1 className="font-medium text-lg">COMPANY</h1>
          <div className="flex flex-col gap-6">
            <Link href="">About US</Link>
            <Link href="">Careers</Link>
            <Link href="">Affiliates</Link>
            <Link href="">Blog</Link>
            <Link href="">Contact US</Link>
          </div>
        </div>
        <div className="flex flex-col gap-6"> 
          <h1 className="font-medium text-lg">SHOP</h1>
          <div className="flex flex-col gap-6">
            <Link href="">New Arrivals</Link>
            <Link href="">Accessories</Link>
            <Link href="">Men</Link>
            <Link href="">Women</Link>
            <Link href="">All Products</Link>
          </div>
        </div>

        <div className="flex flex-col gap-6"> 
          <h1 className="font-medium text-lg">HELP</h1>
          <div className="flex flex-col gap-6">
            <Link href="">Customer Service</Link>
            <Link href="">My Account</Link>
            <Link href="">Fine a Store</Link>
            <Link href="">Legal & Privacy</Link>
            <Link href="">Gift Card</Link>
          </div>
        </div>
        </div>
        {/* Rigth */}
        <div className="w-full md:w-1/2 lg:w-1/4 flex flex-col gap-8"> 
            <h1 className="font-medium text-lg">SUBSCRIBE</h1>
            <p className="">Be the first to get the latest news about trends, promotions, and much more!</p>
            <div className="">
              <input type="text" placeholder="Email Address" className="p-4 w-3/4" />
              <button className="w-1/4 bg-primary text-white">JOIN</button>
              </div>
              <span className="font-semibold">Secure Payments</span>
              <div className="flex justify-between">
                <Image src="/discover.png" alt="" width={40} height={20}></Image>
                <Image src="/skrill.png" alt="" width={40} height={20}></Image>
                <Image src="/paypal.png" alt="" width={40} height={20}></Image>
                <Image src="/mastercard.png" alt="" width={40} height={20}></Image>
                <Image src="/visa.png" alt="" width={40} height={20}></Image>
              </div>
            
        </div>
      </div>
      {/* Bottom */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-8 mt-16">
        <div className="">
          @ 2025 Lama Shop
        </div>
        <div className="">
          <div className="">
            {/* <span className="text-gray-500 mr-4">Language</span>
            <span className="font-medium">United States | English</span> */}
            {/* Video 1.28.0 */}
            <div className="">
            <span className=""></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer