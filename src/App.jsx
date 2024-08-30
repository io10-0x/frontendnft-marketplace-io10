import React, { useState } from "react";
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import HomePage from "./pages/HomePage";
import MainLayout from "./layout/MainLayout";
import JobsPage from "./pages/JobsPage";
import JobPage, { jobLoader } from "./pages/JobPage";
import NotFoundPage from "./pages/NotFoundPage";
import AddJob from "./pages/AddJob";
import EditJob from "./pages/EditJob";
const App = () => {
  const addJob = async (newJob) => {
    const res = await fetch("/api/jobs", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(newJob),
    });
    return;
  };

  const updateJob = async (updatedJob) => {
    const res = await fetch(`/api/jobs/${updatedJob.id}`, {
      method: "PUT",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(updatedJob),
    });
    return;
  };

  const deletethejob = async (id) => {
    const res = await fetch(`/api/jobs/${id}`, {
      method: "DELETE",
    });
    return;
  };

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<MainLayout />}>
        <Route index element={<HomePage />} />
        <Route path="/jobs" element={<JobsPage />} />
        <Route
          path="/job/:id"
          element={<JobPage deletethejob={deletethejob} />}
          loader={jobLoader}
        />
        <Route
          path="/edit-job/:id"
          element={<EditJob updateJob={updateJob} />}
          loader={jobLoader}
        />
        <Route path="*" element={<NotFoundPage />} />
        <Route path="/add-job" element={<AddJob addJobState={addJob} />} />
      </Route>
    )
  );

  return <RouterProvider router={router} />;
};

export default App;
