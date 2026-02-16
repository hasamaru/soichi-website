"use client";

import React from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import FadeUp from "@/components/ui/FadeUp";
import CTASection from "@/components/sections/CTASection";
import { MessageSquare, ShoppingCart, Search, BarChart3, TrendingUp, Cpu, CheckCircle2 } from "lucide-react";

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
                            <p className="text-xl md:text-3xl font-bold text-soichi-black mb-12 tracking-widest">
                                購買後の声を、商品戦略に変える
                            </p>
                            <div className="flex flex-col md:flex-row gap-8 justify-center items-center">
                                <div className="flex items-center space-x-4 text-soichi-black font-bold bg-gray-100 px-6 py-3 rounded-full">
                                    <span className="text-pink-500 font-black">@</span>
                                    <span>アットコスメ</span>
                                </div>
                                <div className="flex items-center space-x-4 text-soichi-black font-bold bg-gray-100 px-6 py-3 rounded-full">
                                    <MessageSquare className="text-pink-400" />
                                    <span>LIPS</span>
                                </div>
                                <div className="flex items-center space-x-4 text-soichi-black font-bold bg-gray-100 px-6 py-3 rounded-full">
                                    <ShoppingCart className="text-red-500" />
                                    <span>楽天市場</span>
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
                            <h2 className="text-4xl md:text-6xl font-black mb-16 tracking-tighter text-center">レビューは「見る」ものから<br className="md:hidden" />「分析する」ものへ。</h2>
                        </FadeUp>
                        <div className="grid md:grid-cols-3 gap-12">
                            {[
                                { title: "膨大なレビューを読み切れない", desc: "アットコスメや楽天の全レビューを把握し、重要な不満や要望を漏れなくキャッチするのは人力では不可能です。" },
                                { title: "主観的な判断による戦略ミス", desc: "目立つ数件のレビューに引きずられ、顧客全体の真のニーズを見失ったまま商品改修を行っていませんか？" },
                                { title: "競合商品との優劣が不透明", desc: "自社商品単体での評価に留まり、競合他社と比較して「なぜ自社が選ばれていないのか」の具体的理由が分からない。" }
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
                                    <div className="absolute -inset-4 bg-soichi-yellow/20 rounded-2xl -z-10 -rotate-3"></div>
                                    <img src="/images/service_axbx.jpg" alt="Service Overview" className="rounded-lg shadow-2xl grayscale" />
                                </div>
                            </FadeUp>
                            <div>
                                <FadeUp>
                                    <span className="text-soichi-blue font-bold tracking-widest uppercase mb-4 block">Product Overview</span>
                                    <h2 className="text-4xl md:text-5xl font-black mb-10 leading-tight">購買データの奥にある、<br />「真実の理由」をAIが抽出。</h2>
                                    <div className="space-y-8">
                                        <div className="flex gap-6">
                                            <div className="flex-shrink-0 w-12 h-12 bg-black text-white rounded-full flex items-center justify-center font-bold">01</div>
                                            <div>
                                                <h4 className="text-xl font-bold mb-2">複数モール・サイトを一括解析</h4>
                                                <p className="text-gray-600">アットコスメ、LIPS、楽天市場など、媒体を横断してレビューを自動取得・統合。全チャネルの顧客体験を把握します。</p>
                                            </div>
                                        </div>
                                        <div className="flex gap-6">
                                            <div className="flex-shrink-0 w-12 h-12 bg-black text-white rounded-full flex items-center justify-center font-bold">02</div>
                                            <div>
                                                <h4 className="text-xl font-bold mb-2">生成AIによる高精度な要約</h4>
                                                <p className="text-gray-600">AIが数千件のレビューを読み込み、共通するインサイトや決定的な不満点を、即座に要約・分類します。</p>
                                            </div>
                                        </div>
                                        <div className="flex gap-6">
                                            <div className="flex-shrink-0 w-12 h-12 bg-black text-white rounded-full flex items-center justify-center font-bold">03</div>
                                            <div>
                                                <h4 className="text-xl font-bold mb-2">競合比較分析機能</h4>
                                                <p className="text-gray-600">競合商品との比較を自動実行。自社にはない「競合だけが評価されている点」を炙り出し、戦略に変えます。</p>
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
                            <h2 className="text-4xl md:text-6xl font-black mb-20 tracking-tighter">「VoC」を戦略資産へ</h2>
                        </FadeUp>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                            {[
                                { icon: BarChart3, title: "感情（センチメント）", items: ["満足・不満の分布", "使用感のポジネガ詳細"] },
                                { icon: Search, title: "項目別スコアリング", items: ["テクスチャ・匂い・コスパ", "各要素別のユーザー評価"] },
                                { icon: Cpu, title: "不満・改善案の特定", items: ["「再購入しない」理由", "製品への具体的な要望"] },
                                { icon: TrendingUp, title: "トレンド・兆し検知", items: ["話題の急上昇ワード", "新しい使い方の発見"] }
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
                            <h2 className="text-4xl md:text-6xl font-black tracking-tighter uppercase">Use Cases</h2>
                        </FadeUp>
                        <div className="grid md:grid-cols-2 gap-12">
                            {[
                                { title: "商品企画・リニューアル", desc: "レビューから発覚した「使いにくさ」や「期待とのギャップ」を特定。既存商品の改善や、新商品のコンセプト構築に活用。" },
                                { title: "広告・キャッチコピー開発", desc: "顧客が実際に使っている「言葉」をレビューから抽出。ターゲットに刺さる訴求ポイントを発見し、CTR/CVRを改善。" },
                                { title: "競合プレイスメント調査", desc: "自社商品が競合と比較された際、何が決め手になっているのかを解明。ブランド優位性を高めるための施策を立案。" },
                                { title: "CS・サポート品質向上", desc: "製品に対する誤解や、共通して発生しているトラブルを早期発見。FAQの充実や、サポート体制の強化へ繋げる。" }
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
                            <div className="absolute bottom-0 left-0 w-40 h-40 bg-soichi-yellow/10 rounded-tr-full"></div>
                            <div className="grid md:grid-cols-1 gap-16 items-center">
                                <div>
                                    <FadeUp>
                                        <h2 className="text-4xl md:text-5xl font-black mb-10 leading-tight">データが導き出す、<br />確信ある商品戦略。</h2>
                                        <ul className="space-y-8">
                                            {[
                                                { title: "ブランドメッセージの正当化", desc: "顧客の声をエビデンスとして活用。社内の合意形成や、取引先への提案力を強化します。" },
                                                { title: "分析工数の極小化", desc: "月数十時間のレビュー読み込み作業をAIが代行。本来時間をかけるべき戦略思考にシフトできます。" },
                                                { title: "市場適応の高速化", desc: "発売直後のレビューを即座に解析し、プロモーション活動や供給計画を柔軟に軌道修正可能です。" }
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
                            <h2 className="text-4xl md:text-6xl font-black mb-20 tracking-tighter uppercase">Introduction Flow</h2>
                        </FadeUp>
                        <div className="grid md:grid-cols-4 gap-4">
                            {[
                                { step: "01", title: "お問い合わせ", desc: "本サイトのフォームよりご連絡ください。ニーズに合わせたプランを提示します。" },
                                { step: "02", title: "ヒアリング", desc: "分析対象のサイトや商品カテゴリー、抽出したい情報の優先順位を整理します。" },
                                { step: "03", title: "環境構築", desc: "対象サイトのデータ取得設定を行い、貴社専用のダッシュボードを準備します。" },
                                { step: "04", title: "実運用開始", desc: "定期的なレポート生成や、AIによるアラート機能を活用した運用を開始します。" }
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
                <CTASection productLink="https://review-intelligence.soichi.tokyo" />
            </main>

            <Footer />
        </div>
    );
}
