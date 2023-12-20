import FleetManager from '../roles/manager/fleet/FleetManager';
import ProductionManager from '../roles/manager/production/ProductionManager';
import RentalManager from '../roles/manager/rental/RentalManager';


import classes from './Content.module.css';

const Content = (props) => {
  return (
    <div className={classes.contentContainer}>
      {props.currentDash === "Fleet" && <FleetManager selectedLink={props.selectedLink} setSelectedLink={props.setSelectedLink} />}
      {props.currentDash === "Production" && <ProductionManager selectedLink={props.selectedLink} setSelectedLink={props.setSelectedLink} />}
      {props.currentDash === "Rental" && <RentalManager selectedLink={props.selectedLink} setSelectedLink={props.setSelectedLink} />}
    </div>
  )
};

export default Content;