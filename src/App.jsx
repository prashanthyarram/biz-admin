import react from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CheckListManagement from "./pages/checkListManagement";
import TemperatureManagement from "./pages/temperatureManagement";
import "./App.css";
import DocumentManagement from "./pages/documentManagement";
import Home from "./pages/home";
import CleaningManagement from "./pages/cleaningManagement";
import HrManagement from "./pages/hrManagement";
import OrderingAdminManagement from "./pages/orderingAdminManagement";
import SupplierInventoryManagement from "./pages/supplierInventoryManagement";
import CashManagement from "./pages/cashManagement";
import NotFound from "./pages/notFound";
import Layout from "./layouts";
import ContactUs from "./pages/contactUs";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Layout child={<Home />} />} />
          <Route
            path="/checklist-management"
            element={<Layout child={<CheckListManagement />} />}
          />
          <Route
            path="/temperature-management"
            element={<Layout child={<TemperatureManagement />} />}
          />
          <Route
            path="/documents-management"
            element={<Layout child={<DocumentManagement />} />}
          />
          <Route
            path="/cleaning-management"
            element={<Layout child={<CleaningManagement />} />}
          />
          <Route
            path="/hr-management"
            element={<Layout child={<HrManagement />} />}
          />
          <Route
            path="/ordering-admin-management"
            element={<Layout child={<OrderingAdminManagement />} />}
          />
          <Route
            path="/supplier-inventory-management"
            element={<Layout child={<SupplierInventoryManagement />} />}
          />
          <Route
            path="/cash-management"
            element={<Layout child={<CashManagement />} />}
          />
          <Route path="/contact" element={<Layout child={<ContactUs />} />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
