import { useState, useEffect, useRef } from "react";
import classes from "./Profile.module.css";
import ProfileNavbar from "../layout/ProfileNavbar";
import SideNavbar from "../layout/SideNavbar";
import Content from "../layout/Content";



const Profile = () => {
  const selectedNavLink = useRef(null);
  console.log(selectedNavLink);
  const [currentManagerDash, setCurrentManagerDash] = useState(selectedNavLink);
  const [selectedLink, setSelectedLink] = useState(null);

  const dashChoiceHandler = (chosenDash) => {
    setCurrentManagerDash(chosenDash);
    selectedNavLink.current = chosenDash;
  };

  useEffect(() => {
    setSelectedLink(null);
  }, [currentManagerDash]);

  const selectedSideLinkHandler = (link) => {
    setSelectedLink(link);
  };


  return (
    <div className={classes.profileContainer}>
      <ProfileNavbar onManagerDashChoice={dashChoiceHandler} current={selectedNavLink} />
      <SideNavbar currentDash={currentManagerDash} selectedLink={selectedLink} selectedSideLinkHandler={selectedSideLinkHandler} />
      <Content selectedLink={selectedLink} currentDash={currentManagerDash} setSelectedLink={setSelectedLink} />
    </div>

  )

};

export default Profile;