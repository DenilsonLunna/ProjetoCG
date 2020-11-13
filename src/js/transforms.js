const divTrans = document.getElementById("transforms_pieces");

const v = createTransformDiv("V",divTrans);
const iqual = createTransformDiv("=",divTrans);

v.style.border = "none";
iqual.style.border = 'none';
export function keyPressed(e){
    switch(e.key) {
    case 's':
            createTransformDiv("S", divTrans);
           
        break;
    case 'r':
            createTransformDiv("R",divTrans);
            
        break;
    case 't':
            createTransformDiv("T",divTrans);
           
        break;
     
    }
    e.preventDefault();
    
  }

document.addEventListener("keydown",keyPressed);
function createTransformDiv(type, parent){
    let tDiv = document.createElement("div");
    let txtTest = document.createTextNode(type);
    tDiv.appendChild(txtTest);
    parent.appendChild(tDiv);
    return tDiv;

}