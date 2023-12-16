import ProfileNavbar from "../layout/ProfileNavbar";
import ManagerDash from "../roles/ManagerDash";

import classes from "./Profile.module.css";


const Profile = () => {



  return (
    <div className={classes.test}>
      <ProfileNavbar />
      <ManagerDash />
    </div>

  )

};

export default Profile;