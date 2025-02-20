import "./recommended.css";
import joao from "./img/João_Vitor.jpeg";
import arthur from "./img/arthur.jpeg";
import claudio from "./img/claudio.jpeg";
import miny from "./img/miny.jpeg";
import jonga from "./img/jonga.jpeg";
import marcos from "./img/marcos.jpeg";
import thiago from "./img/thiago.jpeg";

const api_recommended = [
  {
    url_img: arthur,
    nickname: "arthurcruz99",
    name: "Arthur",
  },
  {
    url_img: claudio,
    nickname: "euhygino",
    name: "Claudio",
  },
  {
    url_img: miny,
    nickname: "miny_souzza",
    name: "Miny Souzza",
  },
  {
    url_img: jonga,
    nickname: "jongabrandao_",
    name: "João",
  },
  {
    url_img: marcos,
    nickname: "duarte_marco_",
    name: "marco antônio oliveira",
  },
  {
    url_img: thiago,
    nickname: "xthyxgo",
    name: "Thiago Guimarãe",
  },
];

export function Recommended() {
  return (
    <div className="recommended">
      <div id="profile">
        <img src={joao} alt="" />
        <div className="information">
          <div className="title">
            <strong>joao_vitor081012</strong>{" "}
          </div>
          <div className="name">João Vitor</div>
        </div>
      </div>

        <div className="suggestions">
          <div className="information">
            <div class="title">Sugestões para você</div>
            <strong>
              <a href="">Ver tudo</a>
            </strong>
          </div>

          {api_recommended.map((item) => (
            <div class="suggestion">
              <div className="profile">
                <img src={item.url_img} alt="" />
                <div className="informations">
                  <div className="nickname">
                    {" "}
                    <strong>{item.nickname}</strong>{" "}
                  </div>
                  <div className="name">{item.name}</div>
                </div>
              </div>
              <strong>
                <a href="">Seguir</a>
              </strong>
            </div>
          ))}
        </div> 
    </div>
  );
}
