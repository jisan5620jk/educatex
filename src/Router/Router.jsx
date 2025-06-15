import { createBrowserRouter } from "react-router-dom";
import Main from "../Main/Main";
import ErrorPage from "../Shared/ErrorPage/ErrorPage";
import Home1 from "../Pages/Home1/Home1";
import Home2 from "../Pages/Home2/Home2";
import Main2 from "../Main/Main2";
import Home3 from "../Pages/Home3/Home3";
import Main3 from "../Main/Main3";
import Main4 from "../Main/Main4";
import Home4 from "../Pages/Home4/Home4";
import Home5 from "../Pages/Home5/Home5";
import Main5 from "../Main/Main5";
import Home6 from "../Pages/Home6/Home6";
import Main6 from "../Main/Main6";
import PricingInner from "../Pages/InnerPage/PricingInner/PricingInner";
import AboutInner from "../Pages/InnerPage/AboutInner/AboutInner";
import CourseInner from "../Pages/InnerPage/CourseInner/CourseInner";
import CourseDetails from "../Pages/InnerPage/CourseDetails/CourseDetails";
import ShopDetails from "../Pages/InnerPage/ShopDetails/ShopDetails";
import BlogDetails from "../Pages/InnerPage/BlogDetails/BlogDetails";
import ShopInner from "../Pages/InnerPage/ShopInner/ShopInner";
import InstructorInner from "../Pages/InnerPage/InstructorInner/InstructorInner";
import EventsInner from "../Pages/InnerPage/EventsInner/EventsInner";
import ContactInner from "../Pages/InnerPage/ContactInner/ContactInner";
import EventsDetailsInner from "../Pages/InnerPage/EventsDetails/EventsDetailsInner";
import BlogRightSideBar from "../Pages/InnerPage/BlogList/BlogRightSideBar";
import BlogLeftSideBar from "../Pages/InnerPage/BlogList/BlogLeftSideBar";
import BlogNoSideBar from "../Pages/InnerPage/BlogList/BlogNoSideBar";
import InstructorDetails from "../Pages/InnerPage/InstructorDetails/InstructorDetails";

const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <ErrorPage />,
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home1 />,
      },
      {
        path: "/pricing",
        element: <PricingInner />,
      },
      {
        path: "/events",
        element: <EventsInner />,
      },
      {
        path: "/event_details",
        element: <EventsDetailsInner />,
      },
      {
        path: "/instructor",
        element: <InstructorInner />,
      },
      {
        path: "/instructor_details",
        element: <InstructorDetails />,
      },
      {
        path: "/about",
        element: <AboutInner />,
      },
      {
        path: "/course",
        element: <CourseInner />,
      },
      {
        path: "/course_details",
        element: <CourseDetails />,
      },
      {
        path: "/blog_left_sidebar",
        element: <BlogLeftSideBar />,
      },
      {
        path: "/blog_right_sidebar",
        element: <BlogRightSideBar />,
      },
      {
        path: "/blog_no_sidebar",
        element: <BlogNoSideBar />,
      },
      {
        path: "/blog_details",
        element: <BlogDetails />,
      },
      {
        path: "/shop",
        element: <ShopInner />,
      },
      {
        path: "/shop_details",
        element: <ShopDetails />,
      },
      {
        path: "/contact",
        element: <ContactInner />,
      },
    ],
  },
  {
    errorElement: <ErrorPage />,
    element: <Main2 />,
    children: [
      {
        path: "/home2",
        element: <Home2 />,
      },
    ],
  },
  {
    errorElement: <ErrorPage />,
    element: <Main3 />,
    children: [
      {
        path: "/home3",
        element: <Home3 />,
      },
    ],
  },
  {
    errorElement: <ErrorPage />,
    element: <Main4 />,
    children: [
      {
        path: "/home4",
        element: <Home4 />,
      },
    ],
  },
  {
    errorElement: <ErrorPage />,
    element: <Main5 />,
    children: [
      {
        path: "/home5",
        element: <Home5 />,
      },
    ],
  },
  {
    errorElement: <ErrorPage />,
    element: <Main6 />,
    children: [
      {
        path: "/home6",
        element: <Home6 />,
      },
    ],
  },
]);

export default router;
