import React, { useState } from "react";
import './Calc.css'

const Calc = () => {
    const [quiz, setQuiz] = useState(0);
    const [lab, setLab] = useState(0);
    const [finalExam, setFinalExam] = useState(0);
    const [overallGrade, setOverallGrade] = useState(null);
    const [fourPointGrade, setFourPointGrade] = useState(null);
  

    const calculateGrade = () => {
      const quizWeight = 0.30;
      const labWeight = 0.30;
      const finalExamWeight = 0.40;
  
      const overall = (quiz * quizWeight) + (lab * labWeight) + (finalExam * finalExamWeight);
      setOverallGrade(overall.toFixed(2));
      setFourPointGrade(convertTo4PointScale(overall));
    };
  
   
    const convertTo4PointScale = (grade) => {
      if (grade >= 98.51 && grade <= 100) return 4;
      if (grade >= 96.51 && grade <= 98.5) return 3.75;
      if (grade >= 94.51 && grade <= 96.5) return 3.5;
      if (grade >= 92.51 && grade <= 94.5) return 3.25;
      if (grade >= 90.51 && grade <= 92.5) return 3;
      if (grade >= 88.51 && grade <= 90.5) return 2.75;
      if (grade >= 86.51 && grade <= 88.5) return 2.5;
      if (grade >= 84.51 && grade <= 86.5) return 2.25;
      if (grade >= 82.51 && grade <= 84.5) return 2;
      if (grade >= 80.51 && grade <= 82.5) return 1.75;
      if (grade >= 78.51 && grade <= 80.5) return 1.5;
      if (grade >= 76.51 && grade <= 78.5) return 1.25;
      if (grade >= 74.51 && grade <= 76.5) return 1;
      if (grade >= 50 && grade <= 74.5) return 0;
      return 0;
    };
    
  
    return (
      <div className="grade-calculator">
        <h1>Grade Calculator</h1>
        <div className="input-section">
          <label>Quiz:</label>
          <input
            type="number"
            value={quiz}
            onChange={(e) => setQuiz(parseFloat(e.target.value))}
            placeholder="Enter quiz score"
          />
  
          <label>Lab Activity:</label>
          <input
            type="number"
            value={lab}
            onChange={(e) => setLab(parseFloat(e.target.value))}
            placeholder="Enter lab activity score"
          />
  
          <label>Final Exam:</label>
          <input
            type="number"
            value={finalExam}
            onChange={(e) => setFinalExam(parseFloat(e.target.value))}
            placeholder="Enter final exam score"
          />
  
          <button onClick={calculateGrade}>Calculate Grade</button>
        </div>
  
        {overallGrade && (
          <div className="result-section">
            <p>Overall Grade: {overallGrade}</p>
            <p>4-Point Scale Grade: {fourPointGrade}</p>
          </div>
        )}
      </div>
    );
  };
  
  export default Calc;