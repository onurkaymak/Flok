import { useState, useEffect, Fragment } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { uiActions } from '../store/ui-slice';
import { fleetActions } from '../store/fleet-slice';

import classes from './SideNavbar.module.css';
import sprite from '../img/sprite.svg';

const SideNavbar = (props) => {
  const [sideBarLink, setSideBarLink] = useState(null);

  const selectedVehicles = useSelector(state => state.fleet.selectedVehicles);
  const dispatch = useDispatch();



  useEffect(() => {
    const selectedLinkHandler = (selectedLink) => {
      switch (selectedLink) {
        case 'search fleet':
          dispatch(fleetActions.setSelectedVehicleById({ current: [] }))
          props.selectedSideLinkHandler("fleet search");
          break;
        case 'add fleet':
          props.selectedSideLinkHandler("fleet add");
          break;
        case 'update fleet':
          if (selectedVehicles.length === 0) {
            dispatch(uiActions.showNotification({
              title: "Error",
              message: "Please select a vehicle from the vehicle list."
            }));
            break;
          } else if (selectedVehicles.length > 1) {
            dispatch(uiActions.showNotification({
              title: "Error",
              message: "You can select only one vehicle to update at once."
            }));
            break;
          }
          else {
            props.selectedSideLinkHandler("fleet update");
            break;
          }
        case 'search production':
          props.selectedSideLinkHandler("production search");
          break;
        case 'add production':
          props.selectedSideLinkHandler("production add");
          break;
        case 'search2 production':
          props.selectedSideLinkHandler("production search2");
          break;
        case 'search rental':
          props.selectedSideLinkHandler("rental search");
          break;
        case 'add rental':
          props.selectedSideLinkHandler("rental add");
          break;
        default:
          props.selectedSideLinkHandler(null);
      }
    };


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
  }, [props.currentDash, props, selectedVehicles, dispatch]);



  return (
    <Fragment>
      {sideBarLink}
    </Fragment>
  )
};

export default SideNavbar;