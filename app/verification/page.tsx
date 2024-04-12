export default function Verification() {
  return (
    <div className="bg-white rounded-xl border shadow p-4 sm:p-8 mx-4 max-w-sm">
      <svg className="w-6 h-6 mb-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
        <path d="M1.94631 9.31555C1.42377 9.14137 1.41965 8.86034 1.95706 8.6812L21.0433 2.31913C21.5717 2.14297 21.8748 2.43878 21.7268 2.95706L16.2736 22.0433C16.1226 22.5718 15.8179 22.5901 15.5946 22.0877L12.0002 14.0002L18.0002 6.00017L10.0002 12.0002L1.94631 9.31555Z"></path>
      </svg>
      <h1 className="font-bold text-2xl text-gray-800 mb-1">Check your email</h1>
      <p className="text-sm font-medium text-gray-600">Weve sent a code to user@example.com</p>
      <div className="mt-6">
        <form action="" method="post">
          <div className="flex items-center justify-center gap-4">
            <input
              type="text"
              placeholder="1"
              maxLength={1}
              minLength={1}
              min="1"
              max="1"
              required
              className="w-16 h-16 border rounded-lg p-4 text-center mx-auto hover:border-blue-200 focus:outline-none focus:ring focus:ring-blue-400 placeholder:font-medium font-bold text-xl text-blue-900"
            ></input>
            <input
              type="text"
              placeholder="1"
              maxLength={1}
              minLength={1}
              min="1"
              max="1"
              required
              className="w-16 h-16 border rounded-lg p-4 text-center mx-auto hover:border-blue-200 focus:outline-none focus:ring focus:ring-blue-400 placeholder:font-medium font-bold text-xl text-blue-900"
            ></input>
            <input
              type="text"
              placeholder="1"
              maxLength={1}
              minLength={1}
              min="1"
              max="1"
              required
              className="w-16 h-16 border rounded-lg p-4 text-center mx-auto hover:border-blue-200 focus:outline-none focus:ring focus:ring-blue-400 placeholder:font-medium font-bold text-xl text-blue-900"
            ></input>
            <input
              type="text"
              placeholder="1"
              maxLength={1}
              minLength={1}
              min="1"
              max="1"
              required
              className="w-16 h-16 border rounded-lg p-4 text-center mx-auto hover:border-blue-200 focus:outline-none focus:ring focus:ring-blue-400 placeholder:font-medium font-bold text-xl text-blue-900"
            ></input>
          </div>
          <div className="flex items-center space-x-4 md:space-x-2 justify-between mx-auto w-full mt-6 mb-4">
            <button type="reset" className="w-full py-2.5 px-4 font-semibold border border-gray-200 text-black2 text-[16px] rounded-lg">
              지우기
            </button>
            <button type="submit" className="w-full py-2.5 px-4 bg-green2 font-semibold text-black1 text-[16px] rounded-lg">
              확인
            </button>
          </div>
        </form>
      </div>
      <small className="text-center block text-xs text-black3 font-medium">
        주문번호를 잊었나요?{" "}
        <a href="" className="underline font-semibold text-black3 hover:text-black2">
          결제 알림톡을 확인해 보세요!
        </a>
      </small>
    </div>
  );
}
