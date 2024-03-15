import { useSelector, useDispatch } from 'react-redux';
import AddRentalForm from './AddRentalForm';
import classes from './RentalManager.module.css';
import { fetchRentalService, addRentalService } from '../../../store/rental-actions';
import RentalServiceList from './RentalServiceList';

import { fetchRentalServiceList, resetRentalServiceList } from '../../../store/rental-actions';
import { useEffect, useCallback } from 'react';

const RentalManager = (props) => {
  const dispatch = useDispatch();
  const token = useSelector(state => state.user.token);


  const rentalServiceListfetcher = useCallback(async () => {
    dispatch(resetRentalServiceList());
    dispatch(fetchRentalServiceList());
  }, [dispatch])


  useEffect(() => {
    rentalServiceListfetcher()
  }, [rentalServiceListfetcher]);


  const searchRentalService = (reservationInfo) => {
    dispatch(fetchRentalService(reservationInfo, token));
  };

  const addRentalFormHandler = (reservationInfo) => {
    dispatch(addRentalService(reservationInfo, token));
    props.selectedSideLinkHandler(null);
  };

  const formCancelButtonHandler = () => {
    props.selectedSideLinkHandler(null);
  };



  let title;
  let content;

  if (props.selectedLink === "rental add") {
    title = <h1 className={classes.title}>Book a Rental</h1>
    content = <AddRentalForm addRentalFormHandler={addRentalFormHandler} formCancelButtonHandler={formCancelButtonHandler} />
  } else if (props.selectedLink === "rental update") {
    content = <h1>Update Rental</h1>
  } else if (props.selectedLink === "rental delete") {
    content = <h1>Delete Rental</h1>
  } else {
    title = <h1 className={classes.title}>Reservation List</h1>
    content = <RentalServiceList searchRentalService={searchRentalService} />
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