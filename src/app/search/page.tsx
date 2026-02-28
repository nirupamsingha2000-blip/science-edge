'use client';

import { useState } from 'react';
import Link from 'next/link';

const allCourses = [
  { id: '9', name: 'Class 9', price: 2999, rating: 4.8, students: 1250, instructor: 'Prof. Rajesh Kumar', subject: 'Science' },
  { id: '10', name: 'Class 10', price: 3999, rating: 4.9, students: 2100, instructor: 'Dr. Anjali Sharma', subject: 'Physics' },
  { id: '11', name: 'Class 11', price: 4999, rating: 4.7, students: 890, instructor: 'Prof. Suresh Verma', subject: 'Math' },
  { id: '12', name: 'Class 12', price: 5999, rating: 4.9, students: 650, instructor: 'Dr. Patel & Team', subject: 'Chemistry' },
];

export default function SearchFilters() {
  const [searchQuery, setSearchQuery] = useState('');
  const [filters, setFilters] = useState({
    priceRange: 'all',
    rating: 'all',
    subject: 'all',
  });
  const [filteredCourses, setFilteredCourses] = useState(allCourses);

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    filterCourses(query, filters);
  };

  const handleFilterChange = (filterName: string, value: string) => {
    const newFilters = { ...filters, [filterName]: value };
    setFilters(newFilters);
    filterCourses(searchQuery, newFilters);
  };

  const filterCourses = (query: string, activeFilters: any) => {
    let results = allCourses;

    // Search filter
    if (query) {
      results = results.filter(course =>
        course.name.toLowerCase().includes(query.toLowerCase()) ||
        course.subject.toLowerCase().includes(query.toLowerCase()) ||
        course.instructor.toLowerCase().includes(query.toLowerCase())
      );
    }

    // Price filter
    if (activeFilters.priceRange !== 'all') {
      const [min, max] = activeFilters.priceRange.split('-').map(Number);
      results = results.filter(course => course.price >= min && course.price <= max);
    }

    // Rating filter
    if (activeFilters.rating !== 'all') {
      results = results.filter(course => course.rating >= Number(activeFilters.rating));
    }

    // Subject filter
    if (activeFilters.subject !== 'all') {
      results = results.filter(course => course.subject === activeFilters.subject);
    }

    setFilteredCourses(results);
  };

  return (
    <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white min-h-screen pt-20">
      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Search Bar */}
        <div className="mb-12">
          <h1 className="text-4xl font-bold mb-6">Find Your Course</h1>
          <div className="relative">
            <input
              type="text"
              placeholder="Search courses, subjects, or instructors..."
              value={searchQuery}
              onChange={(e) => handleSearch(e.target.value)}
              className="w-full bg-slate-800 border border-slate-700 text-white p-4 rounded-lg pl-12"
            />
            <span className="absolute left-4 top-4 text-xl">🔍</span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Filters Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-slate-800 rounded-lg p-6 border border-slate-700 sticky top-24">
              <h3 className="text-xl font-bold mb-4">Filters</h3>

              {/* Price Range */}
              <div className="mb-6">
                <label className="block text-sm font-semibold mb-3">Price Range</label>
                <select
                  value={filters.priceRange}
                  onChange={(e) => handleFilterChange('priceRange', e.target.value)}
                  className="w-full bg-slate-700 text-white p-2 rounded border border-slate-600"
                >
                  <option value="all">All Prices</option>
                  <option value="0-3000">₹0 - ₹3,000</option>
                  <option value="3000-5000">₹3,000 - ₹5,000</option>
                  <option value="5000-10000">₹5,000+</option>
                </select>
              </div>

              {/* Rating */}
              <div className="mb-6">
                <label className="block text-sm font-semibold mb-3">Rating</label>
                <select
                  value={filters.rating}
                  onChange={(e) => handleFilterChange('rating', e.target.value)}
                  className="w-full bg-slate-700 text-white p-2 rounded border border-slate-600"
                >
                  <option value="all">All Ratings</option>
                  <option value="4">⭐ 4.0+</option>
                  <option value="4.5">⭐ 4.5+</option>
                  <option value="4.8">⭐ 4.8+</option>
                </select>
              </div>

              {/* Subject */}
              <div className="mb-6">
                <label className="block text-sm font-semibold mb-3">Subject</label>
                <select
                  value={filters.subject}
                  onChange={(e) => handleFilterChange('subject', e.target.value)}
                  className="w-full bg-slate-700 text-white p-2 rounded border border-slate-600"
                >
                  <option value="all">All Subjects</option>
                  <option value="Science">Science</option>
                  <option value="Physics">Physics</option>
                  <option value="Chemistry">Chemistry</option>
                  <option value="Math">Math</option>
                </select>
              </div>

              <button
                onClick={() => {
                  setSearchQuery('');
                  setFilters({ priceRange: 'all', rating: 'all', subject: 'all' });
                  setFilteredCourses(allCourses);
                }}
                className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 rounded transition"
              >
                Reset Filters
              </button>
            </div>
          </div>

          {/* Results */}
          <div className="lg:col-span-3">
            <div className="mb-4">
              <p className="text-slate-400">
                Showing <span className="text-white font-bold">{filteredCourses.length}</span> results
              </p>
            </div>

            {filteredCourses.length > 0 ? (
              <div className="grid gap-4">
                {filteredCourses.map((course) => (
                  <Link key={course.id} href={`/courses/${course.id}`}>
                    <div className="bg-slate-800 border border-slate-700 rounded-lg p-6 hover:border-indigo-500 transition cursor-pointer">
                      <div className="flex justify-between items-start mb-3">
                        <h3 className="text-xl font-bold">{course.name}</h3>
                        <div className="text-2xl font-bold text-indigo-400">₹{course.price}</div>
                      </div>
                      <p className="text-slate-400 mb-3">{course.subject}</p>
                      <p className="text-sm text-slate-500 mb-3">by {course.instructor}</p>
                      <div className="flex justify-between items-center">
                        <div className="flex gap-4">
                          <span className="text-yellow-400">⭐ {course.rating}</span>
                          <span className="text-slate-400">{course.students}+ students</span>
                        </div>
                        <span className="text-indigo-400 hover:text-indigo-300">View Course →</span>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <p className="text-xl text-slate-400 mb-4">No courses found matching your criteria</p>
                <button
                  onClick={() => {
                    setSearchQuery('');
                    setFilters({ priceRange: 'all', rating: 'all', subject: 'all' });
                    setFilteredCourses(allCourses);
                  }}
                  className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 px-6 rounded transition"
                >
                  Reset Search
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
