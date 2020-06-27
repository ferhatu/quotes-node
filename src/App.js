import React, { useState, useEffect } from "react";

import "./App.css";

function App() {
  const [quote, setQuote] = useState({});
  useEffect(() => {
    fetch("https://quotes-ferhat.herokuapp.com/quotes/random")
      .then((res) => res.json())
      .then((data) => {
        setQuote(data);
      });
  }, []);

  const handleClick = () => {
    window.location.reload(true);
  };

  return (
    <div className="container">
      <p>{`“${quote.quote}”`}</p>
      <p>{quote.author}</p>
      <button onClick={handleClick}>New Quote</button>
    </div>
  );
}

export default App;
