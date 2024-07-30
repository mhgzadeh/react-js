import axios from "axios";

const axiosInstance = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com'
})

class APIClient<T> {
    endpoint: string;

    constructor(endpoint: string) {
        this.endpoint = endpoint
    }

    getAll = async () => {
        const res = await axiosInstance
            .get<T[]>(this.endpoint); // fetching or getting a list of the T object
        return res.data;
    }

    post = async (data: T) => {
        const res = await axiosInstance
            .post<T>(this.endpoint, data); // posting an object of T
        return res.data;
    }

}

export default APIClient;