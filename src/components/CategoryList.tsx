import Image from "next/image";
import Link from "next/link";

const CategoryList = () => {
  return (
    <div className="px-4 overflow-x-scroll scrollbar-hide">
      <div className="flex gap-4 md:gap-8">
        <Link href="/list?cat=test" className="flex-shrink-0 w-full sm:w-1/2 lg:w-1/4 xl:w-1/6">
          <div className="relative bg-slate-100 w-full h-96">
            <Image
              src="https://www.google.com/imgres?q=image&imgurl=https%3A%2F%2Fstatic.vecteezy.com%2Fsystem%2Fresources%2Fthumbnails%2F036%2F324%2F708%2Fsmall%2Fai-generated-picture-of-a-tiger-walking-in-the-forest-photo.jpg&imgrefurl=https%3A%2F%2Fwww.vecteezy.com%2Ffree-photos%2Fimage&docid=eqP1G-YlcRwZgM&tbnid=crGgp78bfBsQFM&vet=12ahUKEwigs-2c5PaOAxXSoK8BHWYeA1IQM3oECBoQAA..i&w=300&h=200&hcb=2&ved=2ahUKEwigs-2c5PaOAxXSoK8BHWYeA1IQM3oECBoQAA"
              alt=""
              fill
              sizes="20vw"
              className="object-cover"
            ></Image>
          </div>
          <h1 className="mt-8 font-light text-xl tracking-wide">Category Name</h1>
        </Link>
      </div>
    </div>
  );
};

export default CategoryList;
