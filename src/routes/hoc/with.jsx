import { useState, useEffect } from "react";

// TODO: Implement HOC Pattern

function Profile() {
  const user = { name: "John Doe", email: "john@example.com" };

  return (
    <div>
      <h2>Profile</h2>
      <pre>{JSON.stringify(user, null, 2)}</pre>
    </div>
  );
}

function Dashboard() {
  const data = { key: "value" };

  return (
    <div>
      <h2>Dashboard</h2>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}

function WithHoc() {
  return (
    <main className="container">
      <Profile />
      <Dashboard />
    </main>
  );
}

export default WithHoc;
