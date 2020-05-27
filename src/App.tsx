import React from 'react';
import { Redirect, Route, Link } from 'react-router-dom';
import { IonApp, IonRouterOutlet } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import Home from './pages/Home';
import NewRoute from './pages/NewRoute';
import Failed from './pages/Failed';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';
import './pages/Home.css';

const App: React.FC = () => {

  const addRoute = () => {
    const newRoute = <Route key='lsdjldj' path='/newRoute' component={NewRoute} exact={true} />
    routes.push(newRoute);
  };

  let routes = [<Route key='sldjflsdj' path='/home' render={()=> <Home update={addRoute} />} exact={true} />];

  return (
  <IonApp>
    <IonReactRouter>
      <IonRouterOutlet>
        {routes}
        <Route exact path="/" render={() => <Redirect to="/home" />} />
        <Route path="/" render={() => <Failed />} />
      </IonRouterOutlet>
    </IonReactRouter>
  </IonApp>
  )};

export default App;
