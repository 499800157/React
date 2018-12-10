export function getRediectUrl ({type,avatar}){
    let url = (type === "release") ? "/release" : "/accept"

    if(!avatar){
        url += "info"
    }
    return url
}

