import React, { useEffect, useState } from "react";
import useUsers from "../../hooks/useUsers";
import SingleCard from "../SingleCard/SingleCard";
import "./Reviews.css";
const Reviews = () => {
  const [users] = useUsers([]);

  return (
    <div className="reviews pb-5">
      <h2 className="py-5">What Our Customer Says</h2>
      <div className="cards-container">
        {users.map((user) => (
          <SingleCard key={user.id} user={user}></SingleCard>
        ))}
      </div>
    </div>
  );
};

export default Reviews;
