import { FooterData } from "./FooterData";
import React from "react";
export function Footer({ toolsEvent }) {
  return (
    <footer>
      {FooterData.map((data, index) => (
        <div key={index} className="footerDiv" onClick={toolsEvent[index]}>
          {/* <Icons />*/}
          <data.icon />
          <p>{data.name}</p>
        </div>
      ))}
    </footer>
  );
}
