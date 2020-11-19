import axios from "axios";

export const Axios = () => {
    let environment =
        process.env.NODE_ENV === "production"
            ? "https://todo56.herokuapp.com/api/"
            : "http://localhost:3000/api/";
    return axios.create({
        baseURL: environment,
    });
};
