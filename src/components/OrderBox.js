import React, { useEffect } from "react";
import "./OrderBox.css";

const OrderBox = ({ setOrderClick, orderPos }) => {
  useEffect(() => {
    console.log(orderPos);
  }, [orderPos]);
  return (
    <form
      className="OrderBox"
      style={{
        width: `${orderPos.width}px`,
        top: `${orderPos.top}px`,
        left: `${orderPos.left}px`,
      }}
    >
      <select>
        <option>Relevance</option>
        <option>Name</option>
        <option>Order</option>
        <option>Released</option>
      </select>
    </form>
  );
};

export default OrderBox;
