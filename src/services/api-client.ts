import axios from "axios";

export default axios.create({
    baseURL: "https://api.rawg.io/api",
    params: {
        key: "2abc02c3231c428d84b269df583ded07"
    }
});
