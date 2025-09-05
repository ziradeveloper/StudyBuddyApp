import { useState } from "react";
import { IonPage, IonContent } from "@ionic/react";
import Button from "../../components/shared/Button";

const mockQuestions = [
  {
    id: 1,
    question: "What causes water pollution?",
    options: ["Plastic waste", "Wind", "Sunlight", "Soil"],
    answer: "Plastic waste",
  },
  {
    id: 2,
    question: "Which pollution is invisible?",
    options: ["Noise pollution", "Soil pollution", "Water pollution", "Air pollution"],
    answer: "Noise pollution",
  },
];

const TakeQuiz = () => {
  const [current, setCurrent] = useState(0);
  const [score, setScore] = useState(0);

  const handleAnswer = (option: string) => {
    if (option === mockQuestions[current].answer) {
      setScore((prev) => prev + 1);
    }
    if (current + 1 < mockQuestions.length) {
      setCurrent((prev) => prev + 1);
    } else {
      window.location.href = `/results?score=${score + (option === mockQuestions[current].answer ? 1 : 0)}`;
    }
  };

  return (
    <IonPage>
      <IonContent className="p-6 bg-gray-50">
        <h1 className="text-xl font-bold mb-4">
          Question {current + 1} of {mockQuestions.length}
        </h1>

        <p className="mb-4">{mockQuestions[current].question}</p>

        <div className="grid gap-2">
          {mockQuestions[current].options.map((opt) => (
            <Button key={opt} onClick={() => handleAnswer(opt)}>
              {opt}
            </Button>
          ))}
        </div>
      </IonContent>
    </IonPage>
  );
};

export default TakeQuiz;
