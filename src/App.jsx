import { Header } from "./component/Header/Header";
import { Route, Routes } from "react-router-dom";
import { Catalog } from "./pages/Catalog/Catalog";
import { Footer } from "./component/Footer/Footer";
import { NotFound } from "./pages/NotFound/NotFound";
import { AboutBrand } from "./pages/AboutBrand/AboutBrand";
import styles from "./App.module.css";
import { ItemDetail } from "./component/ItemDetail/ItemDetail";
import { HeaderWidget } from "./component/HeaderWidget/HeaderWidget";
import { Home } from "./pages/Home/Home";
import { Auth } from "./pages/Auth/Auth";
import { Admin } from "./pages/Admin/Admin";
import { TypesCatalog } from "./pages/TypesCatalog/TypesCatalog";
import { CreateProduct } from "./pages/CreateProduct/CreateProduct";
import { CreateType } from "./pages/CreateType/CreateType";
import { UpdateProduct } from "./pages/UpdateProduct/UpdateProduct";
import { UpdateType } from "./pages/UpdateType/UpdateType";
import { DeleteProduct } from "./pages/DeleteProduct/DeleteProduct";
import { DeleteType } from "./pages/DeleteType/DeleteType";
import { Company } from "./pages/Company/Company";
import { RequireAuth } from "./component/ReqireAuth/RequireAuth";
console.log('hello')
function App() {
  return (
    <div className={styles.app}>
      <div className={styles.wrapper}>
        <HeaderWidget></HeaderWidget>
        <header>
          <Header />
        </header>
        <div className={styles.title}>
          <Routes>
            <Route
              path="/admin"
              element={
                <RequireAuth>
                  <Admin />
                </RequireAuth>
              }
            />
            <Route path="/auth" element={<Auth />} />
            <Route path="/catalog/:id" element={<Catalog />} />
            <Route path="/type-catalog" element={<TypesCatalog />} />
            <Route path="/about" element={<AboutBrand />} />
            <Route path="/specifications/:id" element={<ItemDetail />} />
            <Route
              path="/createProduct"
              element={
                <RequireAuth>
                  <CreateProduct />{" "}
                </RequireAuth>
              }
            />
            <Route
              path="/createType"
              element={
                <RequireAuth>
                  <CreateType />
                </RequireAuth>
              }
            />
            <Route
              path="/updateProduct"
              element={
                <RequireAuth>
                  <UpdateProduct />
                </RequireAuth>
              }
            />
            <Route
              path="/updateType"
              element={
                <RequireAuth>
                  <UpdateType />
                </RequireAuth>
              }
            />
            <Route
              path="/deleteProduct"
              element={
                <RequireAuth>
                  <DeleteProduct />
                </RequireAuth>
              }
            />
            <Route
              path="/deleteType"
              element={
                <RequireAuth>
                  <DeleteType />
                </RequireAuth>
              }
            />
            <Route path="/company" element={<Company />} />
            <Route path="/" element={<Home />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
