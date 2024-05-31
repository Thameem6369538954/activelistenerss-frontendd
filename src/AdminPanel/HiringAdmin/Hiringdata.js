import React, { useEffect, useState,useRef } from "react";
import "./Hiringdata.css";
import { AiOutlineFilePdf } from "react-icons/ai";
import axios from "../../Utils/Baseurl";
import filter from "../../Images/filter.png";
import { useReactToPrint } from "react-to-print";
const Hiringdata = () => {
  const componentdata = useRef();
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get("admin/viewHiring");
      //  const data = await response.json();
      console.log(response.data.response, "jiji");
      setData(response.data.response);
    };
    fetchData();
  }, []);

  const [searchInput, setSearchInput] = useState("");
  const [dateInput, setDateInput] = useState("");

  // Filtered data based on search input and date
  const filteredData = data.filter((item) => {
    const nameMatches = item.name
      .toLowerCase()
      .includes(searchInput.toLowerCase());
    const emailMatches = item.email
      .toLowerCase()
      .includes(searchInput.toLowerCase());
    const numberMatches = item.number.includes(searchInput);
    const positionMatches = item.position
      .toLowerCase()
      .includes(searchInput.toLowerCase());
    const dateMatches = item.addedAt.includes(dateInput);

    return (
      (nameMatches || emailMatches || numberMatches || positionMatches) &&
      (!dateInput || dateMatches)
    );
  });

  const currentDate = new Date().toISOString().slice(0, 10);

  const openPdfInNewTab = (url) => {
    window.open(url, "_blank");
  };

const generatePDF = useReactToPrint({
  content: () => componentdata.current,
  documentTitle: "hiring Data",
  onAfterPrint: () => alert("Print success"),
});
  return (
    <div>
      <div className="Hiringdata-main-container">
        <div className="hiring-top-btns">
          <h1>Hiring Data </h1>
          <button onClick={generatePDF}>Export</button>
        </div>
        <div className="fiter-box">
          <img src={filter} alt="" />
          <div className="fiter-box-text">
            <p>Filter By</p>
          </div>
          <div>
            <input
              type="text"
              placeholder="Search"
              value={searchInput}
              onChange={(e) => setSearchInput(e.target.value)}
            />
            <button>Search</button>
          </div>
          <div>
            <input
              type="date"
              value={dateInput}
              onChange={(e) => setDateInput(e.target.value)}
            />
          </div>
        </div>
        <div className="hiringdata-table">
          <div className="revenvue-container">
            <div ref={componentdata}>
              {filteredData.length === 0 ? (
                <p>{searchInput} is not found</p>
              ) : (
                <table width={"100%"}>
                  <thead>
                    <tr>
                      <th>
                        <p style={{ fontWeight: "bold" }}>Select</p>
                      </th>
                      <th>
                        <p>ID</p>
                      </th>
                      <th>
                        <p>APPLICANT NAME</p>
                      </th>
                      <th>
                        <p>EMAIL</p>
                      </th>
                      <th>
                        <p>PHONE NO. </p>
                      </th>
                      <th>
                        <p>APPLIED POSITION</p>
                      </th>
                      <th>
                        <p>DATE</p>
                      </th>
                      <th>
                        <p>RESUME</p>
                      </th>
                      <th>
                        <p>COVER LETTER</p>
                      </th>
                      <th>
                        <p>STATUS</p>
                      </th>
                      <th>
                        <p>ACTION</p>
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {Array.isArray(data) &&
                      filteredData.map((item, index) => (
                        <tr key={item._id}>
                          <td>
                            <input type="checkbox" />
                          </td>
                          <td>
                            <p>{index + 1}</p>
                          </td>
                          <td>
                            <p> {item.name}</p>
                          </td>
                          <td>
                            <p>{item.email}</p>
                          </td>
                          <td>
                            <p>{item.number}</p>
                          </td>
                          <td>
                            <p> {item.position}</p>
                          </td>
                          <td>
                            <p>{item.addedAt}</p>
                          </td>
                          <td>
                            <div
                              onClick={() => openPdfInNewTab(item.resume)}
                              style={{ cursor: "pointer" }}
                            >
                              <a href="">
                                <AiOutlineFilePdf />
                              </a>
                              <p>{item.name}</p>
                            </div>
                          </td>
                          <td>
                            <p> {item.coverletter}</p>
                          </td>
                          <td>
                            <button>{item.status}</button>
                          </td>
                          <td>
                            <button>Change status</button>
                          </td>
                        </tr>
                      ))}
                  </tbody>
                </table>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hiringdata;
