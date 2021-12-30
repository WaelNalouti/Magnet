import React, { useEffect, useState } from "react";
import "./OrderTable.css";
import Search from "./search/Search";
import Table from "./table/Table";

//Redux
import { useSelector } from "react-redux";
import { selectOrders } from "../../../features/orders/ordersSlice";
import { CircularProgress } from "@material-ui/core";

function OrderTable() {
  const [navChecked, setNavChecked] = useState("all");
  const [data, setData] = useState([]);

  //get rows from redux
  const rows = useSelector(selectOrders);

  useEffect(() => {
    function filterRows() {
      if (navChecked === "all") {
        setData(rows);
      } else if (navChecked === "payed") {
        let temp = [];
        rows.forEach((row) => {
          if (row.status === "Remboursé") {
            temp.push(row);
            setData(temp);
          }
        });
      } else if (navChecked === "notPayed") {
        let temp = [];
        rows.forEach((row) => {
          if (row.status === "Non Remboursé") {
            temp.push(row);
            setData(temp);
          }
        });
      } else if (navChecked === "notDelivred") {
        let temp = [];
        rows.forEach((row) => {
          if (row.status === "à récupérer") {
            temp.push(row);
            setData(temp);
          }
        });
      }
    }
    filterRows();
  }, [data, navChecked, rows]);

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
            navChecked === "notPayed" ? "nav--item--checked" : ""
          }`}
          onClick={() => {
            setNavChecked("notPayed");
          }}
        >
          Non Remboursés
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
        <button
          className={`orderTable__nav--item ${
            navChecked === "notDelivred" ? "nav--item--checked" : ""
          }`}
          onClick={() => {
            setNavChecked("notDelivred");
          }}
        >
          A récupérer
        </button>
      </div>

      <Search />
      <Table rows={data} />
    </div>
  );
}

export default OrderTable;
