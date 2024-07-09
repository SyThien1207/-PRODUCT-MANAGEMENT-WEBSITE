import BannerCreate from "../pages/backend/banner/BannerCreate";
import BannerEdit from "../pages/backend/banner/BannerEdit";
import BannerIndex from "../pages/backend/banner/BannerIndex";
import BannerShow from "../pages/backend/banner/BannerShow";
import BrandEdit from "../pages/backend/brand/BrandEdit";
import BrandIndex from "../pages/backend/brand/BrandIndex";
import BrandShow from "../pages/backend/brand/BrandShow";
import CategoryEdit from "../pages/backend/category/CategoryEdit";
import CategoryIndex from "../pages/backend/category/CategoryIndex";
import ConfigEdit from "../pages/backend/config/ConfigEdit";
import ConfigIndex from "../pages/backend/config/ConfigIndex";
import ContactIndex from "../pages/backend/contact/ContactIndex";
import ContactReply from "../pages/backend/contact/ContactReply";
import MenuEdit from "../pages/backend/menu/MenuEdit";
import MenuIndex from "../pages/backend/menu/MenuIndex";
import OrderIndex from "../pages/backend/order/OrderIndex";
import PostCreate from "../pages/backend/post/PostCreate";
import PostEdit from "../pages/backend/post/PostEdit";
import PostIndex from "../pages/backend/post/PostIndex";
import PostShow from "../pages/backend/post/PostShow";
import CreateProduct from "../pages/backend/product/CreateProduct";
import EditProduct from "../pages/backend/product/EditProduct";
import ProductIndex from "../pages/backend/product/ProductIndex";
import ProductSaleIndex from "../pages/backend/productsale/ProductsaleIndex";
import TopicEdit from "../pages/backend/topic/TopicEdit";
import TopicIndex from "../pages/backend/topic/TopicIndex";
import TopicShow from "../pages/backend/topic/TopicShow";
import EditUser from "../pages/backend/user/EditUser";
import UserCreate from "../pages/backend/user/UserCreate";
import UserIndex from "../pages/backend/user/UserIndex";
const RouteAdmin = [
  //Brand
  { path: "/admin/brand/index", component: BrandIndex },
  { path: "/admin/brand/edit/:id", component: BrandEdit },
  { path: "/admin/brand/show/:id", component: BrandShow },
  //Product
  { path: "/admin/product/index", component: ProductIndex },
  { path: "/admin/product/store", component: CreateProduct },
  { path: "/admin/product/edit/:id", component: EditProduct },
  //Topic
  { path: "/admin/topic/index", component: TopicIndex },
  { path: "/admin/topic/show/:id", component: TopicShow },
  { path: "/admin/topic/edit/:id", component: TopicEdit },
  //post
  { path: "/admin/post/index", component: PostIndex },
  { path: "/admin/post/create", component: PostCreate },
  { path: "/admin/post/edit/:id", component: PostEdit },
  { path: "/admin/post/show/:id", component: PostShow },

  //Menu
  { path: "/admin/menu/index", component: MenuIndex },
  { path: "/admin/menu/edit/:id", component: MenuEdit },
  //Banner
  { path: "/admin/banner/index", component: BannerIndex },
  { path: "/admin/banner/create", component: BannerCreate },
  { path: "/admin/banner/edit/:id", component: BannerEdit },
  { path: "/admin/banner/show/:id", component: BannerShow },
  //Category
  { path: "/admin/category/index", component: CategoryIndex },
  { path: "/admin/category/edit/:id", component: CategoryEdit },
  //Users
  { path: "/admin/user/index", component: UserIndex },
  { path: "/admin/user/create", component: UserCreate },
  { path: "/admin/user/edit/:id", component: EditUser },
  //contact
  { path: "/admin/contact/index", component: ContactIndex },
  { path: "/admin/contact/reply/:id", component: ContactReply },
  //Order
  { path: "/admin/order/index", component: OrderIndex },
  //Productsale
  { path: "/admin/productsale/index", component: ProductSaleIndex },
  { path: "/admin/user/index", component: UserIndex },
  { path: "/admin/user/edit/:id", component: EditUser },
  { path: "/admin/user/create", component: UserCreate },
  //config
  { path: "/admin/config/index", component: ConfigIndex },
  { path: "/admin/config/edit/:id", component: ConfigEdit },
];
export default RouteAdmin;
