import React, { useState, useEffect } from "react";
import Card from "../../Components/Card/Card";
import img from "../../assets/images/image-1.png";
import { getItems } from "../../services/constants";

const published = "published";

const Team = () => {
  const [members, setMember] = useState();

  useEffect(() => {
    fetch(getItems("equipe", `[categorie]=panuozzo&filter[status]=${published}`))
      .then((res) => res.json())
      .then((datas) => setMember(datas.data));
  }, []);
console.log(members)
  return (
    <main className="Team mt-3">
      {members &&
        members.map((member) => {
          let file_id = member.photo;
          const assets_url = `http://localhost:8055/assets/${file_id}`;
          return (
              <Card
              id={member.id}
                reverse={member.id % 2 === 0 ? "reverse" : ""}
                name={member.name}
                title={member.title}
                text={member.description}
                img={assets_url}
                link={false}
                href=""
                hrefText=""
              />
          )
        })}
    </main>
  );
};

export default Team;
