// api.js
import axios from "axios";
import {useState} from "react";

/**
 * The function useMyDataApi is a custom state that
 * gets the type of API request and returns [data, isLoading, isError, fetchData].
 * @param method
 * @returns {[string,boolean,boolean,((function(*, {}=): Promise<void>)|*)]}
 */
export const useMyDataApi = (method) => {

    const mtd = method.toLowerCase();
    const [data, setData] = useState(''); // data to be fetched
    const [isLoading, setIsLoading] = useState(false); // is it fetching?
    const [isError, setIsError] = useState(false); // is there an error?

    /**
     * Manages the API request
     * @param url
     * @param params
     * @returns {Promise<void>}
     */
    const fetchData = async (url,params = {}) => {
        setIsError(false); // reset error state
        setIsLoading(true); // set loading state to true to show loading indicator, for example

        try {
            let result;
            if (mtd === 'get')
                result = await axios.get(url);
            else if (mtd === 'post')
                result = await axios.post(url, params);
            else if (mtd === 'delete')
                result = await axios.delete(url);
            else throw new Error();
            setData(result.data); // set data state
        } catch (error) {
            setIsError(true); // an error occurred, set error state to true
            setData("")
        } finally {
            setIsLoading(false); // set loading state to false to hide loading indicator
        }
    };
    return [data, isLoading, isError, fetchData];
};


