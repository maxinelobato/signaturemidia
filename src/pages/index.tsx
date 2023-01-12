import type { NextPage } from 'next';
import { About } from '../components/About';
import { AboutHelpYou } from '../components/AboutHelpYou';
import { NavbarOption } from '../components/NavbarOption';
import { Notice } from '../components/Notice';
import { AboutClients } from '../components/SigClients/AboutClients';

const Home: NextPage = () => {
  return (
    <>
      <NavbarOption />
      <About />
      <AboutHelpYou />
      <AboutClients />
      <Notice />
    </>
  );
};

export default Home;
