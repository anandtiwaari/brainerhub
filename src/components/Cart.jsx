import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { RemoveFromCart } from "../redux/CartSlice";
import { Link } from "react-router-dom";
export const Cart = () => {
  const selectorr = useSelector((state) => state.CartSlice);
  const dispatch = useDispatch();
  console.log(selectorr, "sahi hai");
  const mystylenodata = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };
  return (
    <div
      className="productsWrapper CartProducts"
      style={selectorr.length < 1 ? mystylenodata : {}}
    >
      {selectorr.length < 1 ? (
        <div className="no-produ">
          <img
            src="https://cdni.iconscout.com/illustration/premium/thumb/empty-cart-5521508-4610092.png?f=webp"
            alt=""
          />
          <Link to="/dashboard" className="dashboard-menu">
            <Button size="small" variant="contained">
              Add Products
            </Button>
          </Link>
        </div>
      ) : (
        ""
      )}
      {selectorr.map((data, key) => {
        return (
          <Card sx={{ maxWidth: 410 }} key={key} className="card-tag">
            <CardMedia
              sx={{ height: 140 }}
              image={data.payload.image}
              title="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {data.payload.name}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Lizards are a widespread group of squamate reptiles, with over
                6,000 species, ranging across all continents except Antarctica
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">Price:{data.payload.Price}</Button>
              {/* <Button
                // color="danger"
                size="small"
                variant="contained"
                color="success"
                onClick={() => {
                  dispatch(RemoveFromCart(data.payload.id));
                }}
              >
                Remove From cart
              </Button> */}
            </CardActions>
          </Card>
        );
      })}
    </div>
  );
};
