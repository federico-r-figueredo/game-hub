import axios from "axios";

export default axios.create({
    baseURL: "https://api.rawg.io/api",
    withCredentials: false,
    params: {
        key: import.meta.env.VITE_RAWG_API_KEY
    }
});
