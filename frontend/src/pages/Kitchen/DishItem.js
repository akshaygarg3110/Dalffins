import React from 'react'
import styled from '@emotion/styled'
import {
  Button,
  Card,
  CardContent,
  CardHeader,
  CardMedia,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  IconButton,
  Typography,
} from '@material-ui/core'
import MoreVertIcon from '@material-ui/icons/MoreVert'
import Rating from '@material-ui/lab/Rating'
import Menu from '@material-ui/core/Menu'
import MenuItem from '@material-ui/core/MenuItem'

const FoodItem = styled(Card)`
  min-height: 300px;
`

function DishItem({
  removeItemFromList,
  item: { id, title, rating, img, cost, mealType, delivery },
}) {
  const [anchorEl, setAnchorEl] = React.useState(null)
  const [open, setOpen] = React.useState(false)

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  const handleConfirmRemove = () => {
    removeItemFromList(id)
    setOpen(true)
  }

  const handleCancel = () => {
    setOpen(false)
  }

  const handleRemove = () => {
    setOpen(true)
    setAnchorEl(null)
  }

  return (
    <>
      <FoodItem>
        <CardHeader
          action={
            <>
              <IconButton
                aria-label='settings'
                aria-haspopup='true'
                onClick={handleClick}
              >
                <MoreVertIcon />
              </IconButton>
              <Menu
                id={'menu' + id }
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                <MenuItem onClick={handleClose}>Update</MenuItem>
                <MenuItem onClick={handleClose}>Enable</MenuItem>
                <MenuItem onClick={handleClose}>Disable</MenuItem>
                <MenuItem onClick={handleRemove}>Remove</MenuItem>
              </Menu>
            </>
          }
          title={title}
          subheader={<Rating name='read-only' value={rating} readOnly />}
          titleTypographyProps={{
            variant: 'body1',
            color: 'textPrimary',
          }}
        />
        <CardMedia
          style={{ height: 0, padding: '25%' }}
          image={img}
          title='mydish'
        />
        <CardContent>
          <Typography variant='body2' color='textPrimary'>
            Cost: <span style={{ float: 'right' }}>{cost}</span>
          </Typography>
          <Typography variant='body2' color='textPrimary'>
            Meal Type: <span style={{ float: 'right' }}>{mealType}</span>
          </Typography>
          <Typography variant='body2' color='textPrimary'>
            Delivery: <span style={{ float: 'right' }}>{delivery}</span>
          </Typography>
        </CardContent>
      </FoodItem>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby='alert-dialog-title'
        aria-describedby='alert-dialog-description'
      >
        <DialogTitle id='alert-dialog-title'>
          {'Are you sure you want to delete this item?'}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id='alert-dialog-description'>
            This action is irreversible. If you are planning to add this item
            again in the future, you can choose to disable the item instead of
            removal.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCancel} color='primary'>
            Cancel
          </Button>
          <Button onClick={handleConfirmRemove} color='primary' autoFocus>
            Remove
          </Button>
        </DialogActions>
      </Dialog>
    </>
  )
}

export default DishItem
