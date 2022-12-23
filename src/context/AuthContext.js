import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {createContext, useState, useEffect} from 'react';
import axios from 'axios';
//import {BASE_URL} from '../config';

export const AuthContext = createContext();

export const AuthProvider = ({children}) => {
    const [isLoading, setIsLoading] = useState(false);
    const [userToken, setUserToken] = useState(null);
    const [userInfo, setUserInfo] = useState(null);

    const login = () => {
        setIsLoading(true);
        let username = 'STAQR';
        let password = 'password';
        let userInfo = (username, password);

        setUserToken('aptx4869');
        setUserInfo(userInfo);

        AsyncStorage.setItem('userToken', 'aptx4869');
        AsyncStorage.setItem('userInfo', userInfo);

        setIsLoading(false);
    };

    const logout = () => {
        setIsLoading(true);
        setUserToken(null);
        AsyncStorage.removeItem('userInfo');
        AsyncStorage.removeItem('userToken');
        setIsLoading(false);
    };

    const isLoggedIn = async() => {
        try {
            setIsLoading(true);
            let userInfo = await AsyncStorage.getItem('userInfo');
            let userToken = await AsyncStorage.getItem('userToken');
            //userInfo = JSON.parse(userInfo);

            //if(userInfo){
                setUserInfo(userInfo);
                setUserToken(userToken);
            //};

            setIsLoading(false);
        } catch(e) {
            console.log(`isLogged in error ${e}`);
        }
    };

    useEffect(() => {
        isLoggedIn();
    }, []);

    return (
        <AuthContext.Provider
        value={{
            isLoading,
            userInfo,
            userToken,
            login,
            logout,
        }}>
        {children}
        </AuthContext.Provider>
    );
};
