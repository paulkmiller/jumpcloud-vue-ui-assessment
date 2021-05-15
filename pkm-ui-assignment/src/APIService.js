import axios from 'axios';
const API_URL = 'http://localhost:8005';

export class APIService{

    getUsers(dataSource) {
        const url = `${API_URL}/api/systemusers/`;
        dataSource.users = []
        return axios.get(url).then((response) => {
            // load the API response into items for the datatable
            dataSource.users = response.data.results.map((user) => {
                return {
                    id: user.id,
                    name: user.firstname + user.lastname,
                    description: user.description,
                    email: user.email
                    
                    // ...user.fields
                }
            })
            dataSource.numberOfUsers = response.count
        }).catch((error) => {
            console.log(error);
        })
    }

    saveUser(dataSource){
        /* this is used for both creating and updating API records */
        let method = "post"
        let url = `${API_URL}/api/systemusers/${id}`
        let id = dataSource.id

        let data = {
            results: dataSource
        }

        console.log(data);

        if (id) {
            // if the item has an id, update an existing item
            method = "patch"
            url = `${API_URL}/api/systemusers/${id}`

            // remove id from data and hope that does the trick
            delete data.results.id
        }

        // save the record
        axios[method](url,
            data,
            { headers: {
                "Access-Control-Allow-Methods": 'GET, PUT, POST, DELETE, PATCH, OPTIONS',
                Authorization: "x-api-key " + "5b7cf4ff5e29018f43a7a6ba9f0ee802a5e358ca",
                "Accept" : "application/json",
                "Content-Type":"application/json"
            }
        }).then((response) => {
            if (response.data && response.data.id) {
                // add new user to state
                this.editedUser.id = response.data.id
                if (!id) {
                    // add the new item to items state
                    this.dataSource.push(this.editedUser)
                }
                this.editedUser = {}
            }
            this.dialog = !this.dialog
        })
    }
    deleteUser(dataSource) {
        let id = dataSource.id
        let idx = dataSource.users.findIndex(user => user.id===id)
        if (confirm('Are you sure you want to delete this?')) {
            axios.delete('${API_URL}/api/systemusers/${id}',
                { headers: {
                    "Access-Control-Allow-Methods": 'DELETE',
                    "Content-Type":"application/json",
                }
            }).then((response) => {
                response.users.splice(idx, 1)
            })
        }
    }
    
}