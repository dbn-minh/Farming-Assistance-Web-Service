import { Route, Routes } from "react-router-dom";
import "./App.css";
import Layout from "./components/Layout";
import AboutUs from "./routes/AboutUs/AboutUs";
import AuthTemplate from "./routes/Auth/AuthTemplate";
import Login from "./routes/Auth/Login";

import FTransaction from "./routes/Home/Farmer/FTransaction";
import FTip from "./routes/Home/Farmer/FTip";
import FProfile from "./routes/Home/Farmer/FProfile";
import FInventory from "./routes/Home/Farmer/FInventory";

import SProfile from "./routes/Home/Supplier/SProfile";
import SStore from "./routes/Home/Supplier/SStore";
import SCart from "./routes/Home/Supplier/SCart";
import Stransaction from "./routes/Home/Supplier/STransaction";

import AProfile from "./routes/Home/Admin/AProfile";
import ATip from "./routes/Home/Admin/ATip";
import AAddTip from "./routes/Home/Admin/AAddTip";
import AComplaint from "./routes/Home/Admin/AComplaint";
import ATransaction from "./routes/Home/Admin/ATransaction";

import MainTemplate from "./routes/Home/MainTemplate";

function App() {
  return (
    <Layout>
      <Routes>
        <Route index path="/" element={<AboutUs />} />

        {/* All main pages */}
        <Route path="/admin" element={<MainTemplate />}>
          <Route path="profile" element={<AProfile />} />
          <Route path="tip" element={<ATip />} />
          <Route path="add-tip" element={<AAddTip />} />
          <Route path="complaint" element={<AComplaint />} />
          <Route path="transaction" element={<ATransaction />} />
        </Route>

        <Route path="/farmer" element={<MainTemplate />}>
          <Route path="profile" element={<FProfile />} />
          <Route path="inventory" element={<FInventory />} />
          <Route path="tip" element={<FTip />} />
          <Route path="transaction" element={<FTransaction />} />
        </Route>

        <Route path="supplier" element={<MainTemplate />}>
          <Route path="profile" element={<SProfile />} />
          <Route path="store" element={<SStore />} />
          <Route path="cart" element={<SCart />} />
          <Route path="transaction" element={<Stransaction />} />
        </Route>

        {/* Auth */}
        <Route path="/auth/*" element={<AuthTemplate />}>
          <Route path="login" element={<Login />} />
        </Route>

        {/* Error pages */}
        {/* <Route path="*" element={<NotFound />} /> */}
      </Routes>
    </Layout>
  );
}

export default App;
