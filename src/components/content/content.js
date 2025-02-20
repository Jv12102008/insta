import { Story } from "./story/story";
import { Posts } from "./posts/posts";
import { Recommended } from "./recommended/recommended";
import "./content.css";

export function Content() {
  return (
    <div className="content">
      <div className="content_tab_one">
        <Story />
        <Posts />
      </div>

      <div className="content_tab_two">
        <Recommended />
      </div>
    </div>
  );
}
