import type { NextPage } from 'next';
import { About } from '../components/About';
import { AboutWork } from '../components/AboutWork';
import { Navbar } from '../components/Navbar';

const Home: NextPage = () => {
  return (
    <>
      <Navbar />
      <About />
    </>
  );
};

export default Home;
