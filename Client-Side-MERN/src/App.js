import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './Pages/Home/Home/Home';
import Login from './Pages/Login-Register/Login/Login';
import Register from './Pages/Login-Register/Register/Register';
import NotFound from './Pages/Error404/Notfound';
import AuthProvider from './Pages/Login-Register/Contexts/AuthProvider';
import AllProducts from './Pages/Products/AllProducts/AllProducts';
import PrivateRoute from './Pages/Login-Register/PrivateRoute/PrivateRoute';
import ProductDetails from './Pages/Products/ProductDetails/ProductDetails';
import Dashboard from './Pages/Dashboard/Dashboard/Dashboard';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Switch>
            <Route exact path='/'>
              <Home></Home>
            </Route>
            <Route exact path='/home'>
              <Home></Home>
            </Route>
            <Route path='/dashboard'>
              <Dashboard></Dashboard>
            </Route>
            <Route exact path='/products'>
              <AllProducts></AllProducts>
            </Route>
            <PrivateRoute exact path="/productDetails/:productId">
              <ProductDetails></ProductDetails>
            </PrivateRoute>
            <Route exact path='/login'>
              <Login></Login>
            </Route>
            <Route exact path='/register'>
              <Register></Register>
            </Route>
            <Route path='*'>
              <NotFound></NotFound>
            </Route>
          </Switch>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
