class fetchData {
    constructor() {
        this.data = {}
        this.student = this.student.bind(this)
        this.withfilter = this.withfilter.bind(this)
    }
    async student(srn) {
        const response = await fetch('http://127.0.0.1:5008/receptionist/' + srn);
        const myJson = await response.json(); //extract JSON from the http response
        // do something with myJson
        // console.log(myJson)
        return myJson
    }

    async withfilter(usn, name, attcheck) {
        const response = await fetch('http://127.0.0.1:5008/receptionist', {
            method: 'POST',
            body: JSON.stringify({ usn, name, attcheck }), // string or object
            headers: {
                'Content-Type': 'application/json'
            }
        });
        const myJson = await response.json(); //extract JSON from the http response
        // do something with myJson
        this.data = myJson
        // console.log(this.data)
        return this.data
    }

    async login(username, password, isadmin) {
        const response = await fetch('http://127.0.0.1:5000/login', {
            method: 'POST',
            body: JSON.stringify({ username, password, isadmin }), // string or object
            headers: {
                'Content-Type': 'application/json'
            }
        });
        const myJson = await response.json()
        // console.log(myJson)
        return myJson
    }


    async singup(formdata){
        console.log(formdata)
        const response = await fetch("http://127.0.0.1:5000/signup", {
            method: 'POST',
            body: JSON.stringify(formdata),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        const myjson = await response.json()
        return myjson
    }

    async subjects(){
        const response = await fetch("http://127.0.0.1:5000/subjects")
        const myJson = await response.json()
        return myJson
    }

    async userDetails(srn){
        const response = await fetch("http://127.0.0.1:5000/user/" + srn)
        const myjson = await response.json()
        return myjson
    }

}

export default fetchData;