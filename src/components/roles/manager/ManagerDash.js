import { useState, useEffect } from 'react';
import classes from './ManagerDash.module.css';

import sprite from '../../img/sprite.svg';

import FleetManager from './fleet/FleetManager';
import ProductionManager from './production/ProductionManager';
import RentalManager from './rental/RentalManager';


const ManagerDash = (props) => {
  const [sideBarLink, setSideBarLink] = useState(null);

  const [selectedLink, setSelectedLink] = useState(null);

  useEffect(() => {
    setSelectedLink(null);
  }, [props.currentDash]);


  const selectedLinkHandler = (selectedLink) => {
    switch (selectedLink) {
      case 'search fleet':
        setSelectedLink("fleet search");
        break;
      case 'add fleet':
        setSelectedLink("fleet add");
        break;
      case 'update fleet':
        setSelectedLink("fleet update");
        break;
      case 'delete fleet':
        setSelectedLink("fleet delete");
        break;
      case 'search production':
        setSelectedLink("production search");
        break;
      case 'add production':
        setSelectedLink("production add");
        break;
      case 'search2 production':
        setSelectedLink("production search2");
        break;
      case 'search rental':
        setSelectedLink("rental search");
        break;
      case 'add rental':
        setSelectedLink("rental add");
        break;
      case 'update rental':
        setSelectedLink("rental update");
        break;
      case 'delete rental':
        setSelectedLink("rental delete");
        break;
      default:
        setSelectedLink(null);
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
        <div className={classes.sidebarTopButtonContainer} onClick={() => selectedLinkHandler("search rental")}>
          <button className={classes.sidebarTopButton}>Rentals</button>
          <svg className={classes.iconSearch}>
            <use href={sprite + "#icon-search"}></use>
          </svg>
        </div>
        <ul className={classes.listContainer}>
          <div className={classes.listItemContainer} onClick={() => selectedLinkHandler("add rental")}>
            <li className={classes.listItem}>Book a Rental</li>
            <svg className={classes.listItemIcon}>
              <use href={sprite + "#icon-plus"}></use>
            </svg>
          </div>
          <div className={classes.listItemContainer} onClick={() => selectedLinkHandler("update rental")}>
            <li className={classes.listItem}>Update Rental</li>
            <svg className={classes.listItemIcon}>
              <use href={sprite + "#icon-loop2"}></use>
            </svg>
          </div>
          <div className={classes.listItemContainer} onClick={() => selectedLinkHandler("delete rental")}>
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
      {props.currentDash === "Fleet" && <FleetManager onLinkSelection={selectedLink} />}
      {props.currentDash === "Production" && <ProductionManager onLinkSelection={selectedLink} />}
      {props.currentDash === "Rental" && <RentalManager onLinkSelection={selectedLink} />}
    </div>
  )
};

export default ManagerDash;