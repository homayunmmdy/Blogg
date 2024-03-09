import { useState } from "react";
import Meme from "./Meme";

// Meme Generator component
const MemeGenerator = () => {
  const [topText, setTopText] = useState("");
  const [bottomText, setBottomText] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    if (name === "topText") {
      setTopText(value);
    } else if (name === "bottomText") {
      setBottomText(value);
    } else if (name === "imageUrl") {
      setImageUrl(value);
    }
  };

  return (
    <div className="meme-generator max-w-md mx-auto p-4">
      <input
        type="text"
        name="topText"
        value={topText}
        onChange={handleInputChange}
        placeholder="Top Text"
        className="w-full bg-gray-200 rounded-lg p-2 mb-2"
      />
      <input
        type="text"
        name="bottomText"
        value={bottomText}
        onChange={handleInputChange}
        placeholder="Bottom Text"
        className="w-full bg-gray-200 rounded-lg p-2 mb-2"
      />
      <input
        type="text"
        name="imageUrl"
        value={imageUrl}
        onChange={handleInputChange}
        placeholder="Image URL"
        className="w-full bg-gray-200 rounded-lg p-2 mb-2"
      />
      <Meme topText={topText} bottomText={bottomText} imageUrl={imageUrl} />
    </div>
  );
};

export default MemeGenerator;
