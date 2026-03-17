import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-gray-100 mt-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
        <div className="flex flex-col md:flex-row justify-between gap-8">
          <div>
            <div className="font-black text-xl mb-2">
              진짜<span className="text-[#FF6B35]">.</span>
            </div>
            <p className="text-sm text-gray-500 max-w-xs">
              관광 가이드가 안 알려주는 진짜 한국.<br />
              진짜만 알려줌.
            </p>
          </div>

          <div className="flex gap-12 text-sm">
            <div>
              <p className="font-semibold mb-3">둘러보기</p>
              <ul className="space-y-2 text-gray-500">
                <li><Link href="/상황별" className="hover:text-black transition-colors">상황별</Link></li>
                <li><Link href="/지역" className="hover:text-black transition-colors">지역</Link></li>
                <li><Link href="/솔직리뷰" className="hover:text-black transition-colors">솔직리뷰</Link></li>
              </ul>
            </div>
            <div>
              <p className="font-semibold mb-3">정보</p>
              <ul className="space-y-2 text-gray-500">
                <li><Link href="/about" className="hover:text-black transition-colors">소개</Link></li>
                <li><a href="mailto:hello@jinjja.com" className="hover:text-black transition-colors">연락처</a></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-gray-100 text-xs text-gray-400">
          © 2024 jinjja.com. 진짜만 알려줌.
        </div>
      </div>
    </footer>
  );
}
