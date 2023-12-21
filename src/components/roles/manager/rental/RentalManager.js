import { useSelector, useDispatch } from 'react-redux';
import AddRentalForm from './AddRentalForm';
import classes from './RentalManager.module.css';
import { fetchRentalService, addRentalService } from '../../../store/rental-actions';
import RentalServiceList from './RentalServiceList';

const RentalManager = (props) => {
  const dispatch = useDispatch();
  const token = useSelector(state => state.user.token);


  const searchRentalService = (reservationInfo) => {
    dispatch(fetchRentalService(reservationInfo, token));
  };

  const addRentalFormHandler = (reservationInfo) => {
    dispatch(addRentalService(reservationInfo, token));
    props.setSelectedLink(null);
  };

  const formCancelButtonHandler = () => {
    props.setSelectedLink(null);
  };



  let title;
  let content;

  if (props.selectedLink === "rental search") {
    title = <h1 className={classes.title}>Reservation List</h1>
    content = <RentalServiceList searchRentalService={searchRentalService} />
  } else if (props.selectedLink === "rental add") {
    title = <h1 className={classes.title}>Book a Rental</h1>
    content = <AddRentalForm addRentalFormHandler={addRentalFormHandler} formCancelButtonHandler={formCancelButtonHandler} />
  } else if (props.selectedLink === "rental update") {
    content = <h1>Update Rental</h1>
  } else if (props.selectedLink === "rental delete") {
    content = <h1>Delete Rental</h1>
  } else {
    content = <h1>No content selected.</h1>
  }

  return (
    <div className={classes.rentalManagerContainer}>
      <div className={classes.titleContainer}>
        {title}
      </div>

      <div className={classes.contentContainer}>
        {content}
      </div>

    </div>
  )
};

export default RentalManager;