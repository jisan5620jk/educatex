/* eslint-disable react/prop-types */
import { useState } from "react";
import itemImage from "/images/shop-thumb1.png";
import itemImage2 from "/images/shop-thumb2.png";
import itemImage3 from "/images/shop-thumb3.png";
import itemImage4 from "/images/shop-thumb4.png";
import itemImage5 from "/images/shop-thumb5.png";
import itemImage6 from "/images/shop-thumb6.png";
import itemImage7 from "/images/shop-thumb7.png";
import itemImage8 from "/images/shop-thumb8.png";
import itemImage9 from "/images/shop-thumb9.png";
import { LuLayoutGrid } from "react-icons/lu";
import { FaList } from "react-icons/fa";
import { IoSearch } from "react-icons/io5";
import { Link } from "react-router-dom";

const booksData = [
  {
    title: "George Orwell",
    rating: 4.5,
    price: 60,
    oldPrice: null,
    itemImage: itemImage,
  },
  {
    title: "Moby-Dick",
    rating: 4.5,
    price: 70,
    oldPrice: 100,
    itemImage: itemImage2,
  },
  {
    title: "Brave New World",
    rating: 4.5,
    price: 40,
    oldPrice: null,
    itemImage: itemImage3,
  },
  {
    title: "The Hobbit",
    rating: 4.5,
    price: 70,
    oldPrice: 100,
    itemImage: itemImage4,
  },
  {
    title: "A Game of Thrones",
    rating: 4,
    price: 80,
    oldPrice: null,
    itemImage: itemImage5,
  },
  {
    title: "Neuromancer",
    rating: 4.5,
    price: 60,
    oldPrice: null,
    itemImage: itemImage6,
  },
  {
    title: "Big Little Lies",
    rating: 5,
    price: 60,
    oldPrice: null,
    itemImage: itemImage7,
  },
  {
    title: "The Reversal",
    rating: 4.5,
    price: 70,
    oldPrice: 100,
    itemImage: itemImage8,
  },
  {
    title: "Sharp Objects",
    rating: 4.5,
    price: 60,
    oldPrice: null,
    itemImage: itemImage9,
  },
];

// Star rating component (rounded stars)
const Stars = ({ rating }) => {
  const fullStars = Math.floor(rating);
  const halfStar = rating % 1 >= 0.5;
  const stars = [];

  for (let i = 1; i <= 5; i++) {
    if (i <= fullStars) {
      stars.push(
        <svg
          key={i}
          className="w-4 h-4 text-yellow-400 inline-block"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.967a1 1 0 00.95.69h4.174c.969 0 1.371 1.24.588 1.81l-3.38 2.455a1 1 0 00-.364 1.118l1.287 3.967c.3.921-.755 1.688-1.54 1.118l-3.38-2.455a1 1 0 00-1.174 0l-3.38 2.455c-.784.57-1.838-.197-1.539-1.118l1.286-3.967a1 1 0 00-.364-1.118L2.04 9.394c-.783-.57-.38-1.81.588-1.81h4.174a1 1 0 00.95-.69l1.286-3.967z" />
        </svg>
      );
    } else if (halfStar && i === fullStars + 1) {
      stars.push(
        <svg
          key={i}
          className="w-4 h-4 text-yellow-400 inline-block"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <defs>
            <linearGradient id="half">
              <stop offset="50%" stopColor="currentColor" />
              <stop offset="50%" stopColor="transparent" stopOpacity="1" />
            </linearGradient>
          </defs>
          <path
            fill="url(#half)"
            d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.967a1 1 0 00.95.69h4.174c.969 0 1.371 1.24.588 1.81l-3.38 2.455a1 1 0 00-.364 1.118l1.287 3.967c.3.921-.755 1.688-1.54 1.118l-3.38-2.455a1 1 0 00-1.174 0l-3.38 2.455c-.784.57-1.838-.197-1.539-1.118l1.286-3.967a1 1 0 00-.364-1.118L2.04 9.394c-.783-.57-.38-1.81.588-1.81h4.174a1 1 0 00.95-.69l1.286-3.967z"
          />
        </svg>
      );
    } else {
      stars.push(
        <svg
          key={i}
          className="w-4 h-4 text-gray-300 inline-block"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.967a1 1 0 00.95.69h4.174c.969 0 1.371 1.24.588 1.81l-3.38 2.455a1 1 0 00-.364 1.118l1.287 3.967c.3.921-.755 1.688-1.54 1.118l-3.38-2.455a1 1 0 00-1.174 0l-3.38 2.455c-.784.57-1.838-.197-1.539-1.118l1.286-3.967a1 1 0 00-.364-1.118L2.04 9.394c-.783-.57-.38-1.81.588-1.81h4.174a1 1 0 00.95-.69l1.286-3.967z" />
        </svg>
      );
    }
  }
  return <div>{stars}</div>;
};

const BookItem = ({ title, rating, price, oldPrice, itemImage, viewType }) => {
  return (
    <div
      className={`p-4 border rounded-lg shadow-sm bg-white flex space-x-4 ${
        viewType === "list" ? "flex-row" : "flex-col"
      } items-center`}
    >
      <div className="">
        <img
          src={itemImage}
          alt={title}
          draggable={false}
          className={`rounded-md object-cover ${
            viewType === "list" ? "w-72" : "w-full"
          }`}
        />
      </div>
      <div
        className={`mt-3 ${
          viewType === "list" ? "flex-1" : "text-center"
        } flex flex-col justify-center`}
      >
        <Link to={'/shop_details'} className="font-Outfit font-semibold text-2xl text-HeadingColor-0">{title}</Link>
        <div className="flex items-center mt-1">
          <Stars rating={rating} />
          <span className="ml-2 text-sm text-TextColor-0">
            {rating.toFixed(1)}
          </span>
        </div>
        <div className="mt-2 text-lg font-bold text-PrimaryColor-0">
          ${price}
          {oldPrice && (
            <span className="ml-2 text-sm line-through text-gray-400">
              ${oldPrice}
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

const ShopItem = () => {
  const [isListView, setIsListView] = useState(false);

  return (
    <div className="">
      <div className="flex items-center justify-between flex-wrap gap-7 mb-10">
        <div className="flex items-center gap-5">
          <div className="flex items-center gap-2">
            <button
              onClick={() => setIsListView(false)}
              className={`size-[38px] flex items-center justify-center text-xl rounded border ${
                !isListView ? "bg-PrimaryColor-0 text-white" : "bg-transparent"
              }`}
            >
              <LuLayoutGrid />
            </button>
            <button
              onClick={() => setIsListView(true)}
              className={`size-[38px] flex items-center justify-center text-lg rounded border ${
                isListView ? "bg-PrimaryColor-0 text-white" : "bg-transparent"
              }`}
            >
              <FaList />
            </button>
          </div>
          <span className="font-OpenSans text-HeadingColor-0 text-[15px] font-medium">
            Showing {booksData.length} Result(s)
          </span>
        </div>

        <form
          action="#"
          className="flex items-center gap-5 bg-BodyBg-0 rounded-md max-w-[320px] w-full relative z-10"
        >
          <input
            type="text"
            name="search"
            id="search"
            placeholder="Search..."
            className="w-full h-[56px] border border-SecondaryColor-0 border-opacity-10 rounded-md px-5 py-2"
            required
          />
          <button
            type="submit"
            className="absolute top-1/2 -translate-y-1/2 right-7 text-TextColor-0 text-lg"
          >
            <IoSearch />
          </button>
        </form>
      </div>

      {isListView ? (
        <div className="space-y-4">
          {booksData.map((book, idx) => (
            <BookItem key={idx} {...book} viewType="list" />
          ))}
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {booksData.map((book, idx) => (
            <BookItem key={idx} {...book} viewType="grid" />
          ))}
        </div>
      )}
    </div>
  );
};

export default ShopItem;
