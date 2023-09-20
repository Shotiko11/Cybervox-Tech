import React from "react";
import "./statementPage.css";
import Header from "../homepage/header/Header";

const StatementPage = () => {
  return (
    <div>
      <Header />
      <div className="page-content">
        <h1 className="page-title">Get Support for Your Company</h1>
        <p className="page-description">
          Fill out the form below to let us know how we can assist you. Whether
          you need IT support, programming help, or graphic design services,
          {"we're"} here to help you achieve your goals.
        </p>
        <form className="request-form">
          <div className="form-group">
            <label htmlFor="companyName" className="form-label">
              Company Name:
            </label>
            <input
              type="text"
              id="companyName"
              name="companyName"
              className="form-input"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="fullName" className="form-label">
              Your Name:
            </label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              className="form-input"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="serviceType" className="form-label">
              Service Type:
            </label>
            <select
              id="serviceType"
              name="serviceType"
              className="form-select"
              required
            >
              <option value="">Select Service</option>
              <option value="itSupport">IT Support</option>
              <option value="softwareSupport">Software Support</option>
              <option value="graphicDesign">Graphic Design</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="budget" className="form-label">
              Budget:
            </label>
            <input
              type="number"
              id="budget"
              name="budget"
              className="form-input"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="description" className="form-label">
              Describe Your Needs:
            </label>
            <textarea
              id="description"
              name="description"
              rows="4"
              className="form-textarea"
              required
            ></textarea>
          </div>
          <button type="submit" className="form-submit">
            Submit Request
          </button>
        </form>
      </div>
    </div>
  );
};

export default StatementPage;
