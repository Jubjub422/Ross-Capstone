import Settings from "../../Repositories/Settings"




const useSimpleAuth = () => {

    //returns boolean of true if a user exists in local or session storage
    const isAuthenticated = () => localStorage.getItem("gamer_token") !== null
        || sessionStorage.getItem("gamer_token") !== null

    //posts to users API, then encodes the parsed response and sets it as a token in the local storage
    //used for registering new users
    const register = (user) => {
        return fetch(`${Settings.remoteURL}/users`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(user)
        })
        .then(_ => _.json())
        .then(response => {
            if ("id" in response) {
                const baseUserObject = JSON.stringify(response)
                let encoded = Buffer.from(baseUserObject).toString("base64")
                localStorage.setItem("gamer_token", encoded)
            }
        })
    }

    //gets user object(s) using the email string argument. If parsed response has one or more objects, encodes
    //the parsed response and sets it as a token in the local storage. Returns true. Otherwise, returns false.
    //used for logging in users
    const login = (email) => {
        return fetch(`${Settings.remoteURL}/users?email=${email}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        })
        .then(_ => _.json())
        .then(matchingUsers => {
            if (matchingUsers.length > 0) {
                const baseUserObject = JSON.stringify(matchingUsers[0])
                let encoded = Buffer.from(baseUserObject).toString("base64")
                localStorage.setItem("gamer_token", encoded)
                return true
            }
            return false
        })
    }

    //removes tokens from local and session storage
    //used for logging users out
    const logout = () => {
        console.log("*** Toggling auth state and removing credentials ***")
        localStorage.removeItem("gamer_token")
        sessionStorage.removeItem("gamer_token")
    }

    //unencodes and parses the user token, then creates and object from it.
    //thus returning a user object.
    //Object.assign takes a target and a source as arguments. Target (Object.create(null)) is a new empty object.
    //source is the new info from the unencoded and parsed token.
    const getCurrentUser = () => {
        const encoded = localStorage.getItem("gamer_token")
        const unencoded = Buffer.from(encoded, "base64").toString("utf8")
        const parsed = JSON.parse(unencoded)
        const bare = Object.assign(Object.create(null), parsed)
        return bare
    }

    //return functions from parent function in the form of an object?
    return { isAuthenticated, logout, login, register, getCurrentUser }
}
//default allows function to be imported as any name into another component/module
export default useSimpleAuth
