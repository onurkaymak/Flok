const RentalManager = (props) => {

  let content;

  if (props.onLinkSelection === "rental search") {
    content = <h1>Search Rental</h1>
  } else if (props.onLinkSelection === "rental add") {
    content = <h1>Add Rental</h1>
  } else if (props.onLinkSelection === "rental update") {
    content = <h1>Update Rental</h1>
  } else if (props.onLinkSelection === "rental delete") {
    content = <h1>Delete Rental</h1>
  } else {
    content = <h1>No content selected.</h1>
  }


  return (
    <div>
      {content}
    </div>
  )
};

export default RentalManager;