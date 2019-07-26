
import {axios_instance} from './../utils/networkUtil'

export const makeApiCall = (url,type,input,) => {
    console.log("Make API Call :::::::::::::::",url,type,input)
    const bodyFormData = new FormData();
    if(input){
        bodyFormData.set('data', JSON.stringify(input));
    }
    // for the struts actions
    return axios_instance({
        method: type,
        url: url,
        data: bodyFormData,
        config: { headers: { 'Content-Type': 'multipart/form-data' } }
    });
};

