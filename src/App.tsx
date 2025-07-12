import NavBar from './components/NavBar';
import Home from './pages/Home';
import Projects from './pages/Projects';

function App() {
  return (
    <>
      <NavBar />
      <main id="home"><Home /></main>
      <main id="projects"><Projects /></main>
    </>
  );
}

export default App;
