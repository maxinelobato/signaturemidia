import type { NextPage } from 'next';
import { About } from '../components/About';
import { AboutHelpYou } from '../components/AboutHelpYou';
import { Faq } from '../components/Faq';
import { Footer } from '../components/Footer';
import { HowSigHelpYou } from '../components/HowSigHelpYou';
import { NavbarOption } from '../components/NavbarOption';
import { Notice } from '../components/Notice';
import { AboutClients } from '../components/SigClients/AboutClients';
import { TeamSig } from '../components/TeamSig';
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
      <Faq />
      <TeamSig />
      <Footer />
    </>
  );
};

export default Home;
