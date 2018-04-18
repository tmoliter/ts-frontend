import axios from 'axios';
import base from '../config/base';

const collectionPathBase = "collections/";

const methods = {
    get: "get/",
    save: "save/",
    remove: "remove/",
    listCollections: "listCollections/",
    schema: "collection/",
    updateCollection: "updateCollection/"
};

export class CollectionApi {
    constructor(baseUrl, collectionName) {
        this.baseUrl = baseUrl;
        this.collectionName = collectionName;
        this.getAll = this.getAll.bind(this);
        this.getById = this.getById.bind(this);
        this.getWithParameters = this.getWithParameters.bind(this);
        this.removeById = this.removeById.bind(this);
    }

    getUrl(method) {
        return `${this.baseUrl}${collectionPathBase}${method}${this.collectionName}`
    }

    getAll() {
        return axios.post(getUrl(methods.get))
            .then(res => res.json());
    }

    getById(id) {
        const parameters = {
            limit: 1,
            filter: {
                id: id
            }
        };
        return this.getWithParameters(parameters);
    }

    getWithParameters(parameters) {
        return axios.post(getUrl(methods.get), parameters)
            .then(res => res.json());
    }

    removeById(id) {
        return axios.post(getUrl(methods.remove), {
            filter: {
                id: id
            }
        }).then(res => res.json());
    }

    create(item) {
        return axios.post(getUrl(methods.save), {
            data: item
        }).then(res => res.json());
    }
}

const CollectionApiMap = {};

export const getApiForCollection = (baseUrl, collection) => {
    if(CollectionApiMap[collection]) {
        return CollectionApiMap[collection];
    }
    const api = new CollectionApi(baseUrl, collection);
    CollectionApiMap[collection] = api;
    return api;
}


