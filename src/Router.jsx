import React, { Suspense, lazy } from "react";
import { Routes, Route } from "react-router";
import Layout from './components/Layout'

export default function router() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}/>
      </Routes>
    </div>
  )
}
