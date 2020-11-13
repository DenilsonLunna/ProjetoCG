export function keyPressed(e){
    switch(e.key) {
      case 'ArrowUp':
        mesh.position.z += 1;
          console.log("ArrowUp");
          break;
      case 'ArrowDown':
        console.log("ArrowDown");
          break;
      case 'ArrowLeft':
        console.log("ArrowLeft");
          break;
      case 'ArrowRight':
        console.log("ArrowRight");
          break;
    }
    e.preventDefault();
    
  }

