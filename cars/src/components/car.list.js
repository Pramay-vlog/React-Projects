import "bulma/css/bulma.css";
import "../styles.css"

import { useDispatch, useSelector } from "react-redux";
import { removeCar } from "../store"

function CarList() {
    const dispatch = useDispatch();

    const cars = useSelector(({ cars: { data, searchTerm } }) => {
        return data.filter((car) => {
            return car.name.toLowerCase().includes(searchTerm.toLowerCase())
        })
    })

    const handleDelete = (car) => {
        return dispatch(removeCar(car.id))
    }

    const renderCars = cars.map((car) => {
        return (
            <div key={car.id} className="panel" >
                <p>
                    {car.name}: ${car.cost}
                </p>
                <button
                    className="button is-danger"
                    onClick={() => handleDelete(car)}
                >
                    Delete
                </button>
            </div>
        )
    })

    return <div className="car-list" >
        {renderCars}
        <hr />
    </div>
}

export default CarList;