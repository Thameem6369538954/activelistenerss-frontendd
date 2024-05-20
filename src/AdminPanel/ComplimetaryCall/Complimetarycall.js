import React, { useState, useRef } from "react";
import Button from 'react-bootstrap/Button';
import './Complimetarycall.css';
import Dropdown from 'react-bootstrap/Dropdown';
// import FilterAdmin from '../../AdminPanel/Hiring/adminHiringImages/FilterAdmin.png';
import Table from 'react-bootstrap/Table';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Pagination from '@mui/material/Pagination';
import PaginationItem from '@mui/material/PaginationItem';
import Stack from '@mui/material/Stack';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Swal from 'sweetalert2';
import { useReactToPrint } from "react-to-print";


import { LiaUserEditSolid } from 'react-icons/lia';
import { RiDeleteBin2Line } from 'react-icons/ri';

const Complimetarycall = () => {
   const componentdata = useRef();
     const openPdfInNewTab = (url) => {
       window.open(url, "_blank");
     };

     const generatePDF = useReactToPrint({
       content: () => componentdata.current,
       documentTitle: "hiring Data",
       onAfterPrint: () => alert("Print success"),
     });
  const [show, setShow] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(4); // Change the number of items per page as needed

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const data = [  // Your data array
    { id: '001', date: '5/4/2024', name: 'Dhanasekhar', email: 'dhanasekhar@gmail.com', time: '12 PM', assignedPerson: 'Dhinesh', duration: '15 min', status: 'Completed' },
    { id: '002', date: '8/4/2024', name: 'Dinesh', email: 'dinesh@gmail.com', time: '2 PM', assignedPerson: 'Sankar', duration: '15 min', status: 'Pending' },
    { id: '003', date: '4/7/2024', name: 'Ajay', email: 'ajay@gmail.com', time: '5 PM', assignedPerson: 'Lincy', duration: '15 min', status: 'Completed' },
    { id: '004', date: '4/7/2024', name: 'Mahesh', email: 'mahesh@gmail.com', time: '6 PM', assignedPerson: 'Ajay', duration: '15 min', status: 'Rejected' },
    { id: '005', date: '4/7/2024', name: 'Lincy', email: 'lincy@gmail.com', time: '7 PM', assignedPerson: 'Mahesh', duration: '15 min', status: 'Pending' },
    { id: '006', date: '4/7/2024', name: 'Thameem', email: 'thameem@gmail.com', time: '5 PM', assignedPerson: 'Ifrah', duration: '15 min', status: 'Completed' },
    { id: '007', date: '4/7/2024', name: 'Ifrah', email: 'ifrah@gmail.com', time: '11 AM', assignedPerson: 'Thameem', duration: '15 min', status: 'Pending' },
    { id: '008', date: '4/7/2024', name: 'Aleeshya', email: 'aleeshya@gmail.com', time: '8 PM', assignedPerson: 'Dilsha', duration: '15 min', status: 'Rejected' },

  ];

  const deletepodcast = () => {
    try {
      const swalWithBootstrapButtons = Swal.mixin({
        customClass: {
          confirmButton: 'btn btn-success',
          cancelButton: 'btn btn-danger'
        },
        buttonsStyling: false
      });
      swalWithBootstrapButtons.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Yes, delete it!',
        cancelButtonText: 'No, cancel!',
        reverseButtons: true
      }).then((result) => {
        if (result.isConfirmed) {
          swalWithBootstrapButtons.fire({
            title: 'Deleted!',
            text: 'Your file has been deleted.',
            icon: 'success'
          });
        } else if (result.dismiss === Swal.DismissReason.cancel) {
          swalWithBootstrapButtons.fire({
            title: 'Cancelled',
            text: 'Your File is safe :)',
            icon: 'error'
          });
        }
      });
    } catch (error) {
      console.log(error);
    }
  };

  // Calculate the index of the last item on the current page
  const indexOfLastItem = currentPage * itemsPerPage;
  // Calculate the index of the first item on the current page
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  // Slice the data array to get the items for the current page
  const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

  const handleChangePage = (event, page) => {
    setCurrentPage(page);
  };

  return (
    <div>
      <div className="complimentary-admin">
        <h1>SPEAK EASY - 15 Minutes Complimentary Call</h1>
        <Button variant="warning" size="lg" onClick={generatePDF}>
          Download Report
        </Button>
      </div>

      <div className="filtering-complimentary">
        <div className="filter-contents-comp">
          <div className="filter-image-comp">
            {/* <img src={FilterAdmin} alt="Filter Icon" /> */}
          </div>

          <div className="contents-list">
            <p>Filter By</p>
            <Dropdown>
              <Dropdown.Toggle variant="lightgreen" id="dropdown-basic">
                Call-Status
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item value="interviewed">Completed</Dropdown.Item>
                <Dropdown.Item value="rejected">Rejected</Dropdown.Item>
                <Dropdown.Item value="hired">Pending</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>

            <Dropdown>
              <Dropdown.Toggle variant="lightgreen" id="dropdown-basic">
                Assigned Person
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item value="applied">Dhinesh</Dropdown.Item>
                <Dropdown.Item value="interviewed">Dhanasekhar</Dropdown.Item>
                <Dropdown.Item value="rejected">Sankar</Dropdown.Item>
                <Dropdown.Item value="hired">Ajay</Dropdown.Item>
                <Dropdown.Item value="hired">Thameem</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>
        </div>
      </div>
      <br />

      <div className="comp-table">
                    <div ref={componentdata}>

        <Table responsive>
          <thead>
            <tr>
              <th>ID</th>
              <th>Date</th>
              <th>Name</th>
              <th>Email</th>
              <th>Time</th>
              <th>Assigned-Person</th>
              <th>Duration</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {currentItems.map((item) => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.date}</td>
                <td>{item.name}</td>
                <td>{item.email}</td>
                <td>{item.time}</td>
                <td>{item.assignedPerson}</td>
                <td>{item.duration}</td>
                <td>
                  <div
                    className={`bg-${
                      item.status === "Completed"
                        ? "success"
                        : item.status === "Pending"
                        ? "warning"
                        : "danger"
                    } p-2 text-${
                      item.status === "Completed"
                        ? "success"
                        : item.status === "Pending"
                        ? "warning"
                        : "danger"
                    } bg-opacity-25`}
                  >
                    {item.status}
                  </div>
                </td>
                <td>
                  <button onClick={handleShow} className="btn btn-success">
                    <LiaUserEditSolid />
                  </button>
                  <button onClick={deletepodcast} className="btn btn-danger">
                    <RiDeleteBin2Line />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
        </div>
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Assign Person</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>Name :</Form.Label>
                <Form.Control
                  type="text"
                  required="true"
                  placeholder="Type in the allocated individual's name"
                  autoFocus
                />
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlTextarea1"
              >
                <br />
                <Modal.Title>Change Call-Status</Modal.Title>
                <br />
                <Form.Label>Change Status :</Form.Label>
                <div className="status-buttons">
                  <Button variant="success">Completed</Button>
                  <Button variant="warning">Pending</Button>
                  <Button variant="danger">Rejected</Button>
                </div>
              </Form.Group>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={handleClose}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      </div>

      <div>
        <br />
        <Stack spacing={2}>
          <Pagination
            count={Math.ceil(data.length / itemsPerPage)}
            renderItem={(item) => (
              <PaginationItem
                slots={{ previous: ArrowBackIcon, next: ArrowForwardIcon }}
                {...item}
              />
            )}
            onChange={handleChangePage}
          />
        </Stack>
      </div>
    </div>
  );
};

export default Complimetarycall;
