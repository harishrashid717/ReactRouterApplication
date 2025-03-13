import React from "react";

const Services = () => {
  return (
    <div className="container mt-5 text-center" style={{height : "100vh"}}>
      <h1 className="display-4 text-info">Our Services</h1>
      <p className="lead text-muted">
        We offer a range of services to help you succeed. Explore our offerings
        and see how we can assist you.
      </p>
      <div className="row mt-4">
        <div className="col-md-4">
          <div className="card p-4 shadow-sm">
            <h3>Web Development</h3>
            <p>We build modern and responsive websites tailored to your needs.</p>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card p-4 shadow-sm">
            <h3>SEO Optimization</h3>
            <p>Improve your website's ranking and reach a larger audience.</p>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card p-4 shadow-sm">
            <h3>Consulting</h3>
            <p>Get expert advice to grow your online presence effectively.</p>
          </div>
        </div>
      </div>
      <a href="/contact" className="btn btn-info btn-lg mt-4">Get in Touch</a>
    </div>
  );
};

export default Services;