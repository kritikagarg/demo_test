(async function() {
                
    const foo = new Foo("https://kritikagarg.github.io/demo_test/simple/img1.jpg");
    const img_url = await foo.getURL();
    console.log(img_url);
    document.getElementById("display").innerHTML = '<img width="200" height="250" src="' +img_url.url+'"/>';

})();