const data = [
  { title: "Accessories & Ears", count: 9 },
  { title: "Arms", count: 15 },
  { title: "Background", count: 2 },
  { title: "Eye", count: 32 },
  { title: "Glasses", count: 3 },
  { title: "Hair & Hats", count: 2 },
  { title: "Head", count: 92 },
  { title: "Legs & Clothes", count: 2 },
  { title: "Mouth", count: 46 },
  { title: "Accessories & Ears", count: 9 },
  { title: "Arms", count: 15 },
  { title: "Background", count: 2 },
  { title: "Eye", count: 32 },
  { title: "Glasses", count: 3 },
];
const Item: React.FC<{ item: { title: string; count: number } }> = ({
  item,
}) => {
  return (
    <div className="bg-gray-900 w-11/12  sm:w-1/2 md:w-11/12  lg:w-1/3 rounded my-2 sm:m-2 px-3 py-4 ">
      <p className="text-gray-400  text-xs text-center ">{item.title}</p>
      <h3 className="text-white font-bold text-base text-center">
        Lorem ipsum
      </h3>
      <p className="text-gray-400  text-xs text-center ">{item.count}%</p>
    </div>
  );
};
const Details: React.FC = () => {
  return (
    <div className=" w-full md:w-1/2 mt-10 md:mt-0">
      <div className="bg-gray-900/70 w-full md:w-11/12 rounded-md px-3 py-5 ">
        <div className="flex mb-4  ">
          <div className="flex-1 flex">
            <h1 className="  leading-5 text-white font-bold   text-lg">
              <span>
                <img
                  alt="img"
                  className="inline mr-1 -mt-1 "
                  src={"/images/vector2.svg"}
                />
              </span>
              Lorem ipsum
            </h1>
            <div className="  flex justify-center items-center cursor-pointer ml-3 w-4 h-4 rounded-full border-solid border-2 border-gray-400 mt-1 hover:opacity-80">
              <p className="text-gray-400 text-xs">?</p>
            </div>
          </div>
          <img
            alt="down-arrow"
            src={"/images/down-arrow.svg"}
            className="cursor-pointer hover:opacity-80"
          />
        </div>
        <div className="h-80 overflow-auto py-5     ">
          <div className="sm:flex md:flex-col lg:flex-row">
            {data.slice(0, 3).map((item, key) => (
              <Item key={key} item={item} />
            ))}
          </div>
          <div className="sm:flex md:flex-col lg:flex-row">
            {data.slice(3, 6).map((item, key) => (
              <Item key={key} item={item} />
            ))}
          </div>
          <div className="sm:flex md:flex-col lg:flex-row">
            {data.slice(6, 9).map((item, key) => (
              <Item key={key} item={item} />
            ))}
          </div>
        </div>
      </div>
      <div className="bg-gray-900/80 w-full md:w-11/12 rounded-md px-3 py-7 mt-5 ">
        <div className="flex  ">
          <h1 className=" flex-1 leading-5 text-white font-bold    text-lg">
            <span>
              <img
                alt="img"
                className="inline mr-1 "
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
      </div>
    </div>
  );
};
export default Details;
