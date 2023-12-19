import { useState, useEffect } from "react";
import classes from "./Profile.module.css";
import ProfileNavbar from "../layout/ProfileNavbar";
import SideNavbar from "../layout/SideNavbar";
import Content from "../layout/Content";



const Profile = () => {
  const [currentManagerDash, setCurrentManagerDash] = useState("Fleet");
  const [selectedLink, setSelectedLink] = useState(null);

  const dashChoiceHandler = (chosenDash) => {
    setCurrentManagerDash(chosenDash);
  };

  useEffect(() => {
    setSelectedLink(null);
  }, [currentManagerDash]);

  const selectedSideLinkHandler = (link) => {
    setSelectedLink(link);
  };


  return (
    <div className={classes.profileContainer}>
      <ProfileNavbar onManagerDashChoice={dashChoiceHandler} />
      <SideNavbar currentDash={currentManagerDash} selectedLink={selectedLink} selectedSideLinkHandler={selectedSideLinkHandler} />
      <Content selectedLink={selectedLink} currentDash={currentManagerDash} setSelectedLink={setSelectedLink} />
    </div>

  )

};

export default Profile;