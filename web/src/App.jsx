import './App.scss'

import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'

import Landing from './views/Landing/Landing'

import Preloader from './utils/Preloader/Preloader'
import BackToTop from './utils/BackToTopButton/BackToTopButton'

function App() {
  return (
    <>
      <Header />
      <main className="container-fluid flex-grow">
        <Landing />
      </main>
      <Footer />
      <Preloader />
      <BackToTop />
    </>
  );
}

export default App;
