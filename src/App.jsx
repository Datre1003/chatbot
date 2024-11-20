import React, { useEffect, useState, Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/Navbar";
import ScaleLoader from "react-spinners/ScaleLoader";

// Lazy load các trang (code-splitting)
const HomePage = lazy(() => import("./pages/HomePage"));
const ChatBot = lazy(() => import("./pages/ChatBot"));
const FAQPage = lazy(() => import("./pages/FAQPage"));
const FeedbackPage = lazy(() => import("./pages/FeedbackPage"));

function App() {
  useEffect(() => {
    console.log("App mounted");
  }, []);

  return (
    <Router>
      <div className="overflow-hidden">
        <NavBar />
        <Suspense
          fallback={
            <div className="flex justify-center items-center h-screen">
              <ScaleLoader color="#4A90E2" />
            </div>
          }
        >
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/chat" element={<ChatBot />} />
            <Route path="/faq" element={<FAQPage />} />
            <Route path="/feedback" element={<FeedbackPage />} />
          </Routes>

        </Suspense>
      </div>
    </Router>
  );
}

export default App;
