import React from 'react'
import Ticket from './Components/Ticket'
import Footer from './Components/Footer'
import './App.css';


function App() {
  return (
    <div className="App">
      <Ticket heading ={'Super Bowl Tickets'} />
      <Footer />
    </div>
  );
}

export default App
