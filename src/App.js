import React, { useState, useEffect} from 'react';
import Navbar from './Components/Navbar';
import './App.css';
import Home from './Components/Home';
import HashLoader

from "react-spinners/HashLoader"; 



function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate a loading delay of 2 seconds
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    // Clean up the timer when the component unmounts
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {isLoading ? (
        <div className="spinner-container">
          <div className="spinner">
            <HashLoader color="#5b1bd0" size={100} loading={isLoading} />
          </div>
        </div>
      ) : (
        <>
          <Navbar />
          <Home />
        </>
      )}
    </>
  );
}

export default App;
