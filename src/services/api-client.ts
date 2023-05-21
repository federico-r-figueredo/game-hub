import axios from "axios";

export default axios.create({
    baseURL: "https://api.rawg.io/api",
    params: {
        key: "c4428c03ce3b45c9ac410f5caa1e1987"
    }
});
