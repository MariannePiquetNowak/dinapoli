import React, { useState, useEffect } from "react";
import { getItems } from "../../services/constants";

function Footer() {
  const [address, setAddress] = useState({});
  const [socials, setSocial] = useState([]);

  useEffect(() => {
    fetch(getItems("social"))
      .then((res) => res.json())
      .then((datas) => setSocial(datas.data))
      .catch((error) =>
        console.log(`Il y a eu un problème lors du fetch : ${error}`)
      );
  }, []);

  useEffect(() => {
    fetch(getItems("adresse"))
      .then((res) => res.json())
      .then((datas) => setAddress(datas.data[0]))
      .catch((error) =>
        console.log(`Il y a eu un problème lors du fetch : ${error}`)
      );
  }, []);
  // console.log(address)

  return (
    <footer className="py-5">
      <div>
        <h1>Pizza Di Napoli</h1>
      </div>
      <section className="contact my-3">
        <div className="contact__hours">
          <p style={{fontWeight: "bold"}}>HORAIRES</p>
          <div>
            <span>Ouvert midi et soir</span>
            <p>Du mardi au samedi</p>
          </div>
          <div>
            <span>Fermé</span>
            <p>Lundi et dimanche</p>
          </div>
        </div>

        <div className="contact__address">
          <p style={{fontWeight: "bold"}}>ADRESSE</p>
        {
          address && (
              <div key={address.id}>
                <div className="address">
                  <i className="fa fa-map-marker" aria-hidden="true"></i>
                  <div>
                    <p>{address.num_street}, {address.name_street}</p>
                    <p>{address.code_postal}, {address.ville}</p>
                  </div>
                </div>
                <div className="phone">
                  <i className="fa fa-phone" aria-hidden="true"></i>
                  <p>Téléphone : {address.telephone}</p>
                </div>
                <div className="mail">
                <i className="fa fa-envelope-o" aria-hidden="true"></i>
                  <p>E-mail : <a href={`mailto:${address.mail}?subject=Demande venant du site`}>{address.mail}</a></p>
                </div>
              </div>
            )
        }
        </div>
      </section>
      <section  className="social my-2">
        <h2>Retrouvez nous aussi sur</h2>
        <div className="social__items py-2">
          {socials &&
            socials.map((social) => (
                <a
                  key={social.id}
                  href={social.lien}
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className={social.icon}></i>
                </a>
          ))}
        </div>
      </section>
      <section className="copyright my-2">
              <a href="/legacy" className="copyright__items">Mentions légales</a>
              <a href="https://marianne-pn.xyz" target="_blank" rel="noreferrer" className="copyright__items">By Marianne Piquet-Nowak</a>
              <span className="copyright__items">Pizza Di Napoli 2022 &copy; Tous droits réservés</span>
      </section>

    </footer>
  );
}

export default Footer;
