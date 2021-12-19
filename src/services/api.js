const Api = {
    
    url: 'https://voidplus-api.herokuapp.com',

    create: function(src, content){
        return fetch(`${this.url}/${src}`, {
            method: "POST",
            body: JSON.stringify(content),
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

    update: function(src, id, content){
        return fetch(`${this.url}/${src}/${id}`, {
            method: "PATCH",
            body: JSON.stringify(content),
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

export { Api }