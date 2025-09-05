// Sidebar.tsx
import {
  IonMenu,
  IonContent,
  IonList,
  IonItem,
  IonIcon,
  IonLabel,
  IonMenuToggle
} from "@ionic/react";
import {
  homeOutline,
  bookOutline,
  barChartOutline,
  personCircleOutline,
  settingsOutline,
} from "ionicons/icons";
import React from "react";
import { useLocation } from "react-router-dom";

const links = [
  { to: "/home", label: "Home", icon: homeOutline },
  { to: "/quizzes", label: "Quizzes", icon: bookOutline },
  { to: "/results", label: "Results", icon: barChartOutline },
  { to: "/profile", label: "Profile", icon: personCircleOutline },
  { to: "/settings", label: "Settings", icon: settingsOutline },
];

const Sidebar = () => {
  const location = useLocation();

  return (
    <IonMenu
      menuId="main-menu"
      contentId="main"
      side="start"
      type="overlay"
      swipeGesture={false} // ❌ disables swipe-to-close
    >
      <IonContent className="bg-white">
        <div className="p-4 border-b border-gray-200">
          <h2 className="text-xl font-bold text-gray-800">📚 Study Buddy</h2>
        </div>
        <IonList className="p-2">
          {links.map((link) => (
            <IonMenuToggle key={link.to} autoHide={true}>
              <IonItem
                routerLink={link.to}
                routerDirection="root"
                lines="none"
                detail={false}
                className={`rounded-lg mx-2 my-1 transition-colors ${
                  location.pathname === link.to
                    ? "bg-indigo-50 text-indigo-700 font-semibold"
                    : "text-gray-600 hover:bg-gray-100"
                }`}
              >
                <IonIcon slot="start" icon={link.icon} className="text-lg" />
                <IonLabel className="py-3">{link.label}</IonLabel>
              </IonItem>
            </IonMenuToggle>
          ))}
        </IonList>
      </IonContent>
    </IonMenu>
  );
};

export default Sidebar;
