import React, { useEffect, useState } from "react";
import "./Package.css";
import Plan from "../../Images/Plan.png";
import Planb from "../../Images/Planb.png";
import { TiTick } from "react-icons/ti";
import { toast } from "react-toastify";
import axios from "../../Utils/Baseurl.js";
import { IoIosCloseCircleOutline } from "react-icons/io";

const Package = () => {
  // SHOWING EDIT PACKAGE HERE.........................................

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
  }, []);

  // ADD PACKAGE HERE.................................................

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

    const [formErrors,setFormErrors] = useState({}); // [formErrors]
    const [loading,setLoading] = useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault();
    // You can perform form submission logic here

      const newErrors = {};
      if (!textData.title.trim()) {
        newErrors.title = "Title is required";  
      }
      if(!textData.plan){
        newErrors.plan = "Plan is required";
      }
      if(!textData.description){
        newErrors.description = "Description is required";
      }
      if(!textData.benefits){
        newErrors.benefits = "Benefits is required";
      }
      if(!textData.subBenefits){
        newErrors.subBenefits = "Sub Benefits is required";
      }
      if(!textData.price){
        newErrors.price = "Price is required";
      }
      if(!textData.recommended){
        newErrors.recommended = "Recommended is required";
      }
      if(!icon){
        newErrors.icon = "Icon is required";
      }
      if (Object.keys(newErrors).length > 0) {
        setFormErrors(newErrors);
        return;
      }

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
          setTimeout(() => {
            window.location.reload();
          }, 2000);
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

  // EDIT PACKAGE HERE...................................................................

  const [editform, setEditform] = useState(null);

  const handlePopedit = (id) => {
    console.log(id,"clicked product id.......................")
    setEditform(id);
  };

  // State for form values
  const [formValues, setFormValues] = useState({
    title: "",
    daysPlan: "",
    benefits: "",
    subBenefits: "",
    description: "",
    price: "",
    recommended: "false",
  });
  console.log(formValues,"asssssssssssssssssssssssssssssssssssssssssssssss");

  // State for file input
  const [packageIcon, setPackageIcon] = useState(null);
  console.log(packageIcon, "packageIcon");

  
  // Handle text input change
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };
  
  // Handle file input change
  const handleFileChange = (e) => {
    setPackageIcon(e.target.files[0]);
  };
  // State for errors
  const [errors, setErrors] = useState({});
  
  // Handle form submission
  const handleSubmitt = async (e, id) => {
    e.preventDefault();
    console.log(id, "kkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk");
    
    const newErrors = {};
    if (!formValues.title.trim()) {
      newErrors.title = "Package Name is required";
    }
    if (!formValues.daysPlan) {
      newErrors.daysPlan = "Days Plan is required";
    }
    if (!formValues.benefits) {
      newErrors.benefits = "Benefits are required";
    }
    if (!formValues.subBenefits) {
      newErrors.subBenefits = "Sub Benefits are required";
    }
    if (!formValues.description) {
      newErrors.description = "Description is required";
    }
    if (!formValues.price) {
      newErrors.price = "Price is required";
    }
    if (!packageIcon) {
      newErrors.packageIcon = "Package Icon is required";
    }
    if (!formValues.recommended) {
      newErrors.recommended = "Recommended Icon is required";
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    console.log(errors, "errors.....................");

      try{
  
    const formDatas = new FormData();
    formDatas.append("title", formValues.title);
    formDatas.append("daysPlan", formValues.daysPlan);
    formDatas.append("benefits", formValues.benefits);
    formDatas.append("subBenefits", formValues.subBenefits);
    formDatas.append("description", formValues.description);
    formDatas.append("price", formValues.price);
    formDatas.append("recommended", formValues.recommended);
    formDatas.append("icon", packageIcon);

    // Submit form data to your API
    // Example: axios.post('/api/packages', formDatas);

    console.log(formDatas, "Form submitteddddddddddddddddddd Thameem");

    const response = await axios.post(`admin/update_package/${id}`, formDatas);
    console.log(response, "this is EDit the server response...................");
    if (response) {
      if (response.data.message === "updated successfully!!") {
        toast.success("updated successfully!!");
        setEditform(null);
        setTimeout(() => {
          window.location.reload();
        }, 2000);
      } else {
        toast.error(response.data.message);
      }
    }
    
    }catch (error) {
      console.log(error);
    }
    // Create form data

  };
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
                      // required
                      placeholder="Enter the title"
                      value={textData.title}
                      onChange={(e) => handleChange(e, "title")}
                    />
                    {formErrors.title && (
                      <p style={{ color: "red" }}>{formErrors.title}</p>
                    )}
                  </div>
                  <div className="select-page-videos">
                    <label>Days Plan:</label>
                    <input
                      type="text"
                      // required
                      placeholder="Enter the number of days plan"
                      value={textData.plan}
                      onChange={(e) => handleChange(e, "plan")}
                    />
                    {formErrors.plan && (
                      <p style={{ color: "red" }}>{formErrors.plan}</p>
                    )}
                  </div>
                </div>
                <div className="video-thumbnil-inputs">
                  <label>Package Icon:</label>
                  <input
                    type="file"
                    //  required
                    onChange={handleImageChange}
                  />
                  {formErrors.icon && (
                    <p style={{ color: "red" }}>{formErrors.icon}</p>
                  )}
                </div>

                <div className="video-thumbnil-inputs">
                  <label>Benefits:</label>
                  <input
                    type="text"
                    // required
                    value={textData.benefits}
                    onChange={(e) => handleChange(e, "benefits")}
                  />
                  {formErrors.benefits && (
                    <p style={{ color: "red" }}>{formErrors.benefits}</p>
                  )}
                </div>

                <div className="video-thumbnil-inputs">
                  <label>Sub Benefits:</label>
                  <p style={{ color: "red" }}>
                    If no sub benefits, please type "nill"
                  </p>
                  <input
                    type="text"
                    // required
                    value={textData.subBenefits}
                    onChange={(e) => handleChange(e, "subBenefits")}
                  />
                  {formErrors.subBenefits && (
                    <p style={{ color: "red" }}>{formErrors.subBenefits}</p>
                  )}
                </div>
                <div className="video-thumbnil-inputs">
                  <label>Description:</label>
                  <input
                    type="text"
                    // required
                    value={textData.description}
                    onChange={(e) => handleChange(e, "description")}
                  />
                  {formErrors.description && (
                    <p style={{ color: "red" }}>{formErrors.description}</p>
                  )}
                </div>

                <div className="video-thumbnil-inputs">
                  <label>Price:</label>
                  <input
                    type="text"
                    // required
                    value={textData.price}
                    onChange={(e) => handleChange(e, "price")}
                  />
                  {formErrors.price && (
                    <p style={{ color: "red" }}>{formErrors.price}</p>
                  )}
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
                  {formErrors.recommended && (
                    <p style={{ color: "red" }}>{formErrors.recommended}</p>
                  )}
                </div>

                <div className="video-submit-btns">
                  <button type="submit" disabled={loading}>
                    {loading ? "Submitting..." : "Submit"}
                  </button>
                  <button type="button">
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

              {editform === item._id && (
                <form onSubmit={(e) => handleSubmitt(e, item._id)}>
                  <div className="video-top-inputs-edit">
                    <span onClick={handlePopedit}>
                      <IoIosCloseCircleOutline />
                    </span>
                    <h1>Edit Package</h1>
                    <div>
                      <label>Package Name:</label>
                      <input
                        type="text"
                        name="title"
                        // required
                        placeholder="Enter the title"
                        value={formValues.title}
                        onChange={handleInputChange}
                      />
                      {errors.title && (
                        <span className="error">{errors.title}</span>
                      )}
                    </div>
                    <div className="select-page-videos">
                      <label>Days Plan:</label>
                      <input
                        type="text"
                        name="daysPlan"
                        // required
                        placeholder="Enter the number of days plan"
                        value={formValues.daysPlan}
                        onChange={handleInputChange}
                      />
                      {errors.daysPlan && (
                        <span className="error">{errors.daysPlan}</span>
                      )}
                    </div>

                    <div className="package-edit-inputs">
                      <label>Package Icon:</label>
                      <input
                        type="file"
                        //  required
                        onChange={handleFileChange}
                      />
                      {errors.packageIcon && (
                        <span className="error">{errors.packageIcon}</span>
                      )}
                    </div>

                    <div className="package-edit-inputs">
                      <label>Benefits:</label>
                      <input
                        type="text"
                        name="benefits"
                        // required
                        value={formValues.benefits}
                        onChange={handleInputChange}
                      />
                      {errors.benefits && (
                        <span className="error">{errors.benefits}</span>
                      )}
                    </div>

                    <div className="package-edit-inputs">
                      <label>Sub Benefits:</label>
                      <p style={{ color: "red" }}>
                        If no sub benefits, please type "nill"
                      </p>
                      <input
                        type="text"
                        name="subBenefits"
                        // required
                        value={formValues.subBenefits}
                        onChange={handleInputChange}
                      />
                      {errors.subBenefits && (
                        <span className="error">{errors.subBenefits}</span>
                      )}
                    </div>
                    <div className="package-edit-inputs">
                      <label>Description:</label>
                      <input
                        type="text"
                        name="description"
                        // required
                        value={formValues.description}
                        onChange={handleInputChange}
                      />
                      {errors.description && (
                        <span className="error">{errors.description}</span>
                      )}
                    </div>

                    <div className="package-edit-inputs">
                      <label>Price:</label>
                      <input
                        type="text"
                        name="price"
                        // required
                        value={formValues.price}
                        onChange={handleInputChange}
                      />
                      {errors.price && (
                        <span className="error">{errors.price}</span>
                      )}
                    </div>

                    <div className="package-edit-inputs">
                      <label>Recommended?</label>
                      <select
                        name="recommended"
                        value={formValues.recommended}
                        onChange={handleInputChange}
                      >
                        <option value="true">Yes</option>
                        <option value="false">No</option>
                      </select>
                      {errors.recommended && (
                        <span className="error">{errors.recommended}</span>
                      )}
                    </div>

                    <div className="video-submit-btns">
                      <button type="submit">Submit</button>
                      <button type="button" onClick={togglePopup}>
                        Cancel
                      </button>
                    </div>
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
