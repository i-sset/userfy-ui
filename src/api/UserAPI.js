import axios from 'axios';
const UserAPI = {
    getAll: async () => await axios.get("http://localhost:8080/users")
}

export default UserAPI;