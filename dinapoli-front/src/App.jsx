import { Routes, Route } from "react-router-dom";

// Views (Pages)
import Home from "./Views/Home/Home";
import Blog from "./Views/Blog/Blog";
import Team from "./Views/Team/Team";

// Components
import Cardy from "./Components/Card/Card";
import img from "./assets/images/image-1.png";

// Layouts
import Header from "./Layouts/Header/Header";
import Footer from "./Layouts/Footer/Footer";

export default function App() {
  return (
    <>
      <Header />
      <Card />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/team" element={<Team />} />
      </Routes>
      <Footer />
    </>
  );
}

const Card = () => {
  const pathname = window.location.pathname;

  switch (pathname) {
    case "/":
      return (
        <Cardy
          otherClass="header-card"
          reverse="reverse"
          title="Le Savoir-faire, un état d'esprit"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In eros augue, dapibus ac quam non, fringilla placerat ex."
          img={img}
          link={false}
          href=""
          linkText=""
          imgOk={true}
        />
      );
    case "/team":
      return (
        <Cardy
          otherClass="header-card"
          reverse="reverse"
          title="Et si on parlait de Nous ?"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In eros augue, dapibus ac quam non, fringilla placerat ex. In eros augue, dapibus ac quam non, fringilla placerat ex."
          img={img}
          link={false}
          href=""
          linkText=""
          imgOk={true}
        />
      );
    case "/gallery":
      return (
        <Cardy
          otherClass="header-card"
          reverse="reverse"
          title="Quand la Squadra s'amuse"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In eros augue, dapibus ac quam non, fringilla placerat ex."
          img={img}
          link={false}
          href=""
          linkText=""
          imgOk={true}
        />
      );
      case "/products":
      return (
        <Cardy
          otherClass="header-card"
          reverse="reverse"
          title="Nos produits, un respect pour la pizza"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In eros augue, dapibus ac quam non, fringilla placerat ex."
          img={img}
          link={false}
          href=""
          linkText=""
          imgOk={true}
        />
      );
    default:
      return;
  }
};
