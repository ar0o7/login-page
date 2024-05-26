import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import Form from "react-bootstrap/Form";
import Landingpae from "../Landing-page/Landingpae";
const Loginpage = () => {
  const [userName, setUserName] = useState("");
  const [passWord, setpassWord] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    if (userName === "admin@xyz.com" && passWord === "admin") {
      <Landingpae/>
    } else {
      alert("Try again with correct password");
    }
  };

  return (
    <div>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
          />
          <Form.Text className="">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control 
            type="password" 
            placeholder="Password"
            value={passWord}
            onChange={(e) => setpassWord(e.target.value)}
             />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Remember me on this device" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default Loginpage;