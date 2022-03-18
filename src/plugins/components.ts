
const modules = import.meta.globEager('../components/*.vue')

export default {
    install(app) {
        Object.keys(modules).forEach(componentPath => {

            let splitPart1 = componentPath.split("/")
            let componentName = splitPart1[splitPart1.length - 1].split(".vue")[0]

            // 获取所有组件的实例对象，它是个数组
            let modulesData = Object.values(modules).map((v) => v.default)
            
            // 过滤出当前组件的实例对象与注册组件匹配一致
            let curComponent = modulesData.filter(
                item=>item.__file.split("/")[item.__file.split("/").length-1].split(".vue")[0] === componentName
            )[0]
    
            app.component(componentName, curComponent);
  
        })
    }
   
}


