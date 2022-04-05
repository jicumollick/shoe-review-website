import React from "react";
import { StarIcon } from "@heroicons/react/solid";

const SingleCard = (props) => {
  const { id, name, rating, comment, picture } = props.user;
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
          gridTemplateColumns: "1fr 3fr 2fr",
        }}
      >
        <img
          src={picture}
          alt="user_image"
          style={{
            borderRadius: "50%",
          }}
        />
        <h6 className="name fw-bold fs-5">{name}</h6>
        {rating > 4 ? (
          <p>
            <StarIcon
              className="h-3 w-3 text-blue-500"
              style={{ color: "orangered", width: "20px", height: "20px" }}
            ></StarIcon>
            <StarIcon
              className="h-3 w-3 text-blue-500"
              style={{ color: "orangered", width: "20px", height: "20px" }}
            ></StarIcon>{" "}
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
        ) : (
          <p>
            <StarIcon
              className="h-3 w-3 text-blue-500"
              style={{ color: "orangered", width: "20px", height: "20px" }}
            ></StarIcon>
            <StarIcon
              className="h-3 w-3 text-blue-500"
              style={{ color: "orangered", width: "20px", height: "20px" }}
            ></StarIcon>{" "}
            <StarIcon
              className="h-3 w-3 text-blue-500"
              style={{ color: "orangered", width: "20px", height: "20px" }}
            ></StarIcon>
            <StarIcon
              className="h-3 w-3 text-blue-500"
              style={{ color: "orangered", width: "20px", height: "20px" }}
            ></StarIcon>
          </p>
        )}
      </div>
      <div className="card-comment mt-3">{comment}</div>
    </div>
  );
};

export default SingleCard;
