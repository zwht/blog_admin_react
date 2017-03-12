import session from '../servers/session.jsx'
import fetchIntercept from 'fetch-intercept';

const unregister = fetchIntercept.register({
    request: function (url, config) {
        // Modify the url or config here
        if (!config.headers) config.headers = {};
        config.headers.access_token = session.get("access_token");
        config.headers['Content-Type'] = 'application/json';
        return [url, config];
    },

    requestError: function (error) {
        // Called when an error occured during another 'request' interceptor call
        return Promise.reject(error);
    },

    response: function (response) {
        // Modify the reponse object
        return response;
    },

    responseError: function (error) {
        // Handle an fetch error
        return Promise.reject(error);
    }
});
export default  unregister;