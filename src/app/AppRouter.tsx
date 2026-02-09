import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import LoginScreen from "../features/auth/view/LoginScreen";
import HomeScreen from "../features/home/view/HomeScreen";

export function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<LoginScreen />} />
        <Route path="/home" element={<HomeScreen />} />
        <Route path="*" element={<Navigate to="/home" />} />
      </Routes>
    </BrowserRouter>
  );
}
