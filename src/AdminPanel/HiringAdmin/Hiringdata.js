import React,{useEffect, useState} from 'react'
import './Hiringdata.css'
import { AiOutlineFilePdf } from "react-icons/ai";
import axios from '../../Utils/Baseurl';
const Hiringdata = () => {
     const [data, setData] = useState([]);

     useEffect(() => {
       const fetchData = async () => {
         const response = await axios.get("admin/viewHiring");
        //  const data = await response.json();
        console.log(response.data.response,"jiji");
         setData(response.data.response);
       };
       fetchData();
     })
     const [searchInput, setSearchInput] = useState("");

     // Filtered data based on search input
     const filteredData = data.filter((item) => {
       return (
         item.name.toLowerCase().includes(searchInput.toLowerCase()) ||
         item.email.toLowerCase().includes(searchInput.toLowerCase()) ||
         item.amount.includes(searchInput)
       );
     });
     const currentDate = new Date().toISOString().slice(0, 10);
     const openPdfInNewTab = (url) => {
       window.open(url, "_blank");
     };
  return (
    <div>
      <div className="Hiringdata-main-container">
        <div className="hiring-top-btns">
          <h1>Hiring Data</h1>
          <button>Export</button>
        </div>
        <div className="hiringdata-table">
          <div className="revenvue-container">
            <table>
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
                  data.map((item, index) => (
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
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hiringdata
