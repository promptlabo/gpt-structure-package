// HeroSection.tsx - CV最適化構成（順序見直し済み）
import React from "react";
import Link from "next/link";

export default function HeroSection() {
  // LINE登録ボタンクリック時のCVトラッキングイベント
  const handleLineClick = () => {
    if (typeof window !== "undefined" && window.gtag) {
      window.gtag("event", "conversion", {
        send_to: "AW-933468720/beBqCNO-_McaELC0jr0D",
      });
    }
  };

  return (
    <section className="text-center space-y-4">
      <h1 className="text-3xl md:text-5xl font-bold">教材づくり、3分で終わる時代へ</h1>
      <p className="text-lg">教科・学年・単元を入れるだけ。GPTがあなたの教材を自動生成。</p>
      <div className="flex flex-col md:flex-row justify-center items-center gap-4 mt-4">
        {/* 最重要：内部リンク（CV導線） */}
        <Link href="/lite-teach">
          <button
            className="bg-blue-600 text-white rounded-2xl px-6 py-2 shadow hover:bg-blue-700 transition"
            aria-label="3分でGPT教材体験（無料）"
            role="button"
            data-testid="cta-gpt-trial"
          >
            3分でGPT教材体験（無料）
          </button>
        </Link>

        {/* GUI体験（旧導線） */}
        <Link
          href="https://gpt-tutor-lite.vercel.app/"
          className="bg-blue-600 text-white px-6 py-2 rounded-2xl shadow hover:bg-blue-700 transition"
        >
          GUI体験する
        </Link>

        {/* LINE特典（補助導線） */}
        <Link
          href="https://lin.ee/KGoZbJ9b"
          onClick={handleLineClick}
          className="bg-green-600 text-white px-6 py-2 rounded-2xl shadow hover:bg-green-700 transition"
        >
          LINE登録で特典受取
        </Link>
      </div>
    </section>
  );
}
