import WordCard from "../utils/wordCard";

const Identity = ({ items } : {items : string[]}) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
      {items.map((text, idx) => (
        <WordCard key={idx} text={text} />
      ))}
    </div>
  );
};

export default Identity;