import React from "react";
import { Link } from "react-router-dom";

import "./FAQ.css";

const FAQ = () => {
  return (
    <main>
      <section>
        <center>
          <h1 className="container">
            F.A.Q (Foire Aux Questions) Inbed Tours & Amboise (37)
          </h1>
        </center>
      </section>
      <section className="faq-section">
        <div className="container faq-container">
          <h2>Inbed, c’est quoi ?</h2>
          <h3>QU’EST-CE QUE LE CONCEPT DE CONCIERGERIE AIRBNB INBED ?</h3>
          <p>
            Nous sommes
            <strong> Maxime et Alexi,</strong> avant d’être vos{" "}
            <Link to={"/about"}>
              <strong>concierges à Tours et Amboise, </strong>
            </Link>
            nous sommes également{" "}
            <strong>
              propriétaires et gestionnaires de nos biens personnels
            </strong>
            en location saisonnière. Nous avons à cœur de gérer
            <strong> votre logement comme si c’était le nôtre !</strong>
          </p>
          <p>
            <Link to={"/contact"}>
              <strong>Contactez-nous facilement </strong>
            </Link>
            et confiez la gestion de votre{" "}
            <strong>appartement, maison, location</strong> Airbnb à une{" "}
            <strong>conciergerie professionnelle à Tours et Amboise.</strong>
          </p>
          <h3>
            A QUI S’ADRESSENT LES SERVICES DE CONCIERGERIE PROPOSÉS PAR INBED A
            TOURS ET AMBOISE ?
          </h3>
          <p>
            <strong>Inbed</strong> s’adresse aux
            <strong> propriétaires et investisseurs immobiliers</strong>{" "}
            souhaitant <strong>déléguer toute la logistique</strong> liée à la
            gestion de leur locations saisonnière Airbnb tout en
            <strong> optimisant leurs revenus.</strong> Inbed est une équipe
            d’experts de la <strong>location courte durée</strong> au service de
            propriétaires souhaitant{" "}
            <strong>louer sur Airbnb, Booking et Abritel.</strong>
          </p>
          <center>
            <Link to={"/contact"} className="btn">
              Je me lance et mets mon logement en location
            </Link>
          </center>
          <h3>
            COMMENT INBED PEUT VOUS AIDER À GÉRER VOTRE LOCATION COURTE DURÉE ?
          </h3>
          <p>
            Dans le cas où vous êtes en incapacité de vous occuper de votre
            <strong> location saisonnière, BnB Inbed</strong> s’en charge pour
            vous. Autrement dit, nous
            <strong> créons et diffusons votre annonce</strong> de location
            professionnelle à votre place sur les plateformes de réservation et
            nous optimisons son prix quotidiennement pour vous assurer une
            rentabilité optimale. Ce n’est pas tout, nous prenons soin de vos
            voyageurs grâce à un{" "}
            <strong>service de linge et de ménage de qualité hôtelière,</strong>{" "}
            une maintenance disponible pendant tout leur séjour et un accueil
            irréprochable. En conséquence, nous vous aidons pour vos locations
            saisonnières sur{" "}
            <strong>
              Airbnb, Booking ou encore Abritel en faisant tout, de A à Z.
            </strong>
          </p>
          <h3>
            COMMENT INBED PEUT VOUS AIDER À GÉRER VOTRE LOCATION AIRBNB MOYENNE
            DURÉE ?
          </h3>
          <p>
            Lors d’une
            <strong> location moyenne durée,</strong> le voyageur est présent
            d’une période de 3 à 12 mois. Chez
            <strong> Inbed</strong>, nous calculons d’abord la
            <strong> solvabilité de vos locataires.</strong> En plus de cela,
            votre
            <Link to={"/"}>
              <strong> conciergerie Airbnb</strong>
            </Link>{" "}
            propose un service de ménage et linge de qualité hôtelière. Ainsi
            que des revenus optimisés toute l’année.{" "}
            <strong>
              Le tout dans deux villes magnifiques que sont Tours et Amboise !
            </strong>
          </p>
          <h3>
            DANS QUELLES VILLES INTERVIENT LE SERVICE DE CONCIERGERIE INBED ?
          </h3>
          <p>
            <strong>Inbed</strong> vous accompagne pour gérer votre{" "}
            <strong>bien Airbnb à Tours, Amboise </strong>
            et l’ensemble des villes de{" "}
            <strong>Touraine et d’Indre-et-Loire :</strong>
          </p>
          <p>
            Tours (37000), Saint-Cyr-sur-Loire (37540), Saint-Pierre-des-Corps
            (37700), La Ville-aux-Dames (37700), Montlouis-sur-Loire (37270),
            Vouvray (37210), Rochecorbon (37210), Azay-sur-Cher (37270),
            Athée-sur-Cher (37270), Véretz (37270), Larçay (37124),
            Saint-Avertin (37550), La Riche (37520), Chambray-lès-Tours (37170),
            Joué-lès-Tours (37300), Cerelles (37390), Charentilly (37390),
            Chanceaux-sur-Choisille (37390), Saint-Roch (37390), La
            Membrolle-sur-Choisille (37390), Mettray (37390), Notre-Dame-d'Oé
            (37390), Lussault-sur-Loire (37400), Amboise (37400), Charge
            (37530), Souvigny de Touraine (37530), Montreuil-en-Touraine
            (37530), Limeray (37530), Cangey (37530), Saint-Ouen-les-Vignes
            (37530), Saint-Règle (37530), Nazelles-Négron (37530), Mosnes
            (37530), Pocé-sur-Cisse (37530), Bléré (37150) ou encore Chenonceau
            (37150).
          </p>
          <h2>La gestion locative Airbnb avec Inbed</h2>
          <h3>
            EST-CE QUE INBED S’OCCUPE DE LA MAINTENANCE DE MON APPARTEMENT, DE
            MA
          </h3>
          <h3>MAISON OU DE MON GÎTE UNE FOIS EN LOCATION ?</h3>
          <p>
            Nous serons directement en contact avec vous pour tout ce qui
            concerne la
            <strong> logistique de </strong>
            <a
              href="https://www.airbnb.fr/users/479186120/listings"
              target="_blank"
              rel="noopener noreferrer"
            >
              <strong>
                votre location dans les communes de Tours ou Amboise,
              </strong>
            </a>{" "}
            qu’il s’agisse d’un <strong>appartement, </strong>
            d’une
            <strong> maison </strong>ou d’un <strong>gîte.</strong> Par exemple,
            si l’intervention d’un artisan pour votre chaudière est nécessaire,
            nous nous rapprocherons de vous afin de vous tenir au courant de la
            situation mais aussi
            <strong> d’obtenir votre autorisation</strong> (validation de devis)
            en amont.
          </p>
          <h3>
            EST-CE QUE JE PEUX REVENIR DANS MON LOGEMENT QUAND JE LE SOUHAITE ?
          </h3>
          <p>
            Notre
            <strong> application mobile Inbed</strong> vous offre la possibilité
            de
            <strong>
              {" "}
              bloquer vos dates en fonction de vos disponibilités
            </strong>
            lorsque votre appartement n’est pas sujet à des réservations faites
            par les voyageurs. Autrement dit, vous avez l’opportunité d’avoir la
            <strong> main mise sur le calendrier.</strong>
          </p>
          <p>
            Ainsi, vous pouvez
            <strong>
              revenir dans votre appartement ou votre maison quand vous le
              souhaitez
            </strong>{" "}
            (lorsqu’il n’y a pas de réservations). Attention, il n’est pas
            possible d’annuler une réservation déjà réalisée par un voyageur,
            <strong> pensez donc à anticiper votre venue. </strong>Pour plus de
            questions concernant notre application mobile et la
            <strong> gestion de votre location Airbnb,</strong>{" "}
            <Link to={"/contact"}>
              <strong>pensez à nous contacter !</strong>
            </Link>
          </p>
          <h3>COMBIEN DE JEUX DE CLÉS DE MON LOGEMENT DOIS-JE FOURNIR ?</h3>
          <p>
            Par mesure de sécurité, nous avons besoin de{" "}
            <strong>
              3 jeux de clés de votre logement BnB à notre disposition.
            </strong>{" "}
            Ces jeux de clés seront utiles pour notre
            <strong> équipe de ménage</strong>, nos <strong>concierges</strong>{" "}
            et surtout vos
            <strong> voyageurs</strong>. Inbed, c’est la garantie de proposer à
            des visiteurs un
            <strong> appartement ou une maison qualitative en </strong>
            <strong>
              <a
                href="https://www.airbnb.fr/users/479186120/listings"
                target="_blank"
                rel="noopener noreferrer"
              >
                location sur Airbnb, Booking ou encore Abritel.
              </a>
            </strong>
          </p>
          <h2>Législation concernant la location d’appartements Airbnb</h2>
          <h3>
            QUE DOIS-JE FAIRE LORSQUE JE LOUE MA RÉSIDENCE PRINCIPALE A TOURS OU
            AMBOISE (37) ?
          </h3>
          <p>
            Lorsque vous louez une résidence principale au sein d’une ville de
            plus de 200 000 habitants, vous pouvez{" "}
            <strong>
              louer votre bien locatif meublé de courte durée dans la limite de
              120 jours par an
            </strong>{" "}
            (soit 4 mois par an ou 10 jours par mois en moyenne). En plus de
            cela, vous êtes dans l’obligation de vous enregistrer auprès de la
            mairie afin de vous procurer un
            <strong> numéro d’immatriculation.</strong>Ce numéro sera par la
            suite posté sur votre annonce sur les plateformes de location, dans
            le but de
            <strong> compter le nombre de nuitées. </strong>
            Vous devez également vous{" "}
            <strong>acquitter de la taxe de séjour. </strong>Dans le cas où
            votre location saisonnière se situe dans une ville comptant moins de
            200 000 habitants,
            <strong> vous n’êtes pas sujet au numéro d’enregistrement, </strong>
            dans la limite des 120 jours par an. A noter également que certaines
            <strong> plateformes de location</strong> reversent automatiquement
            la <strong>taxe de séjour auprès de votre commune.</strong>
          </p>
          <h3>QUE DOIS-JE FAIRE LORSQUE JE LOUE MA RÉSIDENCE SECONDAIRE ?</h3>
          <p>
            Lorsque vous
            <strong> louez une résidence secondaire </strong>
            au sein d’une ville de plus de 200 000 habitants, vous êtes dans
            l’obligation de
            <strong> déclarer votre appartement ou votre maison</strong> en
            remplissant le CERFA et
            <strong> obtenir une autorisation</strong> auprès de la mairie pour
            transformer votre local d’habitation en
            <a
              href="https://www.airbnb.fr/users/479186120/listings"
              target="_blank"
              rel="noopener noreferrer"
            >
              <strong> location saisonnière</strong>
            </a>{" "}
            (dans certaines villes une compensation financière vous sera
            demandée). De plus, votre numéro d’enregistrement à 13 chiffres
            devra obligatoirement figurer sur toutes vos annonces.
          </p>
          <p>
            Si vous possédez votre
            <strong> résidence secondaire</strong>
            dans une ville de moins de 200 000 habitants,{" "}
            <strong>
              la déclaration auprès de la mairie est obligatoire et le
              changement d’usage est nécessaire
            </strong>{" "}
            que dans certaines communes.
          </p>
          <h3>DOIS-JE PAYER LA TAXE DE SÉJOUR ?</h3>
          <p>
            Les voyageurs séjournant dans une
            <a
              href="https://www.airbnb.fr/users/479186120/listings"
              target="_blank"
              rel="noopener noreferrer"
            >
              <strong> location Airbnb </strong>
            </a>
            doivent s’acquitter d’une <strong>taxe de séjour. </strong>Depuis le
            1er janvier 2019, la taxe de séjour est
            <strong> proportionnelle au prix de la nuitée</strong> (entre 1% et
            5%). Selon votre commune, vous devrez{" "}
            <strong>
              déclarer et reverser vos revenus chaque mois ou bien chaque
              trimestre.{" "}
            </strong>
            Certaines plateformes comme Airbnb se chargent directement de{" "}
            <strong>
              collecter et reverser la taxe de séjour auprès de votre mairie.
            </strong>
          </p>
          <h2>Diffusion de mon annonce de location Airbnb sur internet</h2>
          <h3>
            SUR QUELLES PLATEFORMES DE LOCATION EST DIFFUSÉE MON ANNONCE
            LOCATIVE ?
          </h3>
          <p>
            Nous rédigeons, créons et diffusons votre annonce sur les
            plateformes de réservation telles que
            <strong> Inbed, Airbnb, Booking et Abritel (HomeAway).</strong> Vous
            pourrez ainsi louer votre logement en toute tranquillité à
            <strong> Tours et Amboise (37) ! </strong>Une question ? Un
            renseignement ?
            <Link to={"/contact"}>
              <strong> Contactez-nous facilement !</strong>
            </Link>
          </p>
          <h3>
            QUELS SONT LES AVANTAGES DE LA PLATEFORME DE CONCIERGERIE INBED ?
          </h3>
          <p>
            Les plateformes de réservation prennent un
            <strong> pourcentage de commission</strong> lors des réservations.
            Avec Inbed,{" "}
            <strong>
              les voyageurs ne paient pas la commission des différentes
              plateformes en ligne.
            </strong>{" "}
            Par conséquent, cela influe sur la tarification, c’est un vrai
            <strong> outil de fidélisation des voyageurs.</strong>
          </p>
          <h2>Le paiement de mes revenus locatifs</h2>
          <h3>QUAND SUIS-JE PAYÉ POUR LA LOCATION DE MON BIEN ?</h3>
          <p>
            Vous percevez après chaque réservation les
            <strong> revenus générés par votre location</strong>{" "}
            <strong>Airbnb</strong> directement par virement bancaire. Les
            délais sont les suivants :
          </p>
          <ul>
            <li>
              <strong>Airbnb</strong>: 2 jours après l'arrivée des voyageurs
            </li>
            <li>
              <strong>Booking</strong> : 10 jours après le départ des voyageurs
            </li>
            <li>
              <strong>Abritel &amp; Inbed</strong> : au moment de la réservation{" "}
            </li>
          </ul>
          <center>
            <Link to={"/contact"} className="btn">
              J’estime mes revenus locatifs gratuitement
            </Link>
          </center>
          <h3>QUI PAYE LA GESTION DU MÉNAGE ET DU LINGE DE VOTRE LOGEMENT ?</h3>
          <p>
            Les prestations de ménage et de linge
            <strong> sont à la charge de vos voyageurs,</strong> et donc
            totalement indolores pour vous. Vous serez ainsi assuré que votre
            <strong>
              {" "}
              logement en location sera systématiquement nettoyé et propre,
            </strong>{" "}
            sans frais supplémentaires !
          </p>
          <h3>
            COMMENT MON BIEN BNB DOIT-IL ÊTRE ÉQUIPÉ ? EST-CE QU’IL Y A DES
            ÉQUIPEMENTS
          </h3>
          <h3>OBLIGATOIRES ?</h3>
          <p>
            Tous nos appartements doivent avoir un
            <strong> réseau WIFI en état de marche,</strong> une{" "}
            <strong>cuisine équipée,</strong> des{" "}
            <strong>couettes et des oreillers</strong> pour tous les voyageurs
            ainsi qu’un <strong>aspirateur</strong> (à sac de préférence), une
            <strong> serpillère à lavette</strong> (Vileda Ultra-max) et un{" "}
            <strong>sceau pour nos équipes de ménage.</strong>
          </p>
          <h3>
            COMMENT DOIS-JE PRÉPARER MON APPARTEMENT AIRBNB AVANT LA PREMIÈRE
            LOCATION ?
          </h3>
          <p>
            Nous vous conseillons de
            <strong>
              {" "}
              ranger vos affaires personnelles dans une armoire qui ferme à clé.
            </strong>{" "}
            Vos voyageurs auront
            <strong> besoin de place</strong> pour ranger leurs affaires,
            laissez une place dans vos placards. Pensez à mettre vos
            <strong>
              {" "}
              objets de valeurs en sécurité et à conserver vos factures en cas
              de besoin.
            </strong>{" "}
            Indiquez-nous les instructions des principaux équipements de votre
            <strong> logement BnB</strong>, tels que le lave-linge, le four ou
            encore le lave-vaisselle. Rangez vos linges de lit et de toilette,
            <strong> nous les fournissons</strong>. Pour plus de renseignements
            à propos de la préparation de votre appartement ou maison Airbnb,
            <strong> contactez-nous depuis notre site internet.</strong>
          </p>
          <h2>Tarification sur les logements Bnb</h2>
          <h3>QUELLE EST NOTRE COMMISSION POUR LA LOCATION D’UN LOGEMENT ?</h3>
          <p>
            <strong>C’est simple !</strong> Notre commission est de{" "}
            <strong>
              20% sur le montant des nuitées de votre bien immobiliser en
              location.
            </strong>{" "}
            Vous gagnez plus, nous gagnons plus ! Nous tenons à ce qu’Inbed soit
            et reste
            <strong> un concept juste et solidaire, </strong>pour nous comme
            pour vous et vos visiteurs !
          </p>
          <h3>QUE COMPREND LA COMMISSION INBED ?</h3>
          <p>
            Notre commission comprend la
            <strong> création de votre annonce</strong> et sa connexion aux
            <strong> plateformes de réservation.</strong> La{" "}
            <strong>gestion des échanges</strong> avec les voyageurs, la{" "}
            <strong>coordination de la maintenance</strong>
            en cas de problème dans votre location saisonnière, la mise en place
            de<strong>produits d’accueil</strong> pour chaque voyageurs, la mise
            à disposition et l’entretien du
            <strong> linge de maison,</strong> une personne dédiée pour{" "}
            <Link to={"/faq"}>
              <strong>répondre à vos questions</strong>
            </Link>
            <strong> et maximiser vos revenus. </strong>Chez Inbed, vous n’avez
            à vous soucier de rien !
          </p>
          <h3>QUE COMPRENNENT LES FRAIS DE DOSSIER INBED ?</h3>
          <p>
            Nous appliquons des
            <strong> frais de dossier comprenant</strong> : un{" "}
            <strong>shooting photo</strong> professionnel (20 à 40 photos)
            coordonné par Inbed pour la diffusion sur toutes les plateformes, la{" "}
            <strong>
              création de votre annonce sur Airbnb, Booking, Abritel et Inbed,
            </strong>{" "}
            sa diffusionainsi que la mise en place d’une
            <strong> stratégie de lancement</strong>, la mise en place d’une
            <strong> prestation de ménage</strong> professionnel et de linge
            avant la première réservation.
          </p>
          <p>
            <br />
            Le forfait varie en fonction de la taille de votre
            <strong> appartement ou de votre maison</strong> :
          </p>
          <ul>
            <li>
              Studio et T2 : <strong>100 €</strong>
            </li>
            <li>
              T3 : <strong>125 €</strong>{" "}
            </li>
            <li>
              T4 et plus : <strong>150 €</strong>{" "}
            </li>
          </ul>
          <h2>Suivi des locations Airbnb</h2>
          <h3>COMMENT SUIVRE MES REVENUS LOCATIFS ?</h3>
          <p>
            Vous aurez accès à votre
            <strong> compte propriétaire depuis votre ordinateur</strong> ainsi
            qu’à notre <strong>application mobile Inbed.</strong> Vous pourrez{" "}
            <strong>
              télécharger vos factures et suivre vos revenus en temps réel.
            </strong>{" "}
            Nous faisons évoluer constamment la qualité nos services pour que le{" "}
            <strong>
              suivi et les revenus issus de vos biens locatifs Airbnb
            </strong>{" "}
            soient faciles à comprendre et à analyser pour vous !
          </p>
          <h3>COMMENT SUIVRE MES LOCATIONS AIRBNB, BOOKING… ?</h3>
          <p>
            Vous pourrez suivre vos locations
            <strong> Airbnb, Booking, Abritel et Inbed</strong> directement
            depuis<strong> notre application mobile. </strong>Inbed, c’est avant
            tout un service{" "}
            <strong>
              qualitatif, complet et accessible partout et tout le temps !
            </strong>{" "}
            <Link to={"/contact"}>
              Contactez-notre équipe de conciergerie à tout moment !
            </Link>
          </p>
          <h3>
            QUELLES GARANTIES POUR LA GESTION DE MA LOCATION SAISONNIÈRE ?
          </h3>
          <p>
            Nous diffusons nos appartements, maisons et gîtes sur des
            plateformes de locations de confiance comme
            <strong> Airbnb, Booking et Abritel.</strong> Tous nos appartements
            sont <strong>loués sous caution</strong> grâce à notre
            <strong> partenaire de confiance.</strong> Enfin nous rappelons le
            règlement intérieur de votre appartement
            <strong> à tous vos voyageurs.</strong>
          </p>
          <center>
            <Link to={"/contact"} className="btn">
              Contacter Inbed dès maintenant
            </Link>
          </center>
        </div>
      </section>
    </main>
  );
};

export default FAQ;
