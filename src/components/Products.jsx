import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useSelector, useDispatch } from "react-redux";
import { AddtoCart } from "../redux/CartSlice";
import { toast } from "react-toastify";
export const Products = ({ data }) => {
  const AddedTocart = (name) =>
    toast.success(name + " Added to Cart", {
      autoClose: 1000,
    });
  const selectorr = useSelector((state) => state.CartSlice);
  //   console.log(data, "its a data");
  const dispatch = useDispatch();
  //   const addToCart = () => {};
  return (
    <div className="productsWrapper">
      <Card sx={{ maxWidth: 410 }}>
        <CardMedia
          sx={{ height: 140 }}
          image={data.image}
          title="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {data.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Price:{data.Price}</Button>
          <Button
            size="small"
            variant="contained"
            onClick={() => {
              dispatch(AddtoCart(data));
              AddedTocart(data.name);
            }}
          >
            Add To Cart
          </Button>
        </CardActions>
      </Card>
    </div>
  );
};
