import Navbar from "../components/navbar/navbar";
import { Outlet } from "react-router-dom";
import Footer from "../Footer/footer";

function PageLayout() {
  return (
    <>
   <header>   <Navbar /></header>

      <main className="min-h-screen px-6 py-4">
        <Outlet />
      </main>
    
<Footer/>

      
    </>
  );
}

export default PageLayout;
