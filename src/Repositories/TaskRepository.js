import Settings from "./Settings"
import { fetchIt } from "./Fetch"

export default {
    // async function
    async getTasksById(id) {
        // await response of fetch call, only return once promise is resolved
        return await fetchIt(`${Settings.remoteURL}/tasks/${id}`)
    },
    async createTasks() {
        return await fetchIt(`${Settings.remoteURL}/tasks`, "POST", JSON.stringify(user))
    },
    async delete(id) {
        return await fetchIt(`${Settings.remoteURL}/tasks/${id}`, "DELETE")
    },
    async getAllTasks() {
        return await fetchIt(`${Settings.remoteURL}/tasks`)
    }
}
