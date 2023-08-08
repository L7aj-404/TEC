import React , {useEffect, useState} from "react";
import "../Footer/Footer.scss";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import InstagramIcon from "@mui/icons-material/Instagram";
import RoomIcon from "@mui/icons-material/Room";
import {Link} from "react-router-dom"
import { useTheme } from "../../hook/useTheme";
import axios from "axios";
import { Back_end_Url } from "../../api/URLs";


export default function Footer() {
const {theme}=useTheme()
const [services, setServices] = useState([]);
useEffect(() => {
      async function fetchService() {
          try {
              const response = await axios.get(Back_end_Url+'/api/service');
              setServices(response.data);
              console.log(response.data); // Check if data is received
          } catch (err) {
              console.error(err);
          }
      }
      fetchService();
  }, [])
  return (
    <div className={`footer-container `}  style={{
  backgroundColor:theme=="dark" ? "#010c10" : "white",
  color:theme=="dark" ? "white" : "black"

    }}>
      <div className="first-slide">
        <h2>Training Edge Consulting</h2>
        <p>
        Training Edge Consulting est une entreprise créée en 2021 offrant des services dans trois catégories principales :  bureau d’études, centre formation professionnelle et incubateur.
        </p>
        <main className="icons">
          <span>
            {" "}
            <FacebookIcon />
          </span>
          <span>
            <TwitterIcon />
          </span>
          <span>
            {" "}
            <LinkedInIcon />
          </span>
          <span>
            {" "}
            <InstagramIcon />
          </span>
        </main>
      </div>
      <main className="second-side">
      <div>
            <h2>Pages</h2>
            <div className="spans">
                <Link style={{textDecoration:'none', color:theme=="dark" ? "white" : "black"}} to='/'><span>Home it work</span></Link>
                <Link style={{textDecoration:'none', color:theme=="dark" ? "white" : "black"}} to='/services'><span>Services</span></Link>
                <Link style={{textDecoration:'none', color:theme=="dark" ? "white" : "black"}} to='/about'><span>About-us</span></Link>
            </div>
      </div>
      <div>
        <h2>Services</h2>
        <div className="spans">
            {
                services.map((item,index)=><span>{item.title}</span>)
            }
        </div>
      </div>
      <div>
        <h2>Contact</h2>
        <div className="spans">
          <span>
            {" "}
            <LocalPhoneIcon /> (406) 555-01-0120
          </span>
          <span>
            {" "}
            <EmailIcon /> trainingedgeconsulting@gmail.com
          </span>
          <span>
            {" "}
            <RoomIcon /> App 9 etage 4 Lot Jannah a Cote d'hotel Sunset Bd Med 6
            Beni Mellal
          </span>
        </div>
        </div>
      </main>
    </div>
  );
}
