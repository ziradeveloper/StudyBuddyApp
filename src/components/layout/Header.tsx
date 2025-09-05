// Header.tsx
import {
  IonHeader,
  IonToolbar,
  IonButtons,
  IonButton,
  IonTitle,
  IonMenuButton,
  IonIcon,
  IonPopover,
  IonList,
  IonItem,
  IonLabel
} from "@ionic/react";
import {
  personCircleOutline,
  settingsOutline,
  logOutOutline,
  helpCircleOutline,
  cardOutline
} from "ionicons/icons";
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

const Header = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const history = useHistory();

  const handleOptionClick = (path: string) => {
    setShowDropdown(false);
    if (path === '/logout') {
      // Handle logout logic here
      console.log('User logged out');
    } else {
      history.push(path);
    }
  };

  const menuOptions = [
    { path: '/profile', label: 'Profile', icon: personCircleOutline },
    { path: '/settings', label: 'Settings', icon: settingsOutline },
    { path: '/billing', label: 'Billing', icon: cardOutline },
    { path: '/help', label: 'Help & Support', icon: helpCircleOutline },
    { path: '/logout', label: 'Logout', icon: logOutOutline, isDestructive: true },
  ];

  return (
    <IonHeader className="ion-no-border">
      <IonToolbar className="bg-white border-b border-gray-200">
        <IonButtons slot="start">
          <IonMenuButton 
            autoHide={false}
            menu="main-menu"
            className="text-gray-600"
          />
        </IonButtons>
        
        <IonTitle className="text-lg font-bold text-gray-800 text-center">
          📚 Study Buddy
        </IonTitle>
        
        <div slot="end" className="flex items-center">
          <IonButton 
            fill="clear" 
            className="p-1 rounded-full hover:bg-gray-100 transition-colors"
            onClick={() => setShowDropdown(true)}
            id="profile-button"
          >
            <img
              src="https://i.pravatar.cc/32?img=5"
              alt="avatar"
              className="w-8 h-8 rounded-full border-2 border-gray-200"
            />
          </IonButton>
        </div>

        <IonPopover
          isOpen={showDropdown}
          onDidDismiss={() => setShowDropdown(false)}
          trigger="profile-button"
          side="bottom"
          alignment="end"
          className="profile-popover"
        >
          <div className="bg-white rounded-lg shadow-lg border border-gray-200 w-48">
            <IonList lines="none" className="py-2">
              {menuOptions.map((option) => (
                <IonItem 
                  key={option.path}
                  button
                  detail={false}
                  onClick={() => handleOptionClick(option.path)}
                  className={`mx-2 my-1 rounded-lg ${
                    option.isDestructive 
                      ? "text-red-600 hover:bg-red-50" 
                      : "text-gray-700 hover:bg-gray-100"
                  }`}
                >
                  <IonIcon 
                    slot="start" 
                    icon={option.icon} 
                    className={option.isDestructive ? "text-red-500" : "text-gray-500"} 
                  />
                  <IonLabel className="text-sm">{option.label}</IonLabel>
                </IonItem>
              ))}
            </IonList>
          </div>
        </IonPopover>
      </IonToolbar>
    </IonHeader>
  );
};

export default Header;