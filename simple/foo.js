// class Foo {
//     constructor(url) {
//         this.url = url;
//     }
//     getURL(){
//         var rand_url = this.url;
//         return fetch(rand_url, {
//             method: 'GET'
//         });
//     };

// }

function Foo() {

    var url;

    const setUrl = (i) => {
        url = i;
    }

    const getUrl = (i) => {
        return url;
    }

    return {getUrl, setUrl};


}