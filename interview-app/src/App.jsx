
import  { useState } from "react";
import { questions } from "./data";
import Navbar from "./components/Navbar";
import QuestionList from "./components/QuestionList";

export default function App() {
  const [selectedCategory, setSelectedCategory] = useState("HTML & CSS");
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar 
        categories={Object.keys(questions)} 
        setSelectedCategory={setSelectedCategory} 
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
      />
      <div className="container mx-auto p-6">
        <h2 className="text-2xl font-bold text-gray-800 text-center">
          {selectedCategory} Questions
        </h2>
        <QuestionList 
          questions={questions[selectedCategory]} 
          searchTerm={searchTerm} 
        />
      </div>
    </div>
  );
}
