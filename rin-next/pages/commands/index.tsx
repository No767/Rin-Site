import type { NextPage } from "next";
import { NavBar } from "../../components/shared/navbar";
import { CommandsBody } from "../../components/commands-components/body";
import { Footer } from "../../components/shared/footer";

const CommandsHome: NextPage = () => {
  return (
    <div>
      <NavBar />
      <CommandsBody />
      <Footer />
    </div>
  );
};

export default CommandsHome;
