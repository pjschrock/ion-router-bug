import React from 'react';
import './ExploreContainer.css';

interface ContainerProps { }

const ExploreContainer: React.FC<ContainerProps> = () => {
  return (
    <div className="container">
      <strong>Check the IonRouterOutlet using inspector in Components and you will see the new route will be added every time you click the button but they don't work when you are redirected to them.</strong>
    </div>
  );
};

export default ExploreContainer;
