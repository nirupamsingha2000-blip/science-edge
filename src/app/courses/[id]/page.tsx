'use client';

import { useState } from 'react';
import Link from 'next/link';
import { EnrollModal } from '@/components/EnrollModal';

const courseData: Record<string, any> = {
  '9': {
    id: '9',
    name: 'Class 9',
    description: 'Foundation concepts in Science and Mathematics',
    price: 2999,
    image: '🔬',
    rating: 4.8,
    students: 1250,
    instructor: 'Prof. Rajesh Kumar',
    duration: '10 months',
    lessons: 48,
    chapters: [
      { id: 1, name: 'Matter Around Us', lessons: 8 },
      { id: 2, name: 'Atoms and Molecules', lessons: 6 },
      { id: 3, name: 'Structure of the Atom', lessons: 7 },
      { id: 4, name: 'Motion in One Dimension', lessons: 9 },
      { id: 5, name: 'Gravitation', lessons: 6 },
      { id: 6, name: 'Work and Energy', lessons: 6 },
    ],
    features: ['Live Classes', 'Recorded Sessions', 'Doubt Support', 'Practice Tests', 'Notes & Materials'],
    schedule: ['Mon 6 PM', 'Wed 6 PM', 'Fri 7 PM'],
    reviews: [
      { name: 'Arjun', rating: 5, text: 'Amazing classes! Cleared all doubts' },
      { name: 'Priya', rating: 4.5, text: 'Great teaching methods and support' },
      { name: 'Vikram', rating: 5, text: 'Best value for money coaching' },
    ]
  },
  '10': {
    id: '10',
    name: 'Class 10',
    description: 'Board exam preparation with comprehensive coverage',
    price: 3999,
    image: '📚',
    rating: 4.9,
    students: 2100,
    instructor: 'Dr. Anjali Sharma',
    duration: '12 months',
    lessons: 64,
    chapters: [
      { id: 1, name: 'Acids, Bases & Salts', lessons: 8 },
      { id: 2, name: 'Chemical Reactions', lessons: 9 },
      { id: 3, name: 'Metals & Non-metals', lessons: 7 },
      { id: 4, name: 'Electricity', lessons: 10 },
      { id: 5, name: 'Light & Reflection', lessons: 8 },
      { id: 6, name: 'Sources of Energy', lessons: 8 },
      { id: 7, name: 'Real Numbers', lessons: 6 },
      { id: 8, name: 'Polynomials', lessons: 8 },
    ],
    features: ['Board Exam Focus', 'Weekly Tests', 'Expert Guidance', 'Study Materials', 'Previous Papers'],
    schedule: ['Tue 6:30 PM', 'Thu 6:30 PM', 'Sat 4 PM'],
    reviews: [
      { name: 'Neha', rating: 5, text: 'Scored 95% with this coaching!' },
      { name: 'Rohan', rating: 5, text: 'Every concept is crystal clear' },
      { name: 'Isha', rating: 4.5, text: 'Excellent board exam preparation' },
    ]
  },
  '11': {
    id: '11',
    name: 'Class 11',
    description: 'Advanced concepts for competitive exam preparation',
    price: 4999,
    image: '🚀',
    rating: 4.7,
    students: 890,
    instructor: 'Prof. Suresh Verma',
    duration: '12 months',
    lessons: 72,
    chapters: [
      { id: 1, name: 'Sets & Functions', lessons: 8 },
      { id: 2, name: 'Sequences & Series', lessons: 10 },
      { id: 3, name: 'Trigonometry', lessons: 12 },
      { id: 4, name: 'Kinematics', lessons: 9 },
      { id: 5, name: 'Laws of Motion', lessons: 8 },
      { id: 6, name: 'Work & Energy', lessons: 8 },
      { id: 7, name: 'Chemical Bonding', lessons: 9 },
    ],
    features: ['JEE Prep', 'Advanced Topics', 'Problem Solving', 'Mock Tests', 'Mentorship'],
    schedule: ['Mon 7 PM', 'Wed 7 PM', 'Fri 6 PM', 'Sun 5 PM'],
    reviews: [
      { name: 'Aman', rating: 5, text: 'Perfect for JEE preparation!' },
      { name: 'Diya', rating: 4.8, text: 'Advanced concepts made easy' },
    ]
  },
  '12': {
    id: '12',
    name: 'Class 12',
    description: 'Final year board & competitive exam mastery',
    price: 5999,
    image: '⭐',
    rating: 4.9,
    students: 650,
    instructor: 'Dr. Patel & Team',
    duration: '12 months',
    lessons: 80,
    chapters: [
      { id: 1, name: 'Relations & Functions', lessons: 8 },
      { id: 2, name: 'Integrals & Calculus', lessons: 16 },
      { id: 3, name: 'Electrostatics', lessons: 10 },
      { id: 4, name: 'Current Electricity', lessons: 10 },
      { id: 5, name: 'Coordination Compounds', lessons: 8 },
      { id: 6, name: 'Organic Chemistry', lessons: 12 },
    ],
    features: ['Board Excellence', 'JEE/NEET Ready', 'Full Coverage', 'Intensive Coaching', '1-on-1 Doubt'],
    schedule: ['Daily 6 PM', 'Sat/Sun 5 PM'],
    reviews: [
      { name: 'Akshay', rating: 5, text: 'Secured AIR 150 in JEE!' },
      { name: 'Pooja', rating: 5, text: 'Best coaching for board prep' },
    ]
  },
};

export default function CourseDetail({ params }: { params: { id: string } }) {
  const course = courseData[params.id];
  const [showEnroll, setShowEnroll] = useState(false);
  const [expandedChapter, setExpandedChapter] = useState<number | null>(null);

  if (!course) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white pt-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl font-bold mb-4">Course Not Found</h1>
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
          <div className="flex items-center gap-6">
            <div className="text-6xl">{course.image}</div>
            <div>
              <h1 className="text-4xl font-bold mb-2">{course.name}</h1>
              <p className="text-lg text-indigo-100">{course.description}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Course Info */}
            <div className="bg-slate-800 rounded-lg p-6 mb-8 border border-slate-700">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-indigo-400">{course.lessons}</div>
                  <p className="text-slate-400">Lessons</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-indigo-400">⭐{course.rating}</div>
                  <p className="text-slate-400">Rating</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-indigo-400">{course.students}+</div>
                  <p className="text-slate-400">Students</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-indigo-400">{course.duration}</div>
                  <p className="text-slate-400">Duration</p>
                </div>
              </div>
            </div>

            {/* Features */}
            <div className="bg-slate-800 rounded-lg p-6 mb-8 border border-slate-700">
              <h2 className="text-2xl font-bold mb-4">What's Included</h2>
              <div className="grid grid-cols-2 gap-3">
                {course.features.map((feature: string) => (
                  <div key={feature} className="flex items-center gap-2">
                    <span className="text-green-400">✓</span>
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Curriculum */}
            <div className="bg-slate-800 rounded-lg p-6 border border-slate-700">
              <h2 className="text-2xl font-bold mb-6">Course Curriculum</h2>
              <div className="space-y-2">
                {course.chapters.map((chapter: any) => (
                  <div key={chapter.id}>
                    <button
                      onClick={() => setExpandedChapter(expandedChapter === chapter.id ? null : chapter.id)}
                      className="w-full text-left p-4 bg-slate-700 hover:bg-slate-600 rounded-lg transition flex justify-between items-center"
                    >
                      <span className="font-semibold">{chapter.name}</span>
                      <span className="text-sm text-slate-400">{chapter.lessons} lessons</span>
                    </button>
                    {expandedChapter === chapter.id && (
                      <div className="bg-slate-700/50 p-4 rounded-b-lg space-y-2">
                        {Array.from({ length: chapter.lessons }).map((_, i) => (
                          <div key={i} className="flex items-center gap-2 text-slate-300 pl-4">
                            <span>▶</span>
                            <span>Lesson {i + 1}: {chapter.name}</span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Schedule */}
            <div className="bg-slate-800 rounded-lg p-6 mt-8 border border-slate-700">
              <h2 className="text-2xl font-bold mb-4">Class Schedule</h2>
              <div className="flex flex-wrap gap-3">
                {course.schedule.map((time: string) => (
                  <div key={time} className="bg-indigo-600 px-4 py-2 rounded-lg">
                    {time}
                  </div>
                ))}
              </div>
            </div>

            {/* Reviews */}
            <div className="bg-slate-800 rounded-lg p-6 mt-8 border border-slate-700">
              <h2 className="text-2xl font-bold mb-4">Student Reviews</h2>
              <div className="space-y-4">
                {course.reviews.map((review: any, idx: number) => (
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
              <div className="text-4xl font-bold text-indigo-400 mb-2">₹{course.price}</div>
              <p className="text-slate-400 mb-6">One-time payment for {course.duration} access</p>
              
              <button
                onClick={() => setShowEnroll(true)}
                className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-4 rounded-lg mb-4 transition"
              >
                Enroll Now
              </button>

              <div className="bg-slate-700 rounded-lg p-4 space-y-3">
                <div className="flex items-center gap-3">
                  <span>👨‍🏫</span>
                  <div>
                    <p className="text-sm text-slate-400">Instructor</p>
                    <p className="font-semibold">{course.instructor}</p>
                  </div>
                </div>
                <hr className="border-slate-600" />
                <div className="flex items-center gap-3">
                  <span>📅</span>
                  <div>
                    <p className="text-sm text-slate-400">Duration</p>
                    <p className="font-semibold">{course.duration}</p>
                  </div>
                </div>
                <hr className="border-slate-600" />
                <div className="flex items-center gap-3">
                  <span>📊</span>
                  <div>
                    <p className="text-sm text-slate-400">Students</p>
                    <p className="font-semibold">{course.students}+ enrolled</p>
                  </div>
                </div>
              </div>

              <button className="w-full mt-4 border border-indigo-500 text-indigo-400 hover:bg-indigo-500/10 font-semibold py-2 px-4 rounded-lg transition">
                Add to Wishlist ♥
              </button>
            </div>
          </div>
        </div>
      </div>

      {showEnroll && <EnrollModal onClose={() => setShowEnroll(false)} courseName={course.name} />}
    </div>
  );
}
