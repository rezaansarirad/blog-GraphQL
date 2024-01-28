import { useMutation } from "@apollo/client";
import { Button, Grid, TextField, Typography } from "@mui/material";
import { useState } from "react";
import { SEND_COMMENT } from "../../graphql/mutations";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function CommentForm({ slug }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [text, setText] = useState("");

  const [SendComment, { loading, data, errors }] = useMutation(SEND_COMMENT, {
    variables: { name, email, text, slug },
  });
  const sendHandler = () => {
    if (name && email && text) {
      SendComment();
    } else {
      toast.warn("لطفا تمام فیلد ها را پر کنید", {
        position: "bottom-right",
      });
    }
  };
  if (data) {
    toast.success("کامنت ارسال شد و منتظر تایید می باشد", {
      position: "bottom-right",
    });
  }
  if (errors) return <h4>Error...</h4>;

  return (
    <Grid
      container
      sx={{
        boxShadow: "rgba(0,0,0,0.1)0px 4px 12px ",
        borderRadius: 4,
        py: 1,
        mt: 5,
      }}
    >
      <Grid item xs={12} m={2}>
        <Typography component="p" variant="h6" fontWeight={700} color="primary">
          {" "}
          ارسال کامنت
        </Typography>
      </Grid>
      <Grid item xs={12} m={2}  dir="rtl">
        <TextField
        
          value={name}
          onChange={(e) => setName(e.target.value)}
          label="نام کاربری"
          variant="outlined"
          sx={{ width: "100%" }}
        />
      </Grid>
      <Grid item xs={12} m={2}>
        <TextField
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          label="ایمیل"
          variant="outlined"
          sx={{ width: "100%" }}
        />
      </Grid>
      <Grid item xs={12} m={2}>
        <TextField
          multiline
          value={text}
          onChange={(e) => setText(e.target.value)}
          label="متن ...."
          variant="outlined"
          sx={{ width: "100%" }}
          minRows={4}
        />
      </Grid>
      <Grid item xs={12} m={2}>
        {loading ? (
          <Button variant="contained" disabled>
            در حال ارسال...
          </Button>
        ) : (
          <Button variant="contained" onClick={sendHandler}>
            ارسال
          </Button>
        )}
      </Grid>
      <ToastContainer />
    </Grid>
  );
}

export default CommentForm;
