import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { getCurrentUser } from "../lib/api";

// Wrap any page that needs a logged-in user:
// <Route path="/profile" element={<ProtectedRoute><Profile /></ProtectedRoute>} />
export default function ProtectedRoute({ children }) {
  const [status, setStatus] = useState("checking"); // checking | authed | guest

  useEffect(() => {
    let active = true;
    (async () => {
      const user = await getCurrentUser();
      if (!active) return;
      setStatus(user ? "authed" : "guest");
    })();
    return () => {
      active = false;
    };
  }, []);

  if (status === "checking") {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#0a0d14]">
        <div className="w-6 h-6 border-2 border-white/20 border-t-indigo-400 rounded-full animate-spin" />
      </div>
    );
  }

  if (status === "guest") {
    return <Navigate to="/login" replace />;
  }

  return children;
}
