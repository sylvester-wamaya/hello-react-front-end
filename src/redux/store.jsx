import { configureStore } from "@reduxjs/toolkit";
import greetingReducer from "./GreetingsSplice";

const store = configureStore({
    reducer: {
        greetings: greetingReducer
    }
    });

    export default store;
