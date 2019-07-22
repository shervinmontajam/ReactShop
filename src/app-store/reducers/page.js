const fakePageList = [
    {id : 1, parentId : null, name : "Home", title : "Welcome To Shop", vieworder : 1, active : true, action : "/", path : "../home/Home"},
    {id : 2, parentId : null, name : "About", title : "About", vieworder : 2, active : true, action : "/about", path : "../about/About"},
    {id : 3, parentId : null, name : "News", title : "News", vieworder : 3, active : true, action : "/news", path : "../news/News"},
    {id : 4, parentId : null, name : "Products", title : "Products", vieworder : 4, active : true, action : "/products", path : "../products/Products"},
    {id : 5, parentId : null, name : "Contact", title : "Contact", vieworder : 5, active : true, action : "/contact", path : "../contact/Contact"}
]

export const pageListReducer = (state = fakePageList, action) => {
    if(action.type === 'PAGE_LIST'){
      return [...state, action.payload]
    } 
    return state;
};