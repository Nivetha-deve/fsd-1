// API to register a new user into database
import {beUrl} from "./constants";

const userSignup = async (userData) => {
    const response = await fetch(`${beUrl}/register`,{
        method: "POST",
        body: JSON.stringify(userData),
        headers:{
            "Content-Type": "application/json;charset=utf-8",
        },
    });

    return await response.json();
};

const userSignIn = async (userData) => {
     const response = await fetch(`${beUrl}/login`, {
        method:"POST",
        body: JSON.stringify(userData),
        headers:{
            "Content-Type":"application/json;charset=utf-8",
        },     
     });
     return await response.json();
};

const verifyAccount = async (token) => {
    const response = await fetch(`${beUrl}/verify-user`, {
        method: "POST",
        body:JSON.stringify({
            token,
        }),
        headers: {
            'Content-Type': "application/json;charset=utf-8"
        },
    });
    return await response.json();
};

const samplePromise = new Promise ((resolve) => {
    setTimeout(() => {
       resolve({longUrl: "https://github.com/Nivetha-deve"});
    },4000)
});

export { userSignup,userSignIn,verifyAccount, samplePromise};
