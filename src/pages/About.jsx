import React from "react";

const About = () => {
  return (
    <div className="container mt-5 text-center" style={{height : "100vh"}}>
      <h1 className="display-4 text-success">About Us</h1>
      <p className="lead text-muted">
        This is the About page. Here, you can learn more about our mission,
        vision, and the purpose of this website.
      </p>
      <a href="/contact" className="btn btn-success btn-lg mt-3">Contact Us</a>
    </div>
  );
};

export default About;
