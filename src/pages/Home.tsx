
import React from 'react';
import Layout from '../components/Layout';
import Hero from '../components/Hero';
import MbtiExplanation from '../components/MbtiExplanation';

const Home: React.FC = () => {
  return (
    <Layout>
      <Hero />
      <MbtiExplanation />
    </Layout>
  );
};

export default Home;
