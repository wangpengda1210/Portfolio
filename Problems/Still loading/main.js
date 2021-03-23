function loader(value) {
    const promise = new Promise(function(resolve, reject){
        if (value === "true"){
            resolve("The info has loaded.");
        } else {
            reject("Please, try again later.");
        }
    });

    return promise.then(
        function successStatus(response) {
            console.log(response);
        },
        function failStatus(error) {
            console.log(error);
            return error;
        }
    ).finally(function final() {
        console.log("Hello, Mr. Smith!");
    });
}