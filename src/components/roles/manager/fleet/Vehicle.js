import classes from './Vehicle.module.css';
import Card from '../../../UI/Card';

const Vehicle = (props) => {


  return (
    <Card>
      <div className={classes.vehicleContainer}>
        <p><strong>Id: </strong>{props.vehicleId}</p>
        <p><strong>Make: </strong>{props.make}</p>
        <p><strong>Model: </strong>{props.model}</p>
        <p><strong>VIN: </strong>{props.vin}</p>
        <p><strong>Mileage: </strong>{props.mileage}</p>
        <p><strong>Rented: </strong>{props.isRented ? "true" : "false"}</p>
        <p><strong>Production: </strong>{props.inProduction ? "true" : "false"}</p>
      </div>
    </Card>
  )
};

export default Vehicle;