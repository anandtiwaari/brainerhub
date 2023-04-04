import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import ShoppingCartRoundedIcon from "@mui/icons-material/ShoppingCartRounded";
import { Products } from "./Products";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
const pages = ["Products"];
const settings = ["Dashboard", "Logout"];

export const Dashboard = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  const productDetailArray = [
    {
      image:
        "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZHVjdHN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
      id: Math.floor(Math.random() * 10),
      name: "Boat Headphones",
      Price: "$240.00",
    },
    {
      image:
        "https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cHJvZHVjdHN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
      id: Math.floor(Math.random() * 10),
      name: "Casual Shoe",
      Price: "$150.00",
    },
    {
      image:
        "https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHByb2R1Y3RzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
      id: Math.floor(Math.random() * 10),
      name: "Mens Watch",
      Price: "$55.00",
    },
    {
      image:
        "https://images.unsplash.com/photo-1525904097878-94fb15835963?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
      id: Math.floor(Math.random() * 10),
      name: "Pineapple slice",
      Price: "$99.84",
    },
    {
      id: Math.floor(Math.random() * 10),
      name: "iPhone X",
      // description:
      //   "SIM-Free, Model A19211 6.5-inch Super Retina HD display with OLED technology A12 Bionic chip with ...",
      Price: 899,
      // discountPercentage: 17.94,
      // rating: 4.44,
      // stock: 34,
      // brand: "Apple",
      // category: "smartphones",
      image: "https://i.dummyjson.com/data/products/2/thumbnail.jpg",
      // images: "https://i.dummyjson.com/data/products/2/1.jpg",
      // "https://i.dummyjson.com/data/products/2/2.jpg",
      // "https://i.dummyjson.com/data/products/2/3.jpg",
      // "https://i.dummyjson.com/data/products/2/thumbnail.jpg",
    },
    {
      id: Math.floor(Math.random() * 10),
      name: "Samsung Universe 9",
      // description:
      //   "Samsung's new variant which goes beyond Galaxy to the Universe",
      Price: 1249,
      // discountPercentage: 15.46,
      // rating: 4.09,
      // stock: 36,
      // brand: "Samsung",
      // category: "smartphones",
      image: "https://i.dummyjson.com/data/products/3/thumbnail.jpg",
      // images: ["https://i.dummyjson.com/data/products/3/1.jpg"],
    },
    {
      id: Math.floor(Math.random() * 10),
      name: "OPPOF19",
      // description: "OPPO F19 is officially announced on April 2021.",
      Price: 280,
      // discountPercentage: 17.91,
      // rating: 4.3,
      // stock: 123,
      // brand: "OPPO",
      // category: "smartphones",
      image: "https://i.dummyjson.com/data/products/4/thumbnail.jpg",
      // "images": [
      // "https://i.dummyjson.com/data/products/4/1.jpg",
      // "https://i.dummyjson.com/data/products/4/2.jpg",
      // "https://i.dummyjson.com/data/products/4/3.jpg",
      // "https://i.dummyjson.com/data/products/4/4.jpg",
      // "https://i.dummyjson.com/data/products/4/thumbnail.jpg"
      // ]
    },
    {
      id: Math.floor(Math.random() * 10),
      name: "Huawei P30",
      // description:
      //   "Huawei’s re-badged P30 Pro New Edition was officially unveiled yesterday in Germany and now the device has made its way to the UK.",
      Price: 499,
      // discountPercentage: 10.58,
      // rating: 4.09,
      // stock: 32,
      // brand: "Huawei",
      // category: "smartphones",
      image: "https://i.dummyjson.com/data/products/5/thumbnail.jpg",
      // images: [
      //   "https://i.dummyjson.com/data/products/5/1.jpg",
      //   "https://i.dummyjson.com/data/products/5/2.jpg",
      //   "https://i.dummyjson.com/data/products/5/3.jpg",
      // ],
    },
    {
      id: Math.floor(Math.random() * 10),
      name: "MacBook Pro",
      // description:
      //   "MacBook Pro 2021 with mini-LED display may launch between September, November",
      Price: 1749,
      // discountPercentage: 11.02,
      // rating: 4.57,
      // stock: 83,
      // brand: "Apple",
      // category: "laptops",
      image: "https://i.dummyjson.com/data/products/6/thumbnail.png",
      // images: [
      //   "https://i.dummyjson.com/data/products/6/1.png",
      //   "https://i.dummyjson.com/data/products/6/2.jpg",
      //   "https://i.dummyjson.com/data/products/6/3.png",
      //   "https://i.dummyjson.com/data/products/6/4.jpg",
      // ],
    },
    {
      id: Math.floor(Math.random() * 10),
      name: "Samsung Galaxy Book",
      // description:
      //   "Samsung Galaxy Book S (2020) Laptop With Intel Lakefield Chip, 8GB of RAM Launched",
      Price: 1499,
      // discountPercentage: 4.15,
      // rating: 4.25,
      // stock: 50,
      // brand: "Samsung",
      // category: "laptops",
      image: "https://i.dummyjson.com/data/products/7/thumbnail.jpg",
      // images: [
      //   "https://i.dummyjson.com/data/products/7/1.jpg",
      //   "https://i.dummyjson.com/data/products/7/2.jpg",
      //   "https://i.dummyjson.com/data/products/7/3.jpg",
      //   "https://i.dummyjson.com/data/products/7/thumbnail.jpg",
      // ],
    },
    {
      id: Math.floor(Math.random() * 10),
      name: "Microsoft Surface Laptop 4",
      // description:
      //   "Style and speed. Stand out on HD video calls backed by Studio Mics. Capture ideas on the vibrant touchscreen.",
      Price: 1499,
      // discountPercentage: 10.23,
      // rating: 4.43,
      // stock: 68,
      // brand: "Microsoft Surface",
      // category: "laptops",
      image: "https://i.dummyjson.com/data/products/8/thumbnail.jpg",
      // images: [
      //   "https://i.dummyjson.com/data/products/8/1.jpg",
      //   "https://i.dummyjson.com/data/products/8/2.jpg",
      //   "https://i.dummyjson.com/data/products/8/3.jpg",
      //   "https://i.dummyjson.com/data/products/8/4.jpg",
      //   "https://i.dummyjson.com/data/products/8/thumbnail.jpg",
      // ],
    },
    {
      id: Math.floor(Math.random() * 10),
      name: "Infinix INBOOK",
      // description:
      //   "Infinix Inbook X1 Ci3 10th 8GB 256GB 14 Win10 Grey – 1 Year Warranty",
      Price: 1099,
      // discountPercentage: 11.83,
      // rating: 4.54,
      // stock: 96,
      // brand: "Infinix",
      // category: "laptops",
      image: "https://i.dummyjson.com/data/products/9/thumbnail.jpg",
      // images: [
      //   "https://i.dummyjson.com/data/products/9/1.jpg",
      //   "https://i.dummyjson.com/data/products/9/2.png",
      //   "https://i.dummyjson.com/data/products/9/3.png",
      //   "https://i.dummyjson.com/data/products/9/4.jpg",
      //   "https://i.dummyjson.com/data/products/9/thumbnail.jpg",
      // ],
    },
  ];

  const selectorr = useSelector((state) => state.CartSlice);

  return (
    <div>
      {/* <AppBar position="static">
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <AdbIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} />
            <Typography
              variant="h6"
              noWrap
              component="a"
              href="/"
              sx={{
                mr: 2,
                display: { xs: "none", md: "flex" },
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
              }}
            >
              CasualZone
            </Typography>

            <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: "block", md: "none" },
                }}
              >
                {pages.map((page) => (
                  <MenuItem key={page} onClick={handleCloseNavMenu}>
                    <Typography textAlign="center">{page}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
            <AdbIcon sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} />
            <Typography
              variant="h5"
              noWrap
              component="a"
              href=""
              sx={{
                mr: 2,
                display: { xs: "flex", md: "none" },
                flexGrow: 1,
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
              }}
            >
              LOGO
            </Typography>
            <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
              {pages.map((page) => (
                <Button
                  key={page}
                  onClick={handleCloseNavMenu}
                  sx={{ my: 2, color: "white", display: "block" }}
                >
                  {page}
                </Button>
              ))}
            </Box>
            <Box>
              <Link to="/cart">
                <ShoppingCartRoundedIcon sx={{ mr: 4 }} />
                <span
                  style={{
                    position: "relative",
                    left: "-42px",
                    top: "-19px",
                    backgroundColor: "red",
                    padding: "0px 4px",
                    borderRadius: "5px",
                    fontSize: "13px",
                  }}
                >
                  {selectorr.length}
                </span>
              </Link>
            </Box>
            <Box sx={{ flexGrow: 0 }}>
              <Tooltip title="Open settings">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
                </IconButton>
              </Tooltip>
              <Menu
                sx={{ mt: "45px" }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
                {settings.map((setting) => (
                  <MenuItem key={setting} onClick={handleCloseUserMenu}>
                    <Link to={setting === "Logout" ? "/" : ""}>
                      <Typography textAlign="center">{setting}</Typography>
                    </Link>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
          </Toolbar>
        </Container>
      </AppBar> */}
      <div
        className="products"
        style={{
          marginTop: "1rem",
          display: "flex",
          flexWrap: "wrap",
        }}
      >
        {productDetailArray.map((data, key) => {
          return <Products data={data} key={key} className="productCard" />;
        })}
      </div>
    </div>
  );
};
