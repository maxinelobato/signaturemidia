import type { NextPage } from 'next';
import { About } from '../components/About';
import { DividerStyle } from '../components/DividerStyle';
import { Navbar } from '../components/Navbar';
import { AboutClients } from '../components/SigClients/AboutClients';

const Home: NextPage = () => {
  return (
    <>
      <Navbar />
      <About />
      <DividerStyle />
      <AboutClients />
    </>
  );
};

export default Home;
