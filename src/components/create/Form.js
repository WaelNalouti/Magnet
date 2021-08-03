import React, { useState } from "react";
import "./Form.css";
import TextField from "@material-ui/core/TextField";
import { Button, InputAdornment } from "@material-ui/core";
import { Link } from "react-router-dom";
import { add_order } from "../../features/orders/ordersSlice";
import { useDispatch } from "react-redux";

function Form() {
  const dispatch = useDispatch();

  const [order, setOrder] = useState({
    firstClient: "",
    lastClient: "",
    cinClient: "",
    addressClient: "",
    zipClient: "",
    telClient: "",
    emailClient: "",
    ref: "",
    price: "",
    firstReciever: "",
    lastReciever: "",
    cinReciever: "",
    addressReciever: "",
    zipReciever: "",
    telReciever: "",
    emailReciever: "",
  });

  const orderData = {
    ref: order.ref.toUpperCase(),
    prix: `${order.price} TND`,
    date: new Date().toLocaleString(),
    client: `${order.firstClient} ${order.lastClient}`,
    cinClient: order.cinClient,
    addressClient: order.addressClient,
    telClient: order.telClient,
    emailClient: order.emailClient,
    reciever: `${order.firstReciever} ${order.lastReciever}`,
    cinReciever: order.cinReciever,
    addressReciever: order.addressReciever,
    telReciever: order.telReciever,
    emailReciever: order.emailReciever,
    status: "à récupérer",
  };
  // updating the state of multiple object's property with one function
  // <!> NOT WORKING
  // const handleChange = (prop) => (event) => {
  //   setOrder({ ...order, [prop]: event.target.value });
  // };

  const checkEmpty = () => {
    if (
      order.firstClient === "" ||
      order.lastClient === "" ||
      order.cinClient === "" ||
      order.addressClient === "" ||
      order.zipClient === "" ||
      order.telClient === "" ||
      order.ref === "" ||
      order.price === "" ||
      order.firstReciever === "" ||
      order.lastReciever === "" ||
      order.cinReciever === "" ||
      order.addressReciever === "" ||
      order.zipReciever === "" ||
      order.telReciever === ""
    ) {
      return true;
    } else return false;
  };

  return (
    <div className="addColis">
      <h1 className="addColis__title">Nouveau colis</h1>
      <form className="addColis__form">
        <div className="form__section">
          <p className="form__section__title">Information Client</p>
          <div className="form__section__subsection">
            <h3 className="form__section__subtitle">
              Information personnelles
            </h3>
            <div className="form__section__subsection__divider">
              <TextField
                required
                label="nom"
                value={order.lastClient}
                onChange={(e) =>
                  setOrder({ ...order, lastClient: e.target.value })
                }
                size="small"
                variant="outlined"
                className="form__field"
              />
              <TextField
                required
                label="prénom"
                value={order.firstClient}
                onChange={(e) =>
                  setOrder({ ...order, firstClient: e.target.value })
                }
                size="small"
                variant="outlined"
                className="form__field"
              />
            </div>
            <div className="form__section__subsection__divider">
              <TextField
                required
                label="cin"
                value={order.cinClient}
                onChange={(e) =>
                  setOrder({ ...order, cinClient: e.target.value })
                }
                size="small"
                variant="outlined"
                className="form__field"
              />
            </div>
            <div className="form__section__subsection__divider">
              <TextField
                required
                label="tel"
                value={order.telClient}
                onChange={(e) =>
                  setOrder({ ...order, telClient: e.target.value })
                }
                size="small"
                variant="outlined"
                className="form__field"
              />
              <TextField
                label="e-mail"
                value={order.emailClient}
                onChange={(e) =>
                  setOrder({ ...order, emailClient: e.target.value })
                }
                size="small"
                variant="outlined"
                className="form__field"
              />
            </div>
          </div>
          <div className="form__section__subsection">
            <h3 className="form__section__subtitle">Addresse</h3>
            <div className="form__section__subsection__divider">
              <TextField
                required
                label="addresse"
                value={order.addressClient}
                onChange={(e) =>
                  setOrder({ ...order, addressClient: e.target.value })
                }
                size="small"
                variant="outlined"
                className="form__field"
              />
              <TextField
                required
                label="code postal"
                value={order.zipClient}
                onChange={(e) =>
                  setOrder({ ...order, zipClient: e.target.value })
                }
                size="small"
                variant="outlined"
                className="form__field"
              />
            </div>
          </div>
        </div>
        <div className="form__section">
          <p className="form__section__title">Colis</p>
          <div className="form__section__subsection">
            <h3 className="form__section__subtitle">
              Information sur le colis
            </h3>
            <div className="form__section__subsection__divider">
              <TextField
                required
                label="ref"
                value={order.ref}
                onChange={(e) => setOrder({ ...order, ref: e.target.value })}
                size="small"
                variant="outlined"
                className="form__field"
              />
              <TextField
                required
                label="prix"
                value={order.price}
                onChange={(e) => setOrder({ ...order, price: e.target.value })}
                size="small"
                variant="outlined"
                className="form__field"
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">TND</InputAdornment>
                  ),
                }}
              />
            </div>
          </div>
        </div>
        <div className="form__section">
          <p className="form__section__title">Destinataire</p>
          <div className="form__section__subsection">
            <h3 className="form__section__subtitle">
              Information personnelles
            </h3>
            <div className="form__section__subsection__divider">
              <TextField
                required
                label="nom"
                value={order.lastReciever}
                onChange={(e) =>
                  setOrder({ ...order, lastReciever: e.target.value })
                }
                size="small"
                variant="outlined"
                className="form__field"
              />
              <TextField
                required
                label="prénom"
                value={order.firstReciever}
                onChange={(e) =>
                  setOrder({ ...order, firstReciever: e.target.value })
                }
                size="small"
                variant="outlined"
                className="form__field"
              />
            </div>
            <div className="form__section__subsection__divider">
              <TextField
                required
                label="cin"
                value={order.cinReciever}
                onChange={(e) =>
                  setOrder({ ...order, cinReciever: e.target.value })
                }
                size="small"
                variant="outlined"
                className="form__field"
              />
            </div>
            <div className="form__section__subsection__divider">
              <TextField
                required
                label="tel"
                value={order.telReciever}
                onChange={(e) =>
                  setOrder({ ...order, telReciever: e.target.value })
                }
                size="small"
                variant="outlined"
                className="form__field"
              />
              <TextField
                label="e-mail"
                value={order.emailReciever}
                onChange={(e) =>
                  setOrder({ ...order, emailReciever: e.target.value })
                }
                size="small"
                variant="outlined"
                className="form__field"
              />
            </div>
          </div>
          <div className="form__section__subsection">
            <h3 className="form__section__subtitle">Addresse</h3>
            <div className="form__section__subsection__divider">
              <TextField
                required
                label="addresse"
                value={order.addressReciever}
                onChange={(e) =>
                  setOrder({ ...order, addressReciever: e.target.value })
                }
                size="small"
                variant="outlined"
                className="form__field"
              />
              <TextField
                required
                label="code postal"
                value={order.zipReciever}
                onChange={(e) =>
                  setOrder({ ...order, zipReciever: e.target.value })
                }
                size="small"
                variant="outlined"
                className="form__field"
              />
            </div>
          </div>
        </div>
      </form>

      <div className="form__section form__section__bottom">
        <p className="form__description">- * champ obligatoire</p>
        <p className="form__description">
          - le status de colis est "à récupérer" par defaut
        </p>
        {checkEmpty ? (
          <p>les champ obligatoire ne doivent pas être vides !</p>
        ) : null}
        <div className="form__submit">
          <Link to="/">
            <Button variant="outlined" className="form__submit--cta">
              annuler
            </Button>
          </Link>
          <Link to="/">
            <Button
              disabled={checkEmpty()}
              variant="contained"
              color="primary"
              className="form__submit--cta"
              onClick={() => dispatch(add_order(orderData))}
            >
              enregistrer
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Form;
