import React, { useEffect, useState } from 'react';
import './Menu.scss';
import menuIconPlats from '../images/menu_icon_plats.png';
import Plat from './Plat';
import { bd, collMenu } from '../code/init'; 
import { collection, getDocs } from 'firebase/firestore';

export default function Menu({l12n, langue}) {
  const [plats, setPlats] = useState([]);

  useEffect(() => {
    const fetchPlats = async () => {
      const querySnapshot = await getDocs(collection(bd, collMenu));
      const platsData = querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
      setPlats(platsData);
    };

    fetchPlats();
  }, []);

  return (
    <div className="Menu">
      <div className="titre">
        <img alt={l12n.menu.entrees[langue]} src={menuIconPlats} />
        <p>{l12n.menu.entrees[langue]}</p>
      </div>
      {plats.map(plat => (
        <Plat key={plat.id} nom={langue === 'fr' ? plat.nom_fr : plat.nom_en} prix={plat.prix} />
      ))}
    </div>
  );
}
