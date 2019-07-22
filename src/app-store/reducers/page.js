const fakePageList = [
    {id : 1, parentId : null, name : "Home", title : "Welcome To Shop", vieworder : 1, active : true, action : "/", moduleName : "Home"},
    {id : 2, parentId : null, name : "About", title : "About", vieworder : 2, active : true, action : "/about", moduleName : "About"},
    {id : 3, parentId : null, name : "News", title : "News", vieworder : 3, active : true, action : "/newslist", moduleName : "NewsList"},
    {id : 4, parentId : null, name : "Products", title : "Products", vieworder : 4, active : true, action : "/productslist", moduleName : "ProductsList"},
    {id : 5, parentId : null, name : "Contact", title : "Contact", vieworder : 5, active : true, action : "/contact", moduleName : "Contact"},
    {id : 6, parentId : null, name : "Dynamic Page", title : "Dynamic Page", vieworder : 6, active : true, action : "/dynamicpage", moduleName : "DynamicPage"},
    {id : 7, parentId : null, name : "React History", title : "React History", vieworder : 7, active : true, action : "/dynamicpage", moduleName : "DynamicPage"},
]

export const pageListReducer = (state = fakePageList, action) => {
    if(action.type === 'PAGE_LIST'){
      return [...state, action.payload]
    } 
    return state;
};