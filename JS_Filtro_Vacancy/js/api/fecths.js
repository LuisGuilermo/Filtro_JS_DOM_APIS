export async function post(url,info) {
    const response = await fetch(url,{
        method:"POST",
        headers:{
            "Content-Type":"application/json"
        },
        body: JSON.stringify(info)
    })
    const date = await response.json()
    return date;
}

export async function get(url) {
    const response = await fetch(url);
    const date = await response.json()
    return date;
}

export async function deleteDB(url){
    const response = await fetch(url,{
        method:"DELETE"
    })
    const date = await response.json()
    return date ;
}

export async function update(url,info) {
    const response = await fetch(url,{
        method:"PUT",
        headers:{
            "Content-Type":"application/json"
        },
        body: JSON.stringify(info)
    })
    const date = await response.json()
    return date;
}