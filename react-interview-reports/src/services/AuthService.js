import axios from 'axios';
import {StorageService} from './storageService'

class AuthenticationImp {
    isLogon() {
        const permission = JSON.parse(sessionStorage.getItem("accessToken"));
        if (permission) {
            return true;
        } return false;
    }
}

class ReportFromServerImp{
    remove(id){
        const key=StorageService.get("accessToken")
        return axios({
            method: "DELETE",
            url: `http://localhost:3333/api/reports/${id}`,
            headers:{
                Authorization: `Bearer ${key}`
            }
        })
    }
    
}

export const Authentication = new AuthenticationImp();
export const ReportFromServer= new ReportFromServerImp();