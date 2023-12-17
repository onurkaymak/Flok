const FleetManager = (props) => {

  let content;

  if (props.onLinkSelection === "fleet search") {
    content = <h1>Search Vehicle</h1>
  } else if (props.onLinkSelection === "fleet add") {
    content = <h1>Add Vehicle</h1>
  } else if (props.onLinkSelection === "fleet update") {
    content = <h1>Update Vehicle</h1>
  } else if (props.onLinkSelection === "fleet delete") {
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