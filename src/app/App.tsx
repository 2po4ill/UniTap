import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import AboutBusinessPage from '../pages/AboutBusinessPage';

function App() {
  return (
    <Routes>
      <Route path="/for-business" element={<AboutBusinessPage />} />
      <Route path="/" element={<Navigate to="/for-business" />} />
      <Route path="/products" element={<Navigate to="/for-business" />} />
      <Route path="/blog" element={<Navigate to="/for-business" />} />
    </Routes>
  );
}

export default App;
