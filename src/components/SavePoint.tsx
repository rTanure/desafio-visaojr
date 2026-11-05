import "./SavePoint.css";

const zeldaImg = "/img/cardsProntos/card-zelda.png";
const falloutImg = "/img/cardsProntos/card-fallout.png";
const portalImg = "/img/cardsProntos/card-portal.png";
const bioshockImg = "/img/cardsProntos/card-bioshock.png";

const zeldaMobileImg = "/img/cardsProntos/mobile-card-zelda.png";
const falloutMobileImg = "/img/cardsProntos/mobile-card-fallout.png";
const portalMobileImg = "/img/cardsProntos/mobile-card-portal.png";
const bioshockMobileImg = "/img/cardsProntos/mobile-card-bioshock.png";



export function SavePoint() {

  return (


        <section className="savepoint-container">
                <div className="savepoint-content">
                     <div className="savepoint-header">
                          <span className="savepoint-tag">SAVE POINT</span>
                          <h2>Frases que marcaram gerações</h2>
                      </div>

        <div className="savepoint-grid">
             <div className="savepoint-card">
                  <img src={zeldaImg} alt="Zelda" className="card-desktop" />
                  <img src={zeldaMobileImg} alt="Zelda" className="card-mobile" />
            </div>

          <div className="savepoint-card">
               <img src={falloutImg} alt="Fallout" className="card-desktop" />
               <img src={falloutMobileImg} alt="Fallout" className="card-mobile" />
          </div>

          <div className="savepoint-card">
            <img src={portalImg} alt="Portal" className="card-desktop" />
            <img src={portalMobileImg} alt="Portal" className="card-mobile" />
          </div>

          <div className="savepoint-card">
            <img src={bioshockImg} alt="BioShock" className="card-desktop" />
            <img src={bioshockMobileImg} alt="BioShock" className="card-mobile" />
          </div>
        </div>
      </div>
      
    </section>
  );
}