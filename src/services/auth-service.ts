import axios from '@/lib/axios'

interface login { email: string; password: string  }

interface register extends login { name : string  }

export interface token {
    token: string;
    type:  string;
}

const saveToken = (data : token) => {
    
    localStorage.setItem('token', data.token)
}


export const user = async () => await axios.get('/user');



export const login = async (data : login ) => {

 try{
     const response = await axios.post('/login', data);

     saveToken(response.data)

     return await user()

 } catch (error) {
    
    console.log(error)
 }

}


export const register = async (data : register) => {

    try {

     const response =  await axios.post('/register', data);
      
     saveToken(response.data)

     return await user()

    } catch (error) {
    
     console.log(error)
   }
}


export const profile = async (data) => {

    try {

     const response =  await axios.put('/profile', data);

     return response

    } catch (error) {
    
     console.log(error)
   }
}


export const deleteToken = async () => {

    try {

     const response =  await axios.put('/profile', data);

     return response

    } catch (error) {
    
     console.log(error)
   }
}

