import Image from "next/image";

type Product = {
  title: string;
  description: string;
  colors: string[];
  image: string;
  price: number;
}

const Card = ({ product } : { product : Product}) => {
  return (
    <div className="grid grid-cols-12 gap-x-1.5 gap-y-3 py-5 ">
      <div className="col-span-full md:col-span-4 rounded-md overflow-hidden">
        <Image
          src={product.image}
          className="object-cover object-center w-full h-auto aspect-[5/6] md:aspect-[3/4]"
          alt={product.title}
          width={300}
          height={400}
        />
      </div>
      <div className="col-span-full md:col-span-8 grid grid-cols-12 md:ml-4">
        <div className="col-span-10 size-full flex flex-col justify-between gap-4">
          <div>
            <h2 className="text-3xl sm:text-4xl mb-3 w-[90%] sm:truncate">{product.title}</h2>
            <p className="text-sm font-thin md:w-3/4 line-clamp-3">{product.description}</p>
          </div>
          <div className="space-y-0.5 text-lg">
            <div>Colors</div>
            <div className="flex gap-1">
              {product.colors.map((color, i) => (
                <span key={color+i} style={{ background: color}} className="size-5 rounded-full border border-zinc-800/20"></span>
              ))}
            </div>
          </div>
        </div>
        <div className="col-span-2 flex flex-col justify-between items-end text-end">
          <div className="flex "><span className="text-3xl sm:text-4xl">{product.price}</span>$</div>
          <a href="#" className="text-nowrap underline underline-offset-2">
            Learn more
          </a>
        </div>
      </div>
    </div>
  );
};

export default Card;
