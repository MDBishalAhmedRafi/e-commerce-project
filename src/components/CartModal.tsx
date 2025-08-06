"üse client";

import Image from "next/image";

const CartModal = () => {
  const CartItems = true;
  return (
    <div className="absolute p-4 rounded-md shadow-[0_3px_10px_rgb(0,0,0,0.2)] bg-white top-12 right-0 flex flex-col gap-6 z-20">
      HomePage
      {!CartItems ? (
        <div className=""> Class is Empty</div>
      ) : (
                <div className="flex flex-col gap-8">
                                {/* Item */}
        <div className="flex gap-4">
          <Image
            src={"https://www.google.com/imgres?q=image&imgurl=https%3A%2F%2Fstatic.vecteezy.com%2Fsystem%2Fresources%2Fthumbnails%2F036%2F324%2F708%2Fsmall%2Fai-generated-picture-of-a-tiger-walking-in-the-forest-photo.jpg&imgrefurl=https%3A%2F%2Fwww.vecteezy.com%2Ffree-photos%2Fimage&docid=eqP1G-YlcRwZgM&tbnid=crGgp78bfBsQFM&vet=12ahUKEwigs-2c5PaOAxXSoK8BHWYeA1IQM3oECBoQAA..i&w=300&h=200&hcb=2&ved=2ahUKEwigs-2c5PaOAxXSoK8BHWYeA1IQM3oECBoQAA"}
            alt=""
            width={72}
            height={96}
            className="object-cover rounded-md"
          ></Image>
          <div className="flex flex-xol justify-between w-full"> 
                {/* Top */}
                <div className=""> 
                                {/* Title */}
                                <div className="flex items-center justify-between gap-8"> 
                                    <h3 className="font-semibold">Product Name</h3>  
                                    <div className="p-1 bg-gray-50 rounded-sm">$599</div>          
                                </div>
                                {/* Description */}
                                <div className="text-sm text-gray-500"> 
                                                available
                                </div>
                </div>
                {/* Bottom */}
                <div className="flex justify-between text-sm">
                                <span className="text-gray-500">Qty.</span>
                                <span className="text-blue-500">Remove</span>
                </div>
          </div>
        </div>
        </div>
      )}
    </div>
  );
};

export default CartModal;
