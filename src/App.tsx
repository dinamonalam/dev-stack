import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import MainLayout from "./components/MainLayout";
import Projects from "./components/Projects";
import About from "./components/About";
import Footer from "./components/Footer";

import type { Technology } from "./types";

function App() {
  const [technologies, setTechnologies] = useState<Technology[]>([]);
  const [stack, setStack] = useState<Technology[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadData = async () => {
      try {
        const response = await fetch("/data.json");

        if (!response.ok) {
          throw new Error("Failed to load technologies.");
        }

        const data: Technology[] = await response.json();
        setTechnologies(data);
      } catch (err) {
        setError("Something went wrong while loading technologies.");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, []);

  const handleAddToStack = (tech: Technology) => {
    const isAlreadyAdded = stack.some((item) => item.id === tech.id);

    if (isAlreadyAdded) {
      toast.warning(`${tech.name} is already in your stack!`);
      return;
    }

    setStack((previousStack) => [...previousStack, tech]);
    toast.success(`${tech.name} added to your stack!`);
  };

  const handleRemoveFromStack = (id: string) => {
    const removedTech = stack.find((item) => item.id === id);

    setStack((previousStack) =>
      previousStack.filter((item) => item.id !== id)
    );

    if (removedTech) {
      toast.info(`${removedTech.name} removed from your stack.`);
    }
  };

  const handleRemoveAll = () => {
    setStack([]);
    toast.error("All technologies removed from your stack.");
  };

  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Navbar />
      <Hero />

      {loading && (
        <p className="text-center py-10 text-slate-500">
          Loading technologies...
        </p>
      )}

      {error && <p className="text-center py-10 text-red-500">{error}</p>}

      {!loading && !error && (
        <MainLayout
          technologies={technologies}
          stack={stack}
          handleAddToStack={handleAddToStack}
          handleRemoveFromStack={handleRemoveFromStack}
          handleRemoveAll={handleRemoveAll}
        />
      )}

      <Projects />
      <About />
     
      <Footer />

      <ToastContainer position="top-right" autoClose={2500} />
    </div>
  );
}

export default App;