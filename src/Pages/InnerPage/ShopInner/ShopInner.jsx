import BreadCrumb2 from "../../../Shared/BreadCrumb/BreadCrumb2";
import HelmetChanger from "../../../Shared/Helmet/Helmet";
import { BsArrowUpRight } from "react-icons/bs";
import PriceRange from "./PriceRange";
import ShopItem from "./ShopItem";

const ShopInner = () => {
  const categories = [
    { name: "Historical Fiction", count: 18 },
    { name: "Mystery and Thriller", count: 13 },
    { name: "Biography and Memoir", count: 10 },
    { name: "Business and Finance", count: 9 },
    { name: "Non-Fiction", count: 5 },
    { name: "Poetry", count: 2 },
  ];

  return (
    <>
      <HelmetChanger title={"Shop Inner Page Style Two"} />
      <BreadCrumb2
        breadCrumbTitle={"Shop"}
        breadCrumbIcon={<BsArrowUpRight />}
        breadCrumbIcon2={<BsArrowUpRight />}
        breadCrumbLink={"Shop"}
        url={"/shop_inner"}
        breadCrumbText={"Products"}
      />
      <section className="relative py-16 md:py-20 lg:py-[120px] z-10">
        <div className="Container">
          <div className="grid grid-cols-1 lg:grid-cols-8 gap-7 rounded-md mb-8 lg:mb-0">
            <div className="col-span-1 md:col-span-3 xl:col-span-2">
              <div className="bg-BodyBg-0 px-7 pt-7 pb-5 rounded-lg mb-8">
                <h3 className="font-Outfit text-2xl font-medium text-HeadingColor-0">
                  Categories
                </h3>
                <ul className="mt-4">
                  {categories.map((category) => (
                    <li
                      key={category.name}
                      className="font-Outfit text-HeadingColor-0 border-b border-SecondaryColor-0 border-opacity-10 last:border-none py-3 flex justify-between items-center"
                    >
                      <span>{category.name}</span>
                      <span>({category.count})</span>
                    </li>
                  ))}
                </ul>
              </div>
              <PriceRange />
            </div>
            <div className="col-span-1 md:col-span-5 xl:col-span-6">
              <ShopItem />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ShopInner;
