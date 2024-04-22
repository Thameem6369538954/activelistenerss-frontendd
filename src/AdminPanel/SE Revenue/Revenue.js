import React, { useState } from 'react'
import { LuDownload } from "react-icons/lu";
import './Revenue.css'

const Revenue = () => {
    const [data, setData] = useState([
      {
        id: 1,
        name: "Sanker",
        package: "Basic",
        amount: "999",
        method: "GPay",
        datePurchase: "04 Sep 2024",
        dateExpiry: "11 Sep 2024",
        status: "Completed",
       
      },
      {
        id: 2,
        name: "Dhanasekar",
        package: "Premium",
        amount: "1999",
        method: "Paypal",
        datePurchase: "15 Sep 2024",
        dateExpiry: "30 Sep 2024",
        status: "Completed",
      },
    ]);
  return (
    <div>
      <div className="revenuve-main-container">
        <div className="revenvue-top-btn">
          <h1>Speak Easy - Revenue Tracker</h1>
          <button>
            Download Report <LuDownload />
          </button>
        </div>
        <div className="revenvue-table">
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
                    <p>Name</p>
                  </th>
                  <th>
                    <p>Package</p>
                  </th>
                  <th>
                    <p>Amount</p>
                  </th>
                  <th>
                    <p>Method</p>
                  </th>
                  <th>
                    <p>Date of Purchase</p>
                  </th>
                  <th>
                    <p>Date of Expiry</p>
                  </th>
                  <th>
                    <p>Status</p>
                  </th>
                  <th>
                    <p>Actions</p>
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
                        <p>{item.package}</p>
                      </td>
                      <td>
                        <p>{item.amount}</p>
                      </td>
                      <td>
                        <p> {item.method}</p>
                      </td>
                      <td>
                        <p>{item.datePurchase}</p>
                      </td>
                      <td>
                        <p>{item.dateExpiry}</p>
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

export default Revenue