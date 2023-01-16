import axios from "axios";

import { useEffect, useState } from "react";







function App() {

const [xpub, setXpub] = useState('');
const [mnemonic, setMnemonic] = useState('');

const url = 'https://api.tatum.io/v3/bitcoin/wallet'

        useEffect(() => {
          axios.get(url)
          .then(res => {
            console.log(res.data) //displying data on your browser console.
            setXpub(res.data.xpub)
            setMnemonic(res.data.mnemonic)
            
          }).catch(err => {
            console.log(err)
          })
        },[]);
 
  return (
    <div className="App">
      <header className="header-app">
        <h1>Rendering Api</h1>
      </header>
      <div className="body-container">
            { mnemonic && <p>mnemonic: {mnemonic}</p> }
            { xpub && <p>xpub: {xpub}</p> }
      </div>     
          
    </div>
  );
}

export default App;
