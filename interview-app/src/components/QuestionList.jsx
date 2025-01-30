/* eslint-disable react/prop-types */

export default function QuestionList({ questions, searchTerm }) {
  const filteredQuestions = questions.filter(q =>
    q.question.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
      {filteredQuestions.length === 0 ? (
        <p className="text-gray-500 text-center col-span-3">No questions found.</p>
      ) : (
        filteredQuestions.map((q, index) => (
          <div key={index} className="bg-white shadow-md p-6 rounded-lg hover:shadow-xl transition">
            <h2 className="text-lg font-semibold text-blue-700">{q.question}</h2>
            <p className="text-gray-600 mt-2">{q.answer}</p>
          </div>
        ))
      )}
    </div>
  );
}
