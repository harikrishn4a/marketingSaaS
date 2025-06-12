import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import DashboardPage from './pages/DashboardPage';
import CampaignPage from './pages/CampaignPage';
import ManageDatabasePage from './pages/ManageDatabasePage';
import OutreachPage from './pages/OutreachPage';
import SmartEdgePage from './pages/SmartEdgePage';
import FullDatabasePage from './pages/FullDatabasePage';
import LandingPage from './pages/LandingPage';

const userProfile = {
  name: 'Hari Krishnan',
  email: 'Hari@veritics.ai',
  avatar: '',
};

const userPlan = {
  emailsSent: 50,
  emailsLimit: 100,
  smsSent: 10,
  smsLimit: 50,
  whatsappSent: 60,
  whatsappLimit: 100,
};

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route
          path="/dashboard"
          element={
            <div className="flex min-h-screen bg-gray-100">
              <Sidebar userPlan={userPlan} />
              <div className="flex-1 flex flex-col">
                <Header user={userProfile} />
                <main className="flex-1 overflow-auto">
                  <DashboardPage />
                </main>
              </div>
            </div>
          }
        />
        <Route
          path="/dashboard/campaign"
          element={
            <div className="flex min-h-screen bg-gray-100">
              <Sidebar userPlan={userPlan} />
              <div className="flex-1 flex flex-col">
                <Header user={userProfile} />
                <main className="flex-1 overflow-auto">
                  <CampaignPage />
                </main>
              </div>
            </div>
          }
        />
        <Route
          path="/dashboard/database"
          element={
            <div className="flex min-h-screen bg-gray-100">
              <Sidebar userPlan={userPlan} />
              <div className="flex-1 flex flex-col">
                <Header user={userProfile} />
                <main className="flex-1 overflow-auto">
                  <ManageDatabasePage />
                </main>
              </div>
            </div>
          }
        />
        <Route
          path="/dashboard/outreach"
          element={
            <div className="flex min-h-screen bg-gray-100">
              <Sidebar userPlan={userPlan} />
              <div className="flex-1 flex flex-col">
                <Header user={userProfile} />
                <main className="flex-1 overflow-auto">
                  <OutreachPage />
                </main>
              </div>
            </div>
          }
        />
        <Route
          path="/dashboard/smart-edge"
          element={
            <div className="flex min-h-screen bg-gray-100">
              <Sidebar userPlan={userPlan} />
              <div className="flex-1 flex flex-col">
                <Header user={userProfile} />
                <main className="flex-1 overflow-auto">
                  <SmartEdgePage />
                </main>
              </div>
            </div>
          }
        />
        <Route
          path="/dashboard/full-database"
          element={
            <div className="flex min-h-screen bg-gray-100">
              <Sidebar userPlan={userPlan} />
              <div className="flex-1 flex flex-col">
                <Header user={userProfile} />
                <main className="flex-1 overflow-auto">
                  <FullDatabasePage />
                </main>
              </div>
            </div>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;