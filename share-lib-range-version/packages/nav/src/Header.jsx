import React from "react";
import { version } from "just-a-lib";

const Header = () => (
  <div
    style={{
      padding: "1em",
      background: "orange",
      color: "white",
      fontSize: "xx-large",
    }}
  >
    HEADER lib version {version()}!
  </div>
);

export default Header;
