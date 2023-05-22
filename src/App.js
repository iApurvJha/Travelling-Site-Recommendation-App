import "./styles.css";
import { useState } from "react";

export default function App() {
  var [display1, setDisplay1] = useState("Ladakh, Jammu and Kashmir");
  var [display2, setDisplay2] = useState("Rishikesh, Uttarakhand");
  var [display3, setDisplay3] = useState("Spiti Valley, Himachal Pradesh");
  var [display11, setDisplay11] = useState("9/10");
  var [display22, setDisplay22] = useState("8/10");
  var [display33, setDisplay33] = useState("7/10");
  var [display111, setDisplay111] = useState(" Majestic");
  var [display222, setDisplay222] = useState("Thrilling");
  var [display333, setDisplay333] = useState("Remote");

  function clickHnadlerJavascript() {
    display1 = "Ladakh, Jammu and Kashmir";
    setDisplay1(display1);
    display2 = "Rishikesh, Uttarakhand";
    setDisplay2(display2);
    display3 = "Spiti Valley, Himachal Pradesh";
    setDisplay3(display3);
    display11 = "9/10";
    setDisplay11(display11);
    display22 = "8/10";
    setDisplay22(display22);
    display33 = "7/10";
    setDisplay33(display33);
    display111 = " Majestic";
    setDisplay111(display111);
    display222 = "Thrilling";
    setDisplay222(display222);
    display333 = "Remote";
    setDisplay333(display333);

    //Another Method
    // input1.value = "Eloquent JavaScript";
    // input2.value = "You Don't Know JS";
  }
  function clickHnadlerFiction() {
    display1 = "Jaipur, Rajasthan";
    setDisplay1(display1);
    display2 = "Varanasi, Uttar Pradesh";
    setDisplay2(display2);
    display3 = "West Bengal";
    setDisplay3(display3);
    display11 = "9/10";
    setDisplay11(display11);
    display22 = "8/10";
    setDisplay22(display22);
    display33 = "7/10";
    setDisplay33(display33);
    display111 = "Regal";
    setDisplay111(display111);
    display222 = "Spiritual";
    setDisplay222(display222);
    display333 = "Artistic";
    setDisplay333(display333);

    //Another Method
    // input1.value = "Shiva Trilogy";
    // input2.value = "Harry Potter and the Sorcerer's Stone";
  }
  function clickHnadlerBusiness() {
    display1 = "Ranthambore National Park, Rajasthan";
    setDisplay1(display1);
    display2 = "Kaziranga National Park, Assam";
    setDisplay2(display2);
    display3 = "Periyar National Park, Kerala";
    setDisplay3(display3);
    display11 = "9/10";
    setDisplay11(display11);
    display22 = "8/10";
    setDisplay22(display22);
    display33 = "7/10";
    setDisplay33(display33);
    display111 = "Thrilling";
    setDisplay111(display111);
    display222 = "Breathtaking";
    setDisplay222(display222);
    display333 = "Peace";
    setDisplay333(display333);

    //Another Method
    // input1.value = "Never Split the Difference";
    // input2.value = "Loonshots";
  }
  return (
    <div className="App">
      <h1>🚀 Travel & Places</h1>
      <br />
      <h3>
        Checkout My Favourite Travel & Places Sites,select a genre from it
      </h3>
      <br />
      <div className="javascript">
        <input
          className="input"
          type="text"
          value="Adventure"
          onClick={clickHnadlerJavascript}
        />
      </div>
      <div className="fiction">
        <input
          className="input"
          type="text"
          value="Cultural"
          onClick={clickHnadlerFiction}
        />
      </div>
      <div className="business">
        <input
          className="input"
          type="text"
          value="Wildlife"
          onClick={clickHnadlerBusiness}
        />
      </div>
      <hr />
      <div>
        <input
          ref={(elment) => (this.input1 = elment)}
          type="text"
          className="list1"
          value={display1}
        />
        <input
          type="text"
          className="list2"
          value={display11}
          onClick={clickHnadlerJavascript}
        />
        <input
          type="text"
          className="des"
          value={display111}
          onClick={clickHnadlerJavascript}
        />
      </div>
      <div>
        <input
          type="text"
          className="list1"
          ref={(elment) => (this.input2 = elment)}
          value={display2}
        />
        <input
          type="text"
          className="list2"
          value={display22}
          onClick={clickHnadlerFiction}
        />
        <input
          type="text"
          className="des"
          value={display222}
          onClick={clickHnadlerFiction}
        />
      </div>
      <div>
        <input
          type="text"
          className="list1"
          ref={(elment) => (this.input3 = elment)}
          value={display3}
        />
        <input
          type="text"
          className="list2"
          value={display33}
          onClick={clickHnadlerBusiness}
        />
        <input
          type="text"
          className="des"
          value={display333}
          onClick={clickHnadlerBusiness}
        />
      </div>
    </div>
  );
}
