import type { NextPage } from "next";
import { NavBar } from "../components/shared/navbar";
import { Showcase } from "../components/index-components/showcase";
import { Info } from "../components/index-components/info";
import { Footer } from "../components/shared/footer";

const Home: NextPage = () => {
  return (
    <div>
      <NavBar />
      <Showcase />
      <Info />
      <Footer />
    </div>
  );
};

export default Home;
