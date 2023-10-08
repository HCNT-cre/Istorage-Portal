import {
  AppBar,
  IconButton,
  Toolbar,
  Stack,
  Button,
  Typography,
} from "@mui/material";
import Navbar from "./Navbar";
import QuocHuy from "src/assets/images/QuocHuy.png";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { HEADER_FIXED } from "src/service/key";

const buttonStyles = {
  "&:hover": {
    backgroundColor: "grey",
    color: "white",
    fontWeight: "bold", // Increase font weight on hover
  },
  fontSize: "0.8em",
  fontWeight: "bold", // Increase font size
  padding: "5px 10px", // Add padding to make the buttons larger
};

const Bar = () => {
  const navigate = useNavigate();
  const handleClickLogo = () => {
    navigate("/");
  };
  const handleClickCart = () => {
    navigate("/gio-hang");
  }
  
  const cart = useSelector((state) => state.cart);
  let total = 0
  cart.cart.forEach((file) => total += file.docs.length)

  return (
    <Toolbar
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <div className="flex justify-left items-center" onClick={handleClickLogo}>
        <IconButton size="large" aria-label="logo">
          <img src={QuocHuy} alt="QuocHuy" style={{ width: 50, height: 50 }} />
        </IconButton>
        <Typography
          variant="h6"
          sx={{
            cursor: "pointer",
            fontWeight: "bold",
            fontSize: "1.2rem",
          }}
        >
          ISTORAGE - Cổng thông tin khai thác
        </Typography>
      </div>

      <Stack direction="row" spacing={2}>
        <div className="relative">
          <Button color="inherit" sx={buttonStyles} onClick={handleClickCart}>
            Giỏ tài liệu
          </Button>
          <span className="absolute rounded-[50%] text-[10px] bg-white text-[#3498db] p-1 w-[16px] h-[16px] left-[90%] top-0 flex justify-center items-center">{total}</span>
        </div>

        <Button color="inherit" sx={buttonStyles}>
          Thông báo
        </Button>
        <Button color="inherit" sx={buttonStyles}>
          Đăng nhập
        </Button>
      </Stack>
    </Toolbar>
  );
};

const Header = () => {
  const headerState = useSelector((state) => state.header);

  const sx =
    headerState === HEADER_FIXED
      ? {
        position: "fixed",
        backgroundColor: "transparent",
      }
      : null;

  return (
    <AppBar sx={sx}>
      <Bar />
      <Navbar />
    </AppBar>
  );
};

export default Header;
