import Image from "next/image";
import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="flex justify-center items-end py-6 mx-auto bottom-0 w-full ">
      <Image src={"/images/logo.svg"} width={200} height={50} />;
    </footer>
  );
};
export default Footer;
