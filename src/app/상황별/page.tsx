import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "상황별 큐레이션 | 진짜",
  description: "비오는날, 데이트, 혼자갈때, 부모님과 등 상황별 진짜 추천",
};

const categories = [
  { emoji: "🌧️", name: "비오는날", desc: "비 맞으며 실망하지 말고. 실내 위주로 골랐음.", href: "/상황별/비오는날", count: 12 },
  { emoji: "💑", name: "데이트", desc: "첫 만남부터 100일까지. 분위기 보장.", href: "/상황별/데이트", count: 18 },
  { emoji: "🚶", name: "혼자갈때", desc: "혼자라서 오히려 더 좋은 곳. 뻘쭘함 없음.", href: "/상황별/혼자갈때", count: 15 },
  { emoji: "👨‍👩‍👦", name: "부모님과", desc: "어르신도 좋아하시는 곳. 효도코스 완성.", href: "/상황별", count: 9 },
  { emoji: "💸", name: "가성비", desc: "저렴한데 퀄리티 괜찮은 곳만. 광고 아님.", href: "/상황별", count: 22 },
  { emoji: "🌙", name: "야간", desc: "낮보다 밤에 가야 진짜인 곳들.", href: "/상황별", count: 11 },
  { emoji: "🍺", name: "술자리", desc: "2차, 3차 흘러가기 좋은 동네들.", href: "/상황별", count: 14 },
  { emoji: "☀️", name: "주말 나들이", desc: "차 없어도 됨. 대중교통 기준.", href: "/상황별", count: 17 },
];

export default function SituationsPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-16">
      <div className="mb-12">
        <p className="text-sm text-[#FF6B35] font-semibold mb-3 tracking-widest uppercase">Situations</p>
        <h1 className="text-4xl font-black mb-4">상황별 큐레이션</h1>
        <p className="text-gray-500">지금 네 상황이 뭐야. 골라봐.</p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {categories.map((cat) => (
          <Link
            key={cat.name}
            href={cat.href}
            className="border border-gray-100 p-6 hover:border-[#FF6B35] hover:shadow-md transition-all group"
          >
            <div className="text-4xl mb-4">{cat.emoji}</div>
            <div className="flex items-start justify-between mb-2">
              <h2 className="font-black text-lg group-hover:text-[#FF6B35] transition-colors">{cat.name}</h2>
              <span className="text-xs text-gray-400 bg-gray-50 px-2 py-1 font-medium">{cat.count}곳</span>
            </div>
            <p className="text-sm text-gray-500 leading-relaxed">{cat.desc}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
