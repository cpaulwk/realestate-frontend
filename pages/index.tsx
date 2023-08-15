import type { NextPage } from "next";
import Head from "next/head";
import Header from "../components/header";
import Hero from "../components/hero";
import AreaContainer from "../components/area-container";
import FeatureContainer from "../components/feature-container";
import RentContainer from "../components/rent-container";
import RentPropertiesForm from "../components/rent-properties-form";
import Contact from "../components/contact";
import Footer from "../components/footer";

const LandingPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>Real Estate</title>
        <meta name="description" content="Find your Home Sweet Home" />
      </Head>
      <div className="relative bg-gray-white w-full flex flex-col items-center justify-start">
        <Header />
        <Hero />
        <AreaContainer />
        <FeatureContainer />
        <RentContainer />
        <RentPropertiesForm />
        <Contact />
        <Footer />
      </div>
    </>
  );
};

export default LandingPage;
