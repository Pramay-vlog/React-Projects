import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { faker } from "@faker-js/faker"

const albumsApi = createApi({

    reducerPath: "albums",
    baseQuery: fetchBaseQuery({
        baseUrl: "http://localhost:3005"
    },),
    endpoints(builder) {
        return {
            addAlbums: builder.mutation({
                invalidatesTags: (result, err, userArg) => {
                    return [{ type: "UserAlbumsTag", id: userArg.id }]
                },
                query: (user) => {
                    return {
                        url: "/albums",
                        method: "POST",
                        body: {
                            userId: user.id,
                            title: faker.vehicle.vrm()
                        }
                    }
                }
            }),
            removeAlbum: builder.mutation({
                invalidatesTags: (result, err, albumArg) => {
                    return [{ type: "albumsTag", id: albumArg.id }]
                },
                query: (album) => {
                    return {
                        method: "DELETE",
                        url: `/albums/${album.id}`
                    }
                }
            }),
            fetchAlbums: builder.query({
                providesTags: (result, err, userArg) => {
                    const tags = result.map(album => {
                        return { type: "albumsTag", id: album.id }
                    })
                    tags.push({ type: "UserAlbumsTag", id: userArg.id })
                    return tags;
                },
                query: (user) => {
                    return {
                        url: "/albums",
                        params: {
                            userId: user.id
                        },
                        method: "GET"
                    }
                }
            })
        }
    }

})

export const {
    useFetchAlbumsQuery,
    useAddAlbumsMutation,
    useRemoveAlbumMutation
} = albumsApi;

export { albumsApi }