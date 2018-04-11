import Vue from 'vue'
import axios from 'axios'

export const Errors = {
    NO_CONN : 503,
    INT : 500
}


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

            .then( (response) => {

                console.log('authUser responce');
                console.log(response);

                if (response.status === 200 && response.data) {
                        try {                            
                            resolve(response.data);
                        } catch(e) {
                            console.log('error parsing json response');
                            console.log(response.data);
                            console.log(e);
                            
                            reject(Errors.INT);
                        }
                }
                reject(Errors.INT);
            })
            .catch( (error) => {

                console.log('authUser error');
                console.log( { error });

                if (error.response) {
                    // check error codes
                    reject(error.response.status);
                } 

                // no connection
                reject(Errors.NO_CONN);                
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