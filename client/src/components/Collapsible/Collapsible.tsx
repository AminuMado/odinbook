import "./Collapsible.css";
import { useRef } from "react";
type props = {
  isOpen: boolean;
  children: JSX.Element;
};
export const Collapsible = ({ isOpen, children }: props) => {
  const contentRef = useRef<HTMLDivElement>(null);
  return (
    <>
      <div
        ref={contentRef}
        className="content-parent"
        style={
          isOpen
            ? { height: contentRef.current?.scrollHeight + "px" }
            : { height: "0px" }
        }
      >
        <div className="content"> {children} </div>
      </div>
    </>
  );
};
