import React from "react";
import { HeaderAppBar, HeaderLogo } from "./Header.style";
import { Toolbar, Container } from "@material-ui/core";

interface Props {}

const Header: React.FC = (props: Props) => {
  return (
    <HeaderAppBar position="sticky">
      <Toolbar component={Container}>
        <HeaderLogo src="/img/logos/logo.svg" alt="e-diaristas" />
      </Toolbar>
    </HeaderAppBar>
  );
};

export default Header;
