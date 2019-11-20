const BASE_URL = 'http://localhost:3000';
export const PhoneService = new class {

    getAll({ text, orderBy } = {}) {

        return this._sendRequest(`/phones/phones.json`)
            .then((phones) => {
                const searchedPhones = this._filter(phones, text);
                return this._sort(searchedPhones, orderBy);
            })
        // return new Promise((res, rej) => {
        //     const xhr = new XMLHttpRequest();
        //     xhr.open('GET', `http://localhost:3000/phones/phones.json`);
        //     xhr.send();
        //     xhr.addEventListener('load', () => {
        //         if (xhr.status !== 200) {
        //             rej(xhr.statusText);
        //         }
        //         const searchedPhones = this._filter(JSON.parse(xhr.responseText), text);
        //         const sortedPhones = this._sort(searchedPhones, orderBy);
        //         res(sortedPhones);
        //     })
        // })

        // return new Promise((res, rej) => {
        //     setTimeout(() => {
        //         const searchedPhones = this._filter(mockPhones, text);
        //         const sortedPhones = this._sort(searchedPhones, orderBy);
        //         res(sortedPhones);
        //     }, 1000)

        // })
    }

    getOneById(phoneId) {
        // return new Promise((res, rej) => {
        //     const xhr = new XMLHttpRequest();
        //     xhr.open('GET', `http://localhost:3000/phones/${phoneId}.json`);
        //     xhr.send();
        //     xhr.addEventListener('load', () => {
        //         if (xhr.status !== 200) {
        //             rej(xhr.statusText);
        //         }
        //         res(JSON.parse(xhr.responseText));

        //     })
        // })
        return this._sendRequest(`/phones/${phoneId}.json`);
    }

    _sendRequest(url, { method = 'GET' } = {}) {
        // return new Promise((res, rej) => {
        //     const xhr = new XMLHttpRequest();
        //     xhr.open(method, `${BASE_URL}${url}`);
        //     xhr.setRequestHeader('JWT', 'thisismyrequestheader');
        //     xhr.send();
        //     xhr.addEventListener('load', () => {
        //         if (xhr.status !== 200) {
        //             rej(xhr.statusText);
        //         }
        //         res(JSON.parse(xhr.responseText));
        //     })
        // })

        return fetch(`${BASE_URL}${url}`, {
            method,
            headers: [['JWT', 'thisismyrequestheader']]
        }).then((res) => res.json());
    }

    _filter(phones, text) {
        if (!text) {
            return [...phones];
        }

        return [...phones].filter((phone) => phone.name.toLowerCase().includes(text.toLowerCase()))
    }

    _sort(phones, orderBy) {
        const p = [...phones];
        if (!orderBy) {
            return [...phones];
        }
        p.sort((p1, p2) => {
            if (p1[orderBy] > p2[orderBy]) {
                return 1;
            }

            if (p1[orderBy] < p2[orderBy]) {
                return -1;
            }
            return 0;

        });

        return p;
    }
}
