import React from 'react';
import { Target, Eye, Users, Award, Lightbulb, Heart } from 'lucide-react';

const About: React.FC = () => {
  const values = [
    {
      icon: Target,
      title: 'Excellence',
      description: 'We strive for the highest quality in everything we do, from our platform to our partnerships.'
    },
    {
      icon: Users,
      title: 'Collaboration',
      description: 'We believe in the power of bringing together institutions, students, and industry partners.'
    },
    {
      icon: Lightbulb,
      title: 'Innovation',
      description: 'We continuously evolve our technology to provide cutting-edge educational solutions.'
    },
    {
      icon: Heart,
      title: 'Integrity',
      description: 'We maintain the highest standards of honesty and transparency in all our relationships.'
    }
  ];

  const milestones = [
    { year: '2020', title: 'Foundation', description: 'Infinity Education was founded with a vision to revolutionize educational connectivity.' },
    { year: '2021', title: 'First Partnerships', description: 'Established partnerships with 10 leading educational institutions.' },
    { year: '2022', title: 'Platform Launch', description: 'Launched our comprehensive middleware platform serving 1,000+ students.' },
    { year: '2023', title: 'Rapid Growth', description: 'Expanded to 150+ partner institutions and 10,000+ active students.' },
    { year: '2024', title: 'Innovation Hub', description: 'Introduced AI-powered course matching and career guidance features.' }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-900 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              About Infinity Education
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              We are a leading middleware service that connects students with educational institutions, 
              creating seamless pathways to academic and career success.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div className="bg-blue-50 p-8 rounded-xl">
              <div className="flex items-center mb-6">
                <div className="p-3 bg-blue-600 rounded-lg">
                  <Target className="h-8 w-8 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900 ml-4">Our Mission</h2>
              </div>
              <p className="text-gray-700 text-lg leading-relaxed">
                To democratize access to quality education by creating seamless connections between 
                students and educational institutions. We bridge the gap between aspiration and 
                opportunity, ensuring that every learner can find their perfect educational path.
              </p>
            </div>

            <div className="bg-gray-50 p-8 rounded-xl">
              <div className="flex items-center mb-6">
                <div className="p-3 bg-gray-600 rounded-lg">
                  <Eye className="h-8 w-8 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900 ml-4">Our Vision</h2>
              </div>
              <p className="text-gray-700 text-lg leading-relaxed">
                To become the world's most trusted educational middleware platform, creating infinite 
                possibilities for learning and career growth. We envision a future where educational 
                boundaries are limitless and opportunities are accessible to all.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Journey
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From a simple idea to a comprehensive platform serving thousands of students and institutions worldwide.
            </p>
          </div>

          <div className="space-y-8">
            {milestones.map((milestone, index) => (
              <div key={index} className="flex items-start space-x-8 group">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-lg group-hover:bg-blue-700 transition-colors">
                    {milestone.year.slice(-2)}
                  </div>
                </div>
                <div className="flex-1 bg-white p-6 rounded-lg shadow-md group-hover:shadow-lg transition-shadow">
                  <div className="flex items-center mb-2">
                    <h3 className="text-xl font-bold text-gray-900 mr-4">{milestone.title}</h3>
                    <span className="text-blue-600 font-semibold">{milestone.year}</span>
                  </div>
                  <p className="text-gray-600">{milestone.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Values
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The principles that guide everything we do and shape our commitment to educational excellence.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center group">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-6 group-hover:bg-blue-200 transition-colors">
                  <value.icon className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section className="py-20 bg-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              What We Do
            </h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Our comprehensive middleware platform serves as the bridge between educational aspirations and opportunities.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-blue-800 p-8 rounded-xl hover:bg-blue-700 transition-colors">
              <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-6">
                <Users className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-4">For Students</h3>
              <p className="text-blue-100">
                Discover courses, compare institutions, and apply seamlessly through our integrated platform. 
                Get personalized recommendations based on your goals and preferences.
              </p>
            </div>

            <div className="bg-blue-800 p-8 rounded-xl hover:bg-blue-700 transition-colors">
              <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-6">
                <Award className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-4">For Institutions</h3>
              <p className="text-blue-100">
                Reach qualified students, streamline admissions, and manage course offerings through 
                our comprehensive partner dashboard and analytics tools.
              </p>
            </div>

            <div className="bg-blue-800 p-8 rounded-xl hover:bg-blue-700 transition-colors">
              <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-6">
                <Lightbulb className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-4">For Everyone</h3>
              <p className="text-blue-100">
                Create a connected educational ecosystem where institutions, students, and industry 
                partners collaborate for mutual success and growth.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Ready to Be Part of Our Story?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Whether you're a student looking for the perfect course or an institution seeking to expand your reach, 
            we're here to help you succeed.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-lg font-semibold">
              Get Started Today
            </button>
            <button className="px-8 py-4 border-2 border-blue-600 text-blue-600 rounded-lg hover:bg-blue-600 hover:text-white transition-colors text-lg font-semibold">
              Contact Us
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;