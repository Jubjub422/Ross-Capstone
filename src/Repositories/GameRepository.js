import { Settings } from "./Settings"
import { fetchIt } from "./Fetch"

// The “async” keyword declares an async function, which means two things: 
// it automatically returns promises and can use the “await” keyword. 
// An async function returns promises that are resolved with function’s return value or rejected with uncaught errors.

export const GameRepository = {
    // async function
    async getGameById(id) {
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


//!Await Keyword
// when calling fetch() with the await keyword, we're telling the async function to stop executing until the promise is resolved,
// at which point it can resume execution and return the resolved value.
// Rather than getting promises, we will get back the parsed JSON data that we expect.

//!Promises
// A promise is an object that may produce a single value some time in the future :
//  either a resolved value,
// or a reason that it's not resolved (e.g., a network error occurred).
//  Promises are eager, meaning that a promise will start doing whatever task you give it as soon as the promise constructor is invoked.