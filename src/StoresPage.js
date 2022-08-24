import React from "react";
import { Route, useRouteMatch } from "react-router-dom";
import StoresList from "./StoresList";
import StoreCard from "./StoreCard";


function StoresPage({ storeData }) {

    // console.log(storeData)
  const match = useRouteMatch();
//   console.log(match)

  return (
    <div>

      <StoresList storeData={storeData} />


      {/* 
        we can use the current URL from the `match` object as part of the path;
        this will generate a url like "/stores/:storeId"
      */}



      {/* Adding code to show a message to the user to select a movie if they haven't yet */}
      <Route exact path="/stores">
        <h3>THIS SHOULD BE WHERE JOSE'S 📌STORE CREATION FORM📌 COULD GO</h3>
        <h3>WHICH WILL POPULATE ON THE TOP MENU TO NAVIGATE THRU</h3>
        <h3>Once the store link is clicked, this area will be replaced by products</h3>
      </Route>



    </div>
  );
}

export default StoresPage;