import React from 'react'
import './Home.css'
import Topbar from './Topbar'
import Sidebar from './Sidebar'

const Home = (props) => {
  return (
    <div>

     <Topbar xxx={props.checkLogout}/>
       <p className='wel'><b><h1> WELCOME TO THE MEDICARE!</h1></b>-Admin</p>
     <Sidebar/>
      </div>
  )
}

export default Home