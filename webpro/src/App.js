import { useState } from "react";
import NewState from "./NewState";
import './css/style.css'
// import User from "./User";
// import Children from "./Children";
// import Home from "./Home";
// import About from "./About";

// import Colllage from "./Colllage";
// import State from "./State";
import Styling from "./Styling";
import UserProfile from "./UserProfile";
import Boot from "./Boot";

// import Form from "./Form";
// import Loop from "./Loop";
// import Radio from "./Radio";

function App() {
  const [name , setName] = useState(0)
  return (
    <div>
      {/* <User data={name} />
      <button onClick={()=>setName("Ali")}>click here</button> */}
      {/* <Home data={name} />
      <button onClick={()=>setName("ali")}>clic</button> */}
      {/* <About>
        <h1>Car <i class="fa-solid fa-car"></i></h1>
      </About>
      <About>
        <h1>Bike <i class="fa-solid fa-bicycle"></i></h1>
      </About>
      <About>
        <h1>Bus <i class="fa-solid fa-bus"></i></h1>
      </About> */}
      {/* <Form />

      <Radio />

      <Loop /> */}

      {/* <Colllage /> */}
      {/* <h1 className="heading">App Js Compnent</h1>
      <Styling />
      <UserProfile /> */}

        {/* <State /> */}

        <Boot />
        {/* <NewState data={name} btn="btn" val="shahzad" />
        <button onClick={()=>setName(name+1)}>Click </button> */}
    </div>
  );
}

export default App;
