import React from "react";
import FadeUp from "@/components/ui/FadeUp";

interface CTASectionProps {
    productLink?: string;
}

const CTASection = ({ productLink }: CTASectionProps) => {
    return (
        <section className="py-24 bg-black text-white text-center">
            <div className="max-w-4xl mx-auto px-4">
                <FadeUp>
                    <h2 className="text-3xl md:text-5xl font-bold mb-8 uppercase tracking-tight">Ready to transform your business?</h2>
                    <p className="text-gray-400 mb-12 text-lg">
                        サービスの詳細、デモのご依頼など、<br />お気軽にお問い合わせください。
                    </p>
                    <div className="flex flex-col md:flex-row gap-6 justify-center">
                        <a
                            href="/contact.html"
                            className="inline-block px-12 py-5 text-lg font-bold text-black bg-soichi-yellow rounded-full hover:bg-white transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                        >
                            お問い合わせ
                        </a>
                        {productLink && (
                            <a
                                href={productLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-block px-12 py-5 text-lg font-bold text-white border border-white rounded-full hover:bg-white hover:text-black transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                            >
                                サービスサイトへ
                            </a>
                        )}
                    </div>
                </FadeUp>
            </div>
        </section>
    );
};

export default CTASection;
