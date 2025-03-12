import Image, { StaticImageData } from "next/image";

type Product = {
  title: string;
  description: string;
  colors: string[];
  image: StaticImageData;
  price: number;
}

const Card = ({ product } : { product : Product}) => {
  return (
    <div className="bg-slate-50 grid grid-cols-12 gap-y-3 py-5">
      <div className="col-span-full md:col-span-4 rounded-md items-stretch overflow-hidden">
        <Image
          src={product.image}
          className="object-cover object-center w-full h-auto max-h-[65vh] aspect-[5/6]"
          alt={product.title}
          width={600}
          height={800}
        />
      </div>
      <div className="col-span-full h-full md:col-span-8 flex flex-col justify-between md:ml-4">
        <div>
          <div className="flex justify-between gap-4">
            <h2 className="text-3xl sm:text-4xl w-[90%] line-clamp-2 sm:line-clamp-1">{product.title}</h2>
            <div className="flex "><span className="text-3xl sm:text-4xl">{product.price}</span>$</div>
          </div>
          <p className="text-sm font-thin mt-3 md:mt-5 lg:w-96 line-clamp-3">{product.description}</p>
        </div>

        <div className="flex md:flex-col justify-between max-md:items-end gap-1.5 md:gap-3 mt-4 mb-1 grow">
          <div className="space-y-1.5 text-lg">
            <div>Colors</div>
            <div className="flex gap-1.5">
              {product.colors.map((color, i) => (
                <span key={color+i} style={{ background: color}} className="size-5 rounded-full border border-slate-900/20"></span>
              ))}
            </div>
          </div>
          <a href="#" className="text-lg text-nowrap underline underline-offset-2">
            Learn more
          </a>
        </div>
      </div>
    </div>
  );
};

export default Card;
