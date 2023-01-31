import type { NextPage } from 'next';
import { AboutSigHelp } from '../components/AboutSigHelp';
import { Faq } from '../components/Faq';
import { Footer } from '../components/Footer';
import { GoogleReviews } from '../components/GoogleReviews';
import { GrowingWithUs } from '../components/GrowingWithUs';
import { HomePage } from '../components/HomePage';
import { MeetSignature } from '../components/MeetSignature';
import { Navbar } from '../components/Navbar';
import { SucessCases } from '../components/SigClients/SucessCases';
import { WhatSigDoes } from '../components/WhatSigDoes';

const Home: NextPage = () => {
  return (
    <>
      <Navbar />
      <HomePage />
      <AboutSigHelp />
      <SucessCases />
      <GrowingWithUs />
      <WhatSigDoes />
      <GoogleReviews />
      <Faq />
      <MeetSignature />
      <Footer />
    </>
  );
};

export default Home;
