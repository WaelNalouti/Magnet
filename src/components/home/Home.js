import React from "react";
import "./Home.css";
import { Button } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import OrderTable from "./orderTable/OrderTable";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="home">
      <div className="home__header">
        <h1 className="home__header__title">Overview</h1>
        <Link
          to="/add-order"
          style={{ textDecoration: "none", color: "white" }}
        >
          <Button
            className="home__header--cta"
            variant="contained"
            color="primary"
          >
            <AddIcon className="home__header--cta__icon" />
            Ajouter colis
          </Button>
        </Link>
      </div>

      <OrderTable />
    </div>
  );
}

export default Home;
