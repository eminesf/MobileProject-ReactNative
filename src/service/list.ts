export function getList(){
    return fetch('http://10.50.10.27:9000/api/items')
    .then(data => data.json());
}