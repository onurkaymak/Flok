import { useState } from "react";

const FleetManager = (props) => {
  // const [currentSelection, setCurrentSelection] = useState(null);

  let content;

  if (props.onLinkSelection === "search") {
    content = <h1>Search Vehicle</h1>
  } else if (props.onLinkSelection === "add") {
    content = <h1>Add Vehicle</h1>
  } else if (props.onLinkSelection === "update") {
    content = <h1>Update Vehicle</h1>
  } else if (props.onLinkSelection === "delete") {
    content = <h1>Delete Vehicle</h1>
  } else {
    content = <h1>No content selected.</h1>
  }


  return (
    <div>
      {content}
    </div>
  )
};

export default FleetManager;