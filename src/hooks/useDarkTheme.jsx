import { useEffect, useLayoutEffect, useState } from "react"

const DEFAULT_THEME = "light";

export const useDarkTheme =() =>{
    const [theme , setTheme] = useState(undefined);
    useEffect(() => {
        if (!theme) {
            setTheme(document.documentElement.getAttribute('data-theme') ?? DEFAULT_THEME);
        }
        else {
            document.documentElement.setAttribute('data-theme',theme) 
        }
    }, [theme]);
    // useLayoutEffect(()=>{
    //     document.documentElement.setAttribute('data-theme',theme)
    // },[theme])
    return {
            theme,
            setTheme
    }
}