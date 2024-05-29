import './Menu.scss';
import menuIconPlats from '../images/menu_icon_plats.png';
import Plat from './Plat';

export default function Menu({l12n}) {
  return (
    <div className="Menu">
      <div className="titre">
        <img alt={l12n.menu.entrees['fr']} src={menuIconPlats} />
        <p>{l12n.menu.entrees['fr']}</p>
      </div>

        {/* 
          Vous devez générer dynamiquement l'affichage des plats à partir de 
          Firestore. 
        */}
        <Plat nom="Rouleau de printemps, smoked-meat de MTL et crevettes" prix="15" />
        <Plat nom="Rouleaux impériaux de M. Wu (porc ou végé)" prix="10" />
        <Plat nom="Salade de papaye épicée" prix="13" />
    </div>
  );
}