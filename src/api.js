import axios from 'axios'

const BASEURL = import.meta.env.VITE_API_ENDPOINT;
export const getAnimeBySearch = async (search) => {
    const res = await axios.get(`${BASEURL}search?url=${search}`)
    return res
}

export const getAnimeByImage = async (image) => {
    const res = await axios.post(`${BASEURL}search`, image)
    return res
}