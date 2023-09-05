import React from "react";
import "./RegistrationStyle.css";

const Registration = () => {
  return (
    <>
      <div className="registration-form">
        <h1>Register Here!</h1>
        <form>
          <div className="form-group mb-3">
            <input
              type="text"
              className="form-control"
              id="exampleInputName"
              placeholder="Enter Name"
            />
          </div>
          <div className="form-group mb-3">
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail"
              placeholder="Enter Email"
            />
          </div>
          <div className="form-group mb-3">
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword"
              placeholder="Enter Password"
            />
          </div>
          <div className="form-group mb-3">
            <textarea
              placeholder="Enter your address"
              className="form-control"
            />
          </div>
          <button type="submit" class="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

export default Registration;

{
  /* <input type="text" placeholder="Write your Name" />
<input type="email" placeholder="Write your Email" />
<input type="text" placeholder="Write a Subject" />
<textarea placeholder="Write a message" rows="4"></textarea>
<button type="button">Send</button> */
}
