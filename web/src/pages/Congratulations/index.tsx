import React from "react";
import { Link } from "react-router-dom";
import { FiHome } from "react-icons/fi";
import Lottie from "react-lottie";
// import animationData1 from "../../assets/success1.json";
// import animationData2 from "../../assets/success2.json";
// import animationData3 from "../../assets/success3.json";
import animationData4 from "../../assets/success4.json";
// import animationData5 from "../../assets/success5.json";
// import animationData6 from "../../assets/success6.json";

import "./styles.css";

const Congratulations = () => {
  const defaultOptions = {
    loop: false,
    autoplay: true,
    animationData: animationData4,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <>
      <div id="page-congrats">
        <div className="content">
          <main>
            <Lottie options={defaultOptions} height={300} width={400} />

            <p>Ponto cadastrado com sucesso!</p>

            <Link to="/">
              <span>
                <FiHome />
              </span>
              <strong>Ir para a Página Inicial</strong>
            </Link>
          </main>
        </div>
      </div>
    </>
  );
};

export default Congratulations;
