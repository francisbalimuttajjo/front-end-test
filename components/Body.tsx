import Header from "./HeaderSection";
import DetailsSection1 from "./DetailsSection1";
import DetailsSection2 from "./DetailsSection2";

const Body: React.FC = () => {
  return (
    <div className="flex justify-end sm:pl-2  ">
      <div className=" pb-10 w-full min-h-screen md:w-10/12 bg-gradient-to-tr from-gray-800 to-indigo-800">
        <Header />
        <div className="md:-ml-[10%]  md:flex px-2 ">
          <DetailsSection1 />
          <DetailsSection2 />
        </div>
      </div>
    </div>
  );
};
export default Body;
