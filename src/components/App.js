import React, { useState, useEffect } from "react";

function App() {

    const [images, setImages] = useState([]);

    useEffect(() => {
      fetch("https://dog.ceo/api/breeds/image/random")
        .then((r) => r.json())
        .then((data) => {
          // setting state in the useEffect callback
        setImages(data.message);
      });
  }, []);

  return (
    <div>
        <img src={images} alt="A Random Dog"/>
    </div>
  );
}

export default App;