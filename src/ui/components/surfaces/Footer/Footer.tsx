import React from "react";
import {
  FooterStyled,
  FooterContainer,
  FooterTitle,
  FooterAppList,
} from "./Footer.style";
import { Typography, Box } from "@material-ui/core";

interface Props {}

const Footer = (props: Props) => {
  return (
    <FooterStyled>
      <FooterContainer>
        <Box sx={{ maxWidth: "400px" }}>
          <FooterTitle>Quem somos</FooterTitle>
          <Typography variant="body2" sx={{ mt: 2 }}>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione
            earum quaerat eveniet, magni voluptatum officiis perferendis odio ea
            eligendi quod quia ipsa? Delectus voluptatum porro fugiat sapiente
            soluta nobis assumenda?
          </Typography>
        </Box>
        <div>
          <FooterTitle>Baixe nossos aplicativos</FooterTitle>
          <FooterAppList>
            <li>
              <a href="/" target="_blank" rel="noopener noreferrer">
                <img src="/img/logos/app-store.png" alt="AppStore" />
              </a>
            </li>
            <li>
              <a href="/" target="_blank" rel="noopener noreferrer">
                <img src="/img/logos/google-play.png" alt="GooglePlay" />
              </a>
            </li>
          </FooterAppList>
        </div>
      </FooterContainer>
    </FooterStyled>
  );
};

export default Footer;
