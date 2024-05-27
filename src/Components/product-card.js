import React from "react";
import { MdDelete } from "react-icons/md";
import { Link } from "react-router-dom";

export default function Productcard(props) {
  return (
    <div className="d-flex flex-wrap product_card_body_div">
      <div className="col-sm-4 pl-0 pr-0 bg-black Product_imag_div">
        <img
          src={props.image}
          className="w-100 h-100 object-fit-cover product_image"
        />
      </div>
      <div className="card-body col-sm-8 p-2">
        <div className="d-flex justify-content-between align-items-center">
          <h5 className="card-title">{props.title}</h5>
          {props.ratingShow && (
            <span className="badge bg-warning text-white">
              {props.rating} ★
            </span>
          )}
        </div>
        <p className="card-text p-0 m-0">{props.location}</p> <br />
        {props.showButton && (
          <Link
            to="/order"
            className="btn btn-light btn-outline-primary border_radias"
            onClick={props.onBookNow}
          >
            Book Now!
          </Link>
        )}
        {props.cardbackside && (
          <div className="">
            <p className="badge bg-warning text-white m-0">{props.rating} ★</p>
            <span>(12k Ratings)</span>
            <div className="d-flex justify-content-between">
              <h6 className="p-0">
                <strong className="p-0 m-0">{props.price}.00 USD</strong>
              </h6>
              <button className="border-0 text-danger Payment_delet_button">
                <MdDelete />
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

Productcard.defaultProps = {
  showButton: true,
  cardbackside: true,
  ratingShow: true,
};
