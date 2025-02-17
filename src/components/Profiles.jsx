import React, { useEffect, useState } from "react";
import { SiLeetcode, SiCodeforces } from "react-icons/si";

export default function Profiles() {
  const [codeforcesData, setCodeforcesData] = useState(null);
  const [codeforcesProblems, setCodeforcesProblems] = useState(null);
  const [leetcodeData, setLeetcodeData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const codeforcesUsername = "rohitruhela"; 
  const leetcodeUsername = "rohitruhela35"; 

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch Codeforces User Data
        const cfResponse = await fetch(
          `https://codeforces.com/api/user.info?handles=${codeforcesUsername}`
        );
        const cfData = await cfResponse.json();
        if (cfData.status === "OK") setCodeforcesData(cfData.result[0]);

        // Fetch Codeforces Solved Problems
        const cfProblemsResponse = await fetch(
          `https://codeforces.com/api/user.status?handle=${codeforcesUsername}`
        );
        const cfProblemsData = await cfProblemsResponse.json();
        if (cfProblemsData.status === "OK") {
          const solvedProblems = new Set(
            cfProblemsData.result
              .filter(sub => sub.verdict === "OK")
              .map(sub => sub.problem.name)
          );
          setCodeforcesProblems(solvedProblems.size);
        }

        // Fetch LeetCode Data
        const lcResponse = await fetch(
          `https://leetcode-stats-api.herokuapp.com/${leetcodeUsername}`
        );
        const lcData = await lcResponse.json();
        setLeetcodeData(lcData);
      } catch (err) {
        setError("Failed to fetch data");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6   text-white">
      <h1 className="text-4xl font-bold mb-8">Coding Profiles</h1>

      {loading && <p className="text-lg">Loading...</p>}
      {error && <p className="text-red-400">{error}</p>}

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 w-full max-w-4xl">
        {/* Codeforces Card */}
        {codeforcesData && (
          <div className="bg-gray-900 bg-opacity-40 backdrop-blur-md p-6 rounded-2xl shadow-lg border border-gray-700 hover:scale-105 transition-transform duration-300">
            <div className="flex flex-col items-center">
              <SiCodeforces className="text-5xl text-blue-500 mb-3" />
              <h2 className="text-2xl font-semibold">{codeforcesData.handle}</h2>
              <p className="text-lg text-gray-300">Rating: <span className="text-blue-400 font-bold">{codeforcesData.rating}</span></p>
              <p className="text-lg text-gray-300">Max Rating: <span className="text-green-400 font-bold">{codeforcesData.maxRating}</span></p>
              <p className="text-lg text-gray-300">Rank: <span className="text-yellow-400 font-bold">{codeforcesData.rank}</span></p>
              {codeforcesProblems !== null && (
                <p className="text-lg text-gray-300">Problems Solved: <span className="text-green-400 font-bold">{codeforcesProblems}</span></p>
              )}
              <a
                href={`https://codeforces.com/profile/${codeforcesUsername}`}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 bg-blue-500 px-5 py-2 rounded-full text-white font-semibold hover:bg-blue-600 transition"
              >
                View Profile
              </a>
            </div>
          </div>
        )}

        {/* LeetCode Card */}
        {leetcodeData && (
          <div className="bg-gray-900 bg-opacity-40 backdrop-blur-md p-6 rounded-2xl shadow-lg border border-gray-700 hover:scale-105 transition-transform duration-300">
            <div className="flex flex-col items-center">
              <SiLeetcode className="text-5xl text-yellow-500 mb-3" />
              <h2 className="text-2xl font-semibold">{leetcodeUsername}</h2>
              <p className="text-lg text-gray-300">Solved: <span className="text-green-400 font-bold">{leetcodeData.totalSolved}</span></p>
              <p className="text-lg text-gray-300">Easy: <span className="text-green-400">{leetcodeData.easySolved}</span> | Medium: <span className="text-yellow-400">{leetcodeData.mediumSolved}</span> | Hard: <span className="text-red-400">{leetcodeData.hardSolved}</span></p>
              <a
                href={`https://leetcode.com/${leetcodeUsername}/`}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 bg-yellow-500 px-5 py-2 rounded-full text-white font-semibold hover:bg-yellow-600 transition"
              >
                View Profile
              </a>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
