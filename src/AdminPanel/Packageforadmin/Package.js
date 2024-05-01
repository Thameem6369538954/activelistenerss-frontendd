import React, { useEffect, useState } from "react";
import "./Package.css";
import Plan from "../../Images/Plan.png";
import Planb from "../../Images/Planb.png";
import { TiTick } from "react-icons/ti";
import { toast } from "react-toastify";
import axios from "../../Utils/Baseurl.js";

const Package = () => {
  const [card, setCard] = useState([]);
  const [editPackage, setEditPackage] = useState(null);

  useEffect(() => {
    const fetchCard = async () => {
      try {
        const response = await axios.get("admin/get_all_packages");
        console.log(response, "iiii");
        if (response) {
          setCard(response.data.packageList);
        } else {
          toast.error("Something went wrong!!");
        }
      } catch (error) {
        toast.error("Something went wrong!!");
      }
    };
    fetchCard();
  },[]);
  const [textData, setTextData] = useState({
    title: "",
    plan: "",
    description: "",
    benefits: "",
    subBenefits: "",
    price: "",
    recommended: "",
  });

  const [icon, setIcon] = useState(null);
  const [showPopup, setShowPopup] = useState(false);

  const togglePopup = () => {
    setShowPopup(!showPopup);
  };

  const handleImageChange = (e) => {
    const selectedImage = e.target.files[0];
    if (selectedImage) {
      setIcon(selectedImage);
    } else {
      toast.error("Please select an image");
      e.target.value = null;
    }
  };

  const handleChange = (e, fieldName) => {
    const { value } = e.target;
    setTextData({
      ...textData,
      [fieldName]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // You can perform form submission logic here
    const formData = new FormData();
    formData.append("title", textData.title);
    formData.append("icon", icon);
    formData.append("daysPlan", textData.plan);
    formData.append("benefits", textData.benefits);
    formData.append("subBenefits", textData.subBenefits);
    formData.append("description", textData.description);
    formData.append("price", textData.price);
    formData.append("recommended", textData.recommended);

    try {
      const response = await axios.post("admin/add_package", formData);
      console.log(response, "this is the server response..");
      if (response) {
        if (response.data.message === "Package Added successfully") {
          toast.success(response.data.message);
          togglePopup();
        } else {
          toast.error(response.data.message);
        }
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong!!");
    }

    // For example, you can send the formData to your server
    console.log(textData, icon);
  };
  const handleDelete = async (packageId) => {
    try {
      await axios.delete(`admin/delete_package/${packageId}`);
      setCard(card.filter((item) => item.id !== packageId));
      toast.success("Package deleted successfully");
    } catch (error) {
      toast.error("Failed to delete package");
    }
  };


      const [editform,setEditform]=useState(false);

      const handlePopedit = () =>{
        setEditform(!editform);
      }

  return (
    <div>
      <div className="teletheropy-planss">
        {showPopup && (
          <div className="video-popup">
            <div className="video-popup-content">
              <h2>Add New Package</h2>
              <form onSubmit={handleSubmit}>
                <div className="video-top-inputs">
                  <div>
                    <label>Package Name:</label>
                    <input
                      type="text"
                      required
                      placeholder="Enter the title"
                      value={textData.title}
                      onChange={(e) => handleChange(e, "title")}
                    />
                  </div>
                  <div className="select-page-videos">
                    <label>Days Plan:</label>
                    <input
                      type="text"
                      required
                      placeholder="Enter the number of days plan"
                      value={textData.plan}
                      onChange={(e) => handleChange(e, "plan")}
                    />
                  </div>
                </div>
                <div className="video-thumbnil-inputs">
                  <label>Package Icon:</label>
                  <input type="file" required onChange={handleImageChange} />
                </div>

                <div className="video-thumbnil-inputs">
                  <label>Benefits:</label>
                  <input
                    type="text"
                    required
                    value={textData.benefits}
                    onChange={(e) => handleChange(e, "benefits")}
                  />
                </div>

                <div className="video-thumbnil-inputs">
                  <label>Sub Benefits:</label>
                  <p style={{ color: "red" }}>
                    If no sub benefits, please type "nill"
                  </p>
                  <input
                    type="text"
                    required
                    value={textData.subBenefits}
                    onChange={(e) => handleChange(e, "subBenefits")}
                  />
                </div>
                <div className="video-thumbnil-inputs">
                  <label>Description:</label>
                  <input
                    type="text"
                    required
                    value={textData.description}
                    onChange={(e) => handleChange(e, "description")}
                  />
                </div>

                <div className="video-thumbnil-inputs">
                  <label>Price:</label>
                  <input
                    type="text"
                    required
                    value={textData.price}
                    onChange={(e) => handleChange(e, "price")}
                  />
                </div>

                <div className="video-thumbnil-inputs">
                  <label>Recommended?</label>
                  <select
                    name="recommended"
                    value={textData.recommended}
                    onChange={(e) => handleChange(e, "recommended")}
                  >
                    <option value="true">Yes</option>
                    <option value="false">No</option>
                  </select>
                </div>

                <div className="video-submit-btns">
                  <button type="submit">Submit</button>
                  <button type="button" onClick={togglePopup}>
                    Cancel
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
        <div className="packege-top-btns">
          <p>Packages Edit</p>
          <button onClick={togglePopup}>Add Package</button>
        </div>
        <div className="card-containers">
          {/* Card components */}
          {card.map((item, index) => (
            <div className="card" key={item._id}>
              <div className="card-text">
                <div>
                  <img
                    src={item.package_icon}
                    alt="icon"
                    style={{ width: "50px", height: "50px" }}
                  />
                </div>
                <div>
                  <p>{item.days_plan} days</p>
                  <h1>{item.package_title}</h1>
                </div>
              </div>

              <p>{item.description}</p>

              <h1>
                ₹ {item.price} <span> {item.days_plan} days</span>
              </h1>
              <p>What’s included</p>
              <ul className="plan-list">
                <li>
                  <TiTick className="tick" />4 sessions with kids
                </li>
                <li>
                  <TiTick className="tick" />2 sessions with parents
                </li>
                <li>
                  <TiTick className="tick" />1 intro session
                </li>
                <li>
                  <TiTick className="tick" />1 review session
                </li>
              </ul>
              <div className="add-delete-for-pakacjgae">
                <button onClick={() => handlePopedit(item._id)}>edit</button>
                <button onClick={() => handleDelete(item._id)}>Delete</button>
              </div>
             { editform && (
              <form>
                <div>
                  <label></label>
                </div>
              </form>
             )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Package;
