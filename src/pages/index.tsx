import type { NextPage } from 'next';
import { About } from '../components/About';
import { Navbar } from '../components/Navbar';

const Home: NextPage = () => {
  return (
    <>
      <Navbar />
      <About />
      <About />
    </>
  );
};

export default Home;
