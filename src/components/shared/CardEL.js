import {
  Avatar,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Divider,
  Typography,
} from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

function CardEL({ title, slug, coverPhoto, author }) {
  return (
    <Card sx={{ boxShadow: "rgba(0,0,0,0.1)0px 4px 12px ", borderRadius: 4 }}>
      <CardMedia component="img" image={coverPhoto.url} alt={slug} />
      <CardContent>
       
        <Typography
          mt={2}
          component="h3"
          variant="h6"
          color="text.primary"
          fontWeight={600}
        >
          {title}
        </Typography>
        
      </CardContent>
      {author && (
          <CardHeader
            sx={{ padding: 0, marginRight: 0 }}
            avatar={
              <Avatar
                src={author.avatar.url}
                sx={{ marginLeft: 1, marginRight: 0 }}
              />
            }
            title={
              <Typography component="p" variant="p" color="text.secondary">
                {author.name}
              </Typography>
            }
          />
        )}
      <Divider variant="middle" sx={{ margin: "10px" }} />
      <CardActions>
        <Link
          to={`/blogs/${slug}`}
          style={{ width: "100%", textDecoration: "none" }}
        >
          <Button size="small">مطالعه مقاله</Button>
        </Link>
      </CardActions>
    </Card>
  );
}

export default CardEL;
