//Author: Tanuj Sobti (B00864990)
import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import DishItem from "./DishItem";
import Button from "@material-ui/core/Button";
import Snackbar from "@material-ui/core/Snackbar";
import { Alert } from "@material-ui/lab";
import AddItemDialog from "./AddItemDialog";
import axios from "axios";
import { useHistory } from "react-router-dom";

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 1201 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 1200, min: 1025 },
    items: 4,
  },
  laptop: {
    breakpoint: { max: 1024, min: 769 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 768, min: 481 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 480, min: 0 },
    items: 1,
  },
};

function DishList(props) {
  const [foodItems, setFoodItems] = React.useState([]);
  const [open, setOpen] = React.useState(false);
  const [showSnackBar, setShowSnackBar] = React.useState(false);
  const history = useHistory();
  

  const handleClickOpen = () => {
    setOpen(true);
  };
  
  // Get all the dishes added by logged in user .
  React.useEffect(() => {
    if (props.userID) {
    const fetchDishList = async () => {
        const res = await axios.get(
        `http://localhost:8080/dish/getUserDish?UserID=${props.userID}`
      );
      setFoodItems(res.data);
    };
    fetchDishList();
  } else {
    window.alert("Please login for using the dallfins . Thank you  !!!");
    history.push("/login");
  }
  
  }, []);



  const addItem = (formData) => {
    setFoodItems([...foodItems, formData]);
    setOpen(false);
    setShowSnackBar(true);
  };

  const updateItem = (formData) => {
    let newFoodItems = [...foodItems];
    newFoodItems = newFoodItems.map((foodItem) => {
      if (foodItem._id === formData._id) return formData;
      else return foodItem;
    });
    setFoodItems(newFoodItems);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const removeItem = (itemId) => {
    setFoodItems(foodItems.filter((item) => item._id !== itemId));
  };

  const handleSnackBarClose = () => {
    setShowSnackBar(false);
  };

  return (
    <>
      <div style={{ textAlign: "center" }}>
        <Button variant="outlined" onClick={handleClickOpen}>
          Add dish
        </Button>
      </div>
      <Carousel responsive={responsive}>
        {foodItems.map((foodItem) => (
          <DishItem
            foodItem={foodItem}
            key={foodItem._id}
            removeItemFromList={removeItem}
            updateItem={updateItem}
            UserID={props.userID}
          />
        ))}
      </Carousel>
      {open ? (
        <React.Suspense fallback={<p>loading</p>}>
          // Adding dish to the kitchen 
          <AddItemDialog
            open={open}
            addItem={addItem}
            handleClose={handleClose}
            nextId={foodItems[foodItems.length - 1]._id}
            UserID={props.userID}
          />
        </React.Suspense>
      ) : null}
      <Snackbar
        open={showSnackBar}
        autoHideDuration={6000}
        onClose={handleSnackBarClose}
      >
        <Alert onClose={handleSnackBarClose} severity="success">
          New dish added successfully !!
        </Alert>
      </Snackbar>
    </>
  );
}
export default DishList;
