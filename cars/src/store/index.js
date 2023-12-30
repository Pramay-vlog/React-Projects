import { configureStore } from "@reduxjs/toolkit";

import { carsReducer, changeSearchTerm, addCar, removeCar } from "./slices/car.slice.js"

import { formReducers, changeName, changeCost } from "./slices/form.slice.js"

const store = configureStore({
    reducer: {
        form: formReducers,
        cars: carsReducer
    },
})

export {
    store,
    changeSearchTerm,
    addCar,
    removeCar,
    changeName,
    changeCost
}