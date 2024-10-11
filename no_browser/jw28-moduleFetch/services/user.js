/**
 * Fetches users from the REST Api
 * 
 * @returns Promise - A promise with the user array
*/
async function getAllUsers() {
    
    const url = "https://jsonplaceholder.typicode.com/users";

    const response = await fetch(url);
    const result = await response.json();
    
    return result;
}

/**
 * Fetches a single user from the REST Api
 * 
 * @params number - The id to fetch from the REST Api
 * 
 * @returns Promise - A promise with the user array
*/
async function getuserById(id) {
    
    const url = "https://jsonplaceholder.typicode.com/users/" + id;

    const response = await fetch(url);
    const result = await response.json();
    
    return result;
}

export default {
    getAllUsers,
    getuserById
};