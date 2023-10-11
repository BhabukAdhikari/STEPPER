import React, { useState, useEffect } from 'react';
import Form from 'react-bootstrap/Form';

import { useFormValues } from '../../context/FormContext';

export const Personal = ({ handleNext }) => {
  const { formValues, handleFormValues: handleChange } = useFormValues();

  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = validate(formValues);
    setFormErrors(errors);
    setIsSubmit(true);
  };

  useEffect(() => {
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      handleNext();
    }
  }, [formErrors, isSubmit, handleNext]);

  const validate = (values) => {
    const errors = {};
    if (!values.name) {
      errors.name = 'Username is required!';
    }
    if (!values.email) {
      errors.email = 'Email is required!';
    }
    if (!values.number) {
      errors.number = 'Phone number is required!';
    }
    if (values.number.length !== 10) {
      errors.number = 'Phone number must be of 10 digits';
    }
    return errors;
  };
  return (
    <div className="col-md-7">
      <div className="mt-4">
        <h1 className="section-title">Personal info</h1>
        <p className="section-text">Please provide your name, email address, and phone number.</p>

        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formBasicName">
            <div className="d-flex justify-content-between">
              <Form.Label>Name</Form.Label>
              <span className="text-danger span-details">{formErrors.name}</span>
            </div>
            <Form.Control
              type="text"
              placeholder="Username......"
              name="name"
              value={formValues.name}
              onChange={handleChange}
              className={formErrors.name ? 'is-invalid' : ''}
            />

          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <div className="d-flex justify-content-between">
              <Form.Label>Email Address</Form.Label>
              <span className="text-danger span-details">{formErrors.email}</span>
            </div>
            <Form.Control
              type="email"
              placeholder="google..@123"
              name="email"
              value={formValues.email}
              onChange={handleChange}
              className={formErrors.email ? 'is-invalid' : ''}
            />

          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicNumber">
            <div className="d-flex justify-content-between">
              <Form.Label>Phone Number</Form.Label>
              <span className="text-danger span-details">{formErrors.number}</span>
            </div>
            <Form.Control
              type="number"
              placeholder="e.g. +12334"
              name="number"
              value={formValues.number}
              onChange={handleChange}
              className={formErrors.number ? 'is-invalid' : ''}
            />
          </Form.Group>
          <div className="d-flex justify-content-end">
            <button className="btn-next-step" type="submit">
              Next Step
            </button>
          </div>
        </Form>
      </div>
    </div>
  );
};
