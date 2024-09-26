import React from "react";
import Style from "./Footer.module.css";
import logo from "../../../Assets/footerlogo.png";
import facebook from "../../../Assets/Facebook.png";
import IG from "../../../Assets/IG.png";
import iconLanguage from "../../../Assets/🦆 icon _language_.png"
import linkedIn from"../../../Assets/LinkedIn.png"
import { useMediaQuery } from "react-responsive";

export default function Footer() {
  const isScreenSmall = useMediaQuery({ maxWidth: 768 });
  const icon_size = { width: '2.6rem', height: '2.6rem' };
  const small_text ={ color: '#F2F2F2', fontSize:12, fontWeight:400}

  return (
    <footer className={`bg-black  ${Style.footer_container}`} >
      <div className="container  ">
        {/* Logo and products*/}
      <div className={`logo-products  d-flex flex-row justify-content-between ${isScreenSmall ? " d-flex flex-column":''}`}>



          <div className="d-flex align-items-center justify-content-center ">
            <a href="/">

              <img
                src={logo}
                className={`${Style.customSize} rounded-pill`}
                alt="footerLogo"
              />
            </a>
              <div className="border-start ps-3 py-2 text-white mx-2 border-opacity-75 border-white">
                <h6
                  className="font-sm fw-bold"
                  style={{ wordWrap: "break-word", overflowWrap: "break-word" }}
                >
                  Your Best
                  <br />
                  Platform
                </h6>
              </div>
            </div>
          <div className={`${Style.a , Style.ul}`}>
            <h5 className="text-white">Educational Materials</h5>
            <ul className={`${Style.li}`}>
              <li><a href="#">E-books</a></li>
              <li><a href="#">Guides</a></li>
              <li><a href="#">Articles</a></li>
              <li><a href="#">Blogs</a></li>
              <li><a href="#">Live Events</a></li>

            </ul>
          </div>
          <div>
            <h5 className="text-white">Courses</h5>
            <ul>
              <li><a href="#">Design</a></li>
              <li><a href="#">Marketing</a></li>
              <li><a href="#">Cybersecurity</a></li>
              <li><a href="#">Programming</a></li>
              <li><a href="#">Business</a></li>

            </ul>
         {/* Newsletter Subscription */}
          </div>
          {/* the news letter part */}
          <div className={`${Style.news_letter_container} `}>
            <h5 className="text-white">News Letter</h5>
            <p style={{color:"#7D7D7D"}}>Subscribe to our news letters and get 15% off your next course</p>

            <div className={`${Style.textbox_with_button}  text-sm    rounded-4`}>
              <input className={Style.input} type="text" />
             
              <button
                className={`${Style.news_btn} ${
                  isScreenSmall ? "" : "px-4"
                } btn bg-color  hover:bg-green-700 text-white ms-2 small-font `}
                style={{ height: '45px' }} 
              >
                Subscribe
              </button>
              <div className="flex items-center">
                <input type="checkbox" className="mr-2" />
                <span className="text-sm" style={small_text}>
                  I agree to the Terms of Use and Privacy Policy
                </span>
              </div>
             </div>
            
        
          


          </div>



        </div>
        {/* the footer second section */}
        <div  className="py-3 d-flex flex-row justify-content-between ">



          <div className={`${Style.language_part}`} style={{ }}>
            <img className={Style.iconLanguage} src={iconLanguage} alt="language icon" /><p style={{color:"#FFFFFF", fontSize:17, fontWeight:"bold",}}>English</p>

        
          </div>
          <div  className={`${Style.conditions_part}`} >
            <ul className={`${Style.conditions_container}`}>
              <li><a className={Style.link} href="#">Careers</a></li>
              <li><a className={Style.link} href="#">Privacy Policy</a></li>
              <li><a className={Style.link} href="#">Terms & Conditions</a></li>
            </ul>
          </div>
          <div className={`d-flex flex-row justify-content-between ${Style.icons_part}`} >
            <img style={ icon_size} src={facebook }alt="facebook" />
            <img style={ icon_size} src={IG} alt="IG" />
            <img style={ icon_size} src={linkedIn} alt="linkedIn" />

          
          </div>
        </div>

      </div>
    </footer>
  );
}
