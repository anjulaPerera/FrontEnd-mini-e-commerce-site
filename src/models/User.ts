

export interface User {
  
  _id?: string;
  email: string;
  password: string;
  name: string;

}

export interface UserData {
  name?: string;
  email?: string;
  password?: string;
  photo?: string;
  socketId?: string;
 
}
