import { useEffect, useState } from "react";
import { Header } from "./components";
import { Home } from "./pages";

function App() {
  const [scroll, setScroll] = useState<boolean>();
  const navbarScroll = () => {
    if (window.scrollY < 120) setScroll(true); 
    else setScroll(false);
  };
  useEffect(() => {
    window.addEventListener('scroll', navbarScroll);
    return () => {
      window.removeEventListener('scroll', navbarScroll);
    };
  }, []);
  return (
    <div className="w-full flex justify-center bg-[#2D2D2D] ">
        <Header showDp={scroll} />
      <div className="md:w-[720px] flex flex-col">
        <Home showDp={scroll} />
      </div>
    </div>
  );
}

export default App;
