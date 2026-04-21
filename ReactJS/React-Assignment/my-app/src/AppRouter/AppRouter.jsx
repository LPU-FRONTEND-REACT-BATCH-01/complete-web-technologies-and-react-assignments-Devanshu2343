import React from 'react'
import Women from '../Pages/Women';
import Men from '../Pages/Men';
import HomeLayout from '../Layouts/HomeLayout';
import Products from '../Pages/Products';
import Reusable from '../Components/reusable';

const AppRouter = () => {

    const router = createBrowserRouter([
    {
      path: "/",
      element: <HomeLayout />,
      children: [
        {
          path: "landing",
          element: <Landing />,
        },
       
        {
          path: "men",
          element: <Men />,
        },
        {
          path: "Women",
          element: <Women />,
        },
        {
          path: "cart",
          element: <Cart/>,
        } ,
         {
            path: "products" ,
            element: <Products />

        },
        {
            path: "chotaBheem" ,
            element: < Reusable />
        }
      ],
    },
  ]);

  return (
    <div>
        
      <RouterProvider router={router} />
    </div>

  )
}

export default AppRouter




