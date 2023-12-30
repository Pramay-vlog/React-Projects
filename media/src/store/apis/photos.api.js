import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"
import { faker } from "@faker-js/faker"

const photosApi = createApi({
    reducerPath: "photos",
    baseQuery: fetchBaseQuery({
        baseUrl: "http://localhost:3005"
    }),
    endpoints(builder) {
        return {
            fetchPhotos: builder.query({
                providesTags: (results, err, album) => {
                    let tags = results.map((photo) => {
                        return { type: "photo", id: photo.id }
                    })
                    tags.push({ type: "albumPhoto", id: album.id })
                    return tags
                },
                query: (album) => {
                    return {
                        url: "/photos",
                        params: {
                            albumId: album.id
                        }
                    }
                }
            }),
            addPhotos: builder.mutation({
                invalidatesTags: (results, err, album) => {
                    return [{ type: "albumPhoto", id: album.id }]
                },
                query: (album) => {
                    return {
                        method: "POST",
                        url: "/photos",
                        body: {
                            url: faker.image.url(),
                            albumId: album.id
                        }
                    }
                }
            }),
            removePhotos: builder.mutation({
                invalidatesTags: (result, err, photo) => {
                    return [{ type: "photo", id: photo.id }]
                },
                query: (photo) => {
                    return {
                        method: "DELETE",
                        url: `/photos/${photo.id}`
                    }
                }
            })
        }
    }
})

export const {
    useFetchPhotosQuery,
    useAddPhotosMutation,
    useRemovePhotosMutation
} = photosApi

export { photosApi }