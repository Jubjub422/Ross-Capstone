import {Settings} from "./Settings"
import { fetchIt } from "./Fetch"

export default {
    // async function
    async getUserById(id) {
        // await response of fetch call, only return once promise is resolved
        return await fetchIt(`${Settings.remoteURL}/users/${id}`)
    },
    async createAccount(user) {
        return await fetchIt(`${Settings.remoteURL}/users`, "POST", JSON.stringify(user))
    },
    async findUser(un, pwd) {
        return await fetchIt(`${Settings.remoteURL}/users?email=${un}&password=${pwd}`)
    },
    async delete(id) {
        return await fetchIt(`${Settings.remoteURL}/users/${id}`, "DELETE")
    },
    async getAllUsers() {
        return await fetchIt(`${Settings.remoteURL}/users`)
    }
}
