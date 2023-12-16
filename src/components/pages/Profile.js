import { useState } from "react";
import ProfileNavbar from "../layout/ProfileNavbar";
import ManagerDash from "../roles/ManagerDash";
import classes from "./Profile.module.css";


const Profile = () => {
  const [currentManagerDash, setCurrentManagerDash] = useState("Fleet");

  const dashChoiceHandler = (chosenDash) => {
    setCurrentManagerDash(chosenDash);
  };

  return (
    <div className={classes.test}>
      <ProfileNavbar onManagerDashChoice={dashChoiceHandler} />
      <ManagerDash currentDash={currentManagerDash} />
    </div>

  )

};

export default Profile;