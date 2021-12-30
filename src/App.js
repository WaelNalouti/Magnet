import { useEffect } from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";

import Header from "./components/header/Header";
import Form from "./components/create/Form";
import Home from "./components/home/Home";

import { useDispatch } from "react-redux";
import { add_order } from "./features/orders/ordersSlice";
import axios from "axios";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    async function fetchData() {
      let res = await axios.get(
        "http://localhost/Magnet_api/api/order/read.php"
      );
      let data = res.data.data;
      data?.forEach((order) => {
        dispatch(add_order(order));
      });
    }
    fetchData();
  }, [dispatch]);

  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/add-order" component={Form} />
      </Switch>
    </div>
  );
}

export default App;
