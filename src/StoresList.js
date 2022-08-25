import React from "react";
import { Link } from "react-router-dom";


function StoresList({ storeData }) {

  const renderStores = storeData.map((store) => (
    <li key={store.id}>
      <Link to={`/stores/${store.id}`} className="storesList">
        Check inventory at {store.name}
      </Link>
    </li>
  ));

  return <ul
            style={{
                borderBottom: "2px solid black",
                paddingBottom: "30px",
                marginBottom: "30px",
            }}
        >
  {renderStores}</ul>;

}

export default StoresList;