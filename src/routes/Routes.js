import {BrowserRouter as Router,Switch,Route,Link} from "react-router-dom";
import Login from '../shared/Login';
import Listing from '../admin/Listing';
import Product from '../admin/Product';

function Routesf() {
    return (
        <Router>
            <Switch>
                <Route exact path="/">
                    <Login />
                </Route>
                <Route path="/listing">
                    <Listing />
                </Route>
                <Route path="/product">
                    <Product />
                </Route>
            </Switch>
        </Router>
    );
  }
  
  export default Routesf;