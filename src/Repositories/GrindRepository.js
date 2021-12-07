import Settings from "./Settings"
import { fetchIt } from "./Fetch"

export default {
    // async function
    async getGrindById(id) {
        // await response of fetch call, only return once promise is resolved
        return await fetchIt(`${Settings.remoteURL}/grinds/${id}`)
    },
    async createAccount(grind) {
        return await fetchIt(`${Settings.remoteURL}/grinds`, "POST", JSON.stringify(grind))
    },
    async delete(id) {
        return await fetchIt(`${Settings.remoteURL}/grinds/${id}`, "DELETE")
    },
    async getAllGrinds() {
        return await fetchIt(`${Settings.remoteURL}/grinds?_expand=game&_expand=user`)
    }
}
