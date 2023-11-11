import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faTrash,
  faPen,
  faStar,
} from "@fortawesome/free-solid-svg-icons";

const MainPage: React.FC = () => {
  return (
    <div className="container-fluid p-5">
      <h3 className="mb-0 page-topic fc-black">PRODUCTS</h3>
      <div className="row mt-5 px-3">
        <div className="col-md-7">
          <div className="w-100 search-box d-flex p-2 align-items-center justify-content-end bg-faded-grey">
            <div className="search-btn letter-spacing-D1em fw-600 btn btn-primary w-20 bg-blue fc-white d-flex justify-content-center align-items-center">
              <FontAwesomeIcon icon={faMagnifyingGlass} className="mr-2" />
              Search
            </div>
          </div>
        </div>
        <div className="col-md-2"></div>
        <div className="col-md-3 px-5 d-flex justify-content-center align-items-center">
          <div className="add-new-and-add-fav w-100 h-100 d-flex justify-content-between align-items-center">
            <div className="row w-100 h-100">
              <div className="col-md-9 h-100">
                <div className="add-new-product br-10 letter-spacing-D1em fw-600 w-100 h-100 d-flex justify-content-center align-items-center bg-blue fc-white">
                  New Product
                </div>
              </div>
              <div className="col-md-3 pl-0">
                <div className="add-fav br-10 w-100 h-100 d-flex justify-content-center align-items-center fc-white">
                  <FontAwesomeIcon
                    icon={faStar}
                    style={{ color: "#001EB9" }}
                    className="star"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="product-table-container px-5 mt-5">
        <table className="table">
          <thead>
            <tr>
              <th
                scope="col"
                className="fc-blue letter-spacing-D1em extra-bold"
              >
                SKU
              </th>
              <th
                scope="col"
                className="fc-blue letter-spacing-D1em extra-bold"
              >
                IMAGE
              </th>
              <th
                scope="col"
                className="fc-blue letter-spacing-D1em extra-bold"
              >
                PRODUCT NAME
              </th>
              <th
                scope="col"
                className="fc-blue letter-spacing-D1em extra-bold"
              >
                QUANTITY
              </th>
              <th
                scope="col"
                className="fc-blue letter-spacing-D1em extra-bold"
              ></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td scope="row">#CA25</td>
              <td>
                <div className="d-flex p-1 img-wrapper">
                  <img src="/vendors/images/car.png" alt="car" />
                </div>
              </td>
              <td className="w-26">Plastic Bottle</td>
              <td>9</td>
              <td className="w-0">
                <div className="w-100 h-100 d-flex p-5 justify-content-end align-items-center">
                  <div className="delete">
                    <FontAwesomeIcon
                      icon={faTrash}
                      style={{ color: "#001EB9" }}
                      className="p-2"
                    />
                  </div>
                  <div className="edit">
                    <FontAwesomeIcon
                      icon={faPen}
                      style={{ color: "#001EB9" }}
                      className="p-2"
                    />
                  </div>
                  <div className="fav">
                    <FontAwesomeIcon
                      icon={faStar}
                      style={{ color: "#001EB9" }}
                      className="p-2"
                    />
                  </div>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MainPage;
