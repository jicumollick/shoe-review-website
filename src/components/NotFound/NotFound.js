import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <section className="px-4  mx-auto max-w-7xl container">
      <div className="row">
        <div className="d-md-flex align-items-center ">
          <div>
            <p className="mb-2 text-xs   uppercase">Error 404</p>
            <h1 className="mb-4 text-2xl font-extrabold leading-tight tracking-tight text-left text-gray-900 md:text-4xl">
              Oops! The page you're looking for isn't here.
            </h1>
            <p className="mb-5  text-left text-gray-800 ">
              You might have the wrong address, or the page may have moved.
            </p>
            <Link to={"/"} className="btn btn-danger">
              Back to homepage
            </Link>
            <Link to={"/about"} className="btn btn-info ms-3">
              About Us
            </Link>
          </div>
          <div>
            <div className="w-full h-full bg-gray-200 rounded-lg ">
              <img
                className="img-fluid"
                src="https://thumbs.dreamstime.com/b/%C3%B0%C2%BF%C3%B0%C2%B5%C3%B1%E2%80%A1%C3%B0%C2%B0%C3%B1%E2%80%9A%C3%B1%C5%93-134036857.jpg"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NotFound;
