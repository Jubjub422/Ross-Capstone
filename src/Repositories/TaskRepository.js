import Settings from "./Settings"
import { fetchIt } from "./Fetch"

export default {
    // async function
    async getTaskById(id) {
        // await response of fetch call, only return once promise is resolved
        return await fetchIt(`${Settings.remoteURL}/tasks/${id}`)
    },
    async addTask(task) {
        return await fetchIt(`${Settings.remoteURL}/tasks`, "POST", JSON.stringify(task))
    },
    async delete(id) {
        return await fetchIt(`${Settings.remoteURL}/tasks/${id}`, "DELETE")
    },
    async getAllTasks() {
        return await fetchIt(`${Settings.remoteURL}/tasks`)
    }
}
