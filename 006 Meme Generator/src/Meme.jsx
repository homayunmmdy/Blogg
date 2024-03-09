// Meme component
const Meme = ({ topText, bottomText, imageUrl }) => {
  return (
    <div className="meme shadow-lg rounded-lg overflow-hidden relative">
      <img src={imageUrl} alt="meme" className="w-full" />
      <div className="top-text absolute inset-x-0 top-0 text-white font-bold text-xl p-2 text-center">
        {topText}
      </div>
      <div className="bottom-text absolute inset-x-0 bottom-0 text-white font-bold text-xl p-2 text-center">
        {bottomText}
      </div>
    </div>
  );
};

export default Meme;
