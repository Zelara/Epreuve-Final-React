##### Une fois l'étape 4 complétée, remplacez l'URL du lien sur la ligne suivante par votre URL de solution sur `Firebase Hosting` : 
>[Lien à votre Solution sur `Firebase Hosting`](https://exfinalreact.web.app/)

# Examen final (20 %)
>Travail STRICTEMENT individuel

## Site Web multilingue du restaurant *Café rouge*

### Ce qu’il faut faire
Partant du code source fourni dans ce dépôt GitHub, vous devez créer et intégrer des données dynamiques stockées dans `Firestore` pour le site du restaurant *Café rouge* développé avec React, et permettre l’interactivité de *changement de langue* du site :

La liste des fonctionnalités à implémenter suivent, et une démo de la solution modèle est disponible [ici](https://h24-ef-caferouge.web.app/)

>Suggestion : créez des **nouvelles ressources** `Firebase` pour cette évaluation (nouveau projet `Firebase` / nouvelle appli / nouvelle collection `Firestore`).

1. **Stockage du menu dans `Firestore` (3 points)**
    1. Pour chaque plat dans le menu du restaurant, on veut stocker le nom en français, le nom en anglais (traduisez librement ou à l’aide de Google Translate), ainsi que le prix ; :warning: choisissez bien les types de valeurs dans `Firestore` !!! Pour les besoins de cette évaluation, vous pouvez ignorer les catégories ou sections de menu (entrées, plats principaux, etc. : occupez-vous uniquement des *plats*) ;
    2. Configurez les règles de sécurité pour permettre l’accès libre à tous les documents, MAIS ceci uniquement en **lecture**.

2. **Affichage du menu dynamiquement à partir de Firestore (10 points)**
    1. Programmez l’affichage du menu : au chargement de la page le menu doit être affiché dynamiquement en français ; 
    2. Triez les plats : modifiez votre code pour faire en sorte que Firestore retourne le tableau des plats en ordre **croissant** des prix (donc du moins cher au plus cher). 

>Suggestion : utilisez *useState* et *useEffect*.

3. **Gestion du choix de langue (et sauvegarde dans localStorage) (5 points)**
    1. Par défaut la langue du site est le *français* ;
    2. Si l’utilisateur choisi une langue en cliquant l’un des deux « boutons » en bas de page, la langue du site est modifiée adéquatement ;
    3. Les textes statiques (stockés dans le fichier `localisation/textes-statiques.json`) et le contenu dynamique (le menu stocké dans `Firestore`) suivent tous deux ce choix de langue ;
    4. Le lien de choix de langue correspondant à la langue active est surligné (par exemple, en caractères gras comme dans la démo) ; 
    5. [2 points boni] On conserve le choix de langue dans *localStorage* lorsque un *bouton* de langue est cliqué, et on le récupère à partir de *localStorage* à la prochaine visite au site.

>Suggestion : utilisez *useState* pour gérer la valeur de la langue choisie.

4. **Hébergement sur `Firebase Hosting` (2 points)**
    1. **Compilez** votre projet pour obtenir le dossier de l'application à déployer (`dist`) 
    1. Configurez `Firebase Hosting` pour votre projet et déployez votre appli... suivez les instructions dans votre compte `Firebase` en ligne ; mais voici un rappel de la procédure générale :
        1. Installer les `outils` `Firebase` (si ce n'était pas déjà fait)
        1. Compléter la commande `firebase login`
        1. Compléter la commande `firebase init` 
        1. Compléter la commande `firebase deploy`
    1. Vérifiez que votre URL d’hébergement fonctionne correctement ;
    1. Ajoutez l’URL de votre site hébergé en haut de ce fichier `README.md` à l’endroit clairement identifié ;-)

>Suggestion : faites cette étape uniquement après avoir complété la création de la BD sur `Firestore`.

5. **Remise (points retirés pour toute remise non-conforme)**
    1. Votre dernière *sauvegarde* (`commit`) de code avant la remise doit avoir le *message* suivant : "Examen final complété" ;
    2. Synchronisez (`push`) votre solution complétée avec le dépôt `GitHub` qui vous a été assigné lorsque vous avez accepté le travail avec `GitHub Classroom` ;
    3. Vérifiez auprès de moi que votre dépôt de remise contient la sauvegarde appropriée.

### Gardez une copie personnelle de votre travail : le dépôt de remise sur `582-4PA` sera supprimé une fois la correction complétée et les notes publiées.

## ############### BUT WAIT ... ############### ##
>Veux-tu recevoir un point boni *facile, simple, gratuit* ? Rempli le sondage d'évaluation du cours avant de quitter la classe et je t'ajoute un point boni c'est aussi simple que ça : https://forms.gle/DvTt4pbCfnXcoPVx5  🙏 💝 🙏

(Le sondage est entièrement anonyme ; les résultats sont accessibles uniquement à moi ; ils me servent pour faire mon propre bilan du cours et m'améliorer ; je partage un résumé avec mes collègues enseignants)
## ############################################ ##
