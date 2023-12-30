import { configureStore } from "@reduxjs/toolkit";
import { userReducer } from "./slices/userSlice";
import { setupListeners } from "@reduxjs/toolkit/query/react";
import { albumsApi } from "./apis/albums.api"
import { photosApi } from "./apis/photos.api"

export const store = configureStore({

    reducer: {
        users: userReducer,
        [albumsApi.reducerPath]: albumsApi.reducer,
        [photosApi.reducerPath]: photosApi.reducer
    },
    middleware: (getDefaultMiddleware) => {
        return getDefaultMiddleware()
            .concat(albumsApi.middleware)
            .concat(photosApi.middleware)
    }

})
setupListeners(store.dispatch)

export * from "./thunks/user/getUsers";
export * from "./thunks/user/addUsers";
export * from "./thunks/user/deleteUser";
export {
    useFetchAlbumsQuery,
    useAddAlbumsMutation,
    useRemoveAlbumMutation
} from "./apis/albums.api";
export {
    useFetchPhotosQuery,
    useAddPhotosMutation,
    useRemovePhotosMutation
} from "./apis/photos.api"
