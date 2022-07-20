import React from 'react';
import Cardy from "../../Components/Card/Card";

function SectionInfo() {
  return (
    <section className="info">
        <div className="parallax-info"></div>
          <div className={`Card-dinapoli component`}>
            <div className={`pt-3 pb-md-5 pb-lg-5 my-5 mx-3 mx-md-3 mx-lg-5`}>
              <div className="mb-5 mb-md-0">
                <h2>Des pâtes à fermentation <span>Biga</span></h2>
                
                <p>La Biga est une des pâtes classiques de la tradition boulangère italienne.</p>
                <p>La biga est une pré-fermentation de la pâte qui permet d'utiliser de petites quantités de levure et est, par conséquent, plus digeste.</p>
              </div>
            </div>
          </div>
    </section>
  );
}

export default SectionInfo;