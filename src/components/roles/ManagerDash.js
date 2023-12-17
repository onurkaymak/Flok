import { useState, useEffect } from 'react';
import classes from './ManagerDash.module.css';

import sprite from '../img/sprite.svg';


const ManagerDash = (props) => {
  const [sideBarLink, setSideBarLink] = useState(null);

  useEffect(() => {
    const fleetLinks =
      <div className={classes.sidebarContainer}>
        <div className={classes.sidebarTopButtonContainer}>
          <button className={classes.sidebarTopButton}>Vehicle</button>
          <svg className={classes.iconSearch}>
            <use href={sprite + "#icon-search"}></use>
          </svg>
        </div>
        <ul className={classes.listContainer}>
          <div className={classes.listItemContainer}>
            <li className={classes.listItem}>Add Vehicle</li>
            <svg className={classes.listItemIcon}>
              <use href={sprite + "#icon-plus"}></use>
            </svg>
          </div>
          <div className={classes.listItemContainer}>
            <li className={classes.listItem}>Update Vehicle</li>
            <svg className={classes.listItemIcon}>
              <use href={sprite + "#icon-loop2"}></use>
            </svg>
          </div>
          <div className={classes.listItemContainer}>
            <li className={classes.listItem}>Delete Vehicle</li>
            <svg className={classes.listItemIcon}>
              <use href={sprite + "#icon-bin2"}></use>
            </svg>
          </div>
        </ul>

      </div>

    const productionLinks =
      <div className={classes.sidebarContainer}>
        <div className={classes.sidebarTopButtonContainer}>
          <button className={classes.sidebarTopButton}>Detailings</button>
          <svg className={classes.iconSearch}>
            <use href={sprite + "#icon-search"}></use>
          </svg>
        </div>
        <ul className={classes.listContainer}>
          <div className={classes.listItemContainer}>
            <li className={classes.listItem}>New Detailing</li>
            <svg className={classes.listItemIcon}>
              <use href={sprite + "#icon-plus"}></use>
            </svg>
          </div>
          <div className={classes.listItemContainer}>
            <li className={classes.listItem}>Productivity</li>
            <svg className={classes.listItemIcon}>
              <use href={sprite + "#icon-users"}></use>
            </svg>
          </div>
        </ul>
      </div>

    const rentalLinks =
      <div className={classes.sidebarContainer}>
        <div className={classes.sidebarTopButtonContainer}>
          <button className={classes.sidebarTopButton}>Rentals</button>
          <svg className={classes.iconSearch}>
            <use href={sprite + "#icon-search"}></use>
          </svg>
        </div>
        <ul className={classes.listContainer}>
          <div className={classes.listItemContainer}>
            <li className={classes.listItem}>Book a Rental</li>
            <svg className={classes.listItemIcon}>
              <use href={sprite + "#icon-plus"}></use>
            </svg>
          </div>
          <div className={classes.listItemContainer}>
            <li className={classes.listItem}>Update Rental</li>
            <svg className={classes.listItemIcon}>
              <use href={sprite + "#icon-loop2"}></use>
            </svg>
          </div>
          <div className={classes.listItemContainer}>
            <li className={classes.listItem}>Delete Rental</li>
            <svg className={classes.listItemIcon}>
              <use href={sprite + "#icon-bin2"}></use>
            </svg>
          </div>
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