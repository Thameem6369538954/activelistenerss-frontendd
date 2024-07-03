import React,{ useState,useEffect,useRef } from "react";
import "../Css/Categories.css";
import emoji from "../Images/emoji.png";
import chat from "../Images/chat.png";
import weekly from "../Images/weekly.png";
import community from "../Images/community.png";
import Static from "../Images/Static.png";
import Elements from "../Images/Elements.png";
import { NavLink } from "react-router-dom";
import WHYAL from "../Videos/WHYAL.mp4";
import { MdPlayCircleFilled } from "react-icons/md";
import axios from "../Utils/Baseurl.js";
import { toast } from "react-toastify";
const Categories = () => {
  // const [isPlaying, setIsPlaying] = useState(false);
 const videoRef = useRef(null);
 const [lastScrollTop, setLastScrollTop] = useState(0);
 const [isPlaying, setIsPlaying] = useState(false);

 useEffect(() => {
   const videoElement = videoRef.current;

   const handleScroll = () => {
     const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
     const isScrollingDown = scrollTop > lastScrollTop;
     setLastScrollTop(scrollTop);

     // Pause the video if scrolling down
     if (videoElement && isPlaying && isScrollingDown) {
       videoElement.pause();
       setIsPlaying(false);
     }
   };

   const handleIntersection = (entries) => {
     entries.forEach((entry) => {
       if (!videoElement) return;

       if (entry.isIntersecting && !isPlaying) {
         // Play the video only if it's not already playing and user interacted
         if (videoElement.paused) {
           videoElement
             .play()
             .then(() => setIsPlaying(true))
             .catch((error) =>
               console.error("Failed to play the video:", error)
             );
         }
       } else if (!entry.isIntersecting && isPlaying) {
         videoElement.pause();
         setIsPlaying(false);
       }
     });
   };

   const observer = new IntersectionObserver(handleIntersection, {
     threshold: 0.5,
   });

   if (videoElement) {
     observer.observe(videoElement);
   }

   window.addEventListener("scroll", handleScroll);

   return () => {
     if (videoElement) {
       observer.unobserve(videoElement);
     }
     window.removeEventListener("scroll", handleScroll);
   };
 }, [lastScrollTop, isPlaying]);

 // Handle video play on user click
 const handlePlayClick = () => {
   const videoElement = videoRef.current;

   if (!videoElement) return;

   // Start playing only if it's paused and user interacted
   if (videoElement.paused) {
     videoElement
       .play()
       .then(() => setIsPlaying(true))
       .catch((error) => console.error("Failed to play the video:", error));
   }
 };

  const [vid2, setVid2] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("admin/get_allVideos");
        console.log(response.data.reslt, "oooooqqqqqqqqqqq"); // Log the second object in the response
        if (response) {
          // const videoData = response.data.reslt[1]; // Retrieve the video data
          // Now you can use videoData to set the state or display the video
          setVid2(response.data.reslt[1].source);
          // setVid2;(response.data.reslt[1].source)
        } else {
          toast.error("something went wrong!!");
        }
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);
  // const togglePlay = () => {
  //   setIsPlaying(!isPlaying);
  // };

  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };
   const [expandedA, setExpandedA] = useState(false);

   const toggleExpanded = () => {
     setExpandedA(!expandedA);
   };
   const [expandedB, setExpandedB] = useState(false);

   const toggleExpandedB = () => {
     setExpandedB(!expandedB);
   };
   const [expandedC, setExpandedC] = useState(false);

   const toggleExpandedC = () => {
     setExpandedC(!expandedC);
   };
   const [expandedD, setExpandedD] = useState(false);

   const toggleExpandedD = () => {
     setExpandedD(!expandedD);
   };

  return (
    <div className="categories-main-holecontainer">
      <div className="puzzle-boy">
        <div className="imsha">
          <div className="bg" data-aos="zoom-in" data-aos-duration="1000">
            <span>Services we Offer</span>
            <p>Our Core</p>
            <h1>Discoveries</h1>
          </div>
        </div>
        <div className="element">
          <img
            src={Elements}
            data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="3000"
            alt=""
          />
          <h4
            data-aos="fade-up"
            data-aos-anchor-placement="top-bottom"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000"
          >
            Transformative support for those seeking clarity and understanding
            through active listening.
          </h4>
        </div>
        {/* <img
          src={Maskgroup}
          data-aos="fade-up"
          data-aos-anchor-placement="top-bottom"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="2000"
          alt=""
        /> */}
      </div>
      <div className="categories-main">
        <div className="cate-yellow-box">
          <div className="Hoodi">
            <div style={{ position: "relative", width: "100%" }}>
              {vid2 && (
                <video
                  controls // Ensure controls are enabled for user interaction
                  className="Header-video"
                  onClick={handlePlayClick}
                  // onPlay={() => setIsPlaying(true)}
                  // onPause={() => setIsPlaying(false)}
                >
                  <source src={vid2} type="video/mp4" />
                  {/* Make sure src and type are correctly set */}
                  Your browser does not support the video tag.
                </video>
              )}
              <div>
                {!isPlaying && (
                  <div
                    style={{
                      position: "absolute",
                      top: "50%",
                      left: "50%",
                      transform: "translate(-50%, -50%)",
                      cursor: "pointer",
                      // width:"20px"
                    }}
                    className="play-center-btn"
                    onClick={handlePlayClick}
                  >
                    <div>
                      <MdPlayCircleFilled onClick={handlePlayClick} />
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
        <div className="cate-left-box">
          <div
            className="box1"
            data-aos="fade-up"
            data-aos-anchor-placement="top-bottom"
            data-aos-duration="3000"
          >
            <img src={community} alt="" />
            <h2>Mobile Addiction</h2>
            <div className="read-more-paragraph">
              <p>
                Cell phone addiction is becoming a big problem for many people.
                It when someone can't stop using their phone, even when it's not
                necessary, and it starts to affect their daily life.
                {expandedA || (
                  <span
                    className="read-more-link"
                    style={{ fontSize: "16px", fontWeight: 900 }}
                    onClick={toggleExpanded}
                  >
                    Read more
                  </span>
                )}
              </p>
              {expandedA && (
                <p>
                  People check their phones constantly for messages, updates on
                  social media, or just to scroll through the internet. This
                  habit can make it hard to focus on work or school, and it can
                  even make it tough to enjoy time with family and friends. It's
                  important to find a balance make sure that we control our
                  phone use, rather than letting our phones control us. Setting
                  specific times to check your phone or turning off
                  notifications for a while can really help. This way, we can
                  enjoy the benefits of technology without letting it take over
                  our lives.
                  <span
                    className="read-less-link"
                    style={{ fontSize: "16px", fontWeight: 900 }}
                    onClick={toggleExpanded}
                  >
                    {" "}
                    Read less
                  </span>
                </p>
              )}
            </div>
            <NavLink onClick={scrollToTop} to="/MobileAddiction">
              <button style={{ width: "150px", marginLeft: "0%" }}>
                Discover
              </button>
            </NavLink>
          </div>
          <div
            className="box2"
            data-aos="fade-up"
            data-aos-anchor-placement="center-bottom"
            data-aos-duration="2900"
          >
            <img src={chat} alt="" />
            <h2>Social Media Addiction</h2>
            <div>
              <p>
                Social media addiction is a real problem that affects many
                people today. It happens when someone spends so much time on
                platforms like Facebook, Instagram, or Twitter that it starts
                harm other parts of their life.
                {expandedB || (
                  <span
                    className="read-more-link"
                    style={{ fontSize: "16px", fontWeight: 900 }}
                    onClick={toggleExpandedB}
                  >
                    Read more
                  </span>
                )}
              </p>
            </div>
            {expandedB && (
              <p>
                For example, they might start doing poorly in school or at work
                because they're always checking their phone for updates. They
                might also stop spending time with family and friends in person
                because they're too caught up in their online world. This
                addiction can make people feel anxious or sad if they're not
                able to check their social media, and it can be tough to break
                free from. It's important to find a balance and make sure that
                we're using social media in a healthy way, so it doesn't take
                over our lives.
                <span
                  className="read-less-link"
                  style={{ fontSize: "16px", fontWeight: 900 }}
                  onClick={toggleExpandedB}
                >
                  {" "}
                  Read less
                </span>
              </p>
            )}

            <NavLink onClick={scrollToTop} to="/SocialMediaAddiction">
              <button style={{ width: "150px", marginLeft: "0%" }}>
                Discover
              </button>
            </NavLink>
          </div>
          <div
            className="box3"
            data-aos="fade-up"
            data-aos-anchor-placement="top-bottom"
            data-aos-duration="2500"
          >
            <img src={weekly} alt="" />
            <h2>Gaming Addiction</h2>
            <p>
              Gaming addiction is when someone spends so much time playing video
              games that it starts to cause problems in their life.
              {expandedC || (
                <span
                  className="read-more-link"
                  style={{ fontSize: "16px", fontWeight: 900 }}
                  onClick={toggleExpandedC}
                >
                  Read more
                </span>
              )}
            </p>
            {expandedC && (
              <p>
                It's like when you't stop eating candy even though you know it's
                not good for you People with gaming addiction might skip meals,
                lose sleep, or not do their homework because they can't stop
                playing games. They might also stop hanging out with friends and
                family. This can make them feel lonely and sad. It's important
                to balance game time with other activities like playing outside,
                reading, or spending time with loved ones. If gaming starts to
                take over your life, talking to someone like a parent or
                counselor can really help.
                <span
                  className="read-less-link"
                  style={{ fontSize: "16px", fontWeight: 900 }}
                  onClick={toggleExpandedC}
                >
                  {" "}
                  Read less
                </span>
              </p>
            )}

            <NavLink onClick={scrollToTop} to="/GamingAddiction">
              <button style={{ width: "150px", marginLeft: "0%" }}>
                Discover
              </button>
            </NavLink>
          </div>
          <div
            className="box4"
            data-aos-duration="3000"
            data-aos="fade-up"
            data-aos-anchor-placement="center-bottom"
          >
            <img src={emoji} alt="" />
            <h2>Entertainment & Performance Addiction</h2>
            <p>
              Performance addiction among teens is a growing concern as more
              young people feel the pressure to excel in every aspect of their
              lives, from and sports to social media presence.
              {expandedD || (
                <span
                  className="read-more-link"
                  style={{ fontSize: "16px", fontWeight: 900 }}
                  onClick={toggleExpandedD}
                >
                  Read more
                </span>
              )}
              {expandedD && (
                <p>
                  This drive to be the best lead to stress and anxiety, as teens
                  push themselves to meet high, often unrealistic expectations.
                  The constant comparison with peers, fueled by social media
                  platforms, only intensifies this pressure, making teens feel
                  like they're never good enough. It important for parents,
                  teachers, and mentors to recognize the signs of performance
                  addiction and provide support. Encouraging a balanced life
                  that values effort over perfection can help teens develop a
                  healthier approach to their achievements and self-worth.
                  Entertainment addiction among teens is becoming increasingly
                  common, as more young people spend hours glued to screens,
                  whether it's watching TV shows, playing video games, scrolling
                  through social media. This kind of addiction can lead to
                  problems like poor sleep, less time for homework, and missing
                  out on real-life social interactions. It's important for teens
                  to balance their screen time with other activities that are
                  good for their development, like playing sports, reading
                  books, or spending time with family and friends. Encouraging
                  teens to have a variety of interests can help prevent the
                  negative effects of spending too much time on entertainment.
                  {expandedD && (
                    <span
                      className="read-less-link"
                      style={{ fontSize: "16px", fontWeight: 900 }}
                      onClick={toggleExpandedD}
                    >
                      {" "}
                      Read less
                    </span>
                  )}
                </p>
              )}
            </p>
            <NavLink
              onClick={scrollToTop}
              to="/EntertainmentandperformanceAddiction"
            >
              <button style={{ width: "150px", marginLeft: "0%" }}>
                Discover
              </button>
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Categories;
