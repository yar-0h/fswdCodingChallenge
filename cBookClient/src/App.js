//The front end utilizes React
// Here, I maintain the state of the requested data for the inputted SKU
// There is a function for making the http request and update the state
// This function along with the state is passed down to the children components
// The components themselves are super simple with simple css styling.

import './App.css';
import axios from "axios";

import ResultsCard from './ResultsCard';
import SearchBar from './SearchBar';
import React, {useState} from 'react';



function App() {
  const [sku, setSku] = useState('');
  const [errorCode, setErrorCode] = useState('');
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [price, setPrice] = useState('');


  async function get(sku) {
    if (sku.length > 0)
    {
      const { data } = await axios.get(
        `http://localhost:8080/${sku}`
      );
      console.log(data)
      setSku(sku);
      setErrorCode(data.status);
      setTitle(data.title);
      setAuthor(data.author);
      setPrice(data.price);
    }
  }

  var errMsg = "";

  if (errorCode === "-2") {
    errMsg = "SKU NOT FOUND"
  }
  if (errorCode === "-1") {
    errMsg = "PRODUCT NOT FOUND"
  }

  return (
    <div className="App">
      <div className='searchBlock'>
        <SearchBar
          get={get}
        />
      </div>

      <div className='errorBlock'>{errMsg}</div>

      <div className='resultsBlock'>
        <ResultsCard
          sku={sku}
          errorCode={errorCode}
          title={title}
          author={author}
          price={price}
        />
      </div>
    </div>
  );
}

export default App;
