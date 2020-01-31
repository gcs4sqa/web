import axios, { AxiosPromise } from 'axios';

interface IHasType{
    id: number;
}

export class Sync<T extends IHasType>{

    constructor (public rootUtl: string){};

    fetch(id:number):AxiosPromise{
        return axios.get(`${this.rootUtl}/${id}`);
        
    }

    save(data:T):AxiosPromise{

        const {id} = data;
        if (id){
            // put
            return axios.put(`${this.rootUtl}/${id}`, data);
        } else {
            // post
            return axios.post(`${this.rootUtl}/`, data);
        }

    }
}