const Api = {
    
    url: 'http://localhost:3001',

    create: function(src, body){
        return fetch(`${this.url}/${src}`, {
            method: "POST",
            body,
            headers: {
                "content-type": "application/json"
            }
        })
    },

    readAll: function(src){
        return fetch(`${this.url}/${src}`, {
            method: "GET"
        })
    },

    readOne: function(src, id){ 
        return fetch(`${this.url}/${src}/${id}`, {
            method: "GET"
        })
    },

    update: function(src, id, body){
        return fetch(`${this.url}/${src}/${id}`, {
            method: "PATCH",
            body,
            headers: {
                "content-type": "application/json"
            }
        })
    },

    delete: function(src, id){
        return fetch(`${this.url}/${src}/${id}`, {
            method: "DELETE"
        })
    }

}

console.log(Api.test())