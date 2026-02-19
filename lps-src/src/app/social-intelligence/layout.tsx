import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Social Intelligence | SNSコメントの一括収集・AI分析ツール",
    description: "PR動画・レビュー動画に寄せられたコメントをURLを入れるだけで一括収集。ネガポジ分析・トピック別件数化・AIサマリーで、施策の振り返りとVoC活用を効率化するコメント分析ツールです。",
};

export default function Layout({ children }: { children: React.ReactNode }) {
    return children;
}
