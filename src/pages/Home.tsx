import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import React, { useState } from 'react';
import ExploreContainer from '../components/ExploreContainer';
import './Home.css';
import { Link } from 'react-router-dom';

type homeProps = {
  update: Function
}

const Home: React.FC<homeProps> = (props:homeProps) => {

 const [viewRoute, setViewRoute] = useState(false);

  const updateRoute = () => {
    setViewRoute(true);
    props.update(); 
  }

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>HOME</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">HOME</IonTitle>
          </IonToolbar>
        </IonHeader>
        <div className="container">
          <strong>Click Add Route Button</strong><br />
          <button className="" onClick={() => updateRoute()}>Add Route</button><br />
          {viewRoute ? <Link to="./newRoute">Take me to the newRoute</Link>: ''}
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Home;
