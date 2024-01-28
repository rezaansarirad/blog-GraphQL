import { useQuery } from "@apollo/client";
import { GET_AUTHORS_INFO } from "../../graphql/gueries";
import { Avatar, Divider, Grid, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import Loader from "../shared/Loader";

function Authors() {
  const { loading, data, errors } = useQuery(GET_AUTHORS_INFO);
  if (loading) return <Loader />;
  if (errors) return <h4>Error...</h4>;
  const { authors } = data;
  return (
    <Grid
      container
      sx={{ boxShadow: "rgba(0,0,0,0.1)0px 4px 12px ", borderRadius: 4 }}
    >
      {authors.map((user, index) => (
        <React.Fragment key={user.id}>
          <Grid item xs={12} padding={2}>
            <Link
              to={`/authors/${user.slug}`}
              style={{
                display: "flex",
                alignItems: "center",
                textDecoration: "none",
              }}
            >
              <Avatar src={user.avatar.url} sx={{ marginLeft: 2 }} />
              <Typography component="p" variant="p" color="text.secondary">
                {user.name}
              </Typography>
            </Link>
          </Grid>
          {index !== authors.length - 1 && (
            <Grid item xs={12}>
              <Divider variant="middle" />
            </Grid>
          )}
        </React.Fragment>
      ))}
    </Grid>
  );
}

export default Authors;
