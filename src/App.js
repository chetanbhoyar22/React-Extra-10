import React, {useState}  from "react";
import Hook from "./Components/useEffectHook"

const App = () => {

  const [showComp, setShowComp] = useState(true);
  
  return (
   <div style={{textAlign:"center"}}>
     {/* <Hook /> */}
     {showComp ? <Hook /> : null}
     <button onClick={()=>setShowComp(false)}>Unmount useEffect Component</button>
   </div>
  );
};
export default App;