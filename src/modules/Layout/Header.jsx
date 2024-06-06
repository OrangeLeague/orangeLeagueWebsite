import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { useRouter } from "next/router";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { scrollToFooter } from "@/utils/scrollToFooter";
import { AnimatedGradientButton } from "@/SDK/Buttons/buttonStyle";
import imageUrls from "@/constants/imageUrls";

const drawerWidth = 240;
const navItems = [
  { name: "Home", path: "/" },
  { name: "Services", path: "/services" },
  { name: "Technologies", path: "/technologies" },
  // { name: "Industries", path: "/industries" },
  { name: "Case Studies", path: "/case-studies" },
  { name: "About us", path: "/about-us" },
];

function Header(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const navigate = useRouter();

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography
        variant="h6"
        sx={{ my: 2 }}
        onClick={() => {
          navigate.push("/");
        }}
      >
        <img
          src={imageUrls.companyLogoWithTitle}
          alt="Orange League logo"
          className="h-[3.25rem] cursor-pointer"
        />
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item?.name} disablePadding>
            <ListItemButton
              sx={{ textAlign: "center" }}
              onClick={() => {
                navigate.push(item?.path);
              }}
            >
              <ListItemText
                primaryTypographyProps={{
                  fontWeight:
                    navigate.pathname === item.path ? "bold" : "normal",
                  fontSize: "16px",
                  color: `${
                    navigate.pathname === item.path ? "#F15D27" : "#1D1D1D"
                  }`,
                  fontFamily: "Almarai",
                }}
                primary={item.name}
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="fixed"
        sx={{
        
          boxShadow: "none",
          bgcolor: "#fff",
          paddingTop: { xs: "1em",  },
          paddingLeft: { lg: "8rem" },
          paddingRight: { lg: "8rem" },

        }}
      >
        <Toolbar
          sx={{
            width: "100%",
            display: "flex",
            justifyContent: { lg: "space-around", xs: "space-between" },
            alignItems: "center",
          }}
        >
          {/* Logo on the left */}
          <Typography
            variant="h6"
            component="div"
            onClick={() => navigate.push("/")}
          >
            <img
               src={imageUrls.companyLogoWithTitle}
              alt="Orange League logo"
              className="h-[3.25rem] cursor-pointer"
            />
          </Typography>

          {/* Navigation items centered */}
          <Box sx={{ display: { xs: "none", sm: "none", md: "block" } }}>
            <List
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              {navItems.map((item) => (
                <ListItemButton
                  key={item.name}
                  onClick={() => navigate.push(item.path)}
                >
                  <ListItemText
                    primaryTypographyProps={{
                      fontWeight:
                        navigate.pathname === item.path ? "bold" : "normal",
                      fontSize: "16px",
                      color: `${
                        navigate.pathname === item.path ? "#F15D27" : "#1D1D1D"
                      }`,
                      fontFamily: "Almarai",
                    }}
                    primary={item.name}
                  />
                </ListItemButton>
              ))}
            </List>
          </Box>

          <Box
            sx={{
              display: { xs: "none", sm: "none", md: "block" },
            }}
          >
            <PrimaryButton onClick={scrollToFooter} />
          </Box>

          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ display: { md: "none" }, color: "#000" }}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      {/* Mobile Drawer */}
      <Box component="nav">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{ keepMounted: true }}
          sx={{
            display: { xs: "block", sm: "block", md: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
              borderRadius: "0px 16px 0px 0px",
            },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
    </Box>
  );
}

export const MemoizedHeader = React.memo(Header);

const PrimaryButton = ({ onClick, buttonText, buttonIcon, style }) => {
  return (
    <AnimatedGradientButton
      onClick={onClick}
      className={`m-1 bg-primary-orange font-almarai font-bold text-white rounded-lg primary-button-animation ${
        buttonText === "Submit" ? "w-full" : ""
      }`}
      style={{
        fontFamily: "Almarai",
        fontSize: "16px",
        fontWeight: 400,
        lineHeight: "24px",
        textAlign: "center",
        width: "auto",
        height: "auto",
        padding: "8px 16px",
        gap: "10px",
        borderRadius: "8px",
      }}
    >
      <div className="flex justify-center items-center gap-2">
        <p className="text-base">{`Contact Us`}</p>

        <ArrowForwardIcon
          style={{ color: "white", width: "1.2rem", height: "1.2rem" }}
        />
      </div>
    </AnimatedGradientButton>
  );
};
