import React from "react";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import MenuItem from "@material-ui/core/MenuItem";
import { DropzoneArea } from "material-ui-dropzone";
import { Button, FormControl, makeStyles } from "@material-ui/core";

const mealTypes = ["Breakfast", "Snack", "Lunch", "Dinner"];

const useStyles = makeStyles((theme) => ({
  dropZoneArea: {
    marginTop: theme.spacing(3),
    padding: theme.spacing(2),
    minHeight: 200,
  },
}));

function AddItemDialog({ addItem, nextId, open, handleClose }) {
  const classes = useStyles();
  const [mealType, setMealType] = React.useState("");
  const [image, setImage] = React.useState("");

  const handleFileUpload = (files) => {
    const reader = new FileReader();

    reader.addEventListener(
      "load",
      function () {
        setImage(reader.result);
      },
      false
    );

    if (files[0]) {
      reader.readAsDataURL(files[0]);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const formData = {
      id: nextId,
      title: form.title.value,
      rating: 0,
      img: image,
      cost: `$${form.cost.value}`,
      mealType: mealType,
      delivery: form.delivery.value,
    };
    addItem(formData);
  };
  return (
    <Dialog
      open={open}
      onClose={handleClose}
      aria-labelledby="form-dialog-title"
    >
      <form noValidate autoComplete="off" onSubmit={handleSubmit}>
        <DialogTitle id="form-dialog-title">Add Dish</DialogTitle>
        <DialogContent>
          <TextField id="title" label="Dish Name" type="text" fullWidth />
          <TextField
            margin="dense"
            id="cost"
            label="Cost"
            type="text"
            fullWidth
          />
          <TextField
            margin="dense"
            id="mealType"
            select
            label="Select"
            value={mealType}
            onChange={(event) => setMealType(event.target.value)}
            helperText="Please select meal type"
          >
            {mealTypes.map((option) => (
              <MenuItem key={option} value={option}>
                {option}
              </MenuItem>
            ))}
          </TextField>
          <TextField
            id="delivery"
            label="Delivery"
            type="text"
            fullWidth
          />
          <FormControl fullWidth>
            <DropzoneArea
              filesLimit={1}
              dropzoneClass={classes.dropZoneArea}
              dropzoneText={"Drag and drop a dish image here or click"}
              acceptedFiles={["image/*"]}
              onChange={handleFileUpload}
            />
          </FormControl>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>
            Cancel
          </Button>
          <Button type="submit">
            Submit
          </Button>
        </DialogActions>
      </form>
    </Dialog>
  );
}

export default AddItemDialog;