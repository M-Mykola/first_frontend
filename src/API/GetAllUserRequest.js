import axios from "axios";

const GetAllUserRequest = async () =>{
    return axios({
        url: 'https://app-social-network-1.herokuapp.com/user/all',
        headers: {
            'x-access-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiNjE0YTBlM2UwMmMxYjVlM2IwM2QxYTgyIiwiZW1haWwiOiJtYXNkZGZnYXRpa29mZiIsImlhdCI6MTYzMjY1MzIwNSwiZXhwIjoxNjMyNzM5NjA1fQ.kmPfKTN6ogVcP700I5r_bj7D-wp-SmicMuDp9hqu-qQ'
        },
        method: 'GET'
    })
}
export default GetAllUserRequest;