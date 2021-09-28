import { experimentalStyled as styled } from "@material-ui/core";
import { Container, Typography } from "@material-ui/core";

export const FooterStyled = styled("footer")`
  background-color: ${({ theme }) => theme.palette.primary.main};
  color: ${({ theme }) => theme.palette.primary.contrastText};
  padding: ${({ theme }) => theme.spacing(4)} 0;
  margin-top: auto;
  /* color: ${({ theme }) =>
    theme.palette.getContrastText(theme.palette.primary.main)}; */
`;

export const FooterContainer = styled(Container)`
  display: flex;
  justify-content: space-between;
  gap: ${({ theme }) => theme.spacing(2)};
  flex-wrap: wrap;
  ${({ theme }) => theme.breakpoints.down("md")} {
    gap: ${({ theme }) => theme.spacing(5)};
  } ;
`;

export const FooterTitle = styled((props) => (
  <Typography component="h2" variant="body2" {...props}></Typography>
))`
  font-weight: bold;
`;

export const FooterAppList = styled("ul")`
  list-style-type: none;
  padding: 0;
  display: flex;
  gap: ${({ theme }) => theme.spacing()};
  img {
    width: 122px;
  }
`;
