import { ThemeProvider, CssBaseline } from "@mui/material";
import theme from "./theme";

import NavBar from "./components/NavBar";
import Home from "./pages/Home/Home";
import Footer from "./components/Footer";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
        <NavBar />
        <Home />
        <Footer />
    </ThemeProvider>
  );
}

export default App;
