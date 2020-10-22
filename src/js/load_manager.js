export function loadFile(){
    document.querySelector("#inputSelector").onchange = e =>  {
        let file = e.target.files[ 0 ];
        let reader = new FileReader();
        reader.readAsArrayBuffer( file );
        reader.onload = gltfText => {
            let loader = new GLTFLoader();
            loader.parse( gltfText.target.result, '', () => {
                scene.add(gltf.scene)
            }, 
            errMassage => { console.error(errMassage) } )
        }
    }
}