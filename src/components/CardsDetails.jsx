import React, { useEffect, useState } from "react";
import { Table, Button } from "react-bootstrap";
import "./style.css";
import { useParams, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { RMV_CART } from "../redux/CartSlice";

const CardsDetails = () => {
  const [data, setData] = useState([]);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();
  const getdata = useSelector((state) => state.cart.cart);

  const compare = () => {
    let compareData = getdata.filter((e) => {
      return e.id == id;
    });
    setData(compareData);
  };

  const delee = (id) => {
    dispatch(RMV_CART(id));
  };

  useEffect(() => {
    compare();
  }, []);

  return (
    <div>
      <div className="container mt-2">
        <h2 className="text-center">Items Details Page</h2>
        <section className="container mt-2">
          <div className="iteamsdetails d-flex">
            {data.map((ele) => {
              return (
                <>
                  <div className="items_img">
                    <img src={ele.imgdata} alt="pr_img" />
                  </div>
                  <div className="details">
                    <Table>
                      <tr>
                        <td>
                          <p>
                            <strong>Restaurant</strong> : {ele.rname}
                          </p>
                          <p>
                            <strong>Price</strong> : Rs. {ele.price}
                          </p>
                          <p>
                            <strong>Dishes</strong> : {ele.address}
                          </p>
                          <p>
                            <strong>Total</strong> :Rs 0
                          </p>
                        </td>
                        <td>
                          <p>
                            <strong>Rating : </strong>
                            <span
                              style={{
                                background: "green",
                                color: "#fff",
                                padding: "2px 5px",
                                borderRadius: "5px",
                              }}
                            >
                              {ele.rating} ⭐
                            </span>
                          </p>
                          <p>
                            <strong>Order review : </strong>
                            {ele.somedata}
                          </p>
                          <p>
                            <strong>Remove : </strong>{" "}
                            <i
                              style={{
                                fontSize: "20px",
                                color: "red",
                                cursor: "pointer",
                              }}
                              className="fa-solid fa-trash"
                              onClick={() => {
                                delee(id);
                                navigate("/");
                              }}
                            ></i>
                          </p>
                        </td>
                      </tr>
                    </Table>
                  </div>
                </>
              );
            })}
          </div>
        </section>
      </div>
    </div>
  );
};

export default CardsDetails;
