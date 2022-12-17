import axios from 'axios';
const endpoint = "http://localhost:8080";

const UserAPI = {
    getAll: async () => await axios.get(endpoint + '/users'),
    update: async (user) => await axios.put(endpoint + '/user/update', user),
    insert: async (user) => await axios.post(endpoint + '/user', user)
}

export default UserAPI;