
import ProductNew from "../../layouts/ProductNew";
import Cart from "../../pages/Cart";
import Checkout from "../../pages/Checkout";
import Contact from "../../pages/Contact";
import Home from "../../pages/Home";
import Login from "../../pages/Login";
import PostDetail from "../../pages/PostDetail";
import PostPage from "../../pages/PostPage";
import PostTopic from "../../pages/PostTopic";
import Product from "../../pages/Product";
import ProductCategory from "../../pages/ProductCategory";
import ProductDetail from "../../pages/ProductDetail";
import Profile from "../../pages/Profile";
import ProfileChangepassword from "../../pages/ProfileChangepassword";
import Register from "../../pages/Register";

const RouteSite = [
  { path: "/", component: Home },
  { path: "/cart", component: Cart },
  { path: "/checkout", component: Checkout },
  { path: "/contact", component: Contact },
  { path: "/login", component: Login },
  { path: "/postdetail", component: PostDetail },
  { path: "/postpage", component: PostPage },
  { path: "/posttopic", component: PostTopic },
  { path: "/product", component: Product },
  { path: "/product_category", component: ProductCategory },
  { path: "/productdetail", component: ProductDetail },
  { path: "/profile", component: Profile },
  { path: "/changepassword", component: ProfileChangepassword },
  { path: "/register", component: Register },
];
export default RouteSite;