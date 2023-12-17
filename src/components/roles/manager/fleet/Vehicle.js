import classes from './Vehicle.module.css';

const Vehicle = (props) => {


  return (
    <div className={classes.vehicleContainer}>
      <li>{props.id}</li>
      <li>{props.make}</li>
      <li>{props.model}</li>
      <li>{props.vin}</li>
      <li>{props.mileage}</li>
      <li>{props.isRented ? "true" : "false"}</li>
      <li>{props.inProduction ? "true" : "false"}</li>
    </div>
  )
};

export default Vehicle;