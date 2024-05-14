import { useState } from "react";
import NETFLIXLOGO from "../images/NETFLIXLOGO.png";
import NETFLIXSYMBOL from "../images/NETFLIXSYMBOL.png";
import { IoMdSearch } from "react-icons/io";
import { MdOutlineNotifications } from "react-icons/md";
import { MdArrowDropDown } from "react-icons/md";
export default function Navbar() {
    const [navBackground,setNavBackground] = useState(false)


    const changeNavBackground = () => {
        if(window.scrollY <= 20){
            setNavBackground(true)
        }
        else{
            setNavBackground(false)
        }
    }
    window.addEventListener("scroll",changeNavBackground)





    return (

    <div style={{zIndex:"1",position:"fixed",width:"100%",transition:"0.5s ease-in  "}} className={navBackground ? "flex items-center bg-transparent":"flex items-center bg-gray-950"} >

    <img src={NETFLIXLOGO} alt="netflix logo" className="ms-5 mt-1.5"  style={{ width: "130px", height: "60px" }} />
    
  <div className="nav_links flex items-center ms-3">
    <p className="ms-3 ">Home</p>
    <p className="ms-3">TV Shows</p>
    <p className="ms-3">Movies</p>
    <p className="ms-3">New and Popular</p>
    <p className="ms-3">My List</p>
    <p className="ms-3">Browse By Languages</p>
    </div>




    <div className="flex items-center justify-end ms-5" style={{marginLeft:"400px"}}>
    <IoMdSearch />
    <p className="ms-4">Kids</p>
    <MdOutlineNotifications className="ms-4" />
    <p className="ms-2">Profile</p>
    <MdArrowDropDown className="ms-2" />



    </div>













</div>

  );
}