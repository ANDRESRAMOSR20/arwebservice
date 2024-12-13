"use client";
import { useState } from "react";
import AnimationContainer from "../components/global/animation-container";

const faqs = [
    { question: "What industries can benefit most from chatbot implementations?", answer: "Chatbots are highly versatile and can benefit industries such as customer support, e-commerce, healthcare, education, and finance by automating repetitive queries and providing 24/7 assistance." },
    { question: "How customizable are your chatbots?", answer: "Our chatbots are fully customizable to match your brand's voice and specific business needs, from pre-set answers to integrating with external tools like CRMs or payment gateways." },
    { question: "What platforms can the chatbot be integrated with?", answer: "The chatbot can be integrated with platforms such as WhatsApp, Instagram, Facebook Messenger, your website, and even internal communication tools like Slack or Microsoft Teams." },
    { question: "How is an AI agent different from a chatbot?", answer: "While chatbots handle predefined conversational tasks, AI agents can perform complex operations such as retrieving data from databases, executing tasks based on triggers, and managing workflows, acting like an intelligent virtual assistant." },
    { question: "What kind of tasks can an AI agent automate?", answer: "AI agents can automate tasks like generating reports, updating records in databases, managing email responses, or performing data analysis, significantly reducing manual effort." },
    { question: "Can AI agents learn and improve over time?", answer: "Yes, our AI agents are designed to learn from interactions and user feedback, making them increasingly effective at handling tasks and improving accuracy over time." },
    { question: "What is the main advantage of using RAG for document management?", answer: "RAG excels at handling large document repositories, providing precise information retrieval and summarization by combining search capabilities with AI-generated insights." },
    { question: "Who benefits the most from RAG systems?", answer: "RAG systems are ideal for professionals such as lawyers, researchers, and large enterprises that need quick access to critical information from vast amounts of data." },
    { question: "How secure is the RAG system when handling sensitive documents?", answer: "Our RAG solutions prioritize security with end-to-end encryption and can be deployed on private servers to ensure sensitive data is handled with utmost confidentiality." },
];

const Faq = () => {
    const [selectedQuestion, setSelectedQuestion] = useState<number | null>(null);

    return (
        <div className="max-w-[1200px] mx-auto py-32 px-4" id="faq">
            <AnimationContainer delay={0}>
                <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold text-center tracking-tight opacity-90 mb-[100px] text-[#A3B5DF]">
                    FAQ
                </h2>
            </AnimationContainer>
            <div className="grid gap-4 md:grid-cols-3">
                {faqs.map((faq, index) => (
                    <AnimationContainer
                        key={index}
                        delay={0.2 + index * 0.1}
                        className={`px-6 py-5 text-lf rounded-xl transition-all duration-500 cursor-pointer backdrop-blur-md ${
                            selectedQuestion === index
                                ? "bg-primary/5 border-primary/20 shadow-lg shadow-primary/5"
                                : "bg-background/20 hover:bg-white/5 border-white/5 hover:border-black/10"
                        } border`}
                        onClick={() => setSelectedQuestion(selectedQuestion === index ? null : index)} // Alternar selección
                    >
                        <h3 className="text-lg font-light tracking-wide">{faq.question}</h3>
                        {selectedQuestion === index && (
                            <AnimationContainer
                                key={`answer-${index}`}
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -10 }}
                                transition={{ duration: 0.4 }}
                                className="mt-4"
                            >
                                <p className="text-base font-light tracking-wide text-[#A3B5DF]">
                                    {faq.answer}
                                </p>
                            </AnimationContainer>
                        )}
                    </AnimationContainer>
                ))}
            </div>
        </div>
    );
};

export default Faq;
