import { Story } from "./story/story";
import { Posts } from "./posts/posts";
import "./content.css";

export function Content() {
  return (
    <div className="content_tab_one">
      <Story />
       <Posts/> 
    </div>
  );
}
