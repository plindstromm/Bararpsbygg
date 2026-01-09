import "./styles.scss";
import cardImage1 from "/assets/indoor.jpg";
import cardImage2 from "/assets/outside_roof.jpg";

function Card() {
  return (
    <div className="card">
      <div className="card__wrap">
        <div
          className="card__left"
          style={{
            backgroundImage: `url(${cardImage1})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          
          <p className="card__text">INOMHUS</p>
        </div>
        <div className="card__right">
          <h2>
            Ett nytt golv, en bokhylla eller rumsavdelare kan lyfta ditt hem och
            öka funktionaliteten.
          </h2>
          <p className="card__right__text">
            Bårarps Bygg erbjuder skräddarsydda inomhuslösningar för
            privatpersoner, bostadsföreningar och företag. Vi är experter på
            golvläggning, och snickeri, alltid med hög
            kvalitet och noggrannhet.
          </p>
        </div>
      </div>
      <div className="card__wrap">
        <div
          className="card__left"
          style={{
            backgroundImage: `url(${cardImage2})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <p className="card__text">UTOMHUS</p>
        </div>
        <div className="card__right">
          {" "}
          <h2>
            En ny altan, ett staket eller en pergola kan lyfta din utemiljö och
            skapa trivsel.
          </h2>
          <p className="card__right__text">
            Bårarps Bygg utför utomhusprojekt för privatpersoner,
            bostadsföreningar och företag. Vi bygger altaner, trädäck och staket
            med fokus på hållbarhet, estetik och hög kvalitet från start till
            finish.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Card;
