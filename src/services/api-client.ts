import axios from "axios";

export default axios.create({
    baseURL: "https://api.rawg.io/api",
    headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json"
    },
    params: {
        key: import.meta.env.VITE_RAWG_API_KEY
    }
});
