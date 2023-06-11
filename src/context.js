import { createContext, useContext, useEffect, useState } from "react";



const API_URL= `http://www.omdbapi.com/?apikey=${process.env.REACT_APP_API_KEY}`;

const AppContext =  createContext ();
// function to get movies 
const AppProvider  = ({children}) => {
    const [isLoading,setIsLoading]= useState(true);
    const [movie,setMovie] =  useState([]);
    const [query,setQuery] =useState("hangover");
    const [error,setError] =useState({show:"false",msg:"not finddS"})


const getMovies = async (url) =>{
    try{
         const res = await fetch(url);
         const data = await  res.json();
         console.log(data); 
         if(data.Response==='True'){
            setIsLoading(false);
            setMovie(data.Search)
         }
         else{
            setError({
                show:true,
                msg:data.error,
            })
        }
    }
    catch(error){
        console.log("error in feild");
    }
}


useEffect(() => {
    let timeout = setTimeout (() => {
       getMovies(`${API_URL}&s=${query}`);
    },500);
    return() => clearTimeout(timeout);
    },[query]);


    
return<AppContext.Provider value={{isLoading,error,movie,query,setQuery,setError}}>{children}</AppContext.Provider>;
}
const useGlobalContext = () =>{
    return useContext (AppContext);
}
export {AppContext , AppProvider,useGlobalContext} ;
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN" "http://www.apple.com/DTDs/PropertyList-1.0.dtd">
<plist version="1.0">
<dict>
	<key>Label</key>
	<string>homebrew.mxcl.nginx</string>
	<key>LimitLoadToSessionType</key>
	<array>
		<string>Aqua</string>
		<string>Background</string>
		<string>LoginWindow</string>
		<string>StandardIO</string>
		<string>System</string>
	</array>
	<key>ProgramArguments</key>
	<array>
		<string>/opt/homebrew/opt/nginx/bin/nginx</string>
		<string>-g</string>
		<string>daemon off;</string>
	</array>
	<key>RunAtLoad</key>
	<true/>
	<key>WorkingDirectory</key>
	<string>/opt/homebrew</string>
</dict>
</plist>