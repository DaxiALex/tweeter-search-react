import 'whatwg-fetch';
import {getTweet, addServiceError, loadTheResult, parameterError} from '../redux/actions/Tweet'


let fetchTweets = (parameter) => {

    return new Promise((resolve, reject) => {
        let apiHost = process.env.REACT_APP_API_HOST
        apiHost = 'http://localhost:8080'
        const path = '/api/search?parameter='

        const url = apiHost + path + parameter + '&resultType=Recent'
        console.log(url)
        fetch(url)
            .then(res => {
                resolve(res.json());
            })
    });

};

export const searchTwitts = (parameter) => {
    return dispatch => {

        if (!parameter) {
            return (dispatch(parameterError()))

        } else {

            fetchTweets(parameter).then(data => {
                dispatch(getTweet(data))

            }, () => {
                dispatch(addServiceError())
            });
        }

        dispatch(loadTheResult())

    }


};