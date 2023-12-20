import AddRentalForm from './AddRentalForm';
import classes from './RentalManager.module.css';

const RentalManager = (props) => {

  let title;
  let content;

  if (props.selectedLink === "rental search") {
    content = <h1>Search Rental</h1>
  } else if (props.selectedLink === "rental add") {
    title = <h1 className={classes.title}>Book a Rental</h1>
    content = <AddRentalForm />
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