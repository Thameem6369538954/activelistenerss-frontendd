import React, { useEffect, useState } from "react";
import "./Getintouchdata.css";
import axios from "../../Utils/Baseurl";

const Getintouchdata = () => {
  const [data, setData] = useState([]);
  const [searchInput, setSearchInput] = useState("");

  useEffect(() => {
    const fetchMessage = async () => {
      try {
        const response = await axios.get("admin/view_getInTouch");
        console.log(response.data.getintouch.allGet, "kkkkk");
        setData(response.data.getintouch.allGet);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchMessage();
  }, []);

  // Filtered data based on search input
  const filteredData = data.filter((item) => {
    return (
      item.name.toLowerCase().includes(searchInput.toLowerCase()) ||
      item.email.toLowerCase().includes(searchInput.toLowerCase())
    );
  });

  return (
    <div>
      <div className="getintouch-main-container">
        <div className="getintouch-adimn-top-btn">
          <h1>Getin Touch Form Data's</h1>
          <button>Print</button>
        </div>
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
        <div className="getintouch-form">
          <div className="revenue-container">
            {filteredData.length === 0 ? (
              <div className="no-data">
                <p>{searchInput} is not found</p>
              </div>
            ) : (
              <table>
                <thead>
                  <tr>
                    <th>No</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Message</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredData.map((item, index) => (
                    <tr key={item.id}>
                      <td>{index + 1}</td>
                      <td>{item.name}</td>
                      <td style={{ textTransform: "lowercase" }}>
                        <p>{item.email}</p>
                      </td>
                      <td>{item.message}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Getintouchdata;
