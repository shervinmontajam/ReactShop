const fakePageList = [
    {id : 1, parentId : null, name : "Home", title : "Welcome To Shop", vieworder : 1, active : true, action : "/", moduleName : "Home", type:"component"},
    {id : 2, parentId : null, name : "Company", title : "Company", vieworder : 2, active : true, action : "", moduleName : "", type:"no-action"},
    {id : 3, parentId : null, name : "News", title : "News", vieworder : 3, active : true, action : "/newslist", moduleName : "NewsList", type:"news-list"},
    {id : 4, parentId : null, name : "Products", title : "Products", vieworder : 4, active : true, action : "/productslist", moduleName : "ProductsList", type:"product-list"},
    {id : 5, parentId : null, name : "Contact", title : "Contact", vieworder : 5, active : true, action : "/contact", moduleName : "Contact", type:"component"},
    {id : 6, parentId : null, name : "Dynamic Page", title : "Dynamic Page", vieworder : 6, active : true, action : "/dynamicpage", moduleName : "DynamicPage", type:"dynamic"},
    

    {id : 7, parentId : 2, name : "About Company", title : "About Company", vieworder : 1, active : true, action : "/about", moduleName : "About", type:"component"},
    {id : 8, parentId : 2, name : "Company History", title : "Company History", vieworder : 2, active : true, action : "/dynamicpage", moduleName : "DynamicPage", type:"dynamic"},
    {id : 9, parentId : 2, name : "Our Certificates", title : "Our Certificates", vieworder : 3, active : true, action : "/dynamicpage", moduleName : "DynamicPage", type:"dynamic"},
]

export const pageListReducer = (state = fakePageList, action) => {
    if(action.type === 'PAGE_LIST'){
      return [...state, action.payload]
    } 
    return state;
};