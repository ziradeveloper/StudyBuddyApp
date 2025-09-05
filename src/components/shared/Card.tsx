import { Link } from "react-router-dom";

interface CardProps {
  title: string;
  description?: string;
  link?: string;
}

const Card = ({ title, description, link }: CardProps) => {
  const Wrapper = link ? Link : "div";

  return (
    <Wrapper
      to={link || "#"}
      className="block p-4 bg-white rounded-xl shadow hover:shadow-lg transition"
    >
      <h2 className="text-lg font-bold">{title}</h2>
      {description && <p className="text-sm text-gray-600 mt-1">{description}</p>}
    </Wrapper>
  );
};

export default Card;
