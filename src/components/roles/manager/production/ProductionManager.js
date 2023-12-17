import { useState } from "react";

const ProductionManager = (props) => {

  let content;

  if (props.onLinkSelection === "production search") {
    content = <h1>Search Detailing</h1>
  } else if (props.onLinkSelection === "production add") {
    content = <h1>Add Detailing</h1>
  } else if (props.onLinkSelection === "production search2") {
    content = <h1>Search Productivity</h1>
  } else {
    content = <h1>No content selected.</h1>
  }


  return (
    <div>
      {content}
    </div>
  )
};

export default ProductionManager;