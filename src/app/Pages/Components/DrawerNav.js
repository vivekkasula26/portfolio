import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { useRouter } from "next/navigation";
// import InboxIcon from "@mui/icons-material/MoveToInbox";
// import MailIcon from "@mui/icons-material/Mail";

export default function DrawerNav({ open, onClose }) {
  const route = useRouter();

  const data = [
    { name: "Home", route: "/" },
    { name: "About", route: "/about" },
    { name: "Projects", route: "", id: "projects" },
    { name: "Contact", route: "", id: "contact" },
  ];

  const scrollToSection = (id) => {
    onClose();
    route.push("/");
    setTimeout(() => {
      const section = document.getElementById(id);
      if (section) {
        window.scrollTo({
          top: section.offsetTop - 20,
          behavior: "smooth",
        });
      }
    }, 300);
  };

  const DrawerList = (
    <Box sx={{ width: 250 }} role="presentation">
      <List>
        {data.map((item, index) => (
          <ListItem key={index} disablePadding>
            <ListItemButton
              onClick={() => {
                if (item.route) {
                  route.push(item.route);
                  onClose();
                } else if (item.id) {
                  scrollToSection(item.id);
                }
              }}
            >
              <ListItemIcon>
                {/* {index % 2 === 0 ? <InboxIcon /> : <MailIcon />} */}
              </ListItemIcon>
              <ListItemText primary={item.name} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
    </Box>
  );

  return (
    <Drawer open={open} onClose={onClose} anchor="right">
      {DrawerList}
    </Drawer>
  );
}
