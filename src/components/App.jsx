import "../App.css";
import Navigation from "./Navigation";
import Requests from "./Requests";
// import Listening from "./Listening";
// import { getListening } from "../utils/getListening";

function App() {
  // getListening().then((res) => console.log(res?.json()));
  return (
    <>
      <Navigation />
      {/* <Listening /> */}
      <Requests />
      {/* <Listening></Listening> */}
    </>
  );
}

export default App;
