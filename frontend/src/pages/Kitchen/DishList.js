import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import DishItem from "./DishItem";
import Button from "@material-ui/core/Button";
import Snackbar from "@material-ui/core/Snackbar";
import { Alert } from "@material-ui/lab";
import AddItemDialog from "./AddItemDialog";


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

const initialItems = [
  {
    id: 1,
    title: "Veg Tacos",
    rating: 4,
    img: "/assets/f1.jpg",
    cost: "$11.5",
    mealType: "Snack",
    delivery: "Free",
  },
  {
    id: 2,
    title: "Chilly Chicken",
    rating: 3,
    img: "/assets/f2.jpg",
    cost: "$13.5",
    mealType: "Dinner",
    delivery: "Free",
  },
  {
    id: 3,
    title: "Prawn Noodles",
    rating: 1,
    img: "/assets/f3.jpg",
    cost: "$9",
    mealType: "Lunch",
    delivery: "Free",
  },
  {
    id: 4,
    title: "Veg Thali",
    rating: 3,
    img: "/assets/f4.jpg",
    cost: "$14",
    mealType: "Lunch",
    delivery: "Free",
  },
  {
    id: 5,
    title: "Veg Rice",
    rating: 2,
    img: "/assets/f5.jpeg",
    cost: "$6",
    mealType: "Snack",
    delivery: "Free",
  },
  {
    id: 6,
    title: "Chilly Paneer",
    rating: 3,
    img: "/assets/f6.jpg",
    cost: "$6",
    mealType: "Snack",
    delivery: "Free",
  },
];

function DishList() {
  const [items, setItems] = React.useState(initialItems);
  const [open, setOpen] = React.useState(false);
  const [showSnackBar, setShowSnackBar] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const addItem = (formData) => {
    setItems([...items, formData]);
    setOpen(false);
    setShowSnackBar(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const removeItem = (itemId) =>
    setItems(items.filter((item) => item.id !== itemId));

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
        {items.map((item) => (
          <DishItem item={item} key={item.id} removeItemFromList={removeItem}  />
        ))}
      </Carousel>
      {open ? (
        <React.Suspense fallback={<p>loading</p>}>
          <AddItemDialog
            open={open}
            addItem={addItem}
            handleClose={handleClose}
            nextId={initialItems[initialItems.length - 1].id}
          />
        </React.Suspense>
      ) : null}
      <Snackbar
        open={showSnackBar}
        autoHideDuration={6000}
        onClose={handleSnackBarClose}
      >
        <Alert onClose={handleSnackBarClose} severity="success">
          New Dish added Successfully
        </Alert>
      </Snackbar>
    </>
  );
}
export default DishList;