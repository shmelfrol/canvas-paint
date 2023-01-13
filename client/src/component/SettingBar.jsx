import React, {useState} from 'react';
import "../styles/settingBar.scss"
import {useDispatch, useSelector} from "react-redux";
import {setWidth} from "../redux/actionCreators/paint";
const SettingBar = () => {

    const dispatch = useDispatch()
    const changeWidthHandler =(e)=>{
         console.log(e.target.value)
        dispatch(setWidth(e.target.value))
     }

     const state = useSelector(state=>state.paint)

  console.log(state)

    return (
        <div className="settingBar">
            <label htmlFor="line-width" >Толщина линии</label>
            <input id="line-width" type="number" defaultValue={1} min={1} max={50} onChange={changeWidthHandler}/>
        </div>
    );
};

export default SettingBar;