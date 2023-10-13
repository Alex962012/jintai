import { Admin } from "./pages/Admin/Admin";
import { Auth } from "./pages/Auth/Auth";
import { Catalog } from "./pages/Catalog/Catalog";
import { ItemDetail } from "./component/ItemDetail/ItemDetail";
import {
    ADMIN_ROUTE,
    LOGIN_ROUTE,
    PRODUCT_ROUTE,
    SHOP_ROUTE,
} from "./utils/const";

export const authRoute = [
    {
        path: ADMIN_ROUTE,
        Component: Admin,
    },
];
export const publicRoutes = [
    {
        path: SHOP_ROUTE,
        Component: Catalog,
    },
    {
        path: LOGIN_ROUTE,
        Component: Auth,
    },

    {
        path: PRODUCT_ROUTE + "/:id",
        Component: ItemDetail,
    },
];
