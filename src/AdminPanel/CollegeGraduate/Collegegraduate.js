import React, { useState } from 'react'
import './Collegegraduate.css'

const Collegegraduate = () => {
    const [data, setData] = useState([
      {
        id: 1,
        name: "sankar",
        email: "sankar@gmail.com",
        amount: "978883232",
        organizationname: "Sankar Foundation",
        Dob: "12/04/1997",
        ofcnumber: "Loyola college, chennai",
        link: " B.Sc Psychology",
        jd: "Ceo",
        personalnumber: "9876844898",
        city: "chennai",
        State: "Tamilnadu",
        country: "India",
        github:"https://github.com/Sankar-123",
        Linkedin:"https://www.linkedin.com/in/sankar-123/",
        otherlink:"https://www.sankarfoundation.org/",
      },
      {
        id: 2,
        name: "Dhanasekar",
        email: "dhanasekar@gmail.com",
        amount: "8234233567",
        organizationname: "Dhanasekar Foundation",
        Dob: "23/40/1999",
        ofcnumber: "SRM college, chennai",
        link: " B.Tech IT",
        jd: "Ceo",
        personalnumber: "1234567890",
        city: "chennai",
        State: "Tamilnadu",
        country: "India",
        github:"https://github.com/Dhanasekar-123",
        Linkedin:"https://www.linkedin.com/in/dhanasekar-123/",
        otherlink:"https://www.dhanasekarfoundation.org/",
      },
      {
        id: 3,
        name: "Ajay",
        email: "ajay@gmail.com",
        amount: "8234233567",
        organizationname: "Ajay Foundation",
        Dob: "16/01/2001",
        ofcnumber: "Hindusthan college, Coimbatore",
        link: "B.Sc Psychology",
        jd: "Ceo",
        personalnumber: "1234567890",
        city: "chennai",
        State: "Tamilnadu",
        country: "India",
        github:"https://github.com/Ajay-123",
        Linkedin:"https://www.linkedin.com/in/ajay-123/",
        otherlink:"https://www.ajayfoundation.org/",
      },
      {
        id: 4,
        name: "Dhinesh",
        email: "dhinesh@gmail.com",
        amount: "8234233567",
        organizationname: "Dhinesh Foundation",
        Dob: "19/02/2002",
        ofcnumber: "PES University, Bengalure",
        link: "Mechanical Engineering",
        jd: "Ceo",
        personalnumber: "1234567890",
        city: "chennai",
        State: "Tamilnadu",
        country: "India",
        github:"https://github.com/Dhinesh-123",
        Linkedin:"https://www.linkedin.com/in/dhinesh-123/",
        otherlink:"https://www.dhineshfoundation.org/",

      },
      {
        id: 5,
        name: "Aleeshya",
        email: "aleeshya@gmail.com",
        amount: "8234233567",
        organizationname: "Aleeshya Foundation",
        Dob: "12/05/2021",
        ofcnumber: "SRM college, Kerala",
        link: "B.Tech IT",
        jd: "Ceo",
        personalnumber: "1234567890",
        city: "kochi",
        State: "kerla",
        country: "India",
        github:"https://github.com/Aleeshya-123",
        Linkedin:"https://www.linkedin.com/in/aleeshya-123/",
        otherlink:"https://www.aleeshyafoundation.org/",
      },
      {
        id: 6,
        name: "Ansari",
        email: "Thameem@gmail.com",
        amount: "6369538976",
        organizationname: "Ansari Foundation",
        Dob: "16/07/2001",
        ofcnumber: "Jamal Mohamed college, Trichy",
        link: "BCA",
        jd: "Ceo",
        personalnumber: "1234567890",
        city: "chennai",
        State: "Tamilnadu",
        country: "India",
        github:"https://github.com/ThameemAnsari",
        Linkedin:"https://www.linkedin.com/in/ansari-123/",
        otherlink:"https://www.ansarifoundation.org/",
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

  return (
    <div>
      <div className="Collegegraduate-main">
        <div className="Collegegraduate-top-btn">
          <h1>College Graduates</h1>
          <button>All</button>
        </div>

        <div className="Collegegraduate-table">
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
                      {/* <th>Select</th> */}
                      <th>No</th>
                      <th>Student Name</th>
                      <th>Email</th>
                      <th>Phone Number</th>
                      <th>Date of birth</th>
                      <th>College</th>
                      <th>Qualification</th>
                      <th>Year of passing</th>
                      <th>Address</th>
                      <th>Github</th>
                      <th>LinkedIn</th>
                      <th>Other Link</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredData.map((item) => (
                      <tr key={item.id}>
                        {/* <td>
                        <input type="checkbox" />
                      </td> */}
                        <td>{item.id}</td>
                        <td>{item.name}</td>
                        <td style={{ textTransform: "lowercase" }}>
                          <p>{item.email}</p>
                        </td>
                        <td>{item.amount}</td>
                        <td>{item.Dob}</td>
                        <td>{item.ofcnumber}</td>
                        <td>{item.link}</td>
                        <td>{item.organizationname}</td>
                        <td>
                          <ul>
                            <li style={{ listStyle: "none" }}>{item.city}</li>
                            <li style={{ listStyle: "none" }}>{item.State}</li>
                            <li style={{ listStyle: "none" }}>
                              {item.country}
                            </li>
                          </ul>
                        </td>
                        <td>
                          <a href="">{item.github}</a>
                        </td>
                        <td>
                          <a href="">{item.Linkedin}</a>
                        </td>
                        <td>
                          <a href="">{item.otherlink}</a>
                        </td>
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
  );
}

export default Collegegraduate