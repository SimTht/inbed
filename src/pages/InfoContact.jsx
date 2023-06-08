import React from "react";
import ContactForm from "../components/ContactForm";

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
                <b>Gardez l'esprit libre</b>
              </h4>
              <p>
                Nous vous débarrassons des contraintes de la location courte
                durée tout en vous faisant profiter de tous ses avantages.
              </p>
            </div>
            <div>
              <h4>
                <b>Gardez le contrôle</b>
              </h4>
              <p>
                Le suivi de toutes les réservations est centralisé sur votre
                espace propriétaire : détails des réservations, nombre de
                voyageurs, loyers perçus, …
              </p>
            </div>
            <div>
              <h4>
                <b>Gagnez du temps</b>
              </h4>
              <p>
                <strong>Inbed</strong> s'occupe de tout !
              </p>
            </div>
          </div>
          <img src={airbnbPhone} alt="airbnb_smartphone" className="right" />
        </div>
      </section>
      <section className="info-contact-prestations">
        <div className="container">
          <div className="prestation-cards">
            <div className="prestation-card">
              <h3>Ménage premium</h3>
              <p>
                Chez <strong>Inbed</strong>, nous proposons un suivi minutieux
                de votre propriété avec des prestataires de qualité.
                <br />
                <br />
                Dans cette démarche, nous nous sommes associé à "Axeo services"
                situé à Nazelles-Négron pouvant intervenir sur un secteur allant
                de Tours à Amboise.
                <br />
                <br />
                Le ménage est réalisé systématiquement après chaque séjour par
                notre équipe professionnelle.
              </p>
            </div>
            <div className="prestation-card">
              <h3>Blanchisserie haut de gamme</h3>
              <p>
                La qualité du sommeil nous est chère, c’est pour cela que nous
                confions l’entretien et la fourniture du linge de maison à la
                blanchisserie "Elis Touraine" située à Montlouis sur Loire
                proposant des produits de qualité hôtelière.
                <br />
                <br />
                Nous fournissons l'ensemble du linge de maison pour votre
                logement : draps, serviettes, tapis de bain et torchons.
              </p>
            </div>
            <div className="prestation-card">
              <h3>Accueil personnalisé 24/7</h3>
              <p>
                Notre personnel <strong>Inbed</strong> accompagne les voyageurs
                tout au long de leur séjour.
                <br />
                <br />
                Il nous tient à cœur d'être présent le plus souvent possible en
                personne (pour leur accueil et leur départ) afin de s’assurer
                que tout se soit bien passé.
                <br />
                <br />
                Nous fournissons un ensemble de consommables permettant aux
                voyageurs de passer la première nuit l'esprit tranquille.
              </p>
            </div>
            <div className="prestation-card">
              <h3>Création des annonces</h3>
              <p>
                Afin d'inciter les futurs voyageurs à réserver votre logement,
                nous prenons des photos de qualité et rédigeons une description
                attrayante et personnalisée de votre bien.
                <br />
                <br />
                Airbnb, Booking.com, Abritel, toutes ces plates-formes nous
                permettent de vous assurer des taux d’occupation élevés et de
                maximiser votre rentabilité locative.e
              </p>
            </div>
            <div className="prestation-card">
              <h3>Optimisation des prix</h3>
              <p>
                Chez <strong>Inbed</strong>, la gestion des prix de votre
                propriété est optimisée en fonction des saisons, des prix des
                logements concurrents ainsi que des événements particuliers tels
                que les vacances, les jours fériés, les manifestations
                culturelles ..
              </p>
            </div>
            <div className="prestation-card">
              <h3>Entretien des propriétés</h3>
              <p>
                Notre réactivité est importante pour recevoir de bons
                commentaires. S’il y a un problème nous intervenons rapidement
                et vous sollicitons (si besoin) pour gérer au mieux l’incident.
                <br />
                <br />
                Nous sommes disponibles 24/7 !
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="info-contact-price container">
        <img src={maidImg} alt="service_image" />
        <div>
          <h4>
            <strong>Combien ça coûte ?</strong>
          </h4>
          <span className="commission">20%</span>
          <p id="text-commission">
            de commission sur les loyers perçus + les frais de ménage payés par
            les voyageurs.
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
