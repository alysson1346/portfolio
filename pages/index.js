import MainMenu from "../components/mainMenu";
import Banner from "../components/banner";
import AboutMe from "../components/aboutMe";
import MySkills from "../components/mySkills";
import Teste from "../components/teste";
import Footer from "../components/footer";
import MyProjects from "../components/myProjects";

export default function Home() {
  return (
    <>
      <MainMenu />
      <Banner />
      <AboutMe />
      <MySkills />
      <MyProjects />
      <Footer />
    </>
  );
}
