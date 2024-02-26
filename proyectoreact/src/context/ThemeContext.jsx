import React, {createContext} from "react";

export const themeContext = createContext();

const themeProvider = ({children}) => {
    return(
        <themeContext.Provider>
            {children}
        </themeContext.Provider>
    )
}

export default themeProvider;