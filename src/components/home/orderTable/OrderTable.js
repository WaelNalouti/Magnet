import React, { useState } from "react";
import "./OrderTable.css";
import Search from "./search/Search";
import Table from "./table/Table";
function OrderTable() {
  const [navChecked, setNavChecked] = useState("all");

  return (
    <div className="orderTable">
      <div className="orderTable__nav">
        <button
          className={`orderTable__nav--item ${
            navChecked === "all" ? "nav--item--checked" : ""
          }`}
          onClick={() => {
            setNavChecked("all");
          }}
        >
          Tous les colis
        </button>
        <button
          className={`orderTable__nav--item ${
            navChecked === "delivered" ? "nav--item--checked" : ""
          }`}
          onClick={() => {
            setNavChecked("delivered");
          }}
        >
          Livrés
        </button>
        <button
          className={`orderTable__nav--item ${
            navChecked === "payed" ? "nav--item--checked" : ""
          }`}
          onClick={() => {
            setNavChecked("payed");
          }}
        >
          Remboursés
        </button>
      </div>

      <Search />

      <Table />
    </div>
  );
}

export default OrderTable;
