import React from "react";
import useUsers from "../../hooks/useUsers";
import SingleCard from "../SingleCard/SingleCard";
import "./HomePage.css";

const HomePage = () => {
  const [users] = useUsers([]);

  if (users.length > 3) {
    users.length = 3;
  }

  return (
    <div className="homepage">
      <div className="d-md-flex pt-5 align-items-center">
        <div className="col-md-6 p-3 ">
          <h1 className="fw-bold text-primary">Your Best Shoe</h1>
          <p
            style={{
              fontWeight: "bold",
              fontSize: "20px",
              padding: "20px 0px",
            }}
          >
            We are suggesting you a very nice shoe that is winning our regular
            review battle among the globe. This is the Number 1 Authentic
            website in the world to show the review of multiple companies shoes.
          </p>
          <button className="btn btn-success px-4 py-2 fw-bold">Buy Now</button>
        </div>
        <div className="col-md-6">
          <img
            src="https://images.unsplash.com/photo-1579298245158-33e8f568f7d3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8NHx8fGVufDB8fHx8"
            alt=""
            className="img-fluid p-5"
            style={{ borderRadius: "40%" }}
          />
        </div>
      </div>
      <div className="py-5">
        <h2>Our Customer Reviews</h2>
        <div className="cards-container">
          {users.map((user) => (
            <SingleCard key={user.id} user={user}></SingleCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
