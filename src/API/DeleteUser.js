import axios from "axios";

const DeleteUser = async (id) =>{
    return axios({
        url: 'https://app-social-network-1.herokuapp.com/user/' + id,
        headers: {
            'x-access-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiNjE1NWYwOWNjODdkMGYwMDE2NGQ3ZmFkIiwiZW1haWwiOiJkZXZlbG9wQG5vZGVqcy5jb20iLCJpYXQiOjE2MzMwMjIxMTQsImV4cCI6MTYzMzEwODUxNH0.51F6rANCsdOnsmJ0Cb21wgDf7LaDQM8ISqWC0Vajvno'
        },
        method: 'DELETE'
    })
}

export default DeleteUser;