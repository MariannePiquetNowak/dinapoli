import React, { useState, useEffect } from 'react'
import { getItems } from '../../services/constants';


function Footer() {
  const [socials, setSocial] = useState();

  useEffect(() => {
    fetch(getItems("social"))
    .then(res => res.json())
    .then(datas => setSocial(datas.data))
  },[]);

  console.log(socials);




  return (
    <footer className="py-5">
      <h1>Pizza Di Napoli</h1>
      <section className="contact">
        <div className="contact__hours"></div>
        <div className=" contact__adress"></div>
      </section>
      <section>
        <h2>Retrouvez nous aussi sur</h2>

        <a href="#"></a>
        <a href="#"></a>
        <a href="#"></a>
      </section>
    </footer>
  )
}

export default Footer