import React from "react";
import useTheme from "../context/theme";

function ThemeBtn(){
    const {themeMode, lightTheme, darkTheme} = useTheme()
    const onChangeBtn = (e) => {
        const darkModeStatus = e.currentTarget.checked
        if(darkModeStatus) {
            darkTheme()
        }else{
            lightTheme()
        }
    }
    return(
        <>
        <input
        type="checkbox"
        value=""
        onChange={onChangeBtn}
        checked={themeMode === "dark"}
        />Theme
        </>
    )
}

export default ThemeBtn