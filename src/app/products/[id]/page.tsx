import ProductInteraction from "@/components/ProductInteraction";
import { ProductType } from "@/type";
import Image from "next/image";

//TEMPORARY
const product: ProductType = {
  id: 1,
  name: "Adidas CoreFit T-Shirt",
  shortDescription:
    "Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit.",
  description:
    "Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit. Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit. Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit.",
  price: 39.9,
  sizes: ["s", "m", "l", "xl", "xxl"],
  colors: ["gray", "purple", "green"],
  images: {
    gray: "/products/1g.png",
    purple: "/products/1p.png",
    green: "/products/1gr.png",
  },
};

const ProductPage = async ({
  params,
  searchParams,
}: {
  params: Promise<{ id: string }>;
  searchParams: Promise<{ color: string; size: string }>;
}) => {
  const { size, color } = await searchParams;

  const selectedSize = size || (product.sizes[0] as string);
  const selectedColor = color || (product.colors[0] as string);
  return (
    <div className="flex flex-col gap-4 lg:flex-row mt-12 md:gap-12">
      {/* IMAGE */}
      <div className="relative w-full lg:w-5/12 aspect-2/3">
        <Image
          src={product.images[selectedColor]}
          alt={product.name}
          className="object-contain rounded-md"
          fill
        />
      </div>
      {/* DETAILS */}
      <div className="w-full lg:w-7/12 flex flex-col gap-4">
        <h1 className="text-2xl font-medium">{product.name}</h1>
        <p className="text-gray-500">{product.description}</p>
        <h1 className="text-2xl font-semibold">${product.price.toFixed(2)}</h1>

        {/* INTERACTIONS */}
        <ProductInteraction product={product} selectedSize={selectedSize} selectedColor={selectedColor} />

        {/* CARD INFO */}
        <div className="flex items-center gap-2 mt-4">
          <Image
            src="/klarna.png"
            alt="Klarna"
            width={50}
            height={25}
            className="rounded-md"
          />
          <Image
            src="/cards.png"
            alt="Cards"
            width={50}
            height={25}
            className="rounded-md"
          />
          <Image
            src="/stripe.png"
            alt="Stripe"
            width={50}
            height={25}
            className="rounded-md"
          />
        </div>
        <p className="text-gray-500 text-xs">
            By clicking pay now, you agree to our <span className="underline hover:text-black">Privacy Policy</span>. You authorize us to charge your selected payment method for the total amount shown. All sales are subject to our <span className="underline hover:text-black">Refund policies</span>.
        </p>
      </div>
    </div>
  );
};

export default ProductPage;
