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

function App() {
  return (
    <div className={styles.app}>
      <div className={styles.wrapper}>
        <header>
          <HeaderWidget></HeaderWidget>
          <Header />
        </header>
        <div className={styles.title}>
          <Routes>
            <Route path="/catalog" element={<Catalog />} />
            <Route path="/about" element={<AboutBrand />} />
            <Route path="/specifications" element={<ItemDetail />} />
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
