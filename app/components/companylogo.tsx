import React from "react";
import Image from "next/image";
import Logo from "../photos/Logo.png";
import Logoo from "../photos/logoo.png";
import third from "../photos/third.png";
import forth from "../photos/forth.png";
import fifth from "../photos/fifth.png";
import sixth from "../photos/sixth.png";
import seventh from "../photos/seventh.png";




const CompanyLogo = () => {
  return (
    <div className="w-full flex flex-wrap justify-center items-center gap-20 pt-14 px-4">
      <div className="flex justify-center items-center">
        <Image src={Logo} alt="Zaphier Logo" width={85} height={87} />
      </div>

      <div className="flex justify-center items-center">
        <Image
          src={Logoo}
          alt="Pipe Drive Logo"
          width={107}
          height={109}
        />
      </div>
      <div className="flex justify-center items-center">
        <Image
          src={third}
        
          alt="Cib Bank Logo"
          width={135}
          height={139}
        />
      </div>
      <div className="flex justify-center items-center">
        <Image
          src={forth}
          alt="Company 4 Logo"
          width={63}
          height={65}
        />
      </div>
      <div className="flex justify-center items-center">
        <Image
          src={fifth}
          alt="Burnt Toast Logo"
          width={98}
          height={101}
        />
      </div>
      <div className="flex justify-center items-center">
        <Image
          src={sixth}
          alt="Panda Doc Logo"
          width={113}
          height={115}
        />
      </div>
      <div className="flex justify-center items-center">
        <Image src={seventh}
         alt="Moz Logo"
         width={84}
         height={87} />
      </div>
    </div>
  );
};

export default CompanyLogo;