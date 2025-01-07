import Image from "next/image";
import Link from "next/link";

import imgss from "../photos/imgss.png";
import img from "../photos/img.png";

import imgs from "../photos/imgs.png";

export default function Categories() {
  const categories = [
    {
      name: "New Seat",
      products: "Wing chair",
      image: (imgss),
      href: "/image(5).png",
    },
    {
       name: "Wooden Chair",
       href: "/image(3).png",
       products: "157 Products",
       image: (img),
    },
    {
      name: "Desk Chair",
      products: "154 Products",
      image: (imgs),
      href: "/categories/desk-chair",
    },
  ];

  return (
    <section className="w-full px-4 py-[7rem] md:px-6">
      <div className="mx-auto max-w-7xl">
        <h2 className="text-3xl font-bold tracking-tight  mb-8">
          Top Categories
        </h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((category) => (
            <Link
              key={category.name}
              href={"../components/productDescription/discription"}
              className="group relative overflow-hidden rounded-lg"
            >
              <div className="aspect-[4/3] w-full">
                <Image
                  src={category.image}
                  alt={category.name}
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                  priority
                  width={400}
                  height={400}
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent">
                <div className="absolute bottom-0 p-6">
                  <h3 className="mb-2 font-inter text-xl font-medium text-white">
                    {category.name}
                  </h3>
                  <p className="font-inter text-sm text-gray-200">
                    {category.products}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}