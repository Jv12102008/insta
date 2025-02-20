import "./footer.css";
import home_footer from "./img/home.svg";
import search_footer from "./img/search-outline.svg";
import circle_footer from "./img/add-circle-outline.svg";
import heart_footer from "./img/heart-outline.svg";
import person_footer from "./img/person-outline.svg";

export function Footer() {
    return(
  <footer>
    <nav>
      <ul>
        <li>
          <img className="icons" src={home_footer} alt="icon do footer" />
        </li>
        <li>
          <img className="icons" src={search_footer} alt="icon do footer" />
        </li>
        <li>
          <img className="icons" src={circle_footer} alt="icon do footer" />
        </li>
        <li>
          <img className="icons" src={heart_footer} alt="icon do footer" />
        </li>
        <li>
          <img className="icons" src={person_footer} alt="icon do footer" />
        </li>
      </ul>
    </nav>
  </footer>
    )
}
