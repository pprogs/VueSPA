import Vue from 'vue'
import axios from 'axios'

export default {

    Ax : axios.create({
        baseURL: 'http://localhost:8081/api/',
        timeout: 1000,
        headers: {'Access-Control-Allow-Origin': '*'}
    }),

    //
    //
    //
    getUserInfo(id) {

        console.log("getUserInfo");

        return this.Ax.get(`user/${id}`); 
    },

    //
    //
    //
    authUser(user) {

        console.log("authUser");
        console.log(user);

        return new Promise( (resolve,reject) => {

            this.Ax.post('auth', user )              
            .then( responce => {
                console.log('authUser responce');
                console.log(responce);

                resolve(responce);
            })
            .catch( error => {
                console.log('authUser error');

                const msg = error.response.data;

                console.log(msg);
                
                    
                reject(msg);
            });
        });
    },

    //
    //
    //    
    registerUser(user) {

        console.log("registerUser")

        return new Promise( (resolve,reject) => {

            this.Ax.post( 'register', {
                params : user
            })                
            .then( responce => {
                console.log('authUser responce');
                console.log(responce);

                resolve(responce);
            })
            .catch( error => {
                console.log('authUser error');
                console.log(error);
                    
                reject(error.body);
            });
        });
    }
}