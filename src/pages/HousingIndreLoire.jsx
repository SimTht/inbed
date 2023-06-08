import React from "react";
import { Link } from "react-router-dom";

import "./HousingIndreLoire.css";
import gmapPic from "../assets/infos_pages/touraine-gmap.png";
import picOne from "../assets/infos_pages/pic-indreetloire-1.png";
import picTwo from "../assets/infos_pages/pic-indreetloire-2.png";

const HousingIndreLoire = () => {
  return (
    <main>
      <section>
        <center>
          <h1 className="container">
            Conciergerie Airbnb Tours et Amboise (37)
          </h1>
        </center>
      </section>
      <section className="indreetloire-section">
        <div className="container indreetloire-container">
          <p>
            Vous êtes à la recherche d’un service de
            <strong> conciergerie Airbnb ou de gestion locative</strong> à Tours
            ou Amboise, pour gérer votre
            <strong> logement, appartement, maison ou gîte ?</strong> Vous êtes
            au bon endroit ! Inbed vous propose une
            <strong> gestion locative complète</strong>
            de votre appartement ou maison à
            <strong> Tours, Amboise et leurs environs.</strong>
          </p>
          <h2>
            Confiez la gestion de votre Airbnb à Tours et Amboise avec Inbed
            (37)
          </h2>
          <p>
            En faisant appel à Inbed, vous confiez la gestion de votre bien
            locatif à des locaux, connaisseurs
            <strong> de la Touraine et du Val-de-Loire !</strong> Nous gérons
            déjà avec succès de{" "}
            <a
              href="https://www.airbnb.fr/users/479186120/listings"
              target="_blank"
              rel="noopener noreferrer"
            >
              <strong>
                nombreux logements disponibles en location à Tours et Amboise{" "}
              </strong>
            </a>
            et les témoignages des propriétaires parlent d’eux-mêmes :
          </p>
          <p>
            <i>
              “A la recherche d'une agence immobilière spécialisée en location
              courte durée (Airbnb), je me suis tournée vers la conciergerie
              Inbed. Ils gèrent mon appartement dans le quartier des halles de
              Tours depuis 1 ans, je suis passé superhost il y a 6 mois. Tous
              nos voyageurs sont ravis de leur accueil et des prestations
              réalisées. Merci !”
            </i>
          </p>
          <p style={{ textAlign: "right" }}>
            <strong>
              <i>Grégory,</i>
            </strong>
            <i> Propriétaire d’un appartement à Tours </i>
          </p>
          <p>
            <i>
              “Maxime et Alexi s’occupent de ma maison à Chambray-lès-Tours. Je
              suis très satisfaite de leurs prestations et des commentaires
              voyageurs sur mes annonces Airbnb et Booking.com. Je les
              recommande sans réserve !”
            </i>
          </p>
          <p style={{ textAlign: "right" }}>
            <strong>
              <i>Bernadette,</i>
            </strong>
            <i> Propriétaire d’un gîte à Chambray-lès-Tours</i>
          </p>
          <p>
            Notre axe de développement est local, nous croyons énormément dans
            l’économie locale et cherchons à la privilégier. Au-delà des
            <a
              href="https://www.airbnb.fr/users/479186120/listings"
              target="_blank"
              rel="noopener noreferrer"
            >
              <strong>
                {" "}
                biens locatifs et des appartements que nous gérons,
              </strong>
            </a>{" "}
            nous avons à cœur de créer du lien entre voyageurs et commerçants
            locaux de
            <strong> Tours et Amboise.</strong>
          </p>
          <center>
            <img
              src={gmapPic}
              alt="Carte Conciergerie Airbnb Tours et Amboise"
            />
          </center>
          <h2>Location courte durée à Tours en Indre-et-Loire (37)</h2>
          <p>
            Avant de vous détailler l’ensemble de nos prestations qui vous
            permettront de
            <strong>
              {" "}
              louer en toute sérénité votre bien immobilier,
            </strong>{" "}
            laissez nous vous en apprendre plus sur le potentiel d’un{" "}
            <Link to={"/tours"}>
              bien en gestion locative à louer en courte durée à
              <strong> Tours, </strong>
            </Link>
            ou les autres villes de la Touraine.
          </p>
          <p>
            En 2021, près de
            <strong> 1000 logements </strong>ont été disponibles sur
            <strong> Airbnb, Booking ou encore Abritel</strong> pour être
            proposés à la
            <strong> location sur Tours</strong>. Une offre plutôt stable, avec
            un pic d’offres de 1300 logements en période estivale.
            <strong> 82% du parc locatif</strong>
            <strong> en location courte durée sur Tours</strong> est composé de
            logements entiers, tandis que 18% sont des chambres chez l’habitant.
          </p>
          <p>
            La majorité des
            <a
              href="https://www.airbnb.fr/users/479186120/listings"
              target="_blank"
              rel="noopener noreferrer"
            >
              <strong> offres de location d’appartements</strong>
            </a>{" "}
            est constituée de <strong>petits logements</strong> (46% ont 1
            chambre et 26% sont des studios). En toute logique, c’est dans
            l’hyper centre, quartier historique, à proximité de la gare, de la
            cathédrale du bord de Loire, que l’on retrouve ces
            <strong>logements Airbnb.</strong>
          </p>
          <p>
            La taille de ces logements et leur emplacement, amènent à des durées
            de séjour plutôt courtes,
            <strong> 77% des séjours ont une durée d’une à deux nuits.</strong>
          </p>
          <p>
            A titre d’exemple, le{" "}
            <strong>
              taux d’occupation des logements proposés à la location à Tours
            </strong>{" "}
            en courte durée, sur le mois d’août 2021, à été de
            <strong> 82% en moyenne</strong> (sur l’ensemble des typologies de
            logements).
          </p>
          <center>
            <img
              src={picOne}
              alt="Conciergerie Location Appartement Airbnb à Tours 37"
            />
          </center>
          <center>
            <Link to={"/tours"} className="btn">
              En savoir plus sur la conciergerie à Tours
            </Link>
          </center>
          <h2>La location courte durée à Amboise en Indre-et-Loire (37)</h2>
          <p>
            <strong>Amboise </strong>
            (37) est également une ville à
            <Link to={"/amboise"}>
              <strong> fort potentiel locatif en locationcourte durée !</strong>
            </Link>
          </p>
          <p>
            En 2021, environ
            <strong> 380 logements</strong> ont été proposés à la
            <strong> location BnB sur Amboise.</strong> C’est environ
            <strong> 150 de plus qu’en 2018,</strong> un chiffre non négligeable
            ! La quasi-totalité de ces logements sont des logements entiers (le
            type de logements que nous gérons). Il peut alors s’agir
            <strong>
              {" "}
              d’appartements, de maisons ou encore de gîtes.
            </strong>{" "}
            L’offre est donc <strong>croissante.</strong>
          </p>
          <p>
            La majorité des
            <a
              href="https://www.airbnb.fr/users/479186120/listings"
              target="_blank"
              rel="noopener noreferrer"
            >
              <strong> biens de location Airbnb à Amboise </strong>
            </a>
            sont de petits logements (44% ont 1 chambre, 27% 2 chambres et 14% 3
            chambres). Quant aux durées de séjour, sans surprise étant donné la
            taille des logements locatifs,{" "}
            <strong>
              il s’agit de courts séjours, de 2 nuits minimum en général.
            </strong>
          </p>
          <p>
            Tout cela signifie qu’il peut donc être facile de
            <strong> tirer son épingle du jeu</strong> en proposant des
            <a
              href="https://www.airbnb.fr/users/479186120/listings"
              target="_blank"
              rel="noopener noreferrer"
            >
              <strong> logements à louer à Amboise </strong>
            </a>
            plus atypiques
            <strong> (gîtes, maisons, grands appartements)</strong>. Cela tombe
            bien, ce sont les types de logements
            <strong> qu’Inbed privilégie</strong> et pour lesquels
            <strong> nous nous spécialisons.</strong>
          </p>
          <center>
            <img
              src={picTwo}
              alt="Conciergerie Location Appartement Airbnb à Amboise 37"
            />
          </center>
          <center>
            <Link to={"/amboise"} className="btn">
              En savoir plus sur la conciergerie à Amboise
            </Link>
          </center>
          <h2>
            Gestion de votre logement à Tours et Amboise avec Inbed en Touraine
          </h2>
          <p>
            Bien souvent, on a une image plutôt figée du
            <strong> marché locatif d’une ville telle que Tours.</strong>{" "}
            Pourtant, la façon de
            <strong> consommer l’hébergement et la location Airbnb</strong> a
            radicalement changé ces dernières années. Qu’il s’agisse de tourisme
            ou de déplacements professionnels,
            <strong> Tours attire de nombreux voyageurs.</strong>
          </p>
          <p>
            N’oublions pas que
            <strong> l’aéroport de Tours Val de Loire,</strong> connecte la
            ville à de{" "}
            <strong>
              nombreux poumons économiques nationaux et internationaux :
            </strong>{" "}
            Londres, Dublin, Marseille, Porto, Marrakech. Sans compter
            évidemment le TGV reliant Tours à Paris en 1h15.
          </p>
          <p>
            La crise sanitaire a donné à de nombreux citadins l’envie de
            s’essayer à court, moyen ou long terme,{" "}
            <strong>
              à une vie plus en lien avec la nature et la ruralité, en louant
              par exemple des logements Bnb.
            </strong>
          </p>
          <p>
            Nous tenons compte de tous ces éléments pour mettre en place{" "}
            <strong>
              la meilleure stratégie locative pour votre logement, qu’il
              s’agisse d’une maison, d’un appartement ou encore d’un gîte.
            </strong>{" "}
            L’objectif est ainsi de vous offrir la meilleure rentabilité
            possible.
          </p>
          <p>
            Vous pourriez par ailleurs être surpris du{" "}
            <strong>
              nombre de voyageurs à la recherche d’un logement Airbnb de courte
              durée à Amboise.
            </strong>{" "}
            Événement familial ou professionnel, déplacement ponctuel,
            télétravail pour découvrir la
            <strong> région Tourangelle ou l’Indre-et-Loire,</strong> vacances,
            les profils des voyageurs sont nombreux et nous savons répondre à
            leurs besoins.
          </p>
          <h2>Accompagnement complet à Tours et Amboise (37)</h2>
          <p>
            <strong>Dès le début de notre collaboration,</strong> nous allons
            vous conseiller et vous accompagner dans la mise en
            <strong> location de votre bien Airbnb.</strong> Nous nous occupons
            de tout :
          </p>
          <h3>CRÉATION DE L’ANNONCE DE LOCATION</h3>
          <p>
            Nous prenons soin de rédiger l’annonce parfaite, qui va attirer
            l’attention des voyageurs et les inciter à réserver votre{" "}
            <strong>
              bien immobilier pour un séjour chaleureux à Tours ou Amboise.
            </strong>{" "}
            Description détaillée du{" "}
            <strong>
              logement Bnb, des équipements, de l’environnement et des lieux et
              activités à découvrir aux alentours.
            </strong>
          </p>
          <h3>LOGISTIQUE DE VOTRE BIEN LOCATIF</h3>
          <p>
            Inbed maitrise l’ensemble des tâches liées à la{" "}
            <strong>
              location de votre logement, appartement, maison ou gîte.
            </strong>{" "}
            Et soyez rassurés, nous travaillons avec des
            <strong> prestataires professionnels</strong> respectant des
            procédures drastiques, qu’il s’agisse du
            <strong> ménage</strong> (incluant un protocole de nettoyage spécial
            Covid19 tant que cela sera nécessaire){" "}
            <strong>
              ou de la blanchisserie. Vous pouvez nous faire confiance !
            </strong>
          </p>
          <p>
            Nous nous chargeons aussi des
            <strong>c onsommables de votre logement,</strong>afin que les
            voyageurs soient parfaitement à l’aise dès leur arrivée.
          </p>
          <p>
            Vous l’aurez compris, notre
            <Link to={"/about"}>
              <strong> conciergerie Airbnb à Amboise et Tours</strong>
            </Link>{" "}
            gère de A à Z la mise en <strong>location de votre bien</strong> et
            <strong> l’optimisation de sa rentabilité</strong>.
          </p>
          <h2>Qui est Inbed ?</h2>
          <p>
            Inbed est une véritable
            <strong>
              {" "}
              agence de conciergerie qui gère votre bien Airbnb, location
              saisonnière ou location courte durée.
            </strong>{" "}
            Nous vous proposons de prendre en charge{" "}
            <strong>
              l’ensemble des tâches liées à la location de votre bien immobilier
            </strong>{" "}
            situé à Tours ou Amboise. Pour plus d’informations concernant Inbed,
            <Link to={"/faq"}> n’hésitez-pas à consultez notre F.A.Q !</Link>
          </p>
          <p>
            Nous intervenons dans de nombreuses villes
            <strong> aux alentours de Tours et Amboise :</strong>
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
          <center>
            <Link
              to={"/tours"}
              className="btn"
              style={{ marginBottom: "1rem" }}
            >
              En savoir plus sur la conciergerie à Tours
            </Link>{" "}
            <Link to={"/amboise"} className="btn">
              En savoir plus sur la conciergerie à Amboise
            </Link>
          </center>
        </div>
      </section>
    </main>
  );
};

export default HousingIndreLoire;
