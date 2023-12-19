const ProductionManager = (props) => {

  let content;

  if (props.selectedLink === "production search") {
    content = <h1>Search Detailing</h1>
  } else if (props.selectedLink === "production add") {
    content = <h1>Add Detailing</h1>
  } else if (props.selectedLink === "production search2") {
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