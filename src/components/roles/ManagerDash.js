import { useState } from 'react';
import classes from './ManagerDash.module.css';


const ManagerDash = () => {
  const [currentDash, setCurrentDash] = useState("Fleet");

  const fleetDash =
    <div className={classes.sidebarContainer}>
      <button className={classes.sidebarAddButton}>Add New Vehicle</button>
      <ul className={classes.listContainer}>
        <li className={classes.listItem}>Search For a Vehicle</li>
        <li className={classes.listItem}>Update a Vehicle</li>
        <li className={classes.listItem}>Delete a Vehicle</li>
      </ul>
    </div>






  return (
    <div className={classes.container}>
      {fleetDash}

      <h1>Test</h1>



    </div>
  )
};

export default ManagerDash;