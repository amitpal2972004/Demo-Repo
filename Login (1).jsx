import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { LoginValidation } from "../Components/Validation/common";

export default function Login() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(LoginValidation),
  });

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="min-h-screen w-full flex bg-[#0a0d14]">
      {/* Left brand panel */}
      <div className="hidden lg:flex lg:w-1/2 relative overflow-hidden bg-[#0d1117] border-r border-white/[0.06]">
        <div className="absolute -top-32 -left-20 w-[28rem] h-[28rem] rounded-full bg-indigo-600/20 blur-3xl" />
        <div className="absolute bottom-[-6rem] right-[-4rem] w-96 h-96 rounded-full bg-violet-500/10 blur-3xl" />
        <div className="absolute inset-0 opacity-[0.05] bg-[radial-gradient(circle_at_1px_1px,white_1px,transparent_0)] bg-[size:26px_26px]" />

        <div className="relative z-10 flex flex-col justify-between p-14 text-white w-full">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-lg bg-white/[0.06] backdrop-blur flex items-center justify-center ring-1 ring-white/10">
              <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="text-indigo-400">
                <path d="M9 19c-4.5 1.5-4.5-2.5-6-3m12 5v-3.5c0-1 .1-1.4-.5-2 2.8-.3 5.5-1.4 5.5-6a4.6 4.6 0 0 0-1.3-3.2 4.2 4.2 0 0 0-.1-3.2s-1.1-.3-3.5 1.3a12.3 12.3 0 0 0-6.2 0C6.5 2.8 5.4 3.1 5.4 3.1a4.2 4.2 0 0 0-.1 3.2A4.6 4.6 0 0 0 4 9.5c0 4.6 2.7 5.7 5.5 6-.6.6-.6 1.2-.5 2V21" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <span className="font-semibold tracking-tight text-lg">RepoLens</span>
          </div>

          <div className="max-w-md">
            <div className="flex items-center gap-2 mb-5">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
              <span className="text-xs font-medium text-white/50 tracking-wide uppercase">Synced with GitHub</span>
            </div>
            <h2 className="text-4xl font-bold leading-tight tracking-tight mb-4">
              Your public repos, curated and in one view.
            </h2>
            <p className="text-white/50 text-base leading-relaxed">
              Sign in to pick up where you left off — stars, languages, and activity across every repo you've chosen to track.
            </p>
          </div>

          <p className="text-white/35 text-sm">© {new Date().getFullYear()} RepoLens</p>
        </div>
      </div>

      {/* Right form panel */}
      <div className="flex-1 flex items-center justify-center px-6 py-12 bg-[#0a0d14]">
        <div className="w-full max-w-sm">

          <div className="mb-9">
            <h1 className="text-2xl font-bold text-white tracking-tight">
              Welcome back
            </h1>
            <p className="text-white/45 mt-1.5 text-[15px]">
              Sign in to view your curated repo dashboard.
            </p>
          </div>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4" noValidate>

            <div>
              <label className="block text-sm font-medium text-white/70 mb-1.5">
                Email
              </label>
              <div className="relative">
                <span className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3.5 text-white/30">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                    <rect x="3" y="5" width="18" height="14" rx="2.5" />
                    <path d="M3.5 6.5l8.5 6 8.5-6" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
                <input
                  {...register("email")}
                  type="email"
                  placeholder="you@example.com"
                  className={`w-full rounded-xl border bg-white/[0.03] pl-10 pr-3.5 py-2.5 text-[15px] text-white placeholder:text-white/25 outline-none transition-all focus:ring-4 focus:bg-white/[0.05] ${
                    errors.email
                      ? "border-red-500/40 focus:border-red-400/60 focus:ring-red-500/10"
                      : "border-white/10 focus:border-indigo-400/60 focus:ring-indigo-500/10"
                  }`}
                />
              </div>
              {errors.email?.message && (
                <p className="text-red-400 text-xs mt-1.5 flex items-center gap-1">
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="10" />
                    <path d="M12 8v5M12 16h.01" strokeLinecap="round" />
                  </svg>
                  {errors.email.message}
                </p>
              )}
            </div>

            <div>
              <div className="flex items-center justify-between mb-1.5">
                <label className="block text-sm font-medium text-white/70">
                  Password
                </label>
                <button
                  type="button"
                  className="text-xs font-medium text-indigo-400 hover:text-indigo-300"
                >
                  Forgot password?
                </button>
              </div>
              <div className="relative">
                <span className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3.5 text-white/30">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                    <rect x="4" y="10.5" width="16" height="10" rx="2.5" />
                    <path d="M7.5 10.5V7.5a4.5 4.5 0 0 1 9 0v3" strokeLinecap="round" />
                  </svg>
                </span>
                <input
                  {...register("password")}
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter your password"
                  className={`w-full rounded-xl border bg-white/[0.03] pl-10 pr-10 py-2.5 text-[15px] text-white placeholder:text-white/25 outline-none transition-all focus:ring-4 focus:bg-white/[0.05] ${
                    errors.password
                      ? "border-red-500/40 focus:border-red-400/60 focus:ring-red-500/10"
                      : "border-white/10 focus:border-indigo-400/60 focus:ring-indigo-500/10"
                  }`}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword((v) => !v)}
                  className="absolute inset-y-0 right-0 flex items-center pr-3.5 text-white/30 hover:text-white/60"
                  aria-label={showPassword ? "Hide password" : "Show password"}
                >
                  {showPassword ? (
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                      <path d="M3 3l18 18" strokeLinecap="round" />
                      <path d="M10.6 5.1A10.9 10.9 0 0 1 12 5c6 0 9.5 5.5 9.5 7 0 .6-.6 1.9-1.8 3.2M6.3 6.6C3.9 8.1 2.5 10.4 2.5 11c0 1.5 3.5 7 9.5 7 1.2 0 2.3-.2 3.3-.6" strokeLinecap="round" />
                      <path d="M9.9 10a3 3 0 0 0 4.2 4.2" strokeLinecap="round" />
                    </svg>
                  ) : (
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                      <path d="M2.5 12S6 5 12 5s9.5 7 9.5 7-3.5 7-9.5 7-9.5-7-9.5-7z" strokeLinecap="round" strokeLinejoin="round" />
                      <circle cx="12" cy="12" r="3" />
                    </svg>
                  )}
                </button>
              </div>
              {errors.password?.message && (
                <p className="text-red-400 text-xs mt-1.5 flex items-center gap-1">
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="10" />
                    <path d="M12 8v5M12 16h.01" strokeLinecap="round" />
                  </svg>
                  {errors.password.message}
                </p>
              )}
            </div>

            <button
              type="submit"
              className="w-full bg-indigo-500 hover:bg-indigo-400 active:scale-[0.98] text-white py-2.5 rounded-xl font-semibold text-[15px] transition-all shadow-lg shadow-indigo-500/20 mt-2 flex items-center justify-center gap-2"
            >
              Sign in
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>

          </form>

          <p className="text-center mt-8 text-white/40 text-sm">
            Don't have an account?{" "}
            <button
              onClick={() => navigate("/register")}
              className="text-indigo-400 font-semibold hover:text-indigo-300 hover:underline underline-offset-4"
            >
              Sign up
            </button>
          </p>

        </div>
      </div>
    </div>
  );
}
