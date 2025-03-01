import React from 'react';

const faqs = [
    {
        question: "How do I create a cover page?",
        answer: "Simply select a template, fill in your details, and download your cover page in PDF format.",
    },
    {
        question: "Are the templates free to use?",
        answer: "Yes, all templates are completely free to use for personal and academic purposes.",
    },
    {
        question: "Can I customize the templates?",
        answer: "Unfortunately No! But you can edit all text fields to suit your needs.",
    },
    {
        question: "Do I need to create an account?",
        answer: "No, you can use CoverForge without an account.",
    },
    {
        question: "What file formats are supported for download?",
        answer: "Currently, we support PDF downloads, which are perfect for printing and sharing.",
    },
];

const FAQItem = ({ question, answer }) => (
    <div className="collapse bg-base-100 border border-base-300">
        <input type="radio" name="faq-accordion" />
        <div className="collapse-title font-semibold">
            {question}
        </div>
        <div className="collapse-content text-sm">
            {answer}
        </div>
    </div>
);

const FAQ = () => {
    return (
        <div className="space-y-2 md:w-2/3">
            <h2 className='py-4 text-center font-family-anton font-bold text-3xl mt-4'>Frequently Asked Questions</h2>
            {faqs.map((faq, index) => (
                <FAQItem key={index} {...faq} />
            ))}
        </div>
    );
};

export default FAQ;
