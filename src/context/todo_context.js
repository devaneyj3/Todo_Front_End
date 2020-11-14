import React, { createContext, useState } from "react";
export const todoContext = createContext();

const Context = (props) => {
    const [todo, setTodo] = useState([]);
    return (
        <todoContext.Provider value={{ todo, setTodo }}>
            {props.children}
        </todoContext.Provider>
    );
};

export default Context;
