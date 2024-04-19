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
                  <th>Select</th>
                  <th>ID</th>
                  <th>Name</th>
                  <th>Package</th>
                  <th>Amount</th>
                  <th>Method</th>
                  <th>Date of Purchase</th>
                  <th>Date of Expiry</th>
                  <th>Status</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {Array.isArray(data) &&
                  data.map((item) => (
                    <tr key={item.id}>
                      <td>
                        <input type="checkbox" />
                      </td>
                      <td>{item.id}</td>
                      <td>{item.name}</td>
                      <td>{item.package}</td>
                      <td>{item.amount}</td>
                      <td>{item.method}</td>
                      <td>{item.datePurchase}</td>
                      <td>{item.dateExpiry}</td>
                      <td>{item.status}</td>
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