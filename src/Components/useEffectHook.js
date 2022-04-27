import React from "react";          //default imported
import {useState, useEffect} from "react";     //named imported

function useEffectHook(){ 

    const [name, setName] = useState("Sameer");
    const [surname, setSurname] = useState("Deshmukh");

    //componentDidMount & componentDidUpdate
    // useEffect=(()=>{
    //     console.log("Hello! useEffect Hook")
    // })

    //componentDidMount
    // useEffect=(()=>{
    //     console.log("Hello! useEffect Hook")
    // }, [])

    // In this case useEffect will work like componentDidMount and will work like componentDidUpdate for name state variable only.
    // useEffect=(()=>{
    //     console.log("Hello! useEffect Hook")
    // }, [name])

    //componentWillUnmount - cleanup function in useEffect
    useEffect(()=>{
        console.log("Inside useEffect hook");

        return()=>{
            console.log("useEffect behaving like componentWillUnmount")
        }
    }, [name, surname])

    //  componentWillUnmount,  : cleanup function in useEffect
    useEffect(()=>{
        return function cleanup(){
            console.log("Cleanup function ");
        }
    },[])

    return(

        <div style={{textAlign:"center"}}>
            <h1>HOOKS </h1>
            <h2>useEffect </h2>

            <p>Value of name state variable = <b>{name}</b></p>

            <p>Value of surname state variable = <b>{surname}</b></p>

            <button onClick={()=>setName("Chetan")}>Update name state value</button>
            <br/><br/>

            <button onClick={()=>setSurname("Bhoyar")}>Update surname state value</button>
            <br/><br/>
        </div>
    )
}
export default useEffectHook;

// useEffect - 26-04-2022
// alternative of lifecycle methods
// componentDidMount, componentDidUpdate, componentWilUnmount
// hook which accepts first parameter as a callback function, and second parameter is dependency    array.
// if you do not want that useEffect should run like a componentDidUpdate then : pass an empty dependency array.
// clean up function - this function gets executed when the component is unmounted from the screen. This is mostly used for memory leaks.