import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import ProjectsList from '../../components/Projects/ProjectsList';
import Footer from '../../components/Footer/Footer';
import ParticlesContent from '../../components/Particles';

type Props = {};

const page = (props: Props) => {
  return (
    <main className="w-full">
      {/* <ParticlesContent /> */}
      <Navbar />
      <ProjectsList />
      <Footer />
    </main>
  );
};

export default page;
