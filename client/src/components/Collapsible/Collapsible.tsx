import "./Collapsible.css";
import { useState, useRef } from "react";
type props = {
  label: string;
  styleName: string;
  children: JSX.Element;
  clicked: React.Dispatch<React.SetStateAction<boolean>>;
};
export const Collapsible = ({ label, styleName, clicked, children }: props) => {
  const [open, setOpen] = useState(false);
  const toggle = () => {
    clicked((prev) => !prev);
    setOpen(!open);
  };
  const contentRef = useRef<HTMLDivElement>(null);
  if (contentRef.current) console.log(contentRef.current.scrollHeight);
  return (
    <>
      <button className={styleName} onClick={toggle}>
        {label}
      </button>
      <div
        ref={contentRef}
        className="content-parent"
        style={
          open
            ? { height: contentRef.current?.scrollHeight + "px" }
            : { height: "0px" }
        }
      >
        <div className="content"> {children} </div>
      </div>
    </>
  );
};
