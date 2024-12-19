import React, { Suspense, lazy } from "react";
import { Routes, Route } from "react-router";
import Layout from "./components/Layout";
import LoginPage from "./pages/LoginPage/index";
import RegistrationPage from "./pages/RegistrationPage/index";
import PrivateRoute from "./components/Router/PrivateRoute";
import RestrictedRoute from "./components/Router/RestrictedRoute";
import ContactsPage from "./pages/ContactsPage/index"

export default function router() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route
          path="/login"
          element={
            <RestrictedRoute redirectTo="/contacts">
              <LoginPage />
            </RestrictedRoute>
          }
        />
        <Route
          path="/register"
          element={
            <RestrictedRoute redirectTo="/contacts">
              <RegistrationPage />
            </RestrictedRoute>
          }
        />
        <Route
          path="/contacts"
          element={
            <PrivateRoute>
              <ContactsPage />
            </PrivateRoute>
          }
        />
      </Route>
    </Routes>
  );
}
