import * as React from "react"
import {
  ChakraProvider
} from "@chakra-ui/react"
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import Projects from "./components/Projects";
import Footer from "./components/Footer";

export const App = () => (
    <div>
    <ChakraProvider>
        <Navbar />
        <Home />
        <About />
        <Experience />
        <Projects />
        <Contact />
        <Footer />
      </ChakraProvider> 
    </div>
)

