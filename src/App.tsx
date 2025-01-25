import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; 
import Layout from "./Components/Shared/Layout"; 
import Invoices from "./Components/AdminManagement.js"; 
import Dashboard from "./Components/Dashboard";
import AdminManagement from "./Components/AdminManagement";
import BranchManagement from './Components/BranchManagement'
import Help from './Components/Help'
import Settings from './Components/Settings'

function App() { 
  return ( 
    <Router> 
      <Routes> 
        <Route path="/" element={<Layout />}>
          <Route index element={<Dashboard />} />  {/* Default route */}
          <Route path="adminmanagement" element={<AdminManagement />} />
          <Route path="branchmanagement" element={<BranchManagement />} />
          <Route path="settings" element={<Settings />} />
          <Route path="help" element={<Help />} />
          <Route path="login" element={<div>This is Login Page</div>}/>
        </Route> 
        
        
      </Routes> 
    </Router> 
  ); 
}

export default App;
