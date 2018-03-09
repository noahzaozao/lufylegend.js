class BaseManager {
    constructor() {
    }
    showDialog(prefabName, request) {
        let path = `resources/prefabs/${prefabName}.json`;
        return this.loadPrefab(path)
        .then(data => {
            let node = LNode.create(data);
            addChild(node);
        });
    }
    loadPrefab(path) {
        return new Promise(function(resolve, reject) {
            let loader = new ll.LURLLoader();
            loader.addEventListener(ll.LEvent.COMPLETE, (event)=>{
                let data = JSON.parse(event.target);
                resolve(data);
            }); 
            loader.load(path, ll.LURLLoader.TYPE_TEXT);
        });

      /*if (folder === 'dialogs'){
        let dialog = this.findDialog(prefabName);
        if (dialog){
          console.log("----dialog---");
          return Promise.resolve(dialog.node);
        }
      }*/
    }
    out(){
        console.log('BaseManager');
    }
}
export default new BaseManager();