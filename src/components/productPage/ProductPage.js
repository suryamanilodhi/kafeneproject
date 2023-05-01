import React, { useEffect, useState } from "react";
import Navbar from "../Navbar";

function ProductPage() {
  const [selected, setSelected] = useState([]);
  const [productData, setProductData] = useState();
  let today = new Date();
  let year =  today.getFullYear();



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

  useEffect(() => {
    fetch("https://5fc1a1c9cb4d020016fe6b07.mockapi.io/api/v1/products")
      .then((res) => res.json())
      .then((data) => setProductData(data));
  }, []);

  useEffect(() => {
    updateproducts();
  }, [selected]);

  const updateproducts = () => {
    if (selected.includes("LowStock")) {
      let renderData = productData.filter((item) => item.stock < 100);
      setProductData(renderData);
    }
    else if (selected.includes('Expired')){
      let renderData = productData.filter((item) => item.expiryDate.split('-')[2] < year)
      setProductData(renderData)
    }
  };
  console.log(selected)

  return (
    <>
      <Navbar />
      <section>
        <h1> Products </h1>
        <div id="filter_Table_Container">
          <div id="filterContainer">
            <h3>Filters</h3>
            <div>
              Count:
              <span id="Product_Count">
                {productData ? productData.length : 0}
              </span>
            </div>
            <div>
              <input
                type="checkbox"
                name="Expired"
                id="Expired"
                onChange={(e) => updateSelected(e)}
              />
              Expired
            </div>
            <div>
              <input
                type="checkbox"
                name="LowStock"
                id="LowStock"
                onChange={(e) => updateSelected(e)}
              />
              Low Stock
            </div>
          </div>

          <div id="tableContainer">
            <table>
              <tr>
                <th>ID</th>
                <th>Product Name</th>
                <th>Product Brand</th>
                <th>Expiry</th>
                <th>Unit Price</th>
                <th>Stock</th>
              </tr>
              <tbody id="tbody_Products">
                {productData ? (
                  selected.length == 0 && productData ? (
                    productData.map((item) => {
                      return (
                        <tr key={item.id}>
                          <td id="Pid">{item.id}</td>
                          <td id="PmedicineName"> {item.medicineName}</td>
                          <td id="Pbrands">{item.medicineBrand} </td>
                          <td id="Pexpiry">{item.expiryDate}</td>
                          <td id="PunitPrice">{item.unitPrice}</td>
                          <td id="PStock"> {item.stock} </td>
                        </tr>
                      );
                    })
                  ) : (
                    productData.map((item) => {
                      return (
                        <tr key={item.id}>
                          <td id="Pid">{item.id}</td>
                          <td id="PmedicineName"> {item.medicineName}</td>
                          <td id="Pbrands">{item.medicineBrand} </td>
                          <td id="Pexpiry">{item.expiryDate}</td>
                          <td id="PunitPrice">{item.unitPrice}</td>
                          <td id="PStock"> {item.stock} </td>
                        </tr>
                      );
                    })
                  )
                ) : (
                  <h1>      </h1>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </>
  );
}

export default ProductPage;
