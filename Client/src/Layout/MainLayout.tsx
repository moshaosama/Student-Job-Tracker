import { Outlet } from "react-router";
import Footer from "../Components/Footer";
import Header from "../Components/Header";
import WithTheme from "../Utils/WithTheme";

const MainLayout = () => {
  const ThemedHeader = WithTheme(Header);
  const ThemedFooter = WithTheme(Footer);
  const ThemedOutlet = WithTheme(Outlet);
  return (
    <>
      <ThemedHeader />
      <ThemedOutlet />
      <ThemedFooter />
    </>
  );
};

export default MainLayout;
