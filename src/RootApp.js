import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { RootStackNavigation } from "./navigation/RootStackNavigation";
import { SplashView } from "./SplashView";


export const RootApp = () => {

    const [intialized,setintialized] = useState(false);

    if(!intialized){
        return(
            <SplashView
            onFinshLoad = {()=> {setintialized(true)}}
            />
        )
    }

    return(
        <NavigationContainer>
                <RootStackNavigation/>
        </NavigationContainer>
    )
}