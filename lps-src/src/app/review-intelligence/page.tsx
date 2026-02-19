"use client";

import React from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import FadeUp from "@/components/ui/FadeUp";
import CTASection from "@/components/sections/CTASection";
import { MessageSquare, ShoppingCart, BarChart3, FileText, AlertCircle, Clock, TrendingDown, CheckCircle2, ArrowRight, Search } from "lucide-react";

export default function ReviewIntelligencePage() {
    return (
        <div className="min-h-screen bg-white text-soichi-black font-sans">
            <Header />

            <main>
                {/* 1. HERO */}
                <section className="relative h-screen flex items-center justify-center bg-white overflow-hidden">
                    <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 w-full text-center">
                        <FadeUp>
                            <div className="flex justify-center mb-8">
                                <img src="/images/review_intelligence_logo.png" alt="Review Intelligence Logo" className="h-32 md:h-48 w-auto" />
                            </div>
                            <p className="text-xl md:text-3xl font-bold text-soichi-black mb-6 tracking-widest">
                                ECサイト・比較サイトの口コミを一括収集し、AIで定量分析
                            </p>
                            <p className="text-base md:text-lg text-gray-500 mb-12 max-w-2xl mx-auto leading-relaxed">
                                URLを入れるだけで、購買後の声をインサイトに変える
                            </p>
                            <div className="flex flex-col md:flex-row gap-4 justify-center items-center mb-16">
                                <div className="flex items-center space-x-3 text-soichi-black font-bold bg-gray-100 px-6 py-3 rounded-full">
                                    <ShoppingCart className="text-orange-500 w-5 h-5" />
                                    <span>ECサイト（楽天・Amazon等）</span>
                                </div>
                                <div className="flex items-center space-x-3 text-soichi-black font-bold bg-gray-100 px-6 py-3 rounded-full">
                                    <Search className="text-blue-500 w-5 h-5" />
                                    <span>比較サイト・レビューサイト</span>
                                </div>
                            </div>
                            {/* How it works - simple 3 step */}
                            <div className="flex flex-col md:flex-row gap-2 justify-center items-center">
                                <div className="bg-soichi-black text-white px-6 py-3 rounded-lg font-bold text-sm">① URLを入力</div>
                                <ArrowRight className="text-gray-300 w-5 h-5 rotate-90 md:rotate-0" />
                                <div className="bg-soichi-black text-white px-6 py-3 rounded-lg font-bold text-sm">② 口コミを一斉収集</div>
                                <ArrowRight className="text-gray-300 w-5 h-5 rotate-90 md:rotate-0" />
                                <div className="bg-soichi-teal text-soichi-black px-6 py-3 rounded-lg font-bold text-sm">③ AIが定量分析・レポート出力</div>
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
                            <p className="text-soichi-blue font-bold tracking-widest uppercase mb-4 text-center">Problem</p>
                            <h2 className="text-4xl md:text-6xl font-black mb-6 tracking-tighter text-center">こんな課題、抱えていませんか？</h2>
                            <p className="text-gray-500 text-center mb-16 text-lg">ECサイトや比較サイトでの販売に取り組む企業に多い悩みです</p>
                        </FadeUp>
                        <div className="grid md:grid-cols-3 gap-8">
                            {[
                                {
                                    icon: TrendingDown,
                                    title: "口コミが商品戦略に活かされていない",
                                    desc: "ECサイトや比較サイトに大量の口コミが蓄積されているのに、それを資産として活用できていない。読みきれないまま埋もれている。"
                                },
                                {
                                    icon: BarChart3,
                                    title: "施策の振り返りが数字だけで終わっている",
                                    desc: "評価点数や販売数などのKPIは追えても、「購入者が実際に何を感じたか」という定性的なインサイトが意思決定に入っていない。"
                                },
                                {
                                    icon: Clock,
                                    title: "口コミ収集に膨大な時間がかかっている",
                                    desc: "VoCの収集を手作業で行っており、複数商品・複数サイトの口コミをまとめるだけで数時間〜数日を消費してしまっている。"
                                }
                            ].map((item, i) => (
                                <FadeUp key={i} delay={i * 0.1}>
                                    <div className="bg-white p-10 h-full border-t-4 border-soichi-black shadow-sm">
                                        <item.icon className="w-8 h-8 text-gray-400 mb-4" />
                                        <h3 className="text-xl font-bold mb-4 leading-tight">{item.title}</h3>
                                        <p className="text-gray-600 leading-relaxed text-sm">{item.desc}</p>
                                    </div>
                                </FadeUp>
                            ))}
                        </div>
                    </div>
                </section>

                {/* 3. サービス概要 (Overview) - What it does */}
                <section className="py-32 bg-white">
                    <div className="max-w-7xl mx-auto px-6 lg:px-12">
                        <FadeUp className="text-center mb-20">
                            <p className="text-soichi-blue font-bold tracking-widest uppercase mb-4">What You Can Do</p>
                            <h2 className="text-4xl md:text-5xl font-black leading-tight">URLを入力するだけで、<br />2つのことが即座に完了</h2>
                        </FadeUp>
                        <div className="grid md:grid-cols-2 gap-8">
                            {/* Feature 1 */}
                            <FadeUp delay={0.1}>
                                <div className="bg-soichi-gray p-12 h-full">
                                    <div className="flex items-center gap-4 mb-6">
                                        <div className="w-14 h-14 bg-soichi-black text-soichi-teal rounded-full flex items-center justify-center font-black text-xl">①</div>
                                        <h3 className="text-2xl font-black">口コミの一斉収集・出力</h3>
                                    </div>
                                    <p className="text-gray-600 leading-relaxed mb-6">ECサイトや比較サイトの商品URLを入力すると、掲載されている口コミ・レビューをすべて自動で収集。複数商品・複数サイトを一括処理できるため、散在した声を一元管理できます。</p>
                                    <ul className="space-y-2 text-sm">
                                        {["複数URLを一括入力・一括収集", "ECサイト・比較サイト対応", "収集した口コミをそのまま出力"].map((t, i) => (
                                            <li key={i} className="flex items-center gap-2 text-gray-700">
                                                <CheckCircle2 className="w-4 h-4 text-soichi-blue flex-shrink-0" />
                                                {t}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </FadeUp>
                            {/* Feature 2 */}
                            <FadeUp delay={0.2}>
                                <div className="bg-soichi-black text-white p-12 h-full">
                                    <div className="flex items-center gap-4 mb-6">
                                        <div className="w-14 h-14 bg-soichi-teal text-soichi-black rounded-full flex items-center justify-center font-black text-xl">②</div>
                                        <h3 className="text-2xl font-black">口コミの定量分析</h3>
                                    </div>
                                    <p className="text-gray-400 leading-relaxed mb-6">収集した口コミをAIが自動で分類・分析。ネガポジ判定・内容構成の定量化・AIサマリーを一括生成します。「何件がポジティブか」「どんな不満が多いか」が数字で把握できます。</p>
                                    <ul className="space-y-2 text-sm">
                                        {["ネガ・ポジ・ニュートラルの比率を定量化", "口コミ内容をトピック別に自動分類・件数化", "AIによるサマリー・インサイト抽出", "そのままレポートとして出力可能"].map((t, i) => (
                                            <li key={i} className="flex items-center gap-2 text-gray-300">
                                                <CheckCircle2 className="w-4 h-4 text-soichi-teal flex-shrink-0" />
                                                {t}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </FadeUp>
                        </div>
                    </div>
                </section>

                {/* 4. 分析内容の詳細 (Analysis) */}
                <section className="py-32 bg-soichi-black text-white">
                    <div className="max-w-7xl mx-auto px-6 lg:px-12">
                        <FadeUp>
                            <p className="text-soichi-teal font-bold tracking-widest uppercase mb-4">Analysis Details</p>
                            <h2 className="text-4xl md:text-5xl font-black mb-4">AIが行う定量分析の内容</h2>
                            <p className="text-gray-400 mb-16">口コミを「件数で見える形」に変換します</p>
                        </FadeUp>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                            {[
                                {
                                    icon: BarChart3,
                                    title: "ネガポジ分析",
                                    items: ["ポジティブ / ネガティブ / ニュートラルの件数・比率", "感情の傾向を一目で把握"]
                                },
                                {
                                    icon: FileText,
                                    title: "トピック別件数化",
                                    items: ["「品質」「価格」「使い心地」など話題ごとに自動分類", "どの要素への言及が多いかを定量表示"]
                                },
                                {
                                    icon: MessageSquare,
                                    title: "AIサマリー生成",
                                    items: ["数百〜数千件の口コミをAIが要約", "レポートにそのまま使える形で出力"]
                                },
                                {
                                    icon: AlertCircle,
                                    title: "代表口コミ抽出",
                                    items: ["インサイトを体現する典型的な口コミを自動ピックアップ", "定性エビデンスとしてレポートに活用"]
                                }
                            ].map((item, i) => (
                                <FadeUp key={i} delay={i * 0.1}>
                                    <div className="bg-white/5 border border-white/10 p-8 hover:bg-white/10 transition-colors h-full">
                                        <item.icon className="w-10 h-10 text-soichi-teal mb-6" />
                                        <h3 className="text-xl font-bold mb-4">{item.title}</h3>
                                        <ul className="space-y-3 text-gray-400 text-sm">
                                            {item.items.map((li, j) => (
                                                <li key={j} className="flex items-start gap-2">
                                                    <span className="w-1.5 h-1.5 bg-soichi-teal rounded-full mt-2 flex-shrink-0"></span>
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

                {/* 5. 得られるメリット (Benefits) */}
                <section className="py-32 bg-soichi-gray">
                    <div className="max-w-7xl mx-auto px-6 lg:px-12">
                        <FadeUp className="text-center mb-16">
                            <p className="text-soichi-blue font-bold tracking-widest uppercase mb-4">Benefits</p>
                            <h2 className="text-4xl md:text-5xl font-black leading-tight">導入で得られる3つのメリット</h2>
                        </FadeUp>
                        <div className="grid md:grid-cols-3 gap-8">
                            {[
                                {
                                    num: "01",
                                    title: "URLを入れるだけで\n口コミを一元回収",
                                    desc: "複数商品・複数ECサイトのURLを入力するだけで、すべての口コミを自動で収集・一元管理。手作業での収集作業から解放されます。"
                                },
                                {
                                    num: "02",
                                    title: "VoCを効率よく\n参照・活用できる",
                                    desc: "口コミが内容ごとに自動整理されるため、「どんな声が多いか」をすぐに把握。商品改善や販売戦略の立案に直結するインサイトが手に入ります。"
                                },
                                {
                                    num: "03",
                                    title: "件数で可視化し\nレポートまで出力",
                                    desc: "ネガポジや話題の内訳を件数・比率で可視化。そのまま社内報告や取引先へのプレゼン資料に使える形式でアウトプットできます。"
                                }
                            ].map((item, i) => (
                                <FadeUp key={i} delay={i * 0.1}>
                                    <div className="bg-white p-10 h-full shadow-sm">
                                        <span className="block text-5xl font-black text-gray-100 mb-4">{item.num}</span>
                                        <h3 className="text-xl font-bold mb-4 leading-snug whitespace-pre-line">{item.title}</h3>
                                        <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
                                    </div>
                                </FadeUp>
                            ))}
                        </div>
                    </div>
                </section>

                {/* 6. 利用シーン (Scenes) */}
                <section className="py-32 bg-white">
                    <div className="max-w-7xl mx-auto px-6 lg:px-12">
                        <FadeUp className="text-center mb-20">
                            <p className="text-soichi-blue font-bold tracking-widest uppercase mb-4">Use Cases</p>
                            <h2 className="text-4xl md:text-6xl font-black tracking-tighter">こんなシーンで活用できます</h2>
                        </FadeUp>
                        <div className="grid md:grid-cols-2 gap-12">
                            {[
                                {
                                    title: "商品企画・リニューアルへのフィードバック収集",
                                    desc: "ECサイトの口コミから「使いにくさ」「期待とのギャップ」を特定。既存商品の改善ポイントや、新商品コンセプトの裏付けとなるVoCを効率的に収集できる。"
                                },
                                {
                                    title: "販売施策・広告改善への活用",
                                    desc: "口コミから購入者が実際に評価しているポイントを抽出。広告コピーや商品ページの訴求を「顧客の言葉」に基づいて最適化し、CVR改善につなげる。"
                                },
                                {
                                    title: "競合商品との比較分析",
                                    desc: "自社商品と競合商品の口コミを同時に収集・分析。「競合が評価されている点」「自社が劣っている点」を定量的に把握し、差別化戦略の立案に活かす。"
                                },
                                {
                                    title: "CS・品質改善への早期対応",
                                    desc: "発売直後の口コミを即座に解析し、共通して発生しているトラブルや誤解を早期発見。FAQの充実やサポート体制の強化に素早くつなげる。"
                                }
                            ].map((item, i) => (
                                <FadeUp key={i}>
                                    <div className="flex gap-8 group">
                                        <div className="flex-shrink-0 w-2 h-auto bg-soichi-gray group-hover:bg-soichi-teal transition-colors"></div>
                                        <div>
                                            <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                                            <p className="text-gray-600 leading-relaxed text-sm">{item.desc}</p>
                                        </div>
                                    </div>
                                </FadeUp>
                            ))}
                        </div>
                    </div>
                </section>

                {/* 7. 導入フロー (Flow) */}
                <section className="py-32 bg-soichi-gray">
                    <div className="max-w-7xl mx-auto px-6 lg:px-12 text-center">
                        <FadeUp>
                            <p className="text-soichi-blue font-bold tracking-widest uppercase mb-4">Process</p>
                            <h2 className="text-4xl md:text-6xl font-black mb-20 tracking-tighter">導入の流れ</h2>
                        </FadeUp>
                        <div className="grid md:grid-cols-4 gap-4">
                            {[
                                { step: "01", title: "お問い合わせ", desc: "フォームよりご連絡ください。2営業日以内に担当よりご返信いたします。" },
                                { step: "02", title: "ヒアリング", desc: "分析対象のサイトや商品カテゴリー、抽出したい情報の優先順位を整理します。" },
                                { step: "03", title: "環境構築", desc: "対象サイトのデータ取得設定を行い、貴社専用のダッシュボードを準備します。" },
                                { step: "04", title: "実運用開始", desc: "定期的なレポート生成や、AIによる分析機能を活用した運用を開始します。" }
                            ].map((item, i) => (
                                <FadeUp key={i} delay={i * 0.1}>
                                    <div className="p-8 border border-gray-200 bg-white h-full hover:border-soichi-black transition-colors group">
                                        <span className="block text-5xl font-black text-gray-100 group-hover:text-soichi-teal transition-colors mb-6">{item.step}</span>
                                        <h3 className="text-xl font-bold mb-4">{item.title}</h3>
                                        <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
                                    </div>
                                </FadeUp>
                            ))}
                        </div>
                    </div>
                </section>

                {/* 8. CTA */}
                <CTASection productLink="https://review-intelligence.soichi.tokyo" />
            </main>

            <Footer />
        </div>
    );
}
