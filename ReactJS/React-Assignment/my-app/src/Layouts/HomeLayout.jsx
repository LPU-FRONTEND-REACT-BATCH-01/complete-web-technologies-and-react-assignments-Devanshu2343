import React from 'react'
import Navbar from '../../../../React-Route/vite-project/src/Components/Navbar'
import {Outlet} from 'react-router-dom'

const HomeLayout = () => {
  return (
    <div>
         <Navbar />

      
        <div>HomeLayout</div>
           <Outlet /> 

        



    </div>
    

  )
}

export default HomeLayout