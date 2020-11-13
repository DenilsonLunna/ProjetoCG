export function gridHelper(size, divisions){
    // Criando grid de ajuda
    var grid = new THREE.GridHelper( size, divisions );
    return grid;
}

export function axisHelper(size){
    var axesHelper = new THREE.AxesHelper( size ); 
    return axesHelper;
}

