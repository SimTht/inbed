import React from "react";
import ContactForm from "../components/ContactForm";
import { Link } from "react-router-dom";

import "./InfoContact.css";

import airbnbPhone from "../assets/airbnb-smartphone.png";
import maidImg from "../assets/maid.png";

const InfoContact = () => {
  return (
    <main>
      <div></div>
      <section className="info-contact-title">
        <center>
          <h3 className="container">
            Inbed, votre partenaire de confiance pour la gestion de vos
            locations touristiques.
          </h3>
        </center>
      </section>
      <section className="info-contact-intro">
        <div className="container">
          <div className="left">
            <div>
              <h4>
                <b>
                  Gardez l'esprit libre avec la gestion locative en Touraine
                </b>
              </h4>
              <p>
                Inbed vous débarrasse des contraintes de la{" "}
                <a
                  href="https://www.airbnb.fr/users/479186120/listings"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {" "}
                  location BnB courte durée
                </a>{" "}
                tout en vous faisant profiter de tous ses avantages ! Vous
                pouvez nous confier en toute sérénité votre logement, qu’il
                s’agisse d’un <strong>appartement</strong>, d’une
                <strong> maison</strong> ou d’un <strong>gite</strong> pour de
                la gestion locative à Tours ou Amboise (37).
              </p>
            </div>
            <div>
              <h4>
                <b>Gardez le contrôle de votre logement Airbnb</b>
              </h4>
              <p>
                Le suivi de toutes les réservations de votre{" "}
                <strong>bien immobilier à Tours ou Amboise</strong> est
                centralisé sur votre espace propriétaire pour un accès facile :{" "}
                <strong>
                  détails des réservations, nombre de voyageurs, loyers perçus,…
                </strong>{" "}
                C’est simple, rapide et pratique&nbsp;!
              </p>
            </div>
            <div>
              <h4>
                <b>Gagnez du temps et générez des revenus locatifs</b>
              </h4>
              <p>
                Inbed<strong> s'occupe de tout !</strong> De la création de
                votre annonce sur Airbnb, Booking, Abritel ou encore Inbed
                jusqu’au ménage de fin de séjour, vous n’aurez rien à faire !
                <br /> Inbed est donc un moyen sûr et efficace de mettre à
                profit un logement inutilisé et de{" "}
                <strong>générer des revenus locatifs facilement</strong>.
              </p>
            </div>
          </div>
          <img src={airbnbPhone} alt="airbnb_smartphone" className="right" />
        </div>
        <a href="#anchor-form" className="btn">
          Contactez Inbed dès maintenant
        </a>
      </section>
      <section className="info-contact-prestations">
        <div className="container">
          <div className="prestation-cards">
            <div className="prestation-card">
              <h3>MÉNAGE PREMIUM DE VOTRE LOGEMENT EN TOURAINE</h3>
              <p>
                Chez Inbed, nous proposons{" "}
                <Link to="/faq">
                  un suivi minutieux de votre location Airbnb
                </Link>{" "}
                avec des <strong>prestataires de qualité</strong>. Le ménage est
                réalisé systématiquement après chaque séjour par notre équipe
                professionnelle. Inbed, c’est la garantie d’un{" "}
                <strong>logement toujours propre</strong> et prêt à accueillir
                de nouveaux visiteurs à tout moment&nbsp;!{" "}
              </p>
            </div>
            <div className="prestation-card">
              <h3>BLANCHISSERIE HAUT DE GAMME</h3>
              <p>
                La qualité du sommeil nous est chère, c’est pour cela que nous
                confions{" "}
                <strong>
                  l’entretien et la fourniture du linge de maison à la
                  blanchisserie "Elis Touraine" située à Montlouis sur Loire
                </strong>{" "}
                proposant des produits de qualité hôtelière.
                <br /> Nous fournissons l'ensemble du linge de maison pour votre
                logement Airbnb :{" "}
                <strong>draps, serviettes, tapis de bain et torchons</strong>.
                Encore une chose en moins à penser avec Inbed !
              </p>
            </div>
            <div className="prestation-card">
              <h3>ACCUEIL PERSONNALISÉ DANS VOTRE LOCATION 24/7</h3>
              <p>
                {" "}
                Notre personnel<strong>Inbed</strong>accompagne les voyageurs
                tout au long de leur séjour dans votre{" "}
                <Link to="/contact#form">
                  location Airbnb à Tours et Amboise.
                </Link>
                <br />
                Il nous tient à cœur d'être présent le plus souvent possible en
                personne (pour leur accueil et leur départ) afin de s’assurer
                que tout se soit bien passé.
                <br />
                Nous fournissons un ensemble de consommables permettant aux
                voyageurs de{" "}
                <strong>passer la première nuit l'esprit tranquille</strong>.
                Chez Inbed, tout est fait pour que vos visiteurs se sentent bien
                et{" "}
                <strong>
                  n’hésitent pas une seconde à l’idée de revenir !
                </strong>
              </p>
            </div>
            <div className="prestation-card">
              <h3>CRÉATION DES ANNONCES SUR AIRBNB, BOOKING…</h3>
              <p>
                {" "}
                Afin d'inciter les futurs voyageurs à{" "}
                <a
                  href="https://www.airbnb.fr/users/479186120/listings"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  réserver votre logement locatif
                </a>
                , nous prenons des <strong>photos de qualité</strong> et
                rédigeons une description{" "}
                <strong>attrayante et personnalisée</strong> de votre{" "}
                <strong>location Airbnb.</strong>
                <br />
                <strong>Airbnb, Booking, Abritel,</strong> toutes ces
                platesformes nous permettent de vous assurer des taux
                d’occupation élevés et de maximiser votre{" "}
                <strong>rentabilité locative à Tours et Amboise</strong>.{" "}
              </p>
            </div>
            <div className="prestation-card">
              <h3>OPTIMISATION DES PRIX</h3>
              <p>
                Chez Inbed, la gestion des prix de votre{" "}
                <strong>propriété locative</strong> est optimisée en fonction
                des saisons, des prix des logements concurrents ainsi que des
                événements particuliers tels que{" "}
                <strong>
                  les vacances, les jours fériés, les manifestations
                  culturelles...
                </strong>
                <br /> Inbed, c’est donc aussi un{" "}
                <strong>suivi régulier de l’actualité</strong> pour que votre
                logement ne passe à côté d’aucun évènement !{" "}
              </p>
            </div>
            <div className="prestation-card">
              <h3>ENTRETIEN DES PROPRIÉTÉS</h3>
              <p>
                {" "}
                Notre <strong>réactivité est importante</strong> pour recevoir
                de bons commentaires. S’il y a un problème,{" "}
                <strong>
                  nous intervenons rapidement et vous sollicitons (si besoin)
                </strong>{" "}
                pour gérer au mieux l’incident.
                <br />
                <br />
                <Link to="/contact#form">Nous sommes disponibles 24/7 !</Link>
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="info-contact-price container">
        <img src={maidImg} alt="service_image" />
        <div>
          <h4>
            <strong>Inbed, combien cela coûte ?</strong>
          </h4>
          <span className="commission">20%</span>
          <p id="text-commission">
            <strong>de commission</strong> sur les loyers perçus + les frais de
            ménage payés par les voyageurs.
          </p>
          <u>Exemple de revenu :</u>
          <p>
            Un voyageur réserve votre logement pour 3 nuits à 100€/nuit soit un
            total de 300€. À ce tarif vont s’ajouter les 50€ de frais de ménage.
            <br />
            Vous percevrez 350€ et nous vous adresserons une facture comprenant
            les 50€ de frais de ménage ainsi que les 20% de commission sur les
            300€.
          </p>
          <p>
            Soit : 350€ - 50€ (ménage) - 60€ (Inbed) ={" "}
            <strong>240€ de revenu locatif.</strong>
          </p>
        </div>
      </section>
      <section className="contact-form-section">
        <div className="info-contact-location-range container">
          <h4>Les principales villes où nous intervenons sont :</h4>
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
        </div>
        <h2 className="container">
          <div
            id="anchor-form"
            style={{
              position: "absolute",
              top: "-5rem",
              left: "0",
            }}
          ></div>
          Demandez <strong>gratuitement</strong> votre estimation de revenus
          locatifs
        </h2>
        <section className="contact-form-bottom container">
          <div className="contact-form-infos">
            <h3>Adresse</h3>
            <p>
              4 chemin des bruyères
              <br />
              37270 ATHEE SUR CHER
              <br />
              Indre et Loire
              <br />
              France
            </p>
            <h3>Téléphone</h3>
            <p>+33629755521</p>
            <p>+33664811175</p>
            <h3>Email</h3>
            <p>contact@inbed.fr</p>
          </div>
          <div className="contact-form-container">
            <ContactForm />
          </div>
        </section>
      </section>
    </main>
  );
};

export default InfoContact;
