import React from 'react';

const AsyncExample = () => {

    async function saveSessionStorage(key,value) {
        sessionStorage.setItem(key,value);
        return Promise.resolve(sessionStorage.getItem(key))
    }

    function showStorage() {
        saveSessionStorage('name','Martín')
        .then((response) => {
            let value = response;
            alert(`Saved Name: ${value}`);
        }).catch(error => {
            alert(`Something went wrong ${error}`)
        }).finally(() => {console.log(`SUCCESS: Name saved and retreived sucessfully`)})

    }


    async function generateNumber() {
        return 1;
    }

    async function generatePromiseNumber() {
        return Promise.resolve(2)

    }

    function obtainNumber() {
        generatePromiseNumber()
            .then(response => alert(`response ${response}`))
            .catch(error => alert(`Something has gone wrong ${error}`))
    }

    function obtainNumberPromise() {

        generatePromiseNumber()
            .then(response => alert(`response ${response}`))
            .catch(error => alert(`something has gone wrong ${error}`))
    }

    async function obtainMessage() {
        let promise = new Promise((resolve,reject) => {
            setTimeout(() => resolve('Hello World'), 2000);
        });

        let message = await promise;

        await alert(`Message received: ${message}`)
    }

    const returnError = async() => {
        await Promise.reject(new Error('Ooops something went wrong'));
    }

    const consumeError = () => {
        returnError()
            .then((response) => {alert('Everything went smoothly')})
            .catch(error => {alert('Ooops something went wrong')})
            .finally(() => {alert('Finally executed')})
    }

    const urlNotFound = async () => {
        try {
            let response = await fetch('https://invalidURL.com');
            alert(`Response: ${JSON.stringif(response)}`)

        } catch (error) {
            alert(`Error: Something went wrong with your url ${error} check your console `)

        }
    }

    const multiplePromise = async () => {
        let result = await Promise.all(
            [
                fetch('http://reqres.in/api/users'),
                fetch('https://reqres.in/api/users?page=2')
            ]
        ).catch((error) => alert(`Something went wrong with your URLs: ${error} (check your console)`))
    }


    return (
        <div>
            <h1>Async promise examples</h1>
            <button onClick={obtainNumber}>Obtain Number</button>
            <button onClick={obtainNumberPromise}>Obtain Number with Promise</button>
            <button onClick={showStorage}>Save Name and Show </button>
            <button onClick={obtainMessage}> Receive message with 2 seconds delay</button>
            <button onClick={consumeError}>Obtain error</button>
            <button onClick={urlNotFound}>request to unknown URL</button>
            <button onClick={multiplePromise}>Multiple promises</button> 
        </div>
    )


}

export default AsyncExample;