import React, { useEffect, useState } from 'react';
import './Menu.scss';
import menuIconPlats from '../images/menu_icon_plats.png';
import Plat from './Plat';
import { bd, collMenu } from '../code/init'; 
import { collection, getDocs, query, orderBy } from 'firebase/firestore';

export default function Menu({ l12n, langue }) {
  const [plats, setPlats] = useState([]);

  useEffect(() => {
    const fetchPlats = async () => {
      // Crée une requête triée
      const platsCollection = collection(bd, collMenu);
      const platsQuery = query(platsCollection, orderBy("prix", "asc")); // Trie les documents par prix croissant
      const querySnapshot = await getDocs(platsQuery);
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
