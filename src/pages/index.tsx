import type { NextPage } from 'next';
import { About } from '../components/About';
import { AboutClients } from '../components/AboutClients';
import { DividerStyle } from '../components/DividerStyle';
import { Navbar } from '../components/Navbar';

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
