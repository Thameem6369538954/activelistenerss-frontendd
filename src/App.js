// import React, { useState, useEffect } from "react";
// import "./App.css";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Home from "./Pages/Home";
// import Teletherapy from "./Pages/Teletherapy";
// import GriefSupport from "./Pages/GriefSupport";
// import Corediscover from "./Pages/Corediscover";
// import Podcast from "./Pages/Podcast";
// import GoalVision from "./Pages/GoalVision";
// import Senses from "./Pages/Senses";
// import OneOnOne from "./Pages/OneOnOne";
// import Navbar from "./Components/Navbar";
// import Signup from "./Pages/Signup";
// import Login from "./Pages/Login";
// import EarlyAgeGadgetExposure from "./Pages/EarlyAgeGadgetExposure";
// import AdaptationtoMobilePhones from "./Pages/AdaptationtoMobilePhones";
// import CurrentTimes from "./Pages/CurrentTimes";
// import LearningandFocus from "./Pages/LearningandFocus";
// import MobileAddiction from "./Pages/MobileAddiction.js";
// import GamingAddiction from "./Pages/GamingAddiction.js";
// import SocialMediaAddiction from "./Pages/SocialMediaAddiction.js";
// import EntertainmentandperformanceAddiction from "./Pages/EntertainmentandperformanceAddiction.js";
// import Hiring from "./Pages/Hiring.js";
// import UserProfile from "./Pages/UserProfile.js";
// import TeamPage from "./Pages/TeamPage.js";
// import HiringForm from "./Pages/HiringForm.js";
// import Preppers from "./Pages/Preppers.js";
// import SideBar from "./AdminPanel/SideBar.js";
// import Adminpanelhome from "./AdminPanel/Adminpanelhome.js";
// import Revenue from "./AdminPanel/SE Revenue/Revenue.js";
// import Videoaddadmin from "./AdminPanel/AdminaddVideo/Videoaddadmin.js";
// import Package from "./AdminPanel/Packageforadmin/Package.js";
// import Community from "./AdminPanel/Community/Community.js";
// import PodcastAdmin from "./AdminPanel/Podcast/PodcastAdmin.js";
// import GriefsupportGroup from "./Pages/GriefsupportGroup.js";
// import Loading from "./Anime/Loading.json";
// import Lottie from "lottie-react";
// import Settings from "./Pages/Settings.js";
// import CareerCounselling from "./Pages/CareerCounselling.js";
// import Workshop from "./Pages/Workshop.js";
// import InstentKadha from "./Katha/InstentKadha/InstentKadha.js";
// import AffiliateProgram from "./Pages/AffiliateProgram.js";
// import Account from "./Pages/Account.js";
// import Profilesubscribe from "./Pages/Profilesubscribe.js";
// import Profile from "./Pages/Profile.js";
// import Recoverpassword from "./RecoverPassword/Step1/Recoverpassword.js";
// import Verify from "./RecoverPassword/Step2/Verify.js";
// import Createpassword from "./RecoverPassword/Step3/Createpassword.js";
// import Daseboard from "./Components/DaseBoard/Daseboard.js";
// import Complimetarycall from "./AdminPanel/ComplimetaryCall/Complimetarycall.js";
// // import HiringAdmin from "./AdminPanel/Hiring/HiringAdmin.js"
// import Psychologist from "./AdminPanel/psychologist/Psychologist.js";
// // import Adminpanel from "./AdminLogin/AdminLogin/Adminpanel.js";
// import Psycologistform from "./Components/Psycologistform.js";
// import Ngoform from "./Components/Ngoform.js";
// import Collegeandschoolform from "./Components/Collegeandschoolform.js";
// import Loginwithotp from "./Pages/Loginwithotp.js";
// import Errorpage from "./Components/Errorpage.js";
// import Adminpanel from "./AdminLogin/AdminLogin/Adminpanel.js";
// import Success from "./Components/Success.js"
// import Failed from "./Components/Failed.js";
// import Privacy_policy from "./Pages/Privacy_policy.js";
// import Terms_and_condition from "./Pages/Terms_and_condition.js";
// import Cancellation_and_refunds from "./Pages/Cancellation_and_refunds.js";
// import Customer_support from "./Pages/Customer_support.js";
// // import KalaKriti from "./Katha/KalaKriti/KalaKriti.js"
// function App() {
//   const [loading, setLoading] = useState(false);
//   useEffect(() => {
//     setLoading(true);
//     setTimeout(() => {
//       setLoading(false);
//     }, 5000);
//   }, []);
//   return (
//     <div className="App">
//       {loading ? (
//         <div className="loading-container">
//           <Lottie animationData={Loading} />
//         </div>
//       ) : (
//       <Router>
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/Customer_support" element={<Customer_support />} />
//           <Route
//             path="/Cancellation_and_refunds"
//             element={<Cancellation_and_refunds />}
//           />
//           <Route
//             path="/Terms_and_condition"
//             element={<Terms_and_condition />}
//           />
//           <Route path="/Privacy_policy" element={<Privacy_policy />} />
//           <Route path="/Success" element={<Success />} />
//           <Route path="/Failed" element={<Failed />} />
//           <Route path="/Adminpanelhome/*" element={<Adminpanelhome />} />
//           <Route path="*" element={<Errorpage />} />
//           <Route path="/Loginwithotp" element={<Loginwithotp />} />
//           <Route
//             path="/Collegeandschoolform"
//             element={<Collegeandschoolform />}
//           />
//           <Route path="/Ngoform" element={<Ngoform />} />
//           <Route path="/Psycologistform" element={<Psycologistform />} />
//           <Route path="/Psychologist" element={<Psychologist />} />
//           <Route path="/Community" element={<Community />} />
//           <Route path="/Complimetarycall" element={<Complimetarycall />} />
//           {/* <Route path="/HiringAdmin" element={<HiringAdmin />} /> */}

//           {/* <Route path="/Craetepassword" element={<Craetepassword />} /> */}
//           <Route path="/Createpassword" element={<Createpassword />} />
//           <Route path="/Verify" element={<Verify />} />
//           <Route path="/Revenue" element={<Revenue />} />
//           <Route path="/PodcastAdmin" element={<PodcastAdmin />} />
//           <Route path="/Recoverpassword" element={<Recoverpassword />} />
//           <Route path="/AffiliateProgram" element={<AffiliateProgram />} />
//           <Route path="/InstentKadha" element={<InstentKadha />} />
//           <Route path="/Workshop" element={<Workshop />} />
//           <Route path="/TeamPage" element={<TeamPage />} />
//           <Route path="/GriefsupportGroup" element={<GriefsupportGroup />} />
//           <Route path="/Adminpanel" element={<Adminpanel />} />
//           <Route path="/Preppers" element={<Preppers />} />
//           <Route path="/HiringForm/:position" element={<HiringForm />} />
//           <Route path="/Hiring" element={<Hiring />} />
//           <Route
//             path="/EntertainmentandperformanceAddiction"
//             element={<EntertainmentandperformanceAddiction />}
//           />
//           <Route
//             path="/SocialMediaAddiction"
//             element={<SocialMediaAddiction />}
//           />
//           <Route path="/GamingAddiction" element={<GamingAddiction />} />

//           <Route path="/MobileAddiction" element={<MobileAddiction />} />
//           <Route path="/LearningandFocus" element={<LearningandFocus />} />
//           <Route path="/CurrentTimes" element={<CurrentTimes />} />
//           <Route
//             path="/AdaptationtoMobilePhones"
//             element={<AdaptationtoMobilePhones />}
//           />
//           <Route path="/Login" element={<Login />} />
//           {/* <Route path="/Adminlogin" element={<Adminlogin />} /> */}
//           <Route path="UserProfile/*" element={<UserProfile />} />
//           <Route path="/Account" element={<Account />} />
//           <Route path="/Profile" element={<Profile />} />
//           <Route path="/Profilesubscribe" element={<Profilesubscribe />} />
//           <Route path="/Settings" element={<Settings />} />
//           <Route path="/Daseboard" element={<Daseboard />} />
//           <Route path="/Signup" element={<Signup />} />
//           <Route path="/CareerCounselling" element={<CareerCounselling />} />
//           <Route path="/Navbar" element={<Navbar />} />
//           <Route path="/OneOnOne" element={<OneOnOne />} />
//           <Route path="/Senses" element={<Senses />} />
//           <Route path="/GoalVision" element={<GoalVision />} />
//           <Route path="/Podcast" element={<Podcast />} />
//           <Route path="/Corediscover" element={<Corediscover />} />
//           <Route path="/GriefSupport" element={<GriefSupport />} />
//           <Route path="/Teletherapy" element={<Teletherapy />} />
//           <Route
//             path="/EarlyagegadgetExposure"
//             element={<EarlyAgeGadgetExposure />}
//           />
//         </Routes>
//       </Router>
//       )}
//     </div>
//   );
// }

// export default App;


import React, { useState, useEffect } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Teletherapy from "./Pages/Teletherapy";
import GriefSupport from "./Pages/GriefSupport";
import Corediscover from "./Pages/Corediscover";
import Podcast from "./Pages/Podcast";
import GoalVision from "./Pages/GoalVision";
import Senses from "./Pages/Senses";
import OneOnOne from "./Pages/OneOnOne";
import Navbar from "./Components/Navbar";
import Signup from "./Pages/Signup";
import Login from "./Pages/Login";
import EarlyAgeGadgetExposure from "./Pages/EarlyAgeGadgetExposure";
import AdaptationtoMobilePhones from "./Pages/AdaptationtoMobilePhones";
import CurrentTimes from "./Pages/CurrentTimes";
import LearningandFocus from "./Pages/LearningandFocus";
import MobileAddiction from "./Pages/MobileAddiction.js";
import GamingAddiction from "./Pages/GamingAddiction.js";
import SocialMediaAddiction from "./Pages/SocialMediaAddiction.js";
import EntertainmentandperformanceAddiction from "./Pages/EntertainmentandperformanceAddiction.js";
import Hiring from "./Pages/Hiring.js";
import UserProfile from "./Pages/UserProfile.js";
import TeamPage from "./Pages/TeamPage.js";
import HiringForm from "./Pages/HiringForm.js";
import Preppers from "./Pages/Preppers.js";
import SideBar from "./AdminPanel/SideBar.js";
import Adminpanelhome from "./AdminPanel/Adminpanelhome.js";
import Revenue from "./AdminPanel/SE Revenue/Revenue.js";
import Videoaddadmin from "./AdminPanel/AdminaddVideo/Videoaddadmin.js";
import Package from "./AdminPanel/Packageforadmin/Package.js";
import Community from "./AdminPanel/Community/Community.js";
import PodcastAdmin from "./AdminPanel/Podcast/PodcastAdmin.js";
import GriefsupportGroup from "./Pages/GriefsupportGroup.js";
import loading from "./Anime/loading.json"; // Ensure this path is correct
import Lottie from "lottie-react";
import Settings from "./Pages/Settings.js";
import CareerCounselling from "./Pages/CareerCounselling.js";
import Workshop from "./Pages/Workshop.js";
import InstentKadha from "./Katha/InstentKadha/InstentKadha.js";
import AffiliateProgram from "./Pages/AffiliateProgram.js";
import Account from "./Pages/Account.js";
import Profilesubscribe from "./Pages/Profilesubscribe.js";
import Profile from "./Pages/Profile.js";
import Recoverpassword from "./RecoverPassword/Step1/Recoverpassword.js";
import Verify from "./RecoverPassword/Step2/Verify.js";
import Createpassword from "./RecoverPassword/Step3/Createpassword.js";
import Daseboard from "./Components/DaseBoard/Daseboard.js";
import Complimetarycall from "./AdminPanel/ComplimetaryCall/Complimetarycall.js";
// import HiringAdmin from "./AdminPanel/Hiring/HiringAdmin.js"
import Psychologist from "./AdminPanel/psychologist/Psychologist.js";
// import Adminpanel from "./AdminLogin/AdminLogin/Adminpanel.js";
import Psycologistform from "./Components/Psycologistform.js";
import Ngoform from "./Components/Ngoform.js";
import Collegeandschoolform from "./Components/Collegeandschoolform.js";
import Loginwithotp from "./Pages/Loginwithotp.js";
import Errorpage from "./Components/Errorpage.js";
import Adminpanel from "./AdminLogin/AdminLogin/Adminpanel.js";
import Success from "./Components/Success.js";
import Failed from "./Components/Failed.js";
import Privacy_policy from "./Pages/Privacy_policy.js";
import Terms_and_condition from "./Pages/Terms_and_condition.js";
import Cancellation_and_refunds from "./Pages/Cancellation_and_refunds.js";
import Customer_support from "./Pages/Customer_support.js";
import KalaKriti from "./Katha/KalaKriti/KalaKriti.js";

function App() {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 5000);
  }, []);
  return (
    <div className="App">
      {loading ? (
        <div className="loading-container">
          <Lottie animationData={loading} />
        </div>
      ) : (
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Customer_support" element={<Customer_support />} />
            <Route
              path="/Cancellation_and_refunds"
              element={<Cancellation_and_refunds />}
            />
            <Route
              path="/Terms_and_condition"
              element={<Terms_and_condition />}
            />
            <Route path="/Privacy_policy" element={<Privacy_policy />} />
            <Route path="/Success" element={<Success />} />
            <Route path="/Failed" element={<Failed />} />
            <Route path="/Adminpanelhome/*" element={<Adminpanelhome />} />
            <Route path="*" element={<Errorpage />} />
            <Route path="/Loginwithotp" element={<Loginwithotp />} />
            <Route
              path="/Collegeandschoolform"
              element={<Collegeandschoolform />}
            />
            <Route path="/Ngoform" element={<Ngoform />} />
            <Route path="/Psycologistform" element={<Psycologistform />} />
            <Route path="/Psychologist" element={<Psychologist />} />
            <Route path="/Community" element={<Community />} />
            <Route path="/Complimetarycall" element={<Complimetarycall />} />
            {/* <Route path="/HiringAdmin" element={<HiringAdmin />} /> */}
            {/* <Route path="/Craetepassword" element={<Craetepassword />} /> */}
            <Route path="/Createpassword" element={<Createpassword />} />
            <Route path="/Verify" element={<Verify />} />
            <Route path="/Revenue" element={<Revenue />} />
            <Route path="/PodcastAdmin" element={<PodcastAdmin />} />
            <Route path="/Recoverpassword" element={<Recoverpassword />} />
            <Route path="/AffiliateProgram" element={<AffiliateProgram />} />
            <Route path="/InstentKadha" element={<InstentKadha />} />
            <Route path="/Workshop" element={<Workshop />} />
            <Route path="/TeamPage" element={<TeamPage />} />
            <Route path="/GriefsupportGroup" element={<GriefsupportGroup />} />
            <Route path="/Adminpanel" element={<Adminpanel />} />
            <Route path="/Preppers" element={<Preppers />} />
            <Route path="/HiringForm/:position" element={<HiringForm />} />
            <Route path="/Hiring" element={<Hiring />} />
            <Route
              path="/EntertainmentandperformanceAddiction"
              element={<EntertainmentandperformanceAddiction />}
            />
            <Route
              path="/SocialMediaAddiction"
              element={<SocialMediaAddiction />}
            />
            <Route path="/GamingAddiction" element={<GamingAddiction />} />
            <Route path="/MobileAddiction" element={<MobileAddiction />} />
            <Route path="/LearningandFocus" element={<LearningandFocus />} />
            <Route path="/CurrentTimes" element={<CurrentTimes />} />
            <Route
              path="/AdaptationtoMobilePhones"
              element={<AdaptationtoMobilePhones />}
            />
            <Route path="/Login" element={<Login />} />
            {/* <Route path="/Adminlogin" element={<Adminlogin />} /> */}
            <Route path="UserProfile/*" element={<UserProfile />} />
            <Route path="/Account" element={<Account />} />
            <Route path="/Profile" element={<Profile />} />
            <Route path="/Profilesubscribe" element={<Profilesubscribe />} />
            <Route path="/Settings" element={<Settings />} />
            <Route path="/Daseboard" element={<Daseboard />} />
            <Route path="/Signup" element={<Signup />} />
            <Route path="/CareerCounselling" element={<CareerCounselling />} />
            <Route path="/Navbar" element={<Navbar />} />
            <Route path="/OneOnOne" element={<OneOnOne />} />
            <Route path="/Senses" element={<Senses />} />
            <Route path="/GoalVision" element={<GoalVision />} />
            <Route path="/Podcast" element={<Podcast />} />
            <Route path="/Corediscover" element={<Corediscover />} />
            <Route path="/GriefSupport" element={<GriefSupport />} />
            <Route path="/Teletherapy" element={<Teletherapy />} />
            <Route
              path="/EarlyagegadgetExposure"
              element={<EarlyAgeGadgetExposure />}
            />
          </Routes>
        </Router>
      )}
    </div>
  );
}

export default App;
