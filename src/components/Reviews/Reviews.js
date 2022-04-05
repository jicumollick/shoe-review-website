import React, { useEffect, useState } from "react";
import SingleCard from "../SingleCard/SingleCard";
import "./Reviews.css";
const Reviews = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch("users.json")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, [users]);
  return (
    <div>
      <h2 className="my-5">What Our Customer Says</h2>
      <div className="cards-container">
        {users.map((user) => (
          <SingleCard key={user.id} user={user}></SingleCard>
        ))}
      </div>
    </div>
  );
};

export default Reviews;
