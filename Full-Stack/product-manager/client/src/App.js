import './App.css';
import React, {useState} from 'react';
import {
  BrowserRouter,
  Switch,
  Route,
  Link
} from "react-router-dom";

import AllProducts from './components/AllProducts';
import NewProductForm from './components/NewProductForm'
import OneProduct from './components/OneProduct';
import EditProduct from './components/EditProduct';

function App() {

  // for component to reload automatically after making new product
  const [newProduct, setNewProduct] = useState(false);

  return (
    <BrowserRouter>
      <div>

      </div>
      <Switch>
        <Route exact path={"/"}>
          <AllProducts newProduct = {newProduct} ></AllProducts>
          <hr/>
          <NewProductForm newProduct = {newProduct} setNewProduct = {setNewProduct} ></NewProductForm>
        </Route>
        <Route exact path={"/:id"}>
          <OneProduct></OneProduct>
        </Route>
        <Route exact path={"/edit/:id"}>
          <EditProduct></EditProduct>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
