"use client";

import React from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import FadeUp from "@/components/ui/FadeUp";
import CTASection from "@/components/sections/CTASection";
import { Youtube, Smartphone, Search, BarChart3, Users, Lightbulb, CheckCircle2 } from "lucide-react";

export default function SocialIntelligencePage() {
    return (
        <div className="min-h-screen bg-white text-soichi-black font-sans">
            <Header />

            <main>
                {/* 1. HERO */}
                <section className="relative h-screen flex items-center justify-center bg-white overflow-hidden">
                    <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 w-full text-center">
                        <FadeUp>
                            <div className="flex justify-center mb-8">
                                <img src="/images/social_intelligence_logo.png" alt="Social Intelligence Logo" className="h-32 md:h-48 w-auto" />
                            </div>
                            <p className="text-xl md:text-3xl font-bold text-soichi-black mb-12 tracking-widest">
                                SNS上の“生の声”を、意思決定に使える形へ
                            </p>
                            <div className="flex flex-col md:flex-row gap-8 justify-center items-center">
                                <div className="flex items-center space-x-4 text-soichi-black font-bold bg-gray-100 px-6 py-3 rounded-full">
                                    <Youtube className="text-red-600" />
                                    <span>YouTube</span>
                                </div>
                                <div className="flex items-center space-x-4 text-soichi-black font-bold bg-gray-100 px-6 py-3 rounded-full">
                                    <Smartphone className="text-black" />
                                    <span>TikTok</span>
                                </div>
                            </div>
                        </FadeUp>
                    </div>
                    <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
                        <div className="w-px h-12 bg-gray-300"></div>
                    </div>
                </section>

                {/* 2. 課題提起 (Problem) */}
                <section className="py-32 bg-soichi-gray">
                    <div className="max-w-7xl mx-auto px-6 lg:px-12">
                        <FadeUp>
                            <h2 className="text-4xl md:text-6xl font-black mb-16 tracking-tighter text-center">SNSの膨大な反響を、<br className="md:hidden" />処理しきれていませんか？</h2>
                        </FadeUp>
                        <div className="grid md:grid-cols-3 gap-12">
                            {[
                                { title: "数値は見ているが「意味」に落とせていない", desc: "再生数や高評価数などの定量データは把握できても、コメントに含まれる具体的な感情や文脈を分析できていない。" },
                                { title: "手作業・属人的なレポート化の限界", desc: "膨大なコメントを目視で確認し、手作業で集計しているため、作業工数が膨大になり、客観的な示唆を得にくい。" },
                                { title: "競合比較や時系列分析ができない", desc: "自社施策の単発評価に留まり、競合他社との比較や、時間経過によるファンの熱量の変化を捉えられていない。" }
                            ].map((item, i) => (
                                <FadeUp key={i} delay={i * 0.1}>
                                    <div className="bg-white p-10 h-full border-t-4 border-soichi-black shadow-sm">
                                        <h3 className="text-xl font-bold mb-6 leading-tight">{item.title}</h3>
                                        <p className="text-gray-600 leading-relaxed">{item.desc}</p>
                                    </div>
                                </FadeUp>
                            ))}
                        </div>
                    </div>
                </section>

                {/* 3. サービス概要 (Overview) */}
                <section className="py-32 bg-white">
                    <div className="max-w-7xl mx-auto px-6 lg:px-12">
                        <div className="grid md:grid-cols-2 gap-20 items-center">
                            <FadeUp>
                                <div className="relative">
                                    <div className="absolute -inset-4 bg-soichi-yellow/20 rounded-2xl -z-10 rotate-3"></div>
                                    <img src="/images/service_media.jpg" alt="Service Overview" className="rounded-lg shadow-2xl grayscale" />
                                </div>
                            </FadeUp>
                            <div>
                                <FadeUp>
                                    <span className="text-soichi-blue font-bold tracking-widest uppercase mb-4 block">Product Overview</span>
                                    <h2 className="text-4xl md:text-5xl font-black mb-10 leading-tight">URLを入れるだけで、<br />AIが動画の反響を構造化。</h2>
                                    <div className="space-y-8">
                                        <div className="flex gap-6">
                                            <div className="flex-shrink-0 w-12 h-12 bg-black text-white rounded-full flex items-center justify-center font-bold">01</div>
                                            <div>
                                                <h4 className="text-xl font-bold mb-2">自動回収・即時分析</h4>
                                                <p className="text-gray-600">YouTubeやTikTokの動画URLを入力するだけで、全コメントを自動回収。AIが瞬時に内容を把握します。</p>
                                            </div>
                                        </div>
                                        <div className="flex gap-6">
                                            <div className="flex-shrink-0 w-12 h-12 bg-black text-white rounded-full flex items-center justify-center font-bold">02</div>
                                            <div>
                                                <h4 className="text-xl font-bold mb-2">インサイトの抽出</h4>
                                                <p className="text-gray-600">ポジネガ判定はもちろん、視聴者が「どこに反応したか」を話題軸で自動分類。隠れたニーズを可視化します。</p>
                                            </div>
                                        </div>
                                        <div className="flex gap-6">
                                            <div className="flex-shrink-0 w-12 h-12 bg-black text-white rounded-full flex items-center justify-center font-bold">03</div>
                                            <div>
                                                <h4 className="text-xl font-bold mb-2">プロジェクト管理・レポート化</h4>
                                                <p className="text-gray-600">複数の動画やチャンネルをプロジェクト単位で一括管理。そのまま報告に使える形式でレポート化します。</p>
                                            </div>
                                        </div>
                                    </div>
                                </FadeUp>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 4. 主な分析内容 (Analysis) */}
                <section className="py-32 bg-soichi-black text-white">
                    <div className="max-w-7xl mx-auto px-6 lg:px-12">
                        <FadeUp>
                            <h2 className="text-4xl md:text-6xl font-black mb-20 tracking-tighter">AIによる多角的な分析</h2>
                        </FadeUp>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                            {[
                                { icon: BarChart3, title: "ポジネガ判定", items: ["ポジティブ / ネガティブ", "ニュートラルな声の比率"] },
                                { icon: Search, title: "話題軸の分類", items: ["機能・デザインへの反応", "価格・コスパの評価", "使用感の感想"] },
                                { icon: BarChart3, title: "時系列変化", items: ["投稿直後の爆発力", "時間経過による質の変化"] },
                                { icon: Lightbulb, title: "代表コメント抽出", items: ["インサイトの源泉となる", "特徴的な投稿を自動選別"] }
                            ].map((item, i) => (
                                <FadeUp key={i} delay={i * 0.1}>
                                    <div className="bg-white/5 border border-white/10 p-8 hover:bg-white/10 transition-colors h-full">
                                        <item.icon className="w-10 h-10 text-soichi-yellow mb-6" />
                                        <h3 className="text-xl font-bold mb-6">{item.title}</h3>
                                        <ul className="space-y-3 text-gray-400">
                                            {item.items.map((li, j) => (
                                                <li key={j} className="flex items-center gap-2">
                                                    <span className="w-1.5 h-1.5 bg-soichi-yellow rounded-full"></span>
                                                    {li}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </FadeUp>
                            ))}
                        </div>
                    </div>
                </section>

                {/* 5. 利用シーン (Scenes) */}
                <section className="py-32 bg-white">
                    <div className="max-w-7xl mx-auto px-6 lg:px-12">
                        <FadeUp className="text-center mb-20">
                            <h2 className="text-4xl md:text-6xl font-black tracking-tighter">USE CASES</h2>
                        </FadeUp>
                        <div className="grid md:grid-cols-2 gap-12">
                            {[
                                { title: "商品開発・改善", desc: "YouTubeのレビュー動画コメントから、ユーザーが真に求めている機能や、現状の不満点を抽出し、次期製品の企画に活かす。" },
                                { title: "マーケティング・広告改善", desc: "PR投稿に対するファンの反応を分析。どのような切り口が最もエンゲージメントを高めるかを検証し、施策を最適化。" },
                                { title: "インフルエンサー選定", desc: "過去の投稿へのコメント傾向を分析し、自社ブランドとの親和性が高いインフルエンサーをデータに基づいて特定。" },
                                { title: "競合・市場トレンド調査", desc: "競合製品の紹介動画における視聴者の反応をキャッチ。市場の勢力図や新しいトレンドの兆しを早期に発見。" }
                            ].map((item, i) => (
                                <FadeUp key={i}>
                                    <div className="flex gap-8 group">
                                        <div className="flex-shrink-0 w-2 h-auto bg-soichi-gray group-hover:bg-soichi-yellow transition-colors"></div>
                                        <div>
                                            <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
                                            <p className="text-gray-600 leading-relaxed">{item.desc}</p>
                                        </div>
                                    </div>
                                </FadeUp>
                            ))}
                        </div>
                    </div>
                </section>

                {/* 6. 導入メリット (Benefits) */}
                <section className="py-32 bg-soichi-gray">
                    <div className="max-w-7xl mx-auto px-6 lg:px-12">
                        <div className="bg-white p-12 md:p-20 shadow-xl overflow-hidden relative">
                            <div className="absolute top-0 right-0 w-40 h-40 bg-soichi-yellow/10 rounded-bl-full"></div>
                            <div className="grid md:grid-cols-1 gap-16 items-center">
                                <div>
                                    <FadeUp>
                                        <h2 className="text-4xl md:text-5xl font-black mb-10 leading-tight">価値あるインサイトが、<br />即座に手元に。</h2>
                                        <ul className="space-y-8">
                                            {[
                                                { title: "定性・定量のハイブリッド分析", desc: "AIが膨大な投稿を読み解き、単なる数字の集計では見えない「なぜそう思われているか」を可視化します。" },
                                                { title: "圧倒的な工数削減", desc: "これまで数日かかっていたSNS調査を、AIが数分で完了。分析のスピードと質を同時に向上させます。" },
                                                { title: "トレンドの兆しを早期検知", desc: "ブランドに関する言及の急増だけでなく、新しく生まれつつあるキーワードや使い方の兆しを捉えます。" }
                                            ].map((item, i) => (
                                                <li key={i} className="flex gap-4">
                                                    <CheckCircle2 className="flex-shrink-0 w-6 h-6 text-soichi-blue" />
                                                    <div>
                                                        <h4 className="font-bold text-lg mb-1">{item.title}</h4>
                                                        <p className="text-gray-600 text-sm">{item.desc}</p>
                                                    </div>
                                                </li>
                                            ))}
                                        </ul>
                                    </FadeUp>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 7. 導入フロー (Flow) */}
                <section className="py-32 bg-white">
                    <div className="max-w-7xl mx-auto px-6 lg:px-12 text-center">
                        <FadeUp>
                            <h2 className="text-4xl md:text-6xl font-black mb-20 tracking-tighter uppercase">Process</h2>
                        </FadeUp>
                        <div className="grid md:grid-cols-4 gap-4">
                            {[
                                { step: "01", title: "お問い合わせ", desc: "フォームよりご連絡ください。担当より1営業日以内に返信いたします。" },
                                { step: "02", title: "ヒアリング", desc: "現在の課題や分析したい対象について詳しく伺い、最適な活用法をご提案します。" },
                                { step: "03", title: "アカウント発行", desc: "最短即日でアカウントを発行。その日から分析を開始していただけます。" },
                                { step: "04", title: "利用開始", desc: "操作説明や初期セットアップのサポートを行い、スムーズな立ち上げを実現します。" }
                            ].map((item, i) => (
                                <FadeUp key={i} delay={i * 0.1}>
                                    <div className="p-8 border border-gray-100 h-full hover:border-soichi-black transition-colors group">
                                        <span className="block text-5xl font-black text-gray-100 group-hover:text-soichi-yellow transition-colors mb-6">{item.step}</span>
                                        <h3 className="text-xl font-bold mb-4">{item.title}</h3>
                                        <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
                                    </div>
                                </FadeUp>
                            ))}
                        </div>
                    </div>
                </section>

                {/* 8. CTA */}
                <CTASection productLink="https://social-intelligence.soichi.tokyo" />
            </main>

            <Footer />
        </div>
    );
}
