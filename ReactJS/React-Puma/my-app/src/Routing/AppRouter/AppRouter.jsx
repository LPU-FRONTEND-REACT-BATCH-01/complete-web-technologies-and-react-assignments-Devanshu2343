import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router";
import HomeLayout from "../Layouts/HomeLayout";
import Landing from "../Pages/Landing";
import Products from "../Pages/Products";
import About from "../Pages/About";
import Cart from "../Pages/Cart";
import ProductsLayout from "../Layouts/ProductsLayout";
import Beauty from "../Pages/Beauty";
import Fragrances from "../Pages/Fragrances";
import Category from "../Pages/Category";
import ViewMore from "../Components/ViewMore";

const AppRouter = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <HomeLayout />,
      children: [
        {
          index: true,
          element: <Landing />,
        },
        {
          path: "products",
          element: <ProductsLayout />,
          children: [
            {
              index: true,
              element: <Products />,
            },
            {
              path: ":category",
              element: <Category />,
            },
            {
              path: ":id",
              element: <ViewMore />,
            },
            {
              path: "/products/category/:category",
              element: <Category />,
            },
            {
              path: "/products/category/:category/:id",
              element: <ViewMore />,
            },
          ],
        },
        {
          path: "about",
          element: <About />,
        },
        {
          path: "cart",
          element: <Cart />,
        },
      ],
    },
  ]);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default AppRouter;
