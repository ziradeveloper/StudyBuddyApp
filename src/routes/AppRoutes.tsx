// AppRoutes.tsx
import { Route, Redirect } from 'react-router-dom';
import { IonRouterOutlet } from '@ionic/react';
import React from 'react';
import MainLayout from '../layout/MainLayout';

const AppRoutes = () => (
  <IonRouterOutlet>
    <Route path="/" exact>
      <Redirect to="/home" />
    </Route>

    <Route path="/">
      <MainLayout />
    </Route>
  </IonRouterOutlet>
);

export default AppRoutes;