import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { RegisterValidation } from "../Components/Validation/common";

export default function Register() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(RegisterValidation),
  });

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="min-h-screen w-full flex bg-[#0a0d14]">
      {/* Left brand panel */}
      <div className="hidden lg:flex lg:w-1/2 relative overflow-hidden bg-[#0d1117] border-r border-white/[0.06]">
        <div className="absolute -top-32 -right-20 w-[28rem] h-[28rem] rounded-full bg-indigo-600/20 blur-3xl" />
        <div className="absolute bottom-[-6rem] left-[-4rem] w-96 h-96 rounded-full bg-violet-500/10 blur-3xl" />
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
              <span className="text-xs font-medium text-white/50 tracking-wide uppercase">Free while in beta</span>
            </div>
            <h2 className="text-4xl font-bold leading-tight tracking-tight mb-4">
              Turn your GitHub profile into a dashboard.
            </h2>
            <p className="text-white/50 text-base leading-relaxed">
              Create an account to curate your public repositories, track stars and activity, and share a clean view with anyone.
            </p>
          </div>

          <p className="text-white/35 text-sm">© {new Date().getFullYear()} RepoLens</p>
        </div>
      </div>

      {/* Right form panel */}
      <div className="flex-1 flex items-center justify-center px-6 py-10 bg-[#0a0d14]">
        <div className="w-full max-w-sm">

          <div className="mb-8">
            <h1 className="text-2xl font-bold text-white tracking-tight">
              Create your account
            </h1>
            <p className="text-white/45 mt-1.5 text-[15px]">
              Start curating your GitHub repos in a few seconds.
            </p>
          </div>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4" noValidate>

            <div>
              <label className="block text-sm font-medium text-white/70 mb-1.5">
                Full name
              </label>
              <div className="relative">
                <span className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3.5 text-white/30">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                    <circle cx="12" cy="8" r="3.5" />
                    <path d="M4.5 20c1.4-3.6 4.4-5.5 7.5-5.5s6.1 1.9 7.5 5.5" strokeLinecap="round" />
                  </svg>
                </span>
                <input
                  {...register("fullName")}
                  placeholder="Jane Doe"
                  className={`w-full rounded-xl border bg-white/[0.03] pl-10 pr-3.5 py-2.5 text-[15px] text-white placeholder:text-white/25 outline-none transition-all focus:ring-4 focus:bg-white/[0.05] ${
                    errors.fullName
                      ? "border-red-500/40 focus:border-red-400/60 focus:ring-red-500/10"
                      : "border-white/10 focus:border-indigo-400/60 focus:ring-indigo-500/10"
                  }`}
                />
              </div>
              {errors.fullName?.message && (
                <p className="text-red-400 text-xs mt-1.5 flex items-center gap-1">
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="10" />
                    <path d="M12 8v5M12 16h.01" strokeLinecap="round" />
                  </svg>
                  {errors.fullName.message}
                </p>
              )}
            </div>

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
              <label className="block text-sm font-medium text-white/70 mb-1.5">
                Password
              </label>
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
                  placeholder="Create a password"
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

            <div>
              <label className="block text-sm font-medium text-white/70 mb-1.5">
                Confirm password
              </label>
              <div className="relative">
                <span className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3.5 text-white/30">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                    <rect x="4" y="10.5" width="16" height="10" rx="2.5" />
                    <path d="M7.5 10.5V7.5a4.5 4.5 0 0 1 9 0v3" strokeLinecap="round" />
                  </svg>
                </span>
                <input
                  {...register("confirmPassword")}
                  type={showConfirmPassword ? "text" : "password"}
                  placeholder="Re-enter your password"
                  className={`w-full rounded-xl border bg-white/[0.03] pl-10 pr-10 py-2.5 text-[15px] text-white placeholder:text-white/25 outline-none transition-all focus:ring-4 focus:bg-white/[0.05] ${
                    errors.confirmPassword
                      ? "border-red-500/40 focus:border-red-400/60 focus:ring-red-500/10"
                      : "border-white/10 focus:border-indigo-400/60 focus:ring-indigo-500/10"
                  }`}
                />
                <button
                  type="button"
                  onClick={() => setShowConfirmPassword((v) => !v)}
                  className="absolute inset-y-0 right-0 flex items-center pr-3.5 text-white/30 hover:text-white/60"
                  aria-label={showConfirmPassword ? "Hide password" : "Show password"}
                >
                  {showConfirmPassword ? (
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
              {errors.confirmPassword?.message && (
                <p className="text-red-400 text-xs mt-1.5 flex items-center gap-1">
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="10" />
                    <path d="M12 8v5M12 16h.01" strokeLinecap="round" />
                  </svg>
                  {errors.confirmPassword.message}
                </p>
              )}
            </div>

            <button
              type="submit"
              className="w-full bg-indigo-500 hover:bg-indigo-400 active:scale-[0.98] text-white py-2.5 rounded-xl font-semibold text-[15px] transition-all shadow-lg shadow-indigo-500/20 mt-2 flex items-center justify-center gap-2"
            >
              Create account
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>

          </form>

          <p className="text-center mt-7 text-white/40 text-sm">
            Already have an account?{" "}
            <button
              onClick={() => navigate("/login")}
              className="text-indigo-400 font-semibold hover:text-indigo-300 hover:underline underline-offset-4"
            >
              Sign in
            </button>
          </p>

        </div>
      </div>
    </div>
  );
}
