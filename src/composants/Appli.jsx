import React, { useState } from "react";
import "./Appli.scss";
import logo from "../images/logo.png";
import Menu from "./Menu";
import l12n from "../localisation/textes-statiques.json";
export default function Appli() {
  const [langue, setLangue] = useState("fr");

  return (
    <div className="Appli">
      <header>
        <div className="logo">
          <img src={logo} alt="Logo" />
          <h3>Café Rouge</h3>
          <h5>{l12n.entete.amorce[langue]}</h5>
        </div>
      </header>
      <Menu l12n={l12n} langue={langue} />
      <footer>
        <div className="adresse">{l12n.p2p.adresse[langue]}</div>
        <div className="tel">+1 (321) 987 6543</div>
        <div className="choix-langue">
          <span
            onClick={() => setLangue("fr")}
            style={{ fontWeight: langue === "fr" ? "bold" : "normal" }}
          >
            fr
          </span>
          &bull;
          <span
            onClick={() => setLangue("en")}
            style={{ fontWeight: langue === "en" ? "bold" : "normal" }}
          >
            en
          </span>
        </div>
      </footer>
    </div>
  );
}
