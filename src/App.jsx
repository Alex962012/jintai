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
import { RequireAuth } from "./hoc/RequireAuth";
import { Admin } from "./pages/Admin/Admin";
import { AuthProvider } from "./hoc/AuthProvider";
import { TypesCatalog } from "./pages/TypesCatalog/TypesCatalog";
import { CreateProduct } from "./pages/CreateProduct/CreateProduct";
import { CreateType } from "./pages/CreateType/CreateType";
import { UpdateProduct } from './pages/UpdateProduct/UpdateProduct'
import { UpdateType } from './pages/UpdateType/UpdateType'
import { DeleteProduct } from './pages/DeleteProduct/DeleteProduct'
import { DeleteType } from './pages/DeleteType/DeleteType'
function App() {
  return (
    <AuthProvider>
      <div className={styles.app}>
        <div className={styles.wrapper}>
          <header>

            <Header />
            <HeaderWidget></HeaderWidget>
          </header>
          <div className={styles.title}>
            <Routes>
              <Route path='/admin' element={
                <RequireAuth><Admin /></RequireAuth>
              }></Route>
              <Route path='/auth' element={<Auth />} />
              <Route path="/catalog/:id" element={<Catalog />} />
              <Route path="/type-catalog" element={<TypesCatalog />} />
              <Route path="/about" element={<AboutBrand />} />
              <Route path="/specifications/:id" element={<ItemDetail />} />
              <Route path="/createProduct" element={<CreateProduct />} />
              <Route path="/createType" element={<CreateType />} />
              <Route path="/updateProduct" element={<UpdateProduct />} />
              <Route path="/updateType" element={<UpdateType />} />
              <Route path="/deleteProduct" element={<DeleteProduct />} />
              <Route path="/deleteType" element={<DeleteType />} />
              <Route path="/" element={<Home />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </div>
          <Footer />
        </div>
      </div>
    </AuthProvider>
  );
}

export default App;
