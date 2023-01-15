import type { NextPage } from 'next';
import { About } from '../components/About';
import { AboutHelpYou } from '../components/AboutHelpYou';
import { HowSigHelpYou } from '../components/HowSigHelpYou';
import { NavbarOption } from '../components/NavbarOption';
import { Notice } from '../components/Notice';
import { AboutClients } from '../components/SigClients/AboutClients';
import { WithSpeechBubbles } from '../components/WithSpeechBubbles';

const Home: NextPage = () => {
  return (
    <>
      <NavbarOption />
      <About />
      <AboutHelpYou />
      <AboutClients />
      <Notice />
      <HowSigHelpYou />
      <WithSpeechBubbles />
    </>
  );
};

export default Home;
