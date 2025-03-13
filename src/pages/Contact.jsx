import React from "react";

const Contact = () => {
  return (
    <div className="container mt-5 text-center" style={{height : "100vh"}}>
      <h1 className="display-4 text-danger">Contact Us</h1>
      <p className="lead text-muted">
        Have questions or need assistance? Reach out to us using the form below.
      </p>
      <div className="row justify-content-center">
        <div className="col-md-6">
          <form className="p-4 border rounded shadow-sm bg-light">
            <div className="mb-3">
              <label className="form-label">Name</label>
              <input type="text" className="form-control" placeholder="Enter your name" />
            </div>
            <div className="mb-3">
              <label className="form-label">Email</label>
              <input type="email" className="form-control" placeholder="Enter your email" />
            </div>
            <div className="mb-3">
              <label className="form-label">Message</label>
              <textarea className="form-control" rows="4" placeholder="Your message"></textarea>
            </div>
            <button type="submit" className="btn btn-danger btn-lg w-100">Send Message</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;