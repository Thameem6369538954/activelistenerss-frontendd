import React,{useState} from 'react'
import "../Userlist/Userdatas.css"

const Userdatas = () => {
    
    const [data, setData] = useState([
      {
        id: 1,
        name: "sankar",
        email: "sankar@gmail.com",
        amount: "978883232",
        organizationname: "Sankar Foundation",
        year: "Subscribed",
        ofcnumber: "13/01/2024",
        link: "https://www.sankarfoundation.org/",
        jd: "Ceo",
        personalnumber: "1234567890",
      },
      {
        id: 2,
        name: "Dhanasekar",
        email: "dhanasekar@gmail.com",
        amount: "8234233567",
        organizationname: "Dhanasekar Foundation",
        year: "Not Subscribed",
        ofcnumber: "31/01/2024",
        link: "https://www.dhanasekarfoundation.org/",
        jd: "Ceo",
        personalnumber: "1234567890",
      },
      {
        id: 3,
        name: "Ajay",
        email: "ajay@gmail.com",
        amount: "8234233567",
        organizationname: "Ajay Foundation",
        year: "Subscribed",
        ofcnumber: "17/01/2024",
        link: "https://www.ajayfoundation.org/",
        jd: "Ceo",
        personalnumber: "1234567890",
      },
      {
        id: 4,
        name: "Dhinesh",
        email: "dhinesh@gmail.com",
        amount: "8234233567",
        organizationname: "Dhinesh Foundation",
        year: "Subscribed",
        ofcnumber: "03/01/2024",
        link: "https://www.dhineshfoundation.org/",
        jd: "Ceo",
        personalnumber: "1234567890",
      },
      {
        id: 5,
        name: "Aleeshya",
        email: "aleeshya@gmail.com",
        amount: "8234233567",
        organizationname: "Aleeshya Foundation",
        year: " Not Subscribed",
        ofcnumber: "22/02/2024",
        link: "https://www.aleeshyafoundation.org/",
        jd: "Ceo",
        personalnumber: "1234567890",
      },
      {
        id: 6,
        name: "Ansari",
        email: "Thameem@gmail.com",
        amount: "6369538976",
        organizationname: "Ansari Foundation",
        year: "Subscribed",
        ofcnumber: "03/02/2024",
        link: "https://www.ansarifoundation.org/",
        jd: "Ceo",
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
  return (
    <div>
      <div className="Ngoandpsycologist-main-conatainer">
        <div className="Ngoandpsycologist-top-btns">
          <h1>User Data</h1>
          <button>All</button>
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
                          {/* <th>Select</th> */}
                          <th>No</th>
                          <th>Date</th>
                          <th>User name</th>
                          <th>Email</th>
                          <th>Phone Number</th>
                          <th>Status</th>
                        </tr>
                      </thead>
                      <tbody>
                        {filteredData.map((item) => (
                          <tr key={item.id}>
                            {/* <td>
                        <input type="checkbox" />
                      </td> */}
                            <td>{item.id}</td>
                            <td>{item.ofcnumber}</td>
                            <td>{item.name}</td>
                            <td style={{ textTransform: "lowercase" }}>
                              <p>{item.email}</p>
                            </td>
                            <td>{item.amount}</td>
                            <td>{item.year}</td>
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
}

export default Userdatas