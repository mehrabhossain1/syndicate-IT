import "./Socials.css";
import { socialHandles } from "../../data";
import { convertHexToRgba, cssPerfectShape } from "../../utils";

const Socials = () => {
  return (
    <div className="socials">
      {socialHandles.map((list, index) => (
        <a
          href={list.link}
          key={index}
          target="_blank"
          className="icon"
          style={{
            ...cssPerfectShape(40, 40),
            background: convertHexToRgba("--primary", 0.2),
          }}
        >
          <list.icon />
        </a>
      ))}
    </div>
  );
};

export default Socials;
