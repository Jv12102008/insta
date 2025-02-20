import './story.css'

import rafa from "./img/rafa.jpeg";
import alex from "./img/Alex.jpeg";
import adriana from "./img/Adriana.jpeg";
import mara from "./img/Mara.jpeg";
import andre_luis from "./img/Andre_1.jpeg";
import andreluiz from "./img/Andre_2.jpeg";
import andreluiz_ from "./img/Andre_3.jpeg";
import adri_zig from "./img/Adriana_zig.jpeg";
import zig from "./img/Zig.jpeg";
import jaiminho from "./img/Jaiminho.jpeg";
import vini from "./img/vini.jpeg"; 

const api_storys = [
   {
    id:1,
    title: "rafasimasguitarra",
    url_img: rafa,
  },
  {
    id:2,
    title: "a2_pessoal",
    url_img: alex,
  },
  {
    id:3,
    title: "Adriana",
    url_img: adriana,
  },
  {
    id:4,
    title: "Mara",
    url_img: mara,
  },
  {
    id:5,
    title: "Andre_Luiz",
    url_img: andre_luis,
  },
  {
    id:6,
    title: "AndreLuiz",
    url_img: andreluiz,
  },
  {
    id:7,
    title: "Andre-Luiz",
    url_img: andreluiz_,
  },
  {
    id:8,
    title: "drileahy",
    url_img: adri_zig,
  },
  {
    id:9,
    title: "guileahy09",
    url_img: zig,
  },
  {
    id:10,
    title: "jaiminhomoedas",
    url_img: jaiminho,
  }, 
  {
    id:11,
    title: "_vini.nery",
    url_img: vini,
  },
];
console.log(api_storys);

export function Story() {
  return (
    <div className="storys">
       {api_storys.map((item) => (
<div key={item.toString()}>
    <img className="story_img" src={item.url_img} alt='imagem do perfil' /> 
    <h3 className="story_title">
        {item.title}
    </h3>
</div>
))} 
    </div>
  );
}
