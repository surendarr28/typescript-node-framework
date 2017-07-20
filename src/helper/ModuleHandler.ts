export let ModuleHandler = (addModule, path = __dirname, ) => {
    let model = [path + '/../models'];
    let modulePath = path + '/../modules';
    let modules = addModule;
    modules.forEach((element, index) => {
        model.push(modulePath + "/" + element + "/" + "models");
    })
    return model;
}