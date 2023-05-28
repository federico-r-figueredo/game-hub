import axios from "axios";

export default axios.create({
    baseURL: "https://api.rawg.io/api",
    params: {
        key: "68d1f986bfc4426fb6f31762a05f77cc"
    }
});
