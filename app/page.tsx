import Card from "@/components/Card";
import {products} from "@/data.js"

export default function Home() {
  return (
    <main className="p-3 text-slate-900 relative bg-slate-50">
      <section className="h-[30vh] w-full overflow-hidden ">
      </section>
      <section>
        <div className="border-t-2 border-t-slate-900/90 py-5 md:py-7 bg-slate-50">
          <h1 className="text-[calc(42px+2vw)] md:text-[calc(48px+4vw)] leading-tight mb-1">New Collection.</h1>
          <p className="text-sm font-thin maw-w-[80%] w-[400px] ml-1 lg:ml-2">See the world clearly: brand new stylish sunglasses with ultimate UV protection.</p>
        </div>
        <div className="relative border-y-2 border-y-slate-900/90 divide-y-2 divide-gray-900/90">
          {
            products.map((product, i) => (
              <Card key={i} product={product}/>
            ))
          }
        </div>
      </section>
      <section className="h-[80svh] flex justify-center items-center">
        <p className="text-[calc(32px+2vw)] md:text-[calc(48px+4vw)] leading-tight mb-1">Choose your favorite</p>
      </section>
      <footer className="border-t-2 border-t-slate-900/90 text-center pt-2">
       Dylan Noel
      </footer>
    </main>
  );
}
