import React from "react";
import "./statementPage.css";
import Header from "../homepage/header/Header";

const StatementPage = () => {
  return (
    <div>
      <Header />
      <h1>Get Support for Your Company</h1>
      <p>
        Fill out the form below to let us know how we can assist you. Whether
        you need IT support, programming help, or graphic design services, we're
        here to help you achieve your goals.
      </p>
      <form>
        <div className="form-group">
          <label htmlFor="companyName">Company Name:</label>
          <input type="text" id="companyName" name="companyName" required />
        </div>
        <div className="form-group">
          <label htmlFor="fullName">Your Name:</label>
          <input type="text" id="fullName" name="fullName" required />
        </div>
        <div className="form-group">
          <label htmlFor="serviceType">Service Type:</label>
          <select id="serviceType" name="serviceType" required>
            <option value="">Select Service</option>
            <option value="itSupport">IT Support</option>
            <option value="softwareSupport">Software Support</option>
            <option value="graphicDesign">Graphic Design</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="budget">Budget:</label>
          <input type="number" id="budget" name="budget" required />
        </div>
        <div className="form-group">
          <label htmlFor="description">Describe Your Needs:</label>
          <textarea
            id="description"
            name="description"
            rows="4"
            required
          ></textarea>
        </div>
        <button type="submit">Submit Request</button>
      </form>
    </div>
  );
};

export default StatementPage;
