import { useState } from "react";

function App() {

const[counter, setCounter] = useState({wert:0, kommentar: ""});
console.log("Rerender");

  return (
    <div id="App">
      <div>{counter.kommentar}</div>
      <div>{counter.wert}</div>
      <button onClick={()=> { 
        console.log(counter);
        setCounter({...counter, wert: counter.wert + 1}); // nur {} erzeugen wir neues Objekt, damit wir nicht mutieren
      // ...counter, --> das ist Spread-Operator, wir erzeugen neues Objekt und fügen alten Inhalt ein und machen noch änderung wert +1
      
      }}
      >
        Klick mich
        </button>
        <input onChange={(e) => setCounter({...counter, kommentar: e.value})}></input> 

    </div>
  );
}

export default App;