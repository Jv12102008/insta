import "./header.css";
import soon_foto from "./img//logo-instagram.svg";
import soon_nome from "./img/instagram.svg";
import paper_plane from "./img/icons/paper-plane-outline.svg";
import compass from "./img/icons/compass-outline.svg";
import heart from "./img/icons/heart-outline.svg";
import person from "./img/icons/person-outline.svg";

export function Header() {
  return (
    <header className="App-header">
      <nav>
        <ul>
          <li className="soon-grup">
            <img
              className="header-soon-img"
              src={soon_foto}
              alt="logo do instagram"
            />
            <img
              className="header-soon-name"
              src={soon_nome}
              alt="nome do instagram"
            />
          </li>
          <li className="box_look_for">
            <button className="look_for">Pesquisar</button>
          </li>
          <li>
            <img className="icon visible" src={paper_plane} alt="icon do header" />
            <img className="icon" src={compass} alt="icon do header" />
            <img className="icon" src={heart} alt="icon do header" />
            <img className="icon" src={person} alt="icon do header" />
          </li>
        </ul>
      </nav>
    </header>
  );
}
