var names = ["Paul", "Caroline", "Andrew"];

var data = new Blob(names, {type: 'text/plain'});

var url = window.URL.createObjectURL(data);
document.getElementById('download_link').href = url;