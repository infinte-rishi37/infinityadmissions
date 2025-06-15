import React, { useState, useMemo } from 'react';
import { Search, Filter, Grid, List, SortAsc } from 'lucide-react';
import { useApp } from '../context/AppContext';
import CourseCard from '../components/ui/CourseCard';

const Courses: React.FC = () => {
  const { courses } = useApp();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedInstitution, setSelectedInstitution] = useState('');
  const [selectedType, setSelectedType] = useState('');
  const [selectedMode, setSelectedMode] = useState('');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [sortBy, setSortBy] = useState('title');

  // Get unique values for filters
  const institutions = useMemo(() => 
    Array.from(new Set(courses.map(course => course.institution))).sort(),
    [courses]
  );

  const courseTypes = useMemo(() => 
    Array.from(new Set(courses.map(course => course.type))).sort(),
    [courses]
  );

  const modes = useMemo(() => 
    Array.from(new Set(courses.map(course => course.mode))).sort(),
    [courses]
  );

  // Filter and sort courses
  const filteredCourses = useMemo(() => {
    let filtered = courses.filter(course => {
      const matchesSearch = course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           course.institution.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           course.description.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesInstitution = !selectedInstitution || course.institution === selectedInstitution;
      const matchesType = !selectedType || course.type === selectedType;
      const matchesMode = !selectedMode || course.mode === selectedMode;
      
      return matchesSearch && matchesInstitution && matchesType && matchesMode;
    });

    // Sort courses
    filtered.sort((a, b) => {
      switch (sortBy) {
        case 'title':
          return a.title.localeCompare(b.title);
        case 'institution':
          return a.institution.localeCompare(b.institution);
        case 'type':
          return a.type.localeCompare(b.type);
        case 'duration':
          return a.duration.localeCompare(b.duration);
        default:
          return 0;
      }
    });

    return filtered;
  }, [courses, searchTerm, selectedInstitution, selectedType, selectedMode, sortBy]);

  const clearFilters = () => {
    setSearchTerm('');
    setSelectedInstitution('');
    setSelectedType('');
    setSelectedMode('');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Course Catalog</h1>
          <p className="text-gray-600">
            Discover and explore courses from our partner institutions. Use filters to find the perfect match for your goals.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Filters Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl shadow-md p-6 sticky top-8">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-lg font-semibold text-gray-900">Filters</h2>
                <button
                  onClick={clearFilters}
                  className="text-sm text-blue-600 hover:text-blue-700 font-medium"
                >
                  Clear All
                </button>
              </div>

              <div className="space-y-6">
                {/* Search */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Search
                  </label>
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                    <input
                      type="text"
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      placeholder="Search courses..."
                      className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                </div>

                {/* Institution Filter */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Institution
                  </label>
                  <select
                    value={selectedInstitution}
                    onChange={(e) => setSelectedInstitution(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="">All Institutions</option>
                    {institutions.map(institution => (
                      <option key={institution} value={institution}>
                        {institution}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Course Type Filter */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Course Type
                  </label>
                  <select
                    value={selectedType}
                    onChange={(e) => setSelectedType(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="">All Types</option>
                    {courseTypes.map(type => (
                      <option key={type} value={type}>
                        {type}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Mode Filter */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Learning Mode
                  </label>
                  <select
                    value={selectedMode}
                    onChange={(e) => setSelectedMode(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="">All Modes</option>
                    {modes.map(mode => (
                      <option key={mode} value={mode}>
                        {mode}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="mt-6 pt-6 border-t border-gray-200">
                <p className="text-sm text-gray-600">
                  <span className="font-medium">{filteredCourses.length}</span> courses found
                </p>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            {/* Toolbar */}
            <div className="bg-white rounded-xl shadow-md p-4 mb-6">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <div className="flex items-center space-x-4">
                  <div className="flex items-center space-x-2">
                    <SortAsc className="h-4 w-4 text-gray-500" />
                    <span className="text-sm font-medium text-gray-700">Sort by:</span>
                    <select
                      value={sortBy}
                      onChange={(e) => setSortBy(e.target.value)}
                      className="px-3 py-1 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    >
                      <option value="title">Title</option>
                      <option value="institution">Institution</option>
                      <option value="type">Type</option>
                      <option value="duration">Duration</option>
                    </select>
                  </div>
                </div>

                <div className="flex items-center space-x-2">
                  <span className="text-sm font-medium text-gray-700">View:</span>
                  <div className="flex border border-gray-300 rounded-lg overflow-hidden">
                    <button
                      onClick={() => setViewMode('grid')}
                      className={`p-2 ${viewMode === 'grid' ? 'bg-blue-600 text-white' : 'bg-white text-gray-600 hover:bg-gray-50'}`}
                    >
                      <Grid className="h-4 w-4" />
                    </button>
                    <button
                      onClick={() => setViewMode('list')}
                      className={`p-2 ${viewMode === 'list' ? 'bg-blue-600 text-white' : 'bg-white text-gray-600 hover:bg-gray-50'}`}
                    >
                      <List className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Courses Grid/List */}
            {filteredCourses.length === 0 ? (
              <div className="bg-white rounded-xl shadow-md p-12 text-center">
                <Filter className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                <h3 className="text-lg font-medium text-gray-900 mb-2">No courses found</h3>
                <p className="text-gray-600 mb-4">
                  Try adjusting your filters or search terms to find more courses.
                </p>
                <button
                  onClick={clearFilters}
                  className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Clear Filters
                </button>
              </div>
            ) : (
              <div className={`grid gap-6 ${
                viewMode === 'grid' 
                  ? 'grid-cols-1 md:grid-cols-2 xl:grid-cols-3' 
                  : 'grid-cols-1'
              }`}>
                {filteredCourses.map((course) => (
                  <CourseCard key={course.id} course={course} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Courses;