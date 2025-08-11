//import logo from './logo.svg';
//import './App.css';

import './assets/css/style.css'

import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Home from './components/Home';
import Header from './components/Header';
import Footer from './components/Footer';
import Sidebar from './components/Sidebar';
import Dashboard from './components/Dashboard';
import Customers from './components/Customers';
import Employees from './components/Employees';
import Issues from './components/Issues';
import AddIssue from './components/AddIssue';

import EmployeeLogin from './components/EmployeeLogin';
import IssueReviews from './components/IssueReviews';

import Quotation from './components/Quotation';
import QuotationDetails from './components/QuotationDetails';
import AmcContracts from './components/AmcContracts';
import AmcContractsDetails from './components/AmcContractDetails';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>

          {/* <Route path={'/'} element={<Sidebar></Sidebar>}></Route>
          <Route path={'/dashboard'} element={<Dashboard></Dashboard>}></Route> */}

          <Route path={'/'} element={<Sidebar />} >
            <Route index element={<Dashboard />}></Route>
            <Route path={'/customers'} element={<Customers />}></Route>
            <Route path={'/employees'} element={<Employees />}></Route>
            <Route path={'/issues'} element={<Issues />}></Route>
            <Route path={'/addissues'} element={<AddIssue />}></Route>
            <Route path={'/issue-reviews'} element={<IssueReviews />}></Route>
            <Route path={'/quotations'} element={<Quotation />}></Route>
            <Route path={'/quotation-details'} element={<QuotationDetails />}></Route>
            <Route path={'/amc-contracts'} element={<AmcContracts />}></Route>
            <Route path={'/amc-contract-details'} element={<AmcContractsDetails />}></Route>
          </Route>


        </Routes>
        <Footer />

      </BrowserRouter>

      {/* <EmployeeLogin /> */}

    </div>
  );
}

export default App;
