import React, { useState, useEffect } from 'react'
import { getItems } from '../../services/constants';


function Footer() {
  const [socials, setSocial] = useState();

  useEffect(() => {
    fetch(getItems("social"))
    .then(res => res.json())
    .then(datas => console.log(datas))
  },[]);




  return (
    <footer>
      <h1>Pizza Di Napoli</h1>
      <section className="contact">
        <div className="contact__hours"></div>
        <div className=" contact__adress"></div>
      </section>
      <section>
        <h2>Retrouvez nous aussi sur</h2>
        <ul>
         <li><a href="">

          </a></li>
         <li><a href=""></a></li>
         <li><a href=""></a></li>
        </ul>
      </section>
    </footer>
  )
}

export default Footer