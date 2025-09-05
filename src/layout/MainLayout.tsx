// MainLayout.tsx
import { IonPage, IonContent } from "@ionic/react";
import { Route, Switch } from "react-router-dom";
import React from 'react';

import Header from "../components/layout/Header";
import Sidebar from "../components/layout/Sidebar";
import Footer from "../components/layout/Footer";

import Home from "../pages/dashboard/Home";
import Settings from "../pages/user/Settings";
import Profile from "../pages/user/Profile";
import Quizzes from "../pages/dashboard/Quizzes";
import Results from "../pages/dashboard/Results";

const MainLayout = () => {
  return (
    <>
      <Sidebar />
      <IonPage id="main">
        <Header />
        <IonContent className="bg-gray-50">
          <div className="p-4 min-h-[calc(100vh-140px)]">
            <Switch>
              <Route path="/home" exact component={Home} />
              <Route path="/quizzes" exact component={Quizzes} />
              <Route path="/results" exact component={Results} />
              <Route path="/settings" exact component={Settings} />
              <Route path="/profile" exact component={Profile} />
            </Switch>
          </div>
          <Footer />
        </IonContent>
      </IonPage>
    </>
  );
};

export default MainLayout;