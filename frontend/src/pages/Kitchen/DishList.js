import { Fab } from '@material-ui/core'
import React from 'react'
import { useForm } from "react-hook-form";
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'
import DishItem from './DishItem'
import AddIcon from '@material-ui/icons/Add'

import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';


import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

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
}

const initialItems = [
  {
    id: 1,
    title: 'Veg Tacos',
    rating: 4,
    img: '/assets/f1.jpg',
    cost: '$11.5',
    mealType: 'Snack',
    delivery: 'Free',
  },
  {
    id: 2,
    title: 'Chilly Chicken',
    rating: 3,
    img: '/assets/f2.jpg',
    cost: '$13.5',
    mealType: 'Dinner',
    delivery: 'Free',
  },
  {
    id: 3,
    title: 'Prawn Noodles',
    rating: 1,
    img: '/assets/f3.jpg',
    cost: '$9',
    mealType: 'Lunch',
    delivery: 'Free',
  },
  {
    id: 4,
    title: 'Veg Thali',
    rating: 3,
    img: '/assets/f4.jpg',
    cost: '$14',
    mealType: 'Lunch',
    delivery: 'Free',
  },
  {
    id: 5,
    title: 'Veg Rice',
    rating: 2,
    img: '/assets/f5.jpeg',
    cost: '$6',
    mealType: 'Snack',
    delivery: 'Free',
  },
  {
    id: 6,
    title: 'Chilly Paneer',
    rating: 3,
    img: '/assets/f6.jpg',
    cost: '$6',
    mealType: 'Snack',
    delivery: 'Free',
  },
]


function DishList() {
  const [items, setItems] = React.useState(initialItems)

  const [open, setOpen] = React.useState(false);
  const [mealtype, setmealType] = React.useState('');

  const handleClickOpen = () => {
    setOpen(true);
  };

  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  const handleMealChange = (event) => {
    setmealType(event.target.value);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const removeItem = (itemId) =>
    setItems(items.filter((item) => item.id !== itemId))

  return (
    <>
      <div>
      <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        Add dish
      </Button>
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Add Dish</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Please enter the dish details !
          </DialogContentText>
          <form onSubmit={handleSubmit(onSubmit)}>

          </form>
          <TextField
            autoFocus
            margin="dense"
            id="dishname"
            label="Dish Name"
            type="text"
            fullWidth
          />
          <Button
            variant="contained"
            component="label"
          >
          Upload File
          <input
          type="file"
          hidden
          />
          </Button>
           <TextField
            autoFocus
            margin="dense"
            id="dishdescrp"
            label="Dish Description"
            type="text"
            fullWidth
          />
             <TextField
            autoFocus
            margin="dense"
            id="price"
            label="Cost"
            type="text"
            fullWidth
          />
          <InputLabel id="demo-simple-select-label">Meal Type</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={mealtype}
          onChange={handleMealChange}
        >
          <MenuItem value={10}>Breakfast</MenuItem>
          <MenuItem value={10}>Snack</MenuItem>
          <MenuItem value={20}>Lunch</MenuItem>
          <MenuItem value={30}>Dinner</MenuItem>
        </Select>
          <TextField
            autoFocus
            margin="dense"
            id="delivery"
            label="Delivery"
            type="text"
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Submit
          </Button>
        </DialogActions>
      </Dialog>
    </div>
      <Carousel responsive={responsive} itemClass='menu-item'>
        {items.map((item) => (
          <DishItem item={item} key={item.id} removeItemFromList={removeItem} />
        ))}
      </Carousel>
    </>
  )
}
export default DishList