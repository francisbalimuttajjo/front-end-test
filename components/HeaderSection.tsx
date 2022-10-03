import React from "react";
const items = [
  {
    title: "Lorem ipsum",
    image: "/images/vector1.svg",
  },
  {
    title: "Lorem ipsum",
    image: "/images/vector2.svg",
  },
  {
    title: "Lorem ipsum",
    image: "/images/vector3.svg",
  },
];

const Header: React.FC = () => {
  return (
    <>
      <img
        src={"/images/hero_image.svg"}
        className=" md:-ml-[20%] block z-10 mt-10 min-w-[97vw]"
      />
      <div className="flex justify-center items-center mt-20 flex-col">
        <h1 className="text-5xl font-bold text-white">Lorem ipsum</h1>
        <p className="font-normal text-lg my-4 text-white leading-5">
          Created By: <span className="text-red-500">Lorem ipsum</span>
        </p>

        <p className="font-normal text-sm  text-center sm:text-lg leading-5 text-white">
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem.
        </p>
      </div>
      <div className="md:flex        px-2  mt-10 md:mb-20   md:justify-around ">
        {items.map((item, key) => (
          <div
            className="flex w-full mt-5 md:mt-24 last:mb-20 md:last:mb-0 h-12 px-2 justify-center  items-center md:w-1/4 rounded-md bg-gray-900  "
            key={key}
          >
            <img src={item.image} alt="img" className="mr-3 h-4" />
            <p className="leading-5 text-white font-bold  leading-5  text-lg ">
              {item.title}
            </p>
          </div>
        ))}
      </div>
    </>
  );
};
export default Header;
