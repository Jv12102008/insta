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
    id:1,
    url_img: arthur,
    nickname: "arthurcruz99",
    name: "Arthur",
  },
  {
    id:2,
    url_img: claudio,
    nickname: "euhygino",
    name: "Claudio",
  },
  {
    id:3,
    url_img: miny,
    nickname: "miny_souzza",
    name: "Miny Souzza",
  },
  {
    id:4,
    url_img: jonga,
    nickname: "jongabrandao_",
    name: "João",
  },
  {
    id:5,
    url_img: marcos,
    nickname: "duarte_marco_",
    name: "marco antônio oliveira",
  },
  {
    id:6,
    url_img: thiago,
    nickname: "xthyxgo",
    name: "Thiago Guimarãe",
  },
];

export function Recommended() {
  return (
    <div className="recommended">
      <div id="profile">
        <img src={joao} alt="imagem do seu perfil" />
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
              <a href="#">Ver tudo</a>
            </strong>
          </div>

          {api_recommended.map((item) => (
            <div class="suggestion" key={item.toString()}>
              <div className="profile">
                <img src={item.url_img} alt="imagem de perfil"/>
                <div className="informations">
                  <div className="nickname">
                    {" "}
                    <strong>{item.nickname}</strong>{" "}
                  </div>
                  <div className="name">{item.name}</div>
                </div>
              </div>
              <strong>
                <a href="#">Seguir</a>
              </strong>
            </div>
          ))}
        </div> 
    </div>
  );
}
