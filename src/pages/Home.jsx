import React from "react";

const Home = () => {
  return (
    <div className="container mt-5 text-center" style={{height : "85vh"}}>
      <h1 className="display-4 text-primary">Welcome to My Website</h1>
      <p className="lead text-muted">
        This is the Home page, built using React and Bootstrap. Explore different
        pages using React Router.
      </p>
      <a href="/about" className="btn btn-primary btn-lg mt-3">Learn More</a>
    </div>
  );
};

export default Home;
