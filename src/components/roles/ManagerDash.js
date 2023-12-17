import { useState, useEffect } from 'react';
import classes from './ManagerDash.module.css';


const ManagerDash = (props) => {
  const [sideBarLink, setSideBarLink] = useState(null);

  useEffect(() => {
    const fleetLinks =
      <div className={classes.sidebarContainer}>
        <button className={classes.sidebarTopButton}>Add New Vehicle</button>
        <ul className={classes.listContainer}>

          <div className={classes.listItemContainer}>
            <li className={classes.listItem}>Search For a Vehicle</li>
          </div>
          <div className={classes.listItemContainer}>
            <li className={classes.listItem}>Update a Vehicle</li>
          </div>
          <div className={classes.listItemContainer}>
            <li className={classes.listItem}>Delete a Vehicle</li>
          </div>
        </ul>
      </div>

    const productionLinks =
      <div className={classes.sidebarContainer}>
        <button className={classes.sidebarTopButton}>Start New Detailing</button>
        <ul className={classes.listContainer}>
          <li className={classes.listItem}>Pending Detailings</li>
          <li className={classes.listItem}>Detailer Performance</li>
        </ul>
      </div>

    const rentalLinks =
      <div className={classes.sidebarContainer}>
        <button className={classes.sidebarTopButton}>Book a Vehicle</button>
        <ul className={classes.listContainer}>
          <li className={classes.listItem}>Check Pending Rentals</li>
          <li className={classes.listItem}>Update Pending Rental Information</li>
          <li className={classes.listItem}>Delete Pending Rental</li>
        </ul>
      </div>


    switch (props.currentDash) {
      case 'Fleet':
        setSideBarLink(fleetLinks);
        break;
      case 'Production':
        setSideBarLink(productionLinks);
        break;
      case 'Rental':
        setSideBarLink(rentalLinks);
        break;
      default:
        setSideBarLink(fleetLinks);
    }
  }, [props.currentDash]);







  return (
    <div className={classes.container}>
      {sideBarLink}

      <h1>Test</h1>



    </div>
  )
};

export default ManagerDash;