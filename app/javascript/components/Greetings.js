import React, { useEffect} from "react";
import { useDispatch, useSelector } from 'react-redux';
import { fetchGreetings } from "../redux/Greetings/greetingsSlice";
import store from "../redux/store";
import '../../assets/stylesheets/application.css';

const Greetings = () => {
    const { greetings, loading, hasErrors } = useSelector((store) => store.greetings);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchGreetings());
    }, [dispatch]);
    console.log(greetings);
    return (
        <div className="content">
            <h1 className="content-title">Greeting!!</h1>
            <p className="content-body">Hello, React on Rails!</p>
            <p className="content-body">Here is a greeting from the API:</p>
            <p className="content-body">{greetings.message}</p>
        </div>
    );

} 

export default Greetings;