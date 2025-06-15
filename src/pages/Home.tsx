import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Users, BookOpen, Award, TrendingUp, Star, CheckCircle } from 'lucide-react';
import { useApp } from '../context/AppContext';
import CourseCard from '../components/ui/CourseCard';

const Home: React.FC = () => {
  const { courses } = useApp();
  const featuredCourses = courses.filter(course => course.featured).slice(0, 3);

  const stats = [
    { label: 'Active Courses', value: '500+', icon: BookOpen },
    { label: 'Partner Institutions', value: '150+', icon: Users },
    { label: 'Success Rate', value: '95%', icon: Award },
    { label: 'Students Placed', value: '10K+', icon: TrendingUp },
  ];

  const features = [
    {
      icon: Users,
      title: 'Seamless Integration',
      description: 'Connect students with top educational institutions through our advanced middleware platform.'
    },
    {
      icon: BookOpen,
      title: 'Diverse Course Catalog',
      description: 'Access thousands of courses across multiple disciplines and learning formats.'
    },
    {
      icon: Award,
      title: 'Quality Assurance',
      description: 'All partner institutions are vetted for quality and accreditation standards.'
    },
    {
      icon: TrendingUp,
      title: 'Career Growth',
      description: 'Track your progress and connect with career opportunities post-graduation.'
    }
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'Data Science Graduate',
      content: 'Infinity Education helped me find the perfect program that matched my career goals. The seamless application process was incredible.',
      rating: 5,
      avatar: 'https://images.pexels.com/photos/3767411/pexels-photo-3767411.jpeg?auto=compress&cs=tinysrgb&w=100'
    },
    {
      name: 'Michael Chen',
      role: 'MBA Student',
      content: 'The platform made comparing different MBA programs so easy. I found my dream school within weeks of searching.',
      rating: 5,
      avatar: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=100'
    },
    {
      name: 'Emily Rodriguez',
      role: 'Education Director',
      content: 'As an institution partner, the middleware service has streamlined our admissions process and helped us reach qualified candidates.',
      rating: 5,
      avatar: 'https://images.pexels.com/photos/3785077/pexels-photo-3785077.jpeg?auto=compress&cs=tinysrgb&w=100'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-900 via-blue-800 to-blue-900 text-white">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Connecting Institutions,<br />
              <span className="text-blue-300">Courses, and Careers</span><br />
              Seamlessly
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Your gateway to infinite educational possibilities. Discover, apply, and excel 
              with our comprehensive middleware platform.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/courses"
                className="inline-flex items-center px-8 py-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-lg font-semibold group"
              >
                Explore Courses
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/partners"
                className="inline-flex items-center px-8 py-4 bg-white text-blue-900 rounded-lg hover:bg-gray-100 transition-colors text-lg font-semibold"
              >
                Become a Partner
              </Link>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white to-transparent"></div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4 group-hover:bg-blue-200 transition-colors">
                  <stat.icon className="h-8 w-8 text-blue-600" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Infinity Education
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our middleware platform bridges the gap between learners and educational institutions, 
              providing seamless access to quality education.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow group">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-100 rounded-lg mb-6 group-hover:bg-blue-200 transition-colors">
                  <feature.icon className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Courses */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Featured Courses
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover some of our most popular courses from top-rated institutions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {featuredCourses.map((course) => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>

          <div className="text-center">
            <Link
              to="/courses"
              className="inline-flex items-center px-8 py-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-lg font-semibold group"
            >
              View All Courses
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What Our Community Says
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Hear from students and partners who have experienced success through our platform.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-6 italic">"{testimonial.content}"</p>
                <div className="flex items-center">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                    <p className="text-gray-600 text-sm">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Start Your Educational Journey?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Join thousands of students and institutions who trust Infinity Education 
            for seamless educational connections.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/courses"
              className="inline-flex items-center px-8 py-4 bg-white text-blue-900 rounded-lg hover:bg-gray-100 transition-colors text-lg font-semibold"
            >
              Get Started Today
            </Link>
            <Link
              to="/about"
              className="inline-flex items-center px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-blue-900 transition-colors text-lg font-semibold"
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;