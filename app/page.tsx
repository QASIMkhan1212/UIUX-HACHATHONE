

import Categories from "./components/Categories";
import CompanyLogo from "./components/companylogo";
import Hero from "./components/Hero";
import HotProduct from "./components/hotproducts";
import OurProduct from "./components/ourproducts";

export default function Home() {
  return (
    <>
      <Hero />
      <CompanyLogo />
      <Categories />
      <HotProduct />
      <OurProduct />
    </>
  );
}