import axios from "axios";

export default axios.create({
    baseURL: "https://api.rawg.io/api",
    params: {
        key: "8927e809ee27434595629dbe17422a90"
    }
});
