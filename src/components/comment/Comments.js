import { useQuery } from "@apollo/client";
import { Get_POST_COMMENTS } from "../../graphql/gueries";
import Loader from "../shared/Loader";
import { Avatar, Box, Grid, Typography } from "@mui/material";

function Comments({ slug }) {
  const { loading, data, errors } = useQuery(Get_POST_COMMENTS, {
    variables: { slug },
  });
  if (loading) return <Loader />;
  if (errors) return <h4>Error...</h4>;
  return (
    <Grid
      container
      sx={{
        boxShadow: "rgba(0,0,0,0.1)0px 4px 12px ",
        borderRadius: 4,
        py: 1,
        mt: 8,
      }}
    >
      <Grid item xs={12} m={2}>
        <Typography component="p" variant="h6" fontWeight={700} color="primary">
          کامنت ها
        </Typography>
        {data.comments.map((item) => (
          <Grid
            item
            xs={12}
            key={item.id}
            p={2}
            m={2}
            border="1px silver dashed"
            borderRadius={3}
          >
            <Box component="div" display="flex" alignItems="center" mb={3}>
              <Avatar>{item.name[0]}</Avatar>
              <Typography component="span" variant="p" fontWeight={700} mr={1}>{item.name}</Typography>
            </Box>
            <Typography component="p" variant="p">
                {item.text}
            </Typography>
          </Grid>
        ))}
      </Grid>
    </Grid>
  );
}

export default Comments;
