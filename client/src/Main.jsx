import React from 'react';
import Toolbar from "./component/Toolbar";
import SettingBar from "./component/SettingBar";
import Canvas from "./component/Canvas";


const Main = () => {
    return (
        <>
            <Toolbar />
            <SettingBar/>
            <Canvas />
        </>
    );
};

export default Main;