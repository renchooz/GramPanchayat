import React from "react";
import About from "./components/About";
import Gallery from "./components/Gallery";
import News from "./components/News";
import Members from "./components/Members";
import Contact from "./components/Contact";
import Footer from "./components/Footer";


const App = () => {
  return (
    <div className="font-sans bg-gray-50 text-gray-800">
     
      <header className="bg-green-700 h-[20vh] text-center text-white  shadow-lg">
        <div className="container mx-auto text-center flex flex-col  justify-center  h-full ">
          <h1 className="text-3xl font-bold">Gram Panchayat – Longwala</h1>
          <p className="text-sm">Serving the community with dedication</p>
        </div>
      </header>

      
      <main className="container mx-auto px-4 py-8 space-y-16">
        <About />
        
        <Gallery />
        <News />
        <Members />
        <Contact />
      </main>

      <Footer />
    </div>
  );
};

export default App;
