import { IonPage, IonContent } from "@ionic/react";

interface AuthLayoutProps {
  children: React.ReactNode;
  title: string;
}

const AuthLayout = ({ children, title }: AuthLayoutProps) => {
  return (
    <IonPage>
      <IonContent className="flex items-center justify-center h-full bg-gray-100">
        <div className="bg-white p-8 rounded-2xl shadow-md w-full max-w-md">
          <h1 className="text-2xl font-bold mb-6 text-center">{title}</h1>
          {children}
        </div>
      </IonContent>
    </IonPage>
  );
};

export default AuthLayout;
