import { useState } from 'react'

const faqs = [
  {
    question: 'How do I schedule a viewing?',
    answer: 'Contact us through our form or call directly. Our agents will arrange a convenient time.'
  },
  {
    question: 'What areas do you serve?',
    answer: 'We operate nationwide with focus on major metropolitan areas.'
  },
  {
    question: 'What fees are involved?',
    answer: 'No hidden fees. Commission structure is transparent and discussed upfront.'
  }
]

function FAQItem({ question, answer }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="border-b dark:border-gray-700 py-4">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex justify-between items-center w-full text-left"
      >
        <span className="text-lg font-medium">{question}</span>
        <span className="text-xl">{isOpen ? '−' : '+'}</span>
      </button>
      {isOpen && <p className="mt-2 text-gray-600 dark:text-gray-300">{answer}</p>}
    </div>
  )
}

export default function FAQ() {
  return (
    <section className="py-16 px-4 md:px-8 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <FAQItem key={idx} {...faq} />
          ))}
        </div>
      </div>
    </section>
  )
}
