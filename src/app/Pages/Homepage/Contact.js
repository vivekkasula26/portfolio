import * as React from "react";
import {
  Button,
  Container,
  Paper,
  Snackbar,
  SnackbarContent,
  TextField,
  Typography,
} from "@mui/material";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const form = React.useRef();
  const [open, setOpen] = React.useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  const [formData, setFormData] = React.useState({
    from_name: "",
    from_email: "",
    message: "",
  });

  const [errors, setErrors] = React.useState({});

  const styles = {
    title: {
      marginTop: "20px",
      marginBottom: "8px",
      fontWeight: "700",
    },
  };

  const validateEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setErrors({ ...errors, [name]: "" });
  };

  const sendEmail = (e) => {
    e.preventDefault();

    let validationErrors = {};

    if (!formData.from_name.trim())
      validationErrors.from_name = "Name is required";
    if (!formData.from_email.trim()) {
      validationErrors.from_email = "Email is required";
    } else if (!validateEmail(formData.from_email)) {
      validationErrors.from_email = "Invalid email format";
    }
    if (!formData.message.trim())
      validationErrors.message = "Message is required";

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    // Send email if validation passes
    emailjs
      .sendForm("service_gv53z69", "template_g9ei68f", form.current, {
        publicKey: "uhR-Wr5rQGROBDgwi",
      })
      .then(
        () => {
          setOpen(true);
          setFormData({ from_name: "", from_email: "", message: "" });
          setErrors({});
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <Container sx={{ paddingTop: "50px", paddingBottom: "60px" }} id="contact">
      <Paper
        elevation={2}
        sx={{
          display: "flex",
          flexFlow: "column",
          width: { md: "50%" },
          marginLeft: "auto",
          marginRight: "auto",
          padding: "20px",
          backgroundColor: "#7b82950a",
        }}
      >
        <Typography
          sx={{ fontWeight: "bold", fontSize: "32px", marginBottom: "8px" }}
        >
          Contact Me
        </Typography>
        <Typography
          sx={{
            fontSize: "16px",
            marginBottom: "10px",
            color: "#71717a",
          }}
        >
          Want to get in touch? Fill out the form below and I'll get back to you
          as soon as possible.
        </Typography>

        <form ref={form} onSubmit={sendEmail}>
          <Typography sx={styles.title}>Name</Typography>
          <TextField
            placeholder="Name"
            variant="outlined"
            fullWidth
            size="small"
            type="text"
            name="from_name"
            value={formData.from_name}
            onChange={handleChange}
            error={!!errors.from_name}
            helperText={errors.from_name}
          />

          <Typography sx={styles.title}>Email</Typography>
          <TextField
            fullWidth
            size="small"
            placeholder="Email"
            type="email"
            name="from_email"
            value={formData.from_email}
            onChange={handleChange}
            error={!!errors.from_email}
            helperText={errors.from_email}
          />

          <Typography sx={styles.title}>Message</Typography>
          <TextField
            fullWidth
            size="small"
            placeholder="Message"
            multiline
            minRows={4}
            type="text"
            name="message"
            value={formData.message}
            onChange={handleChange}
            error={!!errors.message}
            helperText={errors.message}
          />

          <Button variant="contained" type="submit" sx={{ marginTop: "20px" }}>
            Submit
          </Button>
        </form>
      </Paper>
      <Snackbar
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
        open={open}
        onClose={handleClose}
        autoHideDuration={3000}
      >
        <SnackbarContent
          sx={{
            backgroundColor: "green",
            color: "white",
            fontWeight: "bold",
          }}
          message="Message sent successfully!"
        />
      </Snackbar>
    </Container>
  );
}
