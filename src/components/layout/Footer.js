import { Typography } from "@mui/material";

function Footer() {
  return (
    <footer>
      <Typography
        component="p"
        variant="p"
        bgcolor="#f7f7f7"
        color="primary"
        padding={10}
        textAlign="center"
        mt={10}
      >
        Developed by rezrad with ❤️ | GraphQL
      </Typography>
    </footer>
  );
}

export default Footer;
