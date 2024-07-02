import React, { useState } from "react";
import "../Css/OneOnOne.css";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import Yellowline from "../Images/Yellowline.png";
import Rounda from "../Images/Rounda.png";
import Roundb from "../Images/Roundb.png";
import Kadhoolu from "../Images/Kadhoolu.png";
import Greenbg from "../Images/Greenbg.png";
import emoji from "../Images/emoji.png";
import GetinTouch from "../Components/GetinTouch";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { InlineWidget } from "react-calendly";
import Breadcrumps from "../Components/Breadcrumps";

const OneOnOne = () => {
  const [wantComplimentaryCall, setWantComplimentaryCall] = useState(false);
  const appointmentSubmit = (e) => {
    e.preventDefault();
    setWantComplimentaryCall(true);
  };

  const handleClose = () => {
    setWantComplimentaryCall(false);
    // setCloseClick(true);
  };
  return (
    <div>
      <Navbar />
      <Breadcrumps />
      <div className="oneonone-main">
        <div className="therapy-heading">
          <p>Therapy for you!</p>
          <h1>One-on- one Session</h1>
          <h2>Preppers</h2>
          <img src={Yellowline} className="Yellowline" alt="" />
          {/* {wantComplimentaryCall ? (
            <>
              <span className="close-calendly" onClick={handleClose}>
                <AiOutlineCloseCircle className="senesbottom-icon" />
              </span>

              <InlineWidget
                url="https://calendly.com/teammentoons/active-listeners"
                className="calendly-embed"
              />
            </>
          ) : (
            <></>
          )}

          {wantComplimentaryCall ? (
            <></>
          ) : (
            <button className="get-support" onClick={appointmentSubmit}>
              Schedule Now
            </button>
          )} */}
        </div>
        <div className="green-bourd-grief">
          <div className="card-grif">
            {/* <div className="circle">
              <img src={Roundb} alt="" />
            </div>
            <div className="circle-b">
              <img src={Rounda} alt="" />
            </div> */}

            <div className="container-speek-a">
              <img src={Greenbg} />

              <div className="centered">
                <div className="para">
                  <p>
                    In today's world, where social media often blurs the line
                    between online interactions and real-life connections,
                    one-on-one psychology sessions can be incredibly beneficial.
                    These sessions provide a safe space to discuss and
                    understand how our online habits influence our real-world
                    relationships and personal well-being. By talking to a
                    psychologist, individuals can learn strategies to manage
                    their time on social media effectively, ensuring it doesn't
                    overshadow face-to-face interactions with friends and
                    family. This balance is crucial for maintaining healthy
                    relationships and overall digital health. Moreover, these
                    sessions can help people set realistic expectations for both
                    their online and offline lives, fostering a healthier, more
                    fulfilling lifestyle.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="therapy-heading">
        <p>Therapies in senses Resurrecction</p>
        <h1>We offer</h1>
        <h2>Multiple therapies</h2>
        <img src={Yellowline} className="Yellowline" alt="" />
        {/* <button>Schedule Now</button> */}
      </div>
      <div className="weekly-meetup-box-container">
        <div className="weeekly-meetup-box">
          <img src={emoji} alt="" />
          <h2>Body essential salts & oils</h2>
          <p>
            Experience our unique approach to therapy through the incorporation
            of essential oils and salts into your diet. Discover the
            transformative power of these enriching ingredients, carefully
            selected to nourish your body and elevate your well-being from
            within
          </p>
        </div>
        <div className="weeekly-meetup-box">
          <img src={emoji} alt="" />
          <h2>Music</h2>
          <p>
            Music therapy is a wonderful tool that helps kids, teens, and
            parents feel better when they're feeling down and helps them focus
            better on their tasks. It involves listening to music or playing
            musical instruments under the guidance of a trained therapist. For
            kids who often feel cranky or upset, music therapy can be like a
            soothing friend, helping them calm down and find their happy mood
            again. Teens, who sometimes feel overwhelmed by schoolwork or other
            pressures, can use music therapy to clear their minds and regain
            their concentration. Parents, too, find relief in music therapy, as
            it helps them unwind from the daily stresses of work and home life.
            By including music therapy in their routine, families can enjoy a
            more harmonious and focused environment, making their time together
            more enjoyable and productive.
          </p>
        </div>
        <div className="weeekly-meetup-box">
          <img src={emoji} alt="" />
          <h2>recommended Diets</h2>
          <p>
            Discover personalised dietary plans tailored to your unique needs
            and goals. Our expert nutritionists will guide you towards a
            healthier lifestyle through balanced and nourishing meal
            recommendations. Say goodbye to guesswork and hello to optimal
            health with our customised diet plans.
          </p>
        </div>
        <div className="weeekly-meetup-box">
          <img src={emoji} alt="" />
          <h2>mandala art books</h2>
          <p>
            In today's fast-paced world, where screens often dominate our
            attention, Mandala Art Workshops offer a refreshing escape that
            benefits everyone in the family—kids, teens, and parents alike.
            These workshops focus on creating intricate and colorful mandala
            designs, which are not only beautiful but also incredibly calming.
            Engaging in mandala art helps sharpen focus and soothes the mind,
            making it easier to manage stress and push away negative moods. By
            participating in these workshops, families have a chance to spend
            quality time together, away from the constant buzz of gadgets. This
            not only strengthens family bonds but also encourages a healthier,
            more mindful approach to everyday life. So, if you're looking for a
            fun and therapeutic way to disconnect from technology and reconnect
            with your loved ones, Mandala Art Workshops might just be what you
            need.
          </p>
        </div>
        {/* <div className="weeekly-meetup-box">
            <img src={Clap} alt="" />
            <h2>Family, Relationships & Divorce</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod{" "}
            </p>
          </div> */}
        <div className="weeekly-meetup-box">
          <img src={emoji} alt="" />
          <h2>DIYs</h2>
          <p>
            Experience the joy of creating and crafting with our DIY projects.
            From handmade gifts to home decor and beyond, discover endless
            possibilities for expressing your creativity and making something
            uniquely yours. Dive into the world of DIY and unleash your
            imagination today!
          </p>
        </div>
        <div className="weeekly-meetup-box">
          <img src={emoji} alt="" />

          <h2>Aroma Therapy</h2>
          <p>
            Relax with our aromatherapy sessions. Enjoy the pleasant scents of
            natural oils to help you feel calm and balanced. Stress will melt
            away, and you'll feel refreshed and rejuvenated.
          </p>
        </div>
      </div>
      {wantComplimentaryCall ? (
        <>
          <span className="close-calendly" onClick={handleClose}>
            <AiOutlineCloseCircle className="senesbottom-icon" />
          </span>

          <InlineWidget
            url="https://calendly.com/teammentoons/active-listeners"
            className="calendly-embed"
          />
        </>
      ) : (
        <></>
      )}

      {wantComplimentaryCall ? (
        <></>
      ) : (
        <div className="tele-buttons">
          <button className="get-support" onClick={appointmentSubmit}>
            Schedule Now
          </button>
        </div>
      )}

      <GetinTouch />

      <Footer />
    </div>
  );
};

export default OneOnOne;
