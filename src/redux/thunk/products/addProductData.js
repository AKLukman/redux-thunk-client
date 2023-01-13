import { json } from "react-router-dom";

const addProductData = (product) => {
  return async (dispatch, getState) => {
    const res = await fetch("http://localhost:5000/product", {
      method: "POST",
      body: JSON.stringify(product),
      headers: {
        "Content-type": "application/json",
      },
    });
    const data = await res.json();
    if (data.acknowleged) {
      dispatch(
        addProductData({
          _id: data.insertedId,
          ...product,
        })
      );
    }
  };
};

export default addProductData;
