const Pool = require('pg').Pool
const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'staqr',
    password: 'rootUser',
    port: 5432
})

//gets a list of all users
const getUsers = (request, response) => {
    pool.query('SELECT * FROM users ORDER BY user_id ASC', (error, results) => {
        if (error) {
            throw error
        }
        response.status(200).json(results.rows)
    })
}

//gets a list of all users
const getPosts = (request, response) => {
    pool.query('SELECT * FROM posts', (error, results) => {
        if (error) {
            throw error
        }
        response.status(200).json(results.rows)
    })
}

//gets a user by id number
const getUserById = (request, response) => {
    const user_id = parseInt(request.params.user_id)
    pool.query('SELECT * FROM users WHERE user_id = $1', [user_id], (error, results) => {
        if (error) {
            throw error
        }
        response.status(200).json(results.rows)
    })
}

//creates a new user
const createUser = (request, response) => {
    const {
        username,
        email
    } = request.body
    //cannot do double query: figure out how to turn this into one query
    pool.query('INSERT INTO users (username) VALUES ($1)', [username], (error, results) => {
        if (error) {
            throw error
        }
        //response.status(201).send(`User added with ID: ${result.insertId}`)
    })
   
   /* pool.query('INSERT INTO user_info (email) VALUES ($1)', [email], (error, results) => {
        if (error) {
            throw error
        }
        response.status(201).send(`User added with ID: ${result.insertId}`)
    })*/
}

//updates user information
const updateUser = (request, response) => {
    const user_id = parseInt(request.params.user_id)
    const {
        username,
        email
    } = request.body
    pool.query(
        'UPDATE users SET username = $1, email = $2 WHERE user_id = $3',
        [username, email, user_id],
        (error, results) => {
            if (error) {
                throw error
            }
            response.status(200).send(`User modified with ID: ${id}`)
        }
    )
}

//deletes user
const deleteUser = (request, response) => {
    const user_id = parseInt(request.params.user_id)
    pool.query('DELETE FROM users WHERE user_id = $1', [user_id], (error, results) => {
        if (error) {
            throw error
        }
        response.status(200).send(`User deleted with ID: ${user_id}`)
    })
}

/* //gets a post
const getPost = (request, response) => {
    const post_id = parseInt(request.params.post_id)
    //deleted WHERE post_id = $1
    pool.query('SELECT * FROM posts', [post_id], (error, results) => {
        if (error) {
            throw error
        }
        response.status(200).json(results.rows)
    })
} */

//gets engagement
const getEngagement = (request, response) => {
    const post_id = parseInt(request.params.post_id)
    pool.query('SELECT * FROM engagement WHERE post_id = $1', [post_id], (error, results) => {
        if (error) {
            throw error
        }
        response.status(200).json(results.rows)
    })
}


module.exports = {
    getUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser,
    getPosts,
    getEngagement,
}
