import React, { useEffect, useState } from "react";
import Navbar from "../Navbar";



function OrderPage() {
  const [orderData, setOrderData] = useState();
  const [selected, setSelected] = useState([]);
  const [count, setCount] = useState(0);

  useEffect(() => {
    fetch("https://5fc1a1c9cb4d020016fe6b07.mockapi.io/api/v1/orders")
      .then((res) => res.json())
      .then((data) => setOrderData(data));
  }, []);

  const updateSelected = (e) => {
    let check = e.target.checked;
    let val = e.target.name;

    if (check == true && !selected.includes(val)) {
      setSelected((item) => [...item, val]);
    } else if (check == false && selected.includes(val)) {
      selected.splice(selected.indexOf(val), 1);
      setSelected(selected);
    }
  };

  console.log(selected);
  console.log(count);

  return (
    <>
      <Navbar />
      <section>
        <h1> Orders </h1>
        <div id="filter_Table_Container">
          <div id="filterContainer">
            <h3>Filters</h3>
            <div>
              Count:{" "}
              <span id="order_Count"> {orderData && selected.length == 0 ? 
             orderData.length : selected.length > 0 ? orderData
             .filter((item) => selected.includes(item.orderStatus)).length : 0
            } </span>
            </div>
            <div>
              <input
                type="checkbox"
                name="New"
                id="New"
                onChange={(e) => updateSelected(e)}
              />{" "}
              New
            </div>
            <div>
              <input
                type="checkbox"
                name="Packed"
                id="Packed"
                onChange={(e) => updateSelected(e)}
              />{" "}
              Packed
            </div>
            <div>
              <input
                type="checkbox"
                name="InTransit"
                id="InTransit"
                onChange={(e) => updateSelected(e)}
              />{" "}
              InTransit{" "}
            </div>
            <div>
              <input
                type="checkbox"
                name="Delivered"
                id="Delivered"
                onChange={(e) => updateSelected(e)}
              />{" "}
              Delivered{" "}
            </div>
          </div>

          <div id="tableContainer">
            <table>
              <tr>
                <th id="IdBox">ID</th>
                <th id="customerBox">Customer</th>
                <th id="dateBox">Date</th>
                <th id="AmountBox">Amount</th>
                <th id="statusBox">Status</th>
              </tr>
              <tbody id="tbody">
                {orderData ? (
                  selected.length == 0 && orderData ? (
                    orderData.map((item) => {
                      return (
                        <tr key={item.id}>
                          <td id="Oid">{item.id}</td>
                          <td id="OcustomerName">{item.customerName}</td>
                          <td id="OorderData">
                            {item.orderDate} <br />
                            <span id="order_TimeSpan"> {item.orderTime} </span>
                          </td>
                          <td id="Oamount">$ {item.amount}</td>
                          <td id="OrderStatus">{item.orderStatus}</td>
                        </tr>
                      );
                    })
                  ) : (
                    orderData
                      .filter((item) => selected.includes(item.orderStatus))
                      .map((item) => {
                        return (
                          <tr key={item.id}>
                            <td id="Oid">{item.id}</td>
                            <td id="OcustomerName">{item.customerName}</td>
                            <td id="OorderData">
                              {item.orderDate} <br />
                              <span id="order_TimeSpan">{item.orderTime}</span>
                            </td>
                            <td id="Oamount">${item.amount}</td>
                            <td id="OrderStatus">{item.orderStatus}</td>
                          </tr>
                        );
                      })
                  )
                ) : (
                  <h1>    </h1>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </>
  );
}

export default OrderPage;
