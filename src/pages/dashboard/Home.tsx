import { IonPage, IonContent } from "@ionic/react";
import Card from "../../components/shared/Card";

const Home = () => {
  return (
    <IonPage>
      <IonContent className="p-6 bg-gray-50">
        <h1 className="text-3xl font-bold mb-6">Welcome to Study Buddy 🎓</h1>

        <div className="grid gap-4 md:grid-cols-2">
          <Card title="Start Quiz" link="/quizzes" />
          <Card title="My Results" link="/results" />
          <Card title="Profile" link="/profile" />
          <Card title="Settings" link="/settings" />
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Home;
