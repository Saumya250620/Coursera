let width;
let length;
let area;

function calculateArea(){
    length = parseFloat(document.getElementById('length').value);
    width = parseFloat(document.getElementById('width').value);

    area = length * width;
    document.getElementById('result').innerHTML = `The area of the rectangle is: ${area}`;
}