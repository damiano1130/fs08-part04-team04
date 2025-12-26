export default function Home() {
  return (
    <div className="min-h-screen bg-[#fbf8f4] text-[#1f1f1f]">
      <header className="flex h-[88px] w-full items-center justify-center bg-[#f97b22] px-6">
        <img
          src="/snack-logo.png"
          alt="Snack"
          className="h-8 w-auto"
          loading="lazy"
        />
      </header>

      <main className="mx-auto flex max-w-[760px] flex-col items-center px-4 pb-24 pt-16 md:pt-24">
        <h1 className="text-center text-[32px] font-semibold leading-[42px]">
          안녕하세요, 스낵에 오신 걸 환영합니다
        </h1>

        <form
          className="mt-12 flex w-full max-w-[640px] flex-col gap-14"
          aria-label="회원가입"
        >
          <div className="flex flex-col gap-8">
            <InputField
              label="이메일"
              placeholder="이메일을 입력해주세요."
              type="email"
            />
            <InputField
              label="비밀번호"
              placeholder="비밀번호를 입력해주세요."
              type="password"
            />
            <InputField
              label="비밀번호 확인"
              placeholder="비밀번호를 다시 한 번 입력해주세요."
              type="password"
            />
          </div>

          <button
            type="button"
            disabled
            className="h-16 w-full rounded-[16px] bg-[#e0e0e0] text-[20px] font-semibold text-white"
          >
            시작하기
          </button>

          <div className="flex items-center justify-center gap-2 text-[20px] leading-8">
            <span className="text-[#999999]">이미 계정이 있으신가요?</span>
            <a
              className="font-semibold text-[#f97b22] underline decoration-solid"
              href="#"
            >
              로그인
            </a>
          </div>
        </form>
      </main>
    </div>
  );
}

type InputFieldProps = {
  label: string;
  placeholder: string;
  type?: string;
};

function InputField({ label, placeholder, type = "text" }: InputFieldProps) {
  return (
    <label className="flex flex-col gap-4 text-[20px] leading-8">
      <span className="font-normal">{label}</span>
      <div className="relative">
        <input
          type={type}
          placeholder={placeholder}
          className="h-16 w-full rounded-[16px] border border-[#fcc49c] bg-white px-[14px] pr-12 text-[20px] leading-8 text-[#1f1f1f] placeholder:text-[#ababab] focus:border-[#f97b22] focus:outline-none focus:ring-2 focus:ring-[#f97b22]/30 transition"
        />
        <span className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2">
          <img
            src="/icon-visibility.png"
            alt=""
            className="h-6 w-6 opacity-60"
            loading="lazy"
          />
        </span>
      </div>
    </label>
  );
}
