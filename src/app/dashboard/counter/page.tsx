
import { CartCounter } from "@/components";
import { Metadata } from "next";
// emmet prc create a page component

export const metadata: Metadata = {
 title: 'Counter Page',
 description: 'Counter Simple',
};

export default function CounterPage() {

  return (
    <div className="flex flex-col items-center justify-center w-full h-full">
      <h1>Productos en el carrito</h1>
      <CartCounter value={10}/>
    </div>
  );
}
