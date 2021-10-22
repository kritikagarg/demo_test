class Foo {
    constructor(url) {
        this.url = url;
    }
    async getURL(){
        var rand_url = this.url;
        return await fetch(rand_url, {
            method: 'GET'
        });
    };

}