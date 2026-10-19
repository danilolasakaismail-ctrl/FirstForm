import { createBrowserRouter } from "react-router-dom";
import HomePageLayout from "../Layout.tsx/HomePageLayout";
import HomeComp from "../page/HomePage/HomeComp";
// import Hero from "../page/ContactPage/Hero";
import ContactPageLayout from "../Layout.tsx/ContactPageLayout";
import ContactComp from "../page/ContactPage/ContactComp";
import AboutPageLayout from "../Layout.tsx/AboutPageLayout";
import AboutComp from "../page/AboutPage/AboutComp";
import ShopPageLayout from "../Layout.tsx/ShopPageLayout";
import ShopComp from "../page/Shop/ShopComp";

export const element = createBrowserRouter([
  {
    path: "/",
    element: <HomePageLayout />,
    children: [
      {
        index: true,
        element: <HomeComp />,
      },
    ],
  },
  {
    path: "/contact",
    element: <ContactPageLayout />,
    children: [
      {
        index: true,
        element: <ContactComp />,
      },
    ],
  },
  {
    path: "/about",
    element: <AboutPageLayout />,
    children: [
      {
        index: true,
        element: <AboutComp />,
      },
    ],
  },
   {
    path: "/shop",
    element: <ShopPageLayout />,
    children: [
      {
        index: true,
        element: <ShopComp />,
      },
    ],
  },
]);
