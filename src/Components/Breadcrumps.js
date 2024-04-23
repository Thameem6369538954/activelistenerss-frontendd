import React, { useState } from 'react'
import '../Css/Breadcrumps.css'
import { VscArrowSmallLeft } from "react-icons/vsc";
const Breadcrumps = () => {
  const [breadcrumbs, setBreadcrumbs] = useState([]);

  const handleGoBack = () => {
    window.history.back();
  };

  // Function to add a breadcrumb
  const addBreadcrumb = (label, path) => {
    setBreadcrumbs([...breadcrumbs, { label, path }]);
  };

  // Function to remove breadcrumbs after a certain index
  const removeBreadcrumbsAfterIndex = (index) => {
    setBreadcrumbs(breadcrumbs.slice(0, index + 1));
  };

  // Render the breadcrumb trail
  return (
    <div>
      <div className="beader-main">
        <nav aria-label="breadcrumb" className="breadcrumps">
          <ol className="breadcrumb">
            <li
              className="breadcrumb-item"
              onClick={handleGoBack}
              style={{ cursor: "pointer", listStyleType: "none" }}
            >
              <VscArrowSmallLeft className='back-arrow' /> Go Back
            </li>
            {breadcrumbs.map(({ label, path }, index) => (
              <li key={index} className="breadcrumb-item">
                <a href={path}>{label}</a>
              </li>
            ))}
          </ol>
        </nav>
      </div>
    </div>
  );
}

export default Breadcrumps