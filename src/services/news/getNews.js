import { API_URL } from "./constants";

export default function getNews(){
    return fetch(API_URL).then(response=>response.json())
}