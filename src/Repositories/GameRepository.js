import Settings from "./Settings"
import { fetchIt } from "./Fetch"

export default {
    // async function
    async getGamesById(id) {
        // await response of fetch call, only return once promise is resolved
        return await fetchIt(`${Settings.remoteURL}/games/${id}`)
    },
    async createGame(game) {
        return await fetchIt(`${Settings.remoteURL}/games`, "POST", JSON.stringify(game))
    },
    async delete(id) {
        return await fetchIt(`${Settings.remoteURL}/games/${id}`, "DELETE")
    },
    async getAllGames() {
        return await fetchIt(`${Settings.remoteURL}/games`)
    }
}
