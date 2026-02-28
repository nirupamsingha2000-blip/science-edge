'use client';

import Link from 'next/link';
import { useState } from 'react';

const teachersData: Record<string, any> = {
  'rajesh-kumar': {
    id: 'rajesh-kumar',
    name: 'Prof. Rajesh Kumar',
    image: '👨‍🏫',
    subject: 'Physics & Science',
    experience: '15 years',
    students: 5000,
    rating: 4.8,
    specialization: 'Physics Education',
    qualifications: ['B.Tech (IIT Delhi)', 'M.Sc Physics (Delhi University)', 'NPTEL Certified'],
    bio: 'Prof. Rajesh has been teaching physics for 15 years. Known for making complex concepts simple through interactive teaching methods.',
    bio_full: 'Prof. Rajesh Kumar is an experienced physics educator with 15 years of teaching experience. He has trained over 5000 students for competitive exams and board exams. His teaching methodology focuses on conceptual understanding rather than rote learning. He specializes in making complex topics simple and interesting for students.',
    courses: ['Class 9 Science', 'Class 10 Physics', 'Class 11 Physics'],
    achievements: [
      '500+ students scored 90%+',
      'NPTEL certification in Physics',
      'Published 20+ papers on physics education',
      'Best Teacher Award 2023'
    ],
    reviews: [
      { name: 'Arjun', rating: 5, text: 'Best physics teacher ever!' },
      { name: 'Priya', rating: 5, text: 'Clear explanations and great support' },
    ],
    availability: 'Mon, Wed, Fri 6-7 PM IST'
  },
  'anjali-sharma': {
    id: 'anjali-sharma',
    name: 'Dr. Anjali Sharma',
    image: '👩‍🏫',
    subject: 'Chemistry & Biology',
    experience: '12 years',
    students: 4200,
    rating: 4.9,
    specialization: 'Organic Chemistry',
    qualifications: ['B.Sc (Delhi University)', 'M.Sc Chemistry (IIT Bombay)', 'PhD (Delhi University)'],
    bio: 'Dr. Anjali is a chemistry expert with a PhD in organic chemistry. Her innovative teaching methods have helped thousands of students excel.',
    bio_full: 'Dr. Anjali Sharma holds a PhD in Chemistry and has been teaching for 12 years. She specializes in organic chemistry and has published several research papers. Her classes are known for their interactive nature and real-world applications of chemistry concepts. She has helped over 4200 students achieve excellent results in competitive and board exams.',
    courses: ['Class 10 Chemistry', 'Class 11 Chemistry', 'Class 12 Chemistry'],
    achievements: [
      '95% of students score 80%+',
      'PhD in Organic Chemistry',
      'International research publications',
      'Top Educator Award 2022'
    ],
    reviews: [
      { name: 'Neha', rating: 5, text: 'Made chemistry so interesting!' },
      { name: 'Rohan', rating: 4.8, text: 'Best explanations for organic chemistry' },
    ],
    availability: 'Tue, Thu, Sat 6:30-7:30 PM IST'
  },
  'suresh-verma': {
    id: 'suresh-verma',
    name: 'Prof. Suresh Verma',
    image: '👨‍🏫',
    subject: 'Mathematics',
    experience: '18 years',
    students: 6000,
    rating: 4.7,
    specialization: 'Advanced Algebra & Calculus',
    qualifications: ['B.Tech (IIT Kanpur)', 'M.Tech (Mathematics)', 'Certified JEE Coach'],
    bio: 'Prof. Suresh is a math genius who makes calculus and algebra simple. He has trained numerous JEE aspirants.',
    bio_full: 'Prof. Suresh Verma is a highly experienced mathematics educator with 18 years of teaching experience. He specializes in advanced algebra, calculus, and problem-solving techniques. His students have consistently scored high in JEE and board exams. He believes in developing problem-solving skills and mathematical thinking in students.',
    courses: ['Class 11 Mathematics', 'Class 12 Mathematics', 'JEE Preparation'],
    achievements: [
      '1000+ students in top 100 JEE rank',
      'Authored 3 math textbooks',
      'JEE coaching certification',
      'Math Educator of the Year 2023'
    ],
    reviews: [
      { name: 'Aman', rating: 5, text: 'Perfect JEE preparation!' },
      { name: 'Diya', rating: 5, text: 'Made calculus my favorite subject' },
    ],
    availability: 'Mon, Wed, Fri 7-8 PM IST'
  },
  'priya-patel': {
    id: 'priya-patel',
    name: 'Dr. Priya Patel',
    image: '👩‍🏫',
    subject: 'English & Literature',
    experience: '10 years',
    students: 3500,
    rating: 4.6,
    specialization: 'English Language & Writing',
    qualifications: ['B.A English (Oxford)', 'M.A Linguistics (Cambridge)', 'IELTS Examiner'],
    bio: 'Dr. Priya helps students master English language skills and literature analysis with ease.',
    bio_full: 'Dr. Priya Patel is an accomplished English educator with degrees from Oxford and Cambridge. She has 10 years of teaching experience and specializes in language skills and literature analysis. She is also an IELTS examiner and has helped many students achieve excellent scores in English exams.',
    courses: ['Class 9-12 English', 'English Communication', 'Competitive Exam English'],
    achievements: [
      '98% students score A+ in English',
      'IELTS Band 8.5+ students',
      'Published books on English learning',
      'Language Expert Award 2022'
    ],
    reviews: [
      { name: 'Sarah', rating: 5, text: 'English is now my favorite subject!' },
      { name: 'Vikram', rating: 4.5, text: 'Great literature analysis lessons' },
    ],
    availability: 'Tue, Thu, Sun 5-6 PM IST'
  },
};

export default function TeacherProfile({ params }: { params: { id: string } }) {
  const teacher = teachersData[params.id];
  const [isMessageOpen, setIsMessageOpen] = useState(false);

  if (!teacher) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white pt-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl font-bold mb-4">Teacher Not Found</h1>
          <Link href="/courses" className="text-blue-400 hover:text-blue-300">← Back to Courses</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white pt-20">
      {/* Header */}
      <div className="bg-gradient-to-r from-indigo-600 to-purple-600 py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <Link href="/courses" className="text-blue-200 hover:text-white mb-4 inline-block">← Back to Courses</Link>
          <div className="flex items-center gap-8 mb-6">
            <div className="text-8xl">{teacher.image}</div>
            <div>
              <h1 className="text-4xl font-bold mb-2">{teacher.name}</h1>
              <p className="text-xl text-indigo-100 mb-2">{teacher.specialization}</p>
              <div className="flex gap-6">
                <div className="flex items-center gap-2">
                  <span>⭐{teacher.rating}</span>
                  <span className="text-indigo-200">({teacher.students}+ students)</span>
                </div>
                <div>
                  <span className="text-indigo-200">{teacher.experience} experience</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* About */}
            <div className="bg-slate-800 rounded-lg p-6 mb-8 border border-slate-700">
              <h2 className="text-2xl font-bold mb-4">About</h2>
              <p className="text-slate-300 leading-relaxed">{teacher.bio_full}</p>
            </div>

            {/* Qualifications */}
            <div className="bg-slate-800 rounded-lg p-6 mb-8 border border-slate-700">
              <h2 className="text-2xl font-bold mb-4">Qualifications</h2>
              <div className="space-y-2">
                {teacher.qualifications.map((qual: string, idx: number) => (
                  <div key={idx} className="flex items-center gap-3">
                    <span className="text-green-400">✓</span>
                    <span>{qual}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Courses Teaching */}
            <div className="bg-slate-800 rounded-lg p-6 mb-8 border border-slate-700">
              <h2 className="text-2xl font-bold mb-4">Courses Teaching</h2>
              <div className="space-y-2">
                {teacher.courses.map((course: string) => (
                  <div key={course} className="flex items-center gap-3">
                    <span>📚</span>
                    <span>{course}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Achievements */}
            <div className="bg-slate-800 rounded-lg p-6 mb-8 border border-slate-700">
              <h2 className="text-2xl font-bold mb-4">Achievements</h2>
              <div className="space-y-3">
                {teacher.achievements.map((achievement: string) => (
                  <div key={achievement} className="flex items-center gap-3 p-3 bg-slate-700 rounded-lg">
                    <span>🏆</span>
                    <span>{achievement}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Reviews */}
            <div className="bg-slate-800 rounded-lg p-6 border border-slate-700">
              <h2 className="text-2xl font-bold mb-4">Student Reviews</h2>
              <div className="space-y-4">
                {teacher.reviews.map((review: any, idx: number) => (
                  <div key={idx} className="bg-slate-700 p-4 rounded-lg">
                    <div className="flex justify-between items-start mb-2">
                      <span className="font-semibold">{review.name}</span>
                      <span className="text-yellow-400">{'⭐'.repeat(Math.floor(review.rating))}</span>
                    </div>
                    <p className="text-slate-300">{review.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div>
            <div className="bg-slate-800 rounded-lg p-6 border border-slate-700 sticky top-24">
              <div className="text-center mb-6">
                <div className="text-6xl mb-3">{teacher.image}</div>
                <h3 className="text-xl font-bold mb-1">{teacher.name}</h3>
                <p className="text-slate-400 mb-3">{teacher.specialization}</p>
                <div className="text-2xl font-bold text-indigo-400">⭐ {teacher.rating}</div>
              </div>

              <button
                onClick={() => setIsMessageOpen(!isMessageOpen)}
                className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-4 rounded-lg mb-3 transition"
              >
                💬 Send Message
              </button>

              <button className="w-full bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-4 rounded-lg mb-4 transition">
                📅 Schedule Session
              </button>

              <div className="bg-slate-700 rounded-lg p-4 space-y-3">
                <div className="border-b border-slate-600 pb-3">
                  <p className="text-sm text-slate-400">Experience</p>
                  <p className="font-semibold">{teacher.experience}</p>
                </div>
                <div className="border-b border-slate-600 pb-3">
                  <p className="text-sm text-slate-400">Students Taught</p>
                  <p className="font-semibold">{teacher.students}+</p>
                </div>
                <div>
                  <p className="text-sm text-slate-400">Availability</p>
                  <p className="font-semibold text-sm">{teacher.availability}</p>
                </div>
              </div>

              {isMessageOpen && (
                <div className="mt-4 p-3 bg-slate-700 rounded-lg">
                  <textarea
                    placeholder="Send a message to the teacher..."
                    className="w-full bg-slate-600 text-white p-2 rounded mb-2 text-sm"
                    rows={3}
                  ></textarea>
                  <button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 rounded text-sm transition">
                    Send
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
