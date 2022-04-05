import React from "react";
import { StarIcon } from "@heroicons/react/solid";

const SingleCard = () => {
  return (
    <div
      className="card "
      style={{
        width: "23rem",
        padding: "15px",
        boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
      }}
    >
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 3fr 2fr ",
        }}
      >
        <img
          src="https://randomuser.me/api/portraits/thumb/men/5.jpg"
          alt="user_image"
          style={{
            borderRadius: "50%",
          }}
        />
        <h6 className="name fw-bold fs-5">Mendela Samanta</h6>
        <p>
          <StarIcon
            className="h-3 w-3 text-blue-500"
            style={{ color: "orangered", width: "20px", height: "20px" }}
          ></StarIcon>
          <StarIcon
            className="h-3 w-3 text-blue-500"
            style={{ color: "orangered", width: "20px", height: "20px" }}
          ></StarIcon>
          <StarIcon
            className="h-3 w-3 text-blue-500"
            style={{ color: "orangered", width: "20px", height: "20px" }}
          ></StarIcon>
          <StarIcon
            className="h-3 w-3 text-blue-500"
            style={{ color: "orangered", width: "20px", height: "20px" }}
          ></StarIcon>
          <StarIcon
            className="h-3 w-3 text-blue-500"
            style={{ color: "orangered", width: "20px", height: "20px" }}
          ></StarIcon>
        </p>
      </div>
      <div className="card-comment">
        "Some quick example text to build on the card title and make up the bulk
        of the card's content."
      </div>
    </div>
  );
};

export default SingleCard;
