import { configureStore } from "@reduxjs/toolkit";
import greetingReducer from "./GreetingsSplice";

export default configureStore({
    reducer: {
        greetings: greetingReducer
    }
    });
