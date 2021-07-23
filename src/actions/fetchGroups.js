export function fetchGroups() {
    fetch('http://localhost:3000/api/v1/groups')
    .then(response => response.json())
    .then(data => console.log(data))

}