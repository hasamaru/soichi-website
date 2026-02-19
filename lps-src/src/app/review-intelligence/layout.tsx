import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Review Intelligence | 口コミの一括収集・AI分析ツール",
    description: "ECサイト・比較サイトの口コミをURLを入れるだけで一括収集。ネガポジ分析・トピック別件数化・AIサマリーで、購買後の声を商品戦略に活かすVoC分析ツールです。",
};

export default function Layout({ children }: { children: React.ReactNode }) {
    return children;
}
