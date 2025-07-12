import NavBar from "./components/NavBar";
import Home from "./pages/Home/Home";
import Projects from "./pages/Projects";

import { ThemeProvider, CssBaseline } from "@mui/material";
import theme from "./theme";

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <NavBar />
        <main id="home">
          <Home />
        </main>
        <main id="projects">
          <Projects />
        </main>
      </ThemeProvider>
    </>
  );
}

export default App;
