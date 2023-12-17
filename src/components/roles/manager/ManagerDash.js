import { useState, useEffect } from 'react';
import classes from './ManagerDash.module.css';

import sprite from '../../img/sprite.svg';

import FleetManager from './fleet/FleetManager';
import ProductionManager from './production/ProductionManager';


const ManagerDash = (props) => {
  const [sideBarLink, setSideBarLink] = useState(null);

  const [selectedFleetLink, setSelectedFleetLink] = useState(null);
  const [selectedProductionLink, setSelectedProductionLink] = useState(null);
  const [selectedRentalLink, setSelectedRentalLink] = useState(null);

  const selectedLinkHandler = (selectedLink) => {
    switch (selectedLink) {
      case 'search fleet':
        setSelectedFleetLink("fleet search")
        break;
      case 'add fleet':
        setSelectedFleetLink("fleet add")
        break;
      case 'update fleet':
        setSelectedFleetLink("fleet update")
        break;
      case 'delete fleet':
        setSelectedFleetLink("fleet delete")
        break;
      case 'search production':
        setSelectedProductionLink("production search")
        break;
      case 'add production':
        setSelectedProductionLink("production add")
        break;
      case 'search2 production':
        setSelectedProductionLink("production search2")
        break;






      default:
        setSelectedFleetLink(null);
    }
  };

  useEffect(() => {
    const fleetLinks =
      <div className={classes.sidebarContainer}>
        <div className={classes.sidebarTopButtonContainer} onClick={() => selectedLinkHandler("search fleet")}>
          <button className={classes.sidebarTopButton}>Vehicle</button>
          <svg className={classes.iconSearch}>
            <use href={sprite + "#icon-search"}></use>
          </svg>
        </div>
        <ul className={classes.listContainer}>
          <div className={classes.listItemContainer} onClick={() => selectedLinkHandler("add fleet")}>
            <li className={classes.listItem}>Add Vehicle</li>
            <svg className={classes.listItemIcon}>
              <use href={sprite + "#icon-plus"}></use>
            </svg>
          </div>
          <div className={classes.listItemContainer} onClick={() => selectedLinkHandler("update fleet")}>
            <li className={classes.listItem}>Update Vehicle</li>
            <svg className={classes.listItemIcon}>
              <use href={sprite + "#icon-loop2"}></use>
            </svg>
          </div>
          <div className={classes.listItemContainer} onClick={() => selectedLinkHandler("delete fleet")}>
            <li className={classes.listItem}>Delete Vehicle</li>
            <svg className={classes.listItemIcon}>
              <use href={sprite + "#icon-bin2"}></use>
            </svg>
          </div>
        </ul>

      </div>

    const productionLinks =
      <div className={classes.sidebarContainer}>
        <div className={classes.sidebarTopButtonContainer} onClick={() => selectedLinkHandler("search production")}>
          <button className={classes.sidebarTopButton}>Detailings</button>
          <svg className={classes.iconSearch}>
            <use href={sprite + "#icon-search"}></use>
          </svg>
        </div>
        <ul className={classes.listContainer}>
          <div className={classes.listItemContainer} onClick={() => selectedLinkHandler("add production")}>
            <li className={classes.listItem}>New Detailing</li>
            <svg className={classes.listItemIcon}>
              <use href={sprite + "#icon-plus"}></use>
            </svg>
          </div>
          <div className={classes.listItemContainer} onClick={() => selectedLinkHandler("search2 production")}>
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
      {props.currentDash === "Fleet" && <FleetManager onLinkSelection={selectedFleetLink} />}
      {props.currentDash === "Production" && <ProductionManager onLinkSelection={selectedProductionLink} />}
    </div>
  )
};

export default ManagerDash;