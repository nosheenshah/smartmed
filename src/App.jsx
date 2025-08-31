// src/App.jsx
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Doctors from './components/Doctors';
import Footer from './components/Footer';
import FloatingChatBot from './components/FloatingChatBot'; // ← نیا چیٹ بوٹ

function App() {
  return (
    <>
      <Header />
      <Hero />
      <Services />
      <Doctors />
      <Footer />
      <FloatingChatBot /> {/* ← یہاں شامل کریں */}
    </>
  );
}

export default App;