'use client'

import Image, { StaticImageData } from "next/image";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { splitText } from "@/utils";

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);
type Product = {
  title: string;
  description: string;
  colors: string[];
  image: StaticImageData;
  price: number;
};

const Card = ({ product }: { product: Product }) => {

  const card = useRef(null);
  const tl = useRef<gsap.core.Timeline | null>(null);
  const border = useRef(null);
  const title = useRef<HTMLHeadingElement>(null);
  const description = useRef<HTMLParagraphElement>(null);
  const price = useRef(null)
  const colorsGroup = useRef(null)

  useGSAP(() => {
    tl.current = gsap.timeline({ paused: true });
    tl.current.to( border.current, {
      delay: 0.2,
      width: "100%",
      ease: "power2.out",
      duration: 0.6,
    })
    .to(".title-span", {
      y: 0,
      duration: 0.4,
      stagger: 0.01
    }, "<+0.1")
    .to(description.current, {
      y: 0,
      duration: 0.4,
      opacity: 1,
    }, "<+=0.4")
    .to(price.current, {
      x: 0,
      duration: 0.4,
      opacity: 1
    }, "1-=0.2")
    .to(colorsGroup.current, {
      y: 0,
      opacity: 1,
      duration: 0.4
    }, "<+=0.2")
  }, { scope: card })

  useGSAP(() => {
    gsap.to(card.current, {
      y: 0,
      duration: 0.8,
      ease: "power2.out",
      scrollTrigger: {
        trigger: card.current,
        start: "10% bottom",
        end: "bottom bottom",
        toggleActions: "play none none reverse",
        onEnter: () => {
          tl.current?.play();
        },
        onLeaveBack: () => {
          tl.current?.reverse();
        }
      },
    })
  })

  return (
    <div ref={card} className="card relative bg-slate-50 grid grid-cols-12 gap-y-3 py-5 translate-y-40">
      <span ref={border} className="absolute inset-0 w-0 h-0.5 bg-slate-900/90"></span>
      <div className="col-span-full md:col-span-4 rounded-md items-stretch overflow-hidden">
        <Image
          src={product.image}
          className="object-cover object-center w-full h-auto max-h-[70vh] aspect-[5/6]"
          alt={product.title}
          width={600}
          height={800}
        />
      </div>
      <div className="col-span-full h-full md:col-span-8 flex flex-col justify-between md:ml-4">
        <div>
          <div className="flex justify-between gap-3">
            <div className="w-fit h-fit grow overflow-hidden">
              <h2 ref={title} className="flex text-2xl sm:text-3xl lg:text-4xl w-[90%]">
                {splitText(product.title, "title-span translate-y-full")}
              </h2>
            </div>

            <div ref={price} className="flex opacity-0 translate-x-1/3">
              <span className="flex text-2xl sm:text-3xl lg:text-4xl">{product.price.toFixed(2)}</span>
              $
            </div>
          </div>
          <div className="w-fit h-fit overflow-hidden">
            <p ref={description} className="text-sm font-thin mt-3 md:mt-5 lg:w-96 line-clamp-3 translate-y-7 opacity-0">
              {product.description}
            </p>
          </div>
        </div>

        <div className="flex md:flex-col justify-between max-md:items-end gap-1.5 md:gap-3 mt-4 mb-1 grow">
          <div ref={colorsGroup} className="space-y-1.5 text-lg opacity-0 translate-y-1/4">
            <div>Colors</div>
            <div className="flex gap-1.5">
              {product.colors.map((color, i) => (
                <span
                  key={color + i}
                  style={{ background: color }}
                  className="size-5 rounded-full border border-slate-900/20"
                ></span>
              ))}
            </div>
          </div>
          <a
            href="#"
            className="text-lg text-nowrap underline underline-offset-2"
          >
            Show more
          </a>
        </div>
      </div>
    </div>
  );
};

export default Card;
