import { IonPage, IonContent } from "@ionic/react";
import { useLocation, Link } from "react-router-dom";

const Results = () => {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const score = params.get("score") || "0";

  return (
    <IonPage>
      <IonContent className="flex flex-col items-center justify-center h-full bg-gray-50">
        <div className="bg-white p-6 rounded-2xl shadow-lg text-center">
          <h1 className="text-3xl font-bold mb-4">🎉 Quiz Completed!</h1>
          <p className="text-lg">Your Score: <span className="font-bold">{score}</span></p>

          <div className="mt-6 flex gap-4">
            <Link to="/quizzes" className="px-4 py-2 bg-blue-600 text-white rounded-lg">
              Take Another Quiz
            </Link>
            <Link to="/home" className="px-4 py-2 bg-gray-300 rounded-lg">
              Go Home
            </Link>
          </div>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Results;
