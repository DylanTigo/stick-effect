"use client";

import Card from "@/components/Card";
import { products } from "@/data.js";
import gsap from "gsap";
import { splitText } from "@/utils";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const main = useRef(null);
  const title = useRef<HTMLHeadingElement>(null);
  const subtitle = useRef<HTMLParagraphElement>(null);
  const border = useRef(null);
  const lastSection = useRef(null)

  const timeline = useRef<gsap.core.Timeline | null>(null);

  useGSAP(() => {
    timeline.current = gsap.timeline({ paused: true });

    const spans = title.current?.querySelectorAll("span");
    if (spans) {
      timeline.current
        .to(spans, {
          y: 0,
          stagger: 0.01,
          duration: 0.6,
        })
        .to(
          subtitle.current,
          {
            y: 0,
            duration: 0.6,
            opacity: 1,
          },
          "<+=0.4"
        )
        .to(
          border.current,
          {
            delay: 0.2,
            width: "100%",
            ease: "power2.out",
            duration: 0.8,
          },
          "<-=0.4"
        );
    }
    timeline.current.play();
  });

  useGSAP(() => {
    const tl = gsap.timeline({ paused: true });
    tl.to(".border-item", {
      width: "100%",
      ease: "power2.out",
      stagger: 0.5,
      duration: 0.8,
    }).to("p.flex span", {
      y: 0,
      duration: 0.6,
      stagger: 0.02
    }, "<+0.2");

    gsap.to(lastSection.current, {
      scrollTrigger: {
        trigger: lastSection.current,
        start: "20% 70%",
        onEnter: () => {
          tl.play();
        },
        onLeaveBack: () => {
          tl.reverse();
        },
      }
    })
  }, { scope: lastSection});

  return (
    <main ref={main} className="p-3 text-slate-900 relative bg-slate-50">
      <section className="h-[60vh] w-full overflow-hidden "></section>
      <section>
        <div className="py-5 md:py-7 bg-slate-50 relative">
          <span
            ref={border}
            className="absolute inset-0 w-0 h-0.5 bg-slate-900/90"
          ></span>
          <div className="w-fit h-fit overflow-hidden">
            <h1
              ref={title}
              className="flex text-[calc(42px+2vw)] md:text-[calc(48px+4vw)] leading-tight mb-1"
            >
              {splitText("New Collection.", "translate-y-full")}
            </h1>
          </div>
          <div className="w-fit h-fit overflow-hidden">
            <p
              ref={subtitle}
              className="text-sm font-thin w-[80%] max-w-[400px] ml-1 lg:ml-2 origin-top-left translate-y-7 opacity-0 "
            >
              See the world clearly: brand new stylish sunglasses with ultimate
              UV protection
            </p>
          </div>
        </div>
        <div className="relative ">
          {products.map((product, i) => (
            <Card key={i} product={product} />
          ))}
        </div>
      </section>
      <section ref={lastSection} className="h-[90svh] flex justify-center items-center relative">
        <span
          className="border-item absolute left-0 top-0 w-0 h-0.5 bg-slate-900/90"
        />
        <div className="w-fit h-fit overflow-hidden">
          <p className="flex text-[calc(32px+2vw)] md:text-[calc(48px+4vw)] leading-tight mb-1">
            {splitText("Make your choise", "translate-y-full")}
          </p>
        </div>
        <span
          className="border-item absolute left-0 bottom-0 w-0 h-0.5 bg-slate-900/90"
        />
      </section>
      <footer className="text-center pt-2">Dylan Noel</footer>
    </main>
  );
}
