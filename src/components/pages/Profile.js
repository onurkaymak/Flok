import { useEffect } from "react";
import classes from "./Profile.module.css";
import ProfileNavbar from "../layout/ProfileNavbar";
import SideNavbar from "../layout/SideNavbar";
import Content from "../layout/Content";
import { useSelector, useDispatch } from "react-redux";
import { uiActions } from '../store/ui-slice';
import { fleetActions } from '../store/fleet-slice';


const Profile = () => {
  const currentManagerDash = useSelector(state => state.ui.currentManagerDash);
  const selectedLink = useSelector(state => state.ui.selectedLink);
  const dispatch = useDispatch();

  const dashChoiceHandler = (chosenDash) => {
    dispatch(fleetActions.setSelectedVehicleById({ current: [] }))
    dispatch(uiActions.setCurrentManagerDash(chosenDash))
  };

  useEffect(() => {
    dispatch(uiActions.setSelectedLink(null))
  }, [currentManagerDash, dispatch]);

  const selectedSideLinkHandler = (link) => {
    dispatch(uiActions.setSelectedLink(link))
  };

  return (
    <div className={classes.profileContainer}>
      <ProfileNavbar onManagerDashChoice={dashChoiceHandler} />
      <SideNavbar currentDash={currentManagerDash} selectedLink={selectedLink} selectedSideLinkHandler={selectedSideLinkHandler} />
      <Content selectedLink={selectedLink} currentDash={currentManagerDash} selectedSideLinkHandler={selectedSideLinkHandler} />
    </div>
  )
};

export default Profile;