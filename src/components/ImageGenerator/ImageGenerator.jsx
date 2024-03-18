import "./ImageGenerator.css";
import default_image from "../../assets/services/service-3.png";

const ImageGenerator = () => {
  return (
    <div className="ai-image-generator">
      <div className="header">
        AI image<span> generator</span>
      </div>
      <div className="img-loading">
        <div className="image">
          <img src={default_image} alt="" />
        </div>
      </div>
      <div className="search-box">
        <input
          type="text"
          className="search-input"
          placeholder="Describe what you want to see"
        />
        <div className="generate-btn">Generate</div>
      </div>
    </div>
  );
};

export default ImageGenerator;
