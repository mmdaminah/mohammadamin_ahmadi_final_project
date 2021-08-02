import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './App.css'
import MyNavbar from './Components/Navbar/Navbar';
import routes from './Routes/mainRoutes'
import { Suspense } from 'react';
import Fotoer from './Components/Footer/Footer'
import { useSelector } from 'react-redux'
import { Spinner } from 'react-bootstrap';
function App() {
  document.title="Mamad Shop"
  const cart = useSelector(state=>state)
  return (
    <Router>
      <div className="app">{console.log(cart)}
        <MyNavbar /><Spinner animation="border" variant="primary" />
        <Suspense fallback={<Spinner animation="border" variant="primary"  style={{width:"300px",height:"300px",position:"absolute",top:"25%", right:"35%"}}/>}>
          <Switch>
            {
              routes.map(({ path, exact, Component },index) => {
                return (
                  <Route
                    key={path+index}
                    path={path}
                    exact={exact}
                    render={(props) => <Component {...props} />}
                  />)
              })
            }
          </Switch>
          <Fotoer />
        </Suspense>
      </div>
    </Router>
  );
}

export default App;
