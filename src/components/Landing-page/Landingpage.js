/* eslint-disable */
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const LandingPage = () => {
  return (
    <div className="App-header">
      <p>This page is under construction please try again in few days</p>
      <p>Thanks for your corporation</p>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address for further updates</Form.Label>
          <Form.Control 
          type="email" 
          placeholder="Enter email" 
          
          />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default LandingPage;
