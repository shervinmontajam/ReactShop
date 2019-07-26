

const fakePageList = [
    {id : 1, parentId : null, name : "Home", title : "Welcome To Shop", vieworder : 1, active : true, action : "/", moduleName : "Home", type:"component"},
    {id : 2, parentId : null, name : "Company", title : "Company", vieworder : 2, active : true, action : "", moduleName : "", type:"no-action"},
    {id : 3, parentId : null, name : "News", title : "News", vieworder : 3, active : true, action : "/newslist", moduleName : "NewsList", type:"news-list"},
    {id : 4, parentId : null, name : "Products", title : "Products", vieworder : 4, active : true, action : "/productslist", moduleName : "ProductsList", type:"product-list"},
    {id : 5, parentId : null, name : "Contact", title : "Contact", vieworder : 5, active : true, action : "", moduleName : "", type:"no-action"},
    {id : 6, parentId : null, name : "Dynamic Page", title : "Dynamic Page", vieworder : 6, active : true, action : "/dynamicpage", moduleName : "DynamicPage", type:"dynamic"},
    

    {id : 7, parentId : 2, name : "About Company", title : "About Company", vieworder : 1, active : true, action : "/about", moduleName : "About", type:"component"},
    {id : 8, parentId : 2, name : "Company History", title : "Company History", vieworder : 2, active : true, action : "/dynamicpage", moduleName : "DynamicPage", type:"dynamic"},
    {id : 9, parentId : 2, name : "Our Certificates", title : "Our Certificates", vieworder : 3, active : true, action : "/dynamicpage", moduleName : "DynamicPage", type:"dynamic"},
    
    {id : 10, parentId : 9, name : "Our Certificates Sub 1", title : "Our Certificates Sub 1", vieworder : 1, active : true, action : "/dynamicpage", moduleName : "DynamicPage", type:"dynamic"},
    {id : 11, parentId : 9, name : "Our Certificates Sub 2", title : "Our Certificates Sub 2", vieworder : 2, active : true, action : "/dynamicpage", moduleName : "DynamicPage", type:"dynamic"},

    {id : 12, parentId : 5, name : "Find On Map", title : "Find On Map", vieworder : 1, active : true, action : "/contact", moduleName : "Contact", type:"component"},
    {id : 13, parentId : 5, name : "Contact Us", title : "Contact Us", vieworder : 2, active : true, action : "/contact", moduleName : "Contact", type:"component"},
    {id : 14, parentId : 5, name : "Sale Manager", title : "Sale Manager", vieworder : 3, active : true, action : "/contact", moduleName : "Contact", type:"component"},
]

export const pageListReducer = (state = fakePageList, action) => {
    if(action.type === 'PAGE_LIST'){
      return [...state, action.payload]
    } 
    return state;
};