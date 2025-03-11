import Card from "@/components/Card";
import {products} from "@/data.js"

export default function Home() {
  return (
    <main className="p-3 text-zinc-800">
      <section className="h-[30vh] w-full"></section>
      <section>
        <div className="h-[25vh] border-t-2 border-t-zinc-800/90">
          <h1 className="text-5xl sm:text-6xl md:text-7xl mt-5 md:mt-7">Our new collection.</h1>
        </div>
        <div className="border-y-2 border-y-zinc-800/90 divide-y-2 divide-gray-800/90">
          {
            products.map((product, i) => (
              <Card key={i} product={product}/>
            ))
          }
        </div>
      </section>
    </main>
  );
}
