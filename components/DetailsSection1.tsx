import { links } from "./data";

const Details: React.FC = () => {
  return (
    <div className=" w-full md:w-1/2">
      <div className="bg-gray-900/50 w-full md:w-11/12 rounded-md px-4 pt-5 pb-10  ">
        <div className="flex  ">
          <h1 className=" flex-1 leading-5 text-white font-bold    text-lg">
            <span>
              <img
                alt="img"
                className="inline mr-1 -mt-3"
                src={"/images/vector2.svg"}
              />
            </span>
            Lorem ipsum
          </h1>
          <img
            alt="down-arrow"
            src={"/images/down-arrow.svg"}
            className="cursor-pointer hover:opacity-80"
          />
        </div>
        <p className="text-white my-5 text-sm md:pr-10 font-normal ">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur.{" "}
        </p>
        <div className="mt-16 lg:flex  ">
          {links.slice(0, 2).map((item) => (
            <div
              key={item.id}
              className=" flex items-center w-full lg:w-[50%] mb-3   "
            >
              <img src={item.icon} />
              <a
                className="text-red-500 ml-4 font-normal text-sm hover:opacity-80"
                href="#"
              >
                {item.link}
              </a>
            </div>
          ))}
        </div>
        <div className=" lg:flex  ">
          {links.slice(2, 4).map((item) => (
            <div
              key={item.id}
              className=" flex items-center w-full lg:w-[50%] mb-3   "
            >
              <img src={item.icon} />
              {item.id === 3 ? (
                <a
                  className="text-red-500  font-normal text-sm  ml-4 hover:opacity-80"
                  href="#"
                >
                  {item.link}
                </a>
              ) : (
                <a
                  className="text-white ml-4  font-normal text-sm hover:opacity-80"
                  href="#"
                >
                  {item.link}
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Details;
