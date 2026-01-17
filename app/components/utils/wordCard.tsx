

const WordCard = ({ text } : {text : string}) => {
  return (
    <div
      className="bg-gray-900 p-6 rounded-xl shadow-lg flex items-center justify-center text-center hover:scale-105 transition-transform"
    >
      <span className="text-xl font-semibold text-white">
        {text}
      </span>
    </div>
  );
};

export default WordCard;