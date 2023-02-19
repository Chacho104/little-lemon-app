import { Fragment } from "react";
import { Link, useParams } from "react-router-dom";

function CustomizeOrderPage() {
  const params = useParams();
  return (
    <Fragment>
      <h1>This is the Customize Order Page</h1>
      <p>{params.mealId}</p>
      <p>
        <Link to=".." relative="path">Change</Link>
      </p>
    </Fragment>
  );
}

export default CustomizeOrderPage;
