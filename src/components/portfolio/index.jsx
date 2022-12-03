import React from "react"
import { faker } from '@faker-js/faker';
import Menu from "@components/menu";

import { database } from "database/database";
import Card from "@components/portfolio/Card";

const Portfolio = () => {

  const card = [];
  database.forEach(data => {
    card.push(<Card key={faker.datatype.uuid()} data={data} id={data.id} />)
  });

  return(
    <main className="container-menu">
      <div className="bartitle">
        <h1>Portafolio</h1>
        <Menu />
      </div>
      <div className="grid-menu pd-l portfolio-mb">
        {card}
      </div>
    </main>
  );
}

export default Portfolio;
