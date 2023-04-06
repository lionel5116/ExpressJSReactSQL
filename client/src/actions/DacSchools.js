//rafc
import { setAlert } from "./alert";
import Config from '../api/config';
import axios from 'axios';

export const createSchoolRecord = (formData) => async (dispatch) => {
    var serviceUrl = Config.LOCAL_HOST_API + 'api/dac/addECCSchool';
    try {
        const config = {
            headers: {
                "Content-Type": "application/json",
            },
        };

        const res = await axios.post(serviceUrl, formData, config);
        if (res.data !== false) {
            dispatch(
                setAlert(
                    "Record Added/Updated",
                    "success"
                )
            );
        }
        else {
            dispatch(
                setAlert(
                    "Could not add/update record",
                    "danger"
                )
            );
        }

    } catch (err) {
        console.log(err);
        dispatch(
            setAlert(
                "Could not add/update record",
                "danger"
            )
        );
    }
};

export const fetchECCSchoolData = () =>
    async (dispatch) => { 
        var serviceUrl = Config.LOCAL_HOST_API + 'api/dac/getECCSchools'
            const config = {
                headers: {
                    'Content-Type': 'application/json'
                }
            };

            try {
                const res = await axios.get(serviceUrl, config);
                if (res.status === 200) {
            
                    return res.data
                 }
                 else {
                    
                     dispatch(
                         setAlert(
                             "Could not find records",
                             "danger"
                         )
                     );
                     return []
                 }
                
            } catch (error) {
                console.log(error.message)
                dispatch(
                    setAlert(
                        "Could not get school data",
                        "danger"
                    )
                );;
            }      
};
