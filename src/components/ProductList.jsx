import Image from "next/image";
import Link from "next/link";

const ProductList = () => {
  return (
    <div className="mt-12 flex gap-x-8  gap-y-16 justify-between flex-wrap">
      <Link href={"/test"} className="w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%]">
      <div className="relative w-full h-80"> 
        <Image
          src="https://www.google.com/imgres?q=image&imgurl=https%3A%2F%2Fstatic.vecteezy.com%2Fsystem%2Fresources%2Fthumbnails%2F036%2F324%2F708%2Fsmall%2Fai-generated-picture-of-a-tiger-walking-in-the-forest-photo.jpg&imgrefurl=https%3A%2F%2Fwww.vecteezy.com%2Ffree-photos%2Fimage&docid=eqP1G-YlcRwZgM&tbnid=crGgp78bfBsQFM&vet=12ahUKEwigs-2c5PaOAxXSoK8BHWYeA1IQM3oECBoQAA..i&w=300&h=200&hcb=2&ved=2ahUKEwigs-2c5PaOAxXSoK8BHWYeA1IQM3oECBoQAA"
          alt=""
          fill
          sizes="25vw"
          className="absolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity easy duration-500"
        ></Image>
        <Image
          src="https://www.google.com/imgres?q=image&imgurl=https%3A%2F%2Fstatic.vecteezy.com%2Fsystem%2Fresources%2Fthumbnails%2F036%2F324%2F708%2Fsmall%2Fai-generated-picture-of-a-tiger-walking-in-the-forest-photo.jpg&imgrefurl=https%3A%2F%2Fwww.vecteezy.com%2Ffree-photos%2Fimage&docid=eqP1G-YlcRwZgM&tbnid=crGgp78bfBsQFM&vet=12ahUKEwigs-2c5PaOAxXSoK8BHWYeA1IQM3oECBoQAA..i&w=300&h=200&hcb=2&ved=2ahUKEwigs-2c5PaOAxXSoK8BHWYeA1IQM3oECBoQAA"
          alt=""
          fill
          sizes="25vw"
          className="absolute object-cover rounded-md"
        ></Image>
        </div>
        <div className="flex justify-between">
                <span className="font-medium">Product Name</span>
                <span className="font-semibold">$49</span>
        </div>
        <div className="text-sm text-gray-500">
                My Description
        </div>
        <button className="rounded-2xl w-max ring-1 ring-primary text-primary py-2 px-4 text-xs hover:bg-primary hover:text-white">Add to Cart</button>
      </Link>
    </div>
  );
};

export default ProductList;
