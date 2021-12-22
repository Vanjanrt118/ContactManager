import "./App.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
const AddContact = (props) => {
  let navigate = useNavigate();
  const [nameState, setNameState] = useState();
  const [emailState, setEmailState] = useState();
  const [phoneState, setPhoneState] = useState();
  const onSubmit = (e) => {
    e.preventDefault();
    props.addContact(nameState, emailState, phoneState);
    setNameState("");
    setEmailState("");
    setPhoneState("");
    navigate("/");
  };
  return (
    <div className="card mb-3 addContactHeader ">
      <div className="card-header text-center bg-danger font-weight-bold">
    
       <h5>Add contact form</h5> 
      </div>
      <div className="card-body addContactDiv">
        <form onSubmit={onSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              name="name"
              className="form-control"
              placeholder="Enter name"
              value={nameState}
              onChange={(e) => {
                setNameState(e.target.value);
              }}
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">E-mail:</label>
            <input
              type="email"
              name="email"
              className="form-control"
              placeholder="Enter email"
              value={emailState}
              onChange={(e) => {
                setEmailState(e.target.value);
              }}
            />
          </div>
          <div className="form-group">
            <label htmlFor="phone">Phone:</label>
            <input
              type="text"
              name="name"
              className="form-control"
              placeholder="Enter phone"
              value={phoneState}
              onChange={(e) => {
                setPhoneState(e.target.value);
              }}
            />
          </div>
          <div class="row justify-content-center">
            <button
              type="submit"
              value="Add contact"
              className="btn bg-danger mt-4"
            >
              Add contact
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddContact;
