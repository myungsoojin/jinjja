import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "솔직리뷰 | 진짜",
  description: "포장 없이 씀. 좋으면 좋다, 별로면 별로.",
};

const reviews = [
  {
    place: "유명 성수동 카페",
    region: "성수동",
    category: "카페",
    rating: 2.5,
    date: "2024.11",
    review: `인스타 팔로워 10만 이상인 카페. 근데 진짜로 커피 맛이 없음.

원두 설명은 엄청 길게 써놨는데 막상 마시면 탄 맛남. 직원분들은 친절한데 커피가 이러면 카페가 아니지.

분위기는 좋음. 사진은 잘 나옴. 그게 다임.

**결론:** 사진 찍으러 가는 사람은 OK. 커피 마시러 가면 실망함.`,
    verdict: "비추",
    verdictColor: "bg-red-100 text-red-700",
  },
  {
    place: "을지로 노포 국밥",
    region: "을지로",
    category: "식당",
    rating: 4.9,
    date: "2024.10",
    review: `30년 된 국밥집. 할머니 혼자 운영하심.

국물이 진짜임. 요즘 유행하는 깔끔한 국물 아니고 묵직하고 진한 그 맛. 뭔가 먹고 나서 배가 차는 느낌이 다름.

가격이 8천원임. 서울에서 이 가격에 이 퀄리티 없음. 11시쯤 열고 2시면 끝남.

**결론:** 진짜배기. 이런 곳이 사라지면 안 됨.`,
    verdict: "강추",
    verdictColor: "bg-green-100 text-green-700",
  },
  {
    place: "핫한 홍대 파스타집",
    region: "홍대",
    category: "레스토랑",
    rating: 3.2,
    date: "2024.09",
    review: `SNS에서 난리 났길래 갔음. 웨이팅 40분.

파스타 자체는 맛있음. 근데 양이 너무 적음. 2만원짜리 먹고 배 안 찬다는 게 말이 되나. 직원이 좀 불친절함. 바쁜 건 알겠는데 손님한테 짜증 내는 건 다른 문제.

분위기는 괜찮음. 와인 페어링은 좋은 선택임.

**결론:** 기대치 낮추고 가면 OK. 웨이팅 감수할 정도는 아님.`,
    verdict: "그럭저럭",
    verdictColor: "bg-yellow-100 text-yellow-700",
  },
  {
    place: "한남동 독립 서점 카페",
    region: "한남동",
    category: "서점/카페",
    rating: 4.7,
    date: "2024.08",
    review: `작은 독립서점 + 카페. 사장님이 큐레이션 직접 함.

책 선택이 진짜 좋음. 유명한 책 없고 모르던 책들인데 다 재밌어 보임. 커피도 맛있음. 창가에 앉아서 책 읽으면 시간이 사라짐.

주말에 북토크 가끔 함. 사전 신청 필요.

**결론:** 독립서점 좋아하면 꼭 가봐. 서울에 이런 공간이 더 많아야 함.`,
    verdict: "강추",
    verdictColor: "bg-green-100 text-green-700",
  },
];

export default function ReviewsPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-16">
      <div className="mb-12">
        <p className="text-sm text-[#FF6B35] font-semibold mb-3 tracking-widest uppercase">Reviews</p>
        <h1 className="text-4xl font-black mb-4">솔직리뷰</h1>
        <p className="text-gray-500 text-lg">포장 없이 씀. 불편하면 안 읽으면 됨.</p>
      </div>

      <div className="space-y-8">
        {reviews.map((review) => (
          <article key={review.place} className="border border-gray-100 p-8 hover:shadow-sm transition-shadow">
            <div className="flex flex-wrap items-start justify-between gap-4 mb-6">
              <div>
                <h2 className="font-black text-2xl mb-2">{review.place}</h2>
                <div className="flex flex-wrap gap-2">
                  <span className="text-xs border border-gray-200 px-2 py-1 text-gray-500">{review.region}</span>
                  <span className="text-xs border border-gray-200 px-2 py-1 text-gray-500">{review.category}</span>
                  <span className="text-xs border border-gray-200 px-2 py-1 text-gray-500">{review.date}</span>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <span className={`text-xs px-3 py-1 font-bold ${review.verdictColor}`}>{review.verdict}</span>
                <div className="text-right">
                  <div className="font-black text-3xl text-[#FF6B35]">{review.rating}</div>
                  <div className="text-xs text-gray-400">/5</div>
                </div>
              </div>
            </div>

            <div className="text-sm text-gray-600 leading-relaxed whitespace-pre-line">
              {review.review}
            </div>
          </article>
        ))}
      </div>

      <div className="mt-12 p-6 bg-black text-white">
        <p className="font-bold mb-2">이 리뷰에 대해</p>
        <p className="text-sm text-gray-300 leading-relaxed">
          직접 돈 내고 먹고 마시고 쓴 리뷰입니다. 광고 없음, 협찬 없음, 초대 없음.
          별로면 별로라고 씁니다. 그게 진짜라고 생각해서.
        </p>
      </div>
    </div>
  );
}
