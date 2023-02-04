import "./ThunderStorm.css";

const ThunderStorm = () => {
    return(
        <div className="container">
          <div className="canvas">
            <div className="cloud">
              <div className="cloud-copy"></div>
              <div className="rain">
                <div className="drop"></div>
                <div className="drop"></div>
                <div className="drop"></div>
                <div className="drop"></div>
                <div className="drop"></div>
                <div className="drop"></div>
                <div className="drop"></div>
                <div className="drop"></div>
                <div className="drop"></div>
                <div className="drop"></div>
                <div className="lightning"></div>
              </div>
            </div>
          </div>
        </div>);
};

export default ThunderStorm;