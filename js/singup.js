document.getElementById('dataNascimento').addEventListener('input', function (e) {
    var value = e.target.value;
    if (value.length === 2 || value.length === 5) {
        value += '/';
    }
    e.target.value = value;
});