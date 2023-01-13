
import "./styles/app.scss"
import Toolbar from "./component/Toolbar";
import SettingBar from "./component/SettingBar";
import Canvas from "./component/Canvas";
import {BrowserRouter, Switch, Router, Route, Navigate, Routes} from "react-router-dom";
import Main from "./Main";

function App() {
  return (
      <BrowserRouter>
          <div className="app">
<Routes>
    <Route path='/:id' element={<Main />} />
    <Route path="/" element={<Navigate replace to={`f${(+new  Date).toString(16)}`} />} />
</Routes>






          </div>
      </BrowserRouter>

  );
}

export default App;
