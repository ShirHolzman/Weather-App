import "./PartiallyCloudy.css";

const PartiallyCloudy = () => {
  return (
    <div className="container">
      <div className="canvas">
        <div className="sunny">
          <div className="beam"> </div>
          <div className="beam"> </div>
          <div className="beam"> </div>
          <div className="beam"> </div>
          <div className="beam"> </div>
          <div className="beam"> </div>
          <div className="beam"> </div>
          <div className="beam"> </div>
        </div>
        <div className="cloud"></div>
      </div>
    </div>
  );
};

export default PartiallyCloudy;
