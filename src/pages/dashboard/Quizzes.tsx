import { IonPage, IonContent } from "@ionic/react";
import Card from "../../components/shared/Card";

const mockQuizzes = [
  { id: 1, title: "Pollution Basics", description: "Learn about types of pollution." },
  { id: 2, title: "Math Quiz", description: "Test your arithmetic skills." },
  { id: 3, title: "Science Facts", description: "Explore fun science trivia." },
];

const Quizzes = () => {
  return (
    <IonPage>
      <IonContent className="p-6 bg-gray-50">
        <h1 className="text-2xl font-bold mb-4">Available Quizzes</h1>

        <div className="grid gap-4">
          {mockQuizzes.map((quiz) => (
            <Card
              key={quiz.id}
              title={quiz.title}
              description={quiz.description}
              link={`/take-quiz/${quiz.id}`}
            />
          ))}
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Quizzes;
