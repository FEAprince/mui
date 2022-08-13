import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Autocomplete from "./Components/Autocomplete";
import Buttons from "./Components/Buttons";
import Buttongroup from "./Components/Buttongroup";
import Checkbox from "./Components/Checkboxs";
import Floatingactionbutton from "./Components/Floatingactionbutton";
import Radiobutton from "./Components/Radiobutton";
import BasicRating from "./Components/Basicrating";
import BasicSelect from "./Components/BasicSelect";
import Slider from "./Components/Slider";
import BasicSwitch from "./Components/Switch";
import BasicTextField from "./Components/Textfiled";
import TransferList from "./Components/Transferlist";
import ToggleButtons from "./Components/Togglebutton";
import Alerts from "./Components/Alert";
import Backdrops from "./Components/Backdrop";
import DialogDemo from "./Components/Dialog";
import CircularIntegration from "./Components/CircularIntegration";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/Autocomplete" element={<Autocomplete />} />
        <Route path="/Buttons" element={<Buttons />} />
        <Route path="/Buttongroup" element={<Buttongroup />} />
        <Route path="/Checkbox" element={<Checkbox />} />
        <Route
          path="/Floatingactionbutton"
          element={<Floatingactionbutton />}
        />
        <Route path="/Radiobutton" element={<Radiobutton />} />
        <Route path="/BasicRating" element={<BasicRating />} />
        <Route path="/BasicSelect" element={<BasicSelect />} />
        <Route path="/BasicSlider" element={<Slider />} />
        <Route path="/BasicSwitch" element={<BasicSwitch />} />
        <Route path="/Textfield" element={<BasicTextField />} />
        <Route path="/Transferlist" element={<TransferList />} />
        <Route path="/Togglebutton" element={<ToggleButtons />} />
        <Route path="/Alerts" element={<Alerts />} />
        <Route path="/Backdrops" element={<Backdrops />} />
        <Route path="/Dialog" element={<DialogDemo />} />
        <Route Path="/CircularIntegration" element={<CircularIntegration />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
