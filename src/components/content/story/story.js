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
    title: "rafasimasguitarra",
    url_img: rafa,
  },
  {
    title: "a2_pessoal",
    url_img: alex,
  },
  {
    title: "Adriana",
    url_img: adriana,
  },
  {
    title: "Mara",
    url_img: mara,
  },
  {
    title: "Andre_Luiz",
    url_img: andre_luis,
  },
  {
    title: "AndreLuiz",
    url_img: andreluiz,
  },
  {
    title: "Andre-Luiz",
    url_img: andreluiz_,
  },
  {
    title: "drileahy",
    url_img: adri_zig,
  },
  {
    title: "guileahy09",
    url_img: zig,
  },
  {
    title: "jaiminhomoedas",
    url_img: jaiminho,
  }, 
  {
    title: "_vini.nery",
    url_img: vini,
  },
];
console.log(api_storys);

export function Story() {
  return (
    <div className="storys">
       {api_storys.map((item) => (
<div>
    <img className="story_img" src={item.url_img} /> 
    <h3 className="story_title">
        {item.title}
    </h3>
</div>
))} 
    </div>
  );
}
