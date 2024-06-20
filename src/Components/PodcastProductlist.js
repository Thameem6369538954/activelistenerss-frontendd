import React, { useState,useEffect } from "react";
import "../Css/navforpotcaste.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import emoji from "../Images/emoji.png";
import GetinTouch from "./GetinTouch";
import { NavLink } from "react-router-dom";
import axios from "../Utils/Baseurl.js";
import { ToastContainer, toast } from "react-toastify";
const PodcastProductlist = () => {
  // const [productlisqt, setqProductlist] = useState([
  //   {
  //     id: 1,
  //     episode: 1,
  //     name: "Pornography De-Addiction ",
  //     EpiImage: require("../Images/Adiction.png"),
  //     fravatara: require("../Images/avatar (1).png"),
  //     fravatarb: require("../Images/avatar.png"),
  //     discribtions:
  //       "Pornography de-addiction supports individuals in overcoming harmful consumption habits, fostering healthier views on sexuality, and addressing concerns regarding addiction. It aims to promote balanced attitudes towards relationships and intimacy.",
  //     cateA: "Social Media",
  //     cateB: "Mental health",
  //     link: "https://www.youtube.com/embed/2U8K8BUFFIY?si=f6x44MYj55oLc3mw",
  //     // cateC: "",
  //     // cateD: "",
  //   },
  //   {
  //     id: 2,
  //     episode: 2,
  //     fravatara: require("../Images/avatar (1).png"),
  //     fravatarb: require("../Images/avatar.png"),
  //     name: "Statistic PPT of Teenage Drug",
  //     EpiImage: require("../Images/Lonely .png"),
  //     discribtions:
  //       "Uncover the stark realities of teenage drug abuse through compelling statistics in this PowerPoint presentation. Gain insights into prevalence, common substances, and key factors driving this concerning trend",
  //     cateA: "Loneliness",
  //     cateB: "health",
  //     cateC: "Gaming",
  //     link: "https://www.youtube.com/embed/HZdiYj4uNqI?autoplay=1",
  //     // cateD: "",
  //   },
  //   {
  //     id: 3,
  //     episode: 3,
  //     fravatara: require("../Images/avatar (1).png"),
  //     fravatarb: require("../Images/avatar.png"),
  //     name: "Where It all begin ",
  //     EpiImage: require("../Images/GamingAddiction.png"),
  //     discribtions:
  //       "Dive into the origins of societal issues with a thought-provoking exploration of 'Where It All Begins'. Uncover the roots of challenges and their impact on our communities in this illuminating discussion.",
  //     cateA: "teenange",
  //     cateB: "health",
  //     cateC: "parents",
  //     link: "https://www.youtube.com/embed/h2a45DK2GA8?autoplay=1",
  //     // cateD: "",
  //   },
  //   {
  //     id: 4,
  //     episode: 4,
  //     fravatara: require("../Images/avatar (1).png"),
  //     fravatarb: require("../Images/avatar.png"),
  //     name: "Are you perplexed mind Person?",
  //     EpiImage: require("../Images/Untitled_Artwork 22.png"),
  //     discribtions:
  //       "Lorem ipsum dolor sit amet, consectetur adipiscing elit,  eiusmod tempor incididunt ut.",
  //     cateA: "Mental Guide",
  //     cateB: "health",
  //     // cateC: "",
  //     // cateD: "",
  //   },
  //   {
  //     id: 5,
  //     episode: 5,
  //     fravatara: require("../Images/avatar (1).png"),
  //     fravatarb: require("../Images/avatar.png"),
  //     name: "Why WFH is preffered?",
  //     EpiImage: require("../Images/Untitled_Artwork 16.png"),
  //     discribtions:
  //       "Lorem ipsum dolor sit amet, consectetur adipiscing elit,  eiusmod tempor incididunt ut.",
  //     cateA: "Healthy Life",
  //     cateB: "health",
  //     // cateC: "",
  //     // cateD: "",
  //   },
  //   {
  //     id: 6,
  //     episode: 6,
  //     fravatara: require("../Images/avatar (1).png"),
  //     fravatarb: require("../Images/avatar.png"),
  //     name: "Disconnect to Reconnect",
  //     EpiImage: require("../Images/Disconnect to reconnect .png"),
  //     discribtions:
  //       "Lorem ipsum dolor sit amet, consectetur adipiscing elit,  eiusmod tempor incididunt ut.",
  //     cateA: "Relocation",
  //     cateB: "health",
  //     // cateC: "",
  //     // cateD: "",
  //   },
  // ]);
  var settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 3,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  const [productlist, setProductlist] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get("admin/view_all_podcast");
      console.log(response, "kkk");
      if (response.data.reslt) {
        setProductlist(response.data.reslt);
      } else {
        toast.error("Something went wrong!!");
      }
    };
    fetchData();
  }, []);
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <div>
      <div className="searchubar-for-podcast">
        <div className="searchBox">
          <input
            className="searchInput"
            type="text"
            name=""
            placeholder="Search something"
          />
          <button className="searchButton" href="#">
            Search
          </button>
        </div>
      </div>
      <div className="product-list-nav">
        <div className="slider-container">
          <Slider {...settings}>
            <div>
              <h3>All</h3>
            </div>
            <div>
              <h3>Relocation </h3>
            </div>
            <div>
              <h3>Teenage</h3>
            </div>
            <div>
              <h3>Parenting</h3>
            </div>
            <div>
              <h3>Social media- de addiction</h3>
            </div>
            <div>
              <h3>Gaming- de addiction</h3>
            </div>
          </Slider>
        </div>
      </div>
      <div className="product-list">
        {productlist.map((list) => {
          return (
            <div className="sum">
              <div className="podcast-box">
                <div className="boxtop-tems" key={list._id}>
                  <div className="boxtop-tems-inside">
                    <video
                      controls
                      style={{ width: "60%" }}
                      className="posdcast-video"
                      onClick={togglePlay}
                      onPlay={() => setIsPlaying(true)}
                      onPause={() => setIsPlaying(false)}
                      // poster={list.thumbnail}
                    >
                      <source src={list.source} type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                    <div className="postcast-txt">
                      <p style={{ color: "green" }}>
                        Episode
                        <span>{list.episode}</span>
                      </p>
                      <h1>{list.title}</h1>
                      <hr></hr>
                      <p>{list.discription}</p>
                    </div>
                  </div>
                </div>
                <div className="potcast-category">
                 
                    <p>category</p>
                    <p>{list.category}</p>

                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div className="potcaste-bottom-btn">
        
          <button>Watch More</button>
       
      </div>
      {/* <div className="potcaste-form">
        <div className="get-form">
          <form>
            <h1>Get in Touch</h1>
            <p>With us</p>
            <div className="form-inputs">
              <input type="text" placeholder="Name" />
              <input type="text" placeholder="Email" />
              <input type="text" placeholder="Message" />
            </div>
            <div className="agree-get">
              <input type="checkbox" />
              <p>
                By Submitting your details means you agree with Privacy Policy
                and Term & Conditions
              </p>
              <button>Submit</button>
            </div>
          </form>
        </div>
      </div> */}
      <GetinTouch />
    </div>
  );
};

export default PodcastProductlist;
