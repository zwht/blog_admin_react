import {
    FetchClient,
    Interceptor
} from 'intercept-fetch'

const fetchClient = new FetchClient();
const interceptor = new Interceptor({
    cors: {
        id: 0,
        request(url, config) {
            debugger;
            url += '&a=1';
            config.mode = 'cors';
            config.headers = {aa: 2344};
            return Promise.resolve([url, config])
        },
        success(data) {
            return new Promise((resolve) => {
                setTimeout(() => {
                    console.log('res a', data);
                    data.a = 'intercepta';
                    resolve(data)
                }, 1000)
            })
        }
    },
    credentials: {
        id: 1,
        request(url, config) {
            url += '&b=2';
            config.credentials = 'include';
            return Promise.resolve([url, config])
        },
        response(response) {
            return Promise.resolve(error)
        },
        success(data) {
            return new Promise((resolve) => {
                setTimeout(() => {
                    console.log('res b', data);
                    data.b = 'interceptb';
                    resolve(data)
                }, 1000)
            })
        },
        error(error) {
            return Promise.resolve(error)
        }
    }
});

fetchClient.setInterceptors(interceptor);

fetchClient.get('http://google.com');