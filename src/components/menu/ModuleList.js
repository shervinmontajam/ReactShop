import About from "../about/About";
import Contact from "../contact/Contact";
import Home from "../home/Home";
import NewsList from "../news/NewsList";
import ProductsList from "../products/ProductsList";
import DynamicPage from "../dynamic-page/DynamicPage";

export const moduleList = [
  { moduleName: "Home", module: Home },
  { moduleName: "About", module: About },
  { moduleName: "Contact", module: Contact },
  { moduleName: "NewsList", module: NewsList },
  { moduleName: "ProductsList", module: ProductsList },
  { moduleName: "DynamicPage", module: DynamicPage }
];

export default {
    moduleList,
}