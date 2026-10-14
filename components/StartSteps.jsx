const StartSteps = ({ number, label, detail }) => (
  <div className="group relative flex min-h-[88px] items-center gap-4 rounded-[24px] border border-white/10 bg-white/[0.04] p-5 backdrop-blur-sm transition-all duration-500 hover:-translate-y-1 hover:border-[#34acc7]/40 hover:bg-white/[0.07] hover:shadow-[0_12px_40px_rgba(52,172,199,0.12)] sm:gap-5 sm:p-6">
    <div
      aria-hidden="true"
      className="absolute left-0 top-1/2 h-0 w-[3px] -translate-y-1/2 rounded-full bg-gradient-to-b from-[#a509ff] to-[#34acc7] transition-all duration-500 group-hover:h-[55%]"
    />
    <div className="relative flex h-[52px] w-[52px] shrink-0 items-center justify-center rounded-[16px] border border-white/10 bg-[#0c111b] transition-colors duration-500 group-hover:border-[#34acc7]/50 sm:h-[58px] sm:w-[58px]">
      <span className="bg-clip-text bg-[linear-gradient(97.86deg,#a509ff_0%,#34acc7_53.65%,#a134c7_100%)] text-[16px] font-extrabold tracking-[1px] text-transparent sm:text-[18px]">
        {number}
      </span>
    </div>
    <div className="min-w-0 flex-1">
      <p className="text-[15px] font-bold text-white sm:text-[17px]">{label}</p>
      <p className="mt-1 truncate text-[13px] text-white/50 transition-colors duration-400 group-hover:text-white/75 sm:text-[14px]">
        {detail}
      </p>
    </div>
    <svg
      aria-hidden="true"
      className="h-5 w-5 shrink-0 text-white/25 transition-all duration-400 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-[#34acc7]"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth="2"
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M7 17L17 7M17 7H8M17 7V16" />
    </svg>
  </div>
);

export default StartSteps;
