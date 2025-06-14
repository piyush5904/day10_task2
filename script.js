function sortString() {
    const str = document.getElementById("stringInput").value;
    const sorted = str.split('').sort().join('');
    document.getElementById("stringResult").innerHTML = "Sorted String: " + sorted;
}
