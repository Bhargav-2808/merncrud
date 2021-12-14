import React from "react";
import { Routes ,Route } from 'react-router-dom';

import Adduser from './Adduser';
import Crud from './Crud';
import Edituser from "./Edituser";

const Path = () =>{
    return(
        <>
            <Routes>
                <Route exact path="/" element={<Crud />}></Route>
                <Route exact path="/edit/:id"  element = {<Edituser />} > </Route>
                <Route exact path="/Adduser" element={<Adduser/>}></Route>
                
            </Routes>
        </>
    );
}
export default Path;