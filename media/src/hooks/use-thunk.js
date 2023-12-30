import { useState, useCallback } from "react"
import { useDispatch } from "react-redux"

export function useThunk(thunk) {

    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState(null)
    const dispatch = useDispatch();

    //! useCallback runs only if there is any changes in given parameters.
    const runThunk = useCallback((params) => {
        setIsLoading(true)
        dispatch(thunk(params))
            .unwrap()
            .catch((err) => setError(err))
            .finally(() => setIsLoading(false))
    }, [dispatch, thunk])

    return [runThunk, isLoading, error]

}