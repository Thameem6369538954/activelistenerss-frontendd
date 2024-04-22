import React,{useState} from 'react'
import './Hiringdata.css'
import { AiOutlineFilePdf } from "react-icons/ai";

const Hiringdata = () => {
     const [data, setData] = useState([
       {
         id: 1,
         pdf: "https://drive.google.com/file/d/1vhvO61Evjo-Rr6TZEMyqbHW4tjm-az7x/view?usp=drive_link",
         name: "sankar",
         email: "sankar@gmail.com",
         amount: "978883232",
         organizationname: "Sankar Foundation",
         year: "23/01/2024",
         ofcnumber: "1234567890",
         link: "https://www.sankarfoundation.org/",
         jd: "Psycologist",
         personalnumber: "1234567890",
       },
       {
         id: 2,
         pdf: "https://drive.google.com/file/d/1vhvO61Evjo-Rr6TZEMyqbHW4tjm-az7x/view?usp=drive_link",
         name: "Dhanasekar",
         email: "dhanasekar@gmail.com",
         amount: "8234233567",
         organizationname: "Dhanasekar Foundation",
         year: "23/01/2024",
         ofcnumber: "1234567890",
         link: "https://www.dhanasekarfoundation.org/",
         jd: "Psycologist",
         personalnumber: "1234567890",
       },
       {
         id: 3,
         pdf: "https://drive.google.com/file/d/1vhvO61Evjo-Rr6TZEMyqbHW4tjm-az7x/view?usp=drive_link",
         name: "Ajay",
         email: "ajay@gmail.com",
         amount: "8234233567",
         organizationname: "Ajay Foundation",
         year: "23/01/2024",
         ofcnumber: "1234567890",
         link: "https://www.ajayfoundation.org/",
         jd: "Psycologist",
         personalnumber: "1234567890",
       },
       {
         id: 4,
         pdf: "https://drive.google.com/file/d/1vhvO61Evjo-Rr6TZEMyqbHW4tjm-az7x/view?usp=drive_link",
         name: "Dhinesh",
         email: "dhinesh@gmail.com",
         amount: "8234233567",
         organizationname: "Dhinesh Foundation",
         year: "23/01/2024",
         ofcnumber: "1234567890",
         link: "https://www.dhineshfoundation.org/",
         jd: "Psycologist",
         personalnumber: "1234567890",
       },
       {
         id: 5,
         pdf: "https://drive.google.com/file/d/1vhvO61Evjo-Rr6TZEMyqbHW4tjm-az7x/view?usp=drive_link",
         name: "Aleeshya",
         email: "aleeshya@gmail.com",
         amount: "8234233567",
         organizationname: "Aleeshya Foundation",
         year: "23/01/2024",
         ofcnumber: "1234567890",
         link: "https://www.aleeshyafoundation.org/",
         jd: "Psycologist",
         personalnumber: "1234567890",
       },
       {
         id: 6,
         pdf: "https://drive.google.com/file/d/1vhvO61Evjo-Rr6TZEMyqbHW4tjm-az7x/view?usp=drive_link",
         name: "Ansari",
         email: "Thameem@gmail.com",
         amount: "6369538976",
         organizationname: "Ansari Foundation",
         year: "23/01/2024",
         ofcnumber: "1234567890",
         link: "https://www.ansarifoundation. Application org/",
         jd: "Psycologist",
         personalnumber: "1234567890",
       },
     ]);
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
                  data.map((item) => (
                    <tr key={item.id}>
                      <td>
                        <input type="checkbox" />
                      </td>
                      <td>
                        <p>{item.id}</p>
                      </td>
                      <td>
                        <p> {item.name}</p>
                      </td>
                      <td>
                        <p>{item.email}</p>
                      </td>
                      <td>
                        <p>{item.amount}</p>
                      </td>
                      <td>
                        <p> {item.jd}</p>
                      </td>
                      <td>
                        <p>{item.year}</p>
                      </td>
                      <td>
                        <div
                          onClick={() => openPdfInNewTab(item.url)}
                          style={{ cursor: "pointer" }}
                        >
                          <a href="">
                            <AiOutlineFilePdf />
                          </a>
                          <p>{item.name}</p>
                        </div>
                      </td>
                      <td>
                        <p> {item.status}</p>
                      </td>
                      <td>
                        <button>View</button>
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
