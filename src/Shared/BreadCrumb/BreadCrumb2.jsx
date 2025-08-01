/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom';
import shape from '/images/book-hand.png';
import shape2 from '/images/bread-dot.png';

const BreadCrumb2 = ({
  breadCrumbTitle,
  breadCrumbIcon,
  breadCrumbLink,
  url,
  breadCrumbIcon2,
  breadCrumbText,
}) => {
  return (
    <div className="bg-[url('/images/breadcrumb-bg2.png')] bg-no-repeat bg-cover bg-center flex items-center justify-start pt-[200px] 2xl:pt-[258px] pb-[154px] relative z-10">
      <div className="Container">
        <h1 className="font-Outfit text-center font-semibold text-4xl sm:text-[40px] md:text-[50px] text-HeadingColor-0 capitalize">
          {breadCrumbTitle}
        </h1>
        <ul className="flex flex-col sm:flex-row gap-2 sm:gap-3 items-center justify-center mt-6">
          <li>
            <Link to={"/"}>
              <button className="font-Outfit font-medium uppercase text-PrimaryColor-0 flex items-center gap-2 transition-all duration-500 hover:text-PrimaryColor2-0">
                Home
              </button>
            </Link>
          </li>
          <li>
            <div className="text-PrimaryColor-0 text-2xl rotate-45 hidden sm:block">
              {breadCrumbIcon}
            </div>
          </li>
          <li>
            <Link to={url}>
              <button className="font-Outfit font-medium uppercase text-PrimaryColor-0 transition-all duration-500 hover:text-PrimaryColor2-0">
                {breadCrumbLink}
              </button>
            </Link>
          </li>
          <li>
            <div className="text-PrimaryColor-0 text-2xl rotate-45 hidden sm:block">
              {breadCrumbIcon2}
            </div>
          </li>
          <li>
            <button className="font-Outfit font-medium uppercase text-HeadingColor-0">
              {breadCrumbText}
            </button>
          </li>
        </ul>
      </div>
      <div className="absolute left-[20%] top-[45%] animate-flip hidden 2xl:block">
        <img src={shape} draggable={false} alt="Shape" />
      </div>
      <div className="absolute right-[12%] top-[45%] animate-wiggle hidden 2xl:block">
        <img src={shape2} draggable={false} alt="Shape" />
      </div>
    </div>
  );
};

export default BreadCrumb2;
