import classes from './Vehicle.module.css';
import Card from '../../../UI/Card';

const Vehicle = (props) => {


  return (
    <Card>
      <div className={classes.vehicleContainer}>
        <li>Id = {props.vehicleId}</li>
        <li>Make = {props.make}</li>
        <li>Model = {props.model}</li>
        <li>VIN = {props.vin}</li>
        <li>Mileage = {props.mileage}</li>
        <li>Rented = {props.isRented ? "true" : "false"}</li>
        <li>Production = {props.inProduction ? "true" : "false"}</li>
      </div>
    </Card>
  )
};

export default Vehicle;