import Header from '../components/Header'; 
import Footer from '../components/footer';
import { FaFacebookF, FaInstagram, FaWhatsapp } from "react-icons/fa";
import '../styles/Home.css';
import homeImage from '../assets/home.webp';


function Home() {
  return (
    <main className="home-container">
      <h1>Mundo Batería</h1>
      <p>Bienvenido a Mundo Batería, el lugar donde el ritmo cobra vida.
Somos una tienda especializada en baterías acústicas, electrónicas y todos sus componentes: baquetas, redoblantes, platillos, parches, herrajes y más.
Trabajamos con productos de alta calidad para músicos de todos los niveles —desde principiantes hasta profesionales— brindándote sonido, durabilidad y estilo en cada golpe.
Explorá nuestro catálogo, armá tu set ideal y llevá tu pasión por la batería al siguiente nivel. </p>
  <img 
        src={homeImage} 
        alt="manos con baquetas"
        class name="home-image"
      />
    </main>
  );
}

export default Home;