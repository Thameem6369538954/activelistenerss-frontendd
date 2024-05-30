import React, { useEffect, useState } from "react";
import "../Userlist/Userdatas.css";
import axios from "../../Utils/Baseurl";
import { toast } from "react-toastify";

const Userdatas = () => {
  const [data, setData] = useState([]);
  const [searchInput, setSearchInput] = useState("");

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const users = await axios.get("admin/view_all_users");
        if (users) {
          setData(users.data.response);
        } else {
          toast.error("Something went wrong!");
        }
      } catch (error) {
        toast.error("Something went wrong!");
      }
    };
    fetchUser();
  }, []);

  // Function to format the date to dd/mm/yy
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const day = String(date.getUTCDate()).padStart(2, "0");
    const month = String(date.getUTCMonth() + 1).padStart(2, "0"); // Months are zero-based
    const year = String(date.getUTCFullYear()).slice(-2);
    return `${day}/${month}/${year}`;
  };

  // Filtered data based on search input
  const filteredData = data.filter((item) => {
    return (
      (item.name &&
        item.name.toLowerCase().includes(searchInput.toLowerCase())) ||
      (item.email &&
        item.email.toLowerCase().includes(searchInput.toLowerCase())) ||
      (item.amount && item.amount.includes(searchInput))
    );
  });

  return (
    <div>
      <div className="Ngoandpsycologist-main-conatainer">
        <div className="Ngoandpsycologist-top-btns">
          <h1>User Data</h1>
          <button>Print </button>
        </div>
        <div className="ngo-psycologist-table">
          <div className="getintouch-top">
            <div className="search">
              <input
                type="text"
                className="search__input"
                placeholder="Type your text"
                value={searchInput}
                onChange={(e) => setSearchInput(e.target.value)}
              />
              <button className="search__button">
                <svg
                  className="search__icon"
                  aria-hidden="true"
                  viewBox="0 0 24 24"
                >
                  <g>
                    <path d="M21.53 20.47l-3.66-3.66C19.195 15.24 20 13.214 20 11c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9c2.215 0 4.24-.804 5.808-2.13l3.66 3.66c.147.146.34.22.53.22s.385-.073.53-.22c.295-.293.295-.767.002-1.06zM3.5 11c0-4.135 3.365-7.5 7.5-7.5s7.5 3.365 7.5 7.5-3.365 7.5-7.5 7.5-7.5-3.365-7.5-7.5z"></path>
                  </g>
                </svg>
              </button>
            </div>
          </div>
          <div className="ngo-wid">
            <div className="getintouch-form">
              <div className="revenue-container">
                {filteredData.length === 0 ? (
                  <div className="no-data">
                    <p>{searchInput} data found</p>
                  </div>
                ) : (
                  <div style={{ overflowX: "auto" }}>
                    <table>
                      <thead>
                        <tr>
                          <th>No</th>
                          <th>Date</th>
                          <th>User name</th>
                          <th>Email</th>
                          <th>Phone Number</th>
                          <th>Status</th>
                        </tr>
                      </thead>
                      <tbody>
                        {filteredData.map((item, index) => (
                          <tr key={item._id}>
                            <td>{index + 1}</td>
                            <td>{formatDate(item.createdAt)}</td>
                            <td>{item.name}</td>
                            <td style={{ textTransform: "lowercase" }}>
                              <p>{item.email}</p>
                            </td>
                            <td>{item.mobile}</td>
                            <td>subscribed</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Userdatas;
