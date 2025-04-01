
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, BookOpen, Award, Users, BarChart, Monitor, MessageSquare, Star, Play, CheckCircle2, Clock } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const SwiftLearnEducation = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-50 to-white">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="relative pt-20 pb-16 md:pt-32 md:pb-24 overflow-hidden">
          <div className="absolute top-0 right-0 w-1/2 h-full -z-10 bg-indigo-50 clip-path-hero"></div>
          <div className="absolute top-20 right-20 -z-10 opacity-20">
            <svg width="600" height="600" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
              <path fill="#4F46E5" d="M39.5,-66.2C52,-59.5,63.5,-49.4,70.7,-37C78,-24.5,81,-9.7,79.8,5.2C78.5,20.1,73,35.1,64,47.6C54.9,60.2,42.3,70.2,28.7,72.8C15,75.3,0.3,70.4,-15.6,67.7C-31.4,65.1,-48.5,64.6,-61.9,57C-75.4,49.3,-85.2,34.5,-87.6,18.8C-90,3,-85,-13.7,-77.9,-29.1C-70.7,-44.5,-61.5,-58.6,-48.7,-65.3C-36,-71.9,-19.5,-71,-2.9,-67.1C13.7,-63.2,27.1,-72.9,39.5,-66.2Z" transform="translate(100 100)" />
            </svg>
          </div>
          
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <span className="inline-block py-1 px-3 rounded-full bg-indigo-100 text-indigo-700 font-medium text-sm mb-4">Interactive Learning Platform</span>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight text-navy-dark">
                  Learn <span className="text-indigo-600">Faster</span>, Understand <span className="text-indigo-600">Better</span>
                </h1>
                <p className="text-lg md:text-xl text-navy-light mb-8">
                  SwiftLearn combines interactive lessons, gamified challenges, and personalized learning paths to help you master any subject at your own pace.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-6 text-lg">
                    Start Free Trial <ArrowRight className="ml-2" />
                  </Button>
                  <Button variant="outline" className="border-indigo-600 text-indigo-600 hover:bg-indigo-50 px-8 py-6 text-lg">
                    View Demo <Play className="ml-2 h-4 w-4" />
                  </Button>
                </div>
                <div className="mt-8 flex items-center">
                  <div className="flex -space-x-2 mr-4">
                    {[1, 2, 3, 4, 5].map((item) => (
                      <div key={item} className="w-8 h-8 rounded-full border-2 border-white bg-gray-200"></div>
                    ))}
                  </div>
                  <div className="text-navy-light">
                    <span className="font-bold text-indigo-600">50,000+</span> students already learning
                  </div>
                </div>
              </div>
              <div className="relative">
                <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100 relative z-10">
                  <div className="p-4 bg-indigo-600 text-white flex justify-between items-center">
                    <div className="flex items-center">
                      <BookOpen className="h-5 w-5 mr-2" />
                      <span className="font-medium">Introduction to Data Science</span>
                    </div>
                    <div className="flex items-center">
                      <Star className="h-4 w-4 text-yellow-300 fill-yellow-300" />
                      <Star className="h-4 w-4 text-yellow-300 fill-yellow-300" />
                      <Star className="h-4 w-4 text-yellow-300 fill-yellow-300" />
                      <Star className="h-4 w-4 text-yellow-300 fill-yellow-300" />
                      <Star className="h-4 w-4 text-yellow-300 fill-yellow-300" />
                    </div>
                  </div>
                  <img 
                    src="https://images.unsplash.com/photo-1501504905252-473c47e087f8" 
                    alt="SwiftLearn Data Science Course" 
                    className="w-full h-64 object-cover object-center"
                  />
                  <div className="p-6">
                    <div className="flex justify-between items-center mb-4">
                      <div className="text-sm text-navy-light flex items-center">
                        <Users className="h-4 w-4 mr-1" />
                        12,345 students
                      </div>
                      <div className="text-sm text-navy-light flex items-center">
                        <Clock className="h-4 w-4 mr-1" />
                        42 hours
                      </div>
                      <div className="text-sm text-navy-light flex items-center">
                        <BarChart className="h-4 w-4 mr-1" />
                        Intermediate
                      </div>
                    </div>
                    <div className="space-y-3">
                      <div className="flex justify-between items-center">
                        <div className="font-medium">Course Progress</div>
                        <div className="text-sm text-indigo-600 font-medium">75%</div>
                      </div>
                      <div className="w-full h-2 bg-gray-100 rounded-full">
                        <div className="h-full bg-indigo-600 rounded-full" style={{ width: "75%" }}></div>
                      </div>
                    </div>
                    <Button className="mt-4 w-full bg-indigo-600 hover:bg-indigo-700 text-white">
                      Continue Learning
                    </Button>
                  </div>
                </div>
                
                {/* Floating Elements */}
                <div className="absolute top-1/2 -right-12 transform -translate-y-1/2 bg-white p-4 rounded-xl shadow-lg border border-gray-100 hidden lg:block">
                  <div className="flex items-center">
                    <div className="bg-green-100 p-2 rounded-lg mr-3">
                      <Award className="h-6 w-6 text-green-600" />
                    </div>
                    <div>
                      <p className="text-sm text-navy-light">You earned</p>
                      <p className="font-medium text-navy-dark">Python Expert Badge</p>
                    </div>
                  </div>
                </div>
                
                <div className="absolute -bottom-10 -left-10 bg-white p-4 rounded-xl shadow-lg border border-gray-100 max-w-xs hidden lg:block">
                  <div className="flex items-start">
                    <div className="bg-blue-100 p-2 rounded-lg mr-3 mt-1">
                      <MessageSquare className="h-5 w-5 text-blue-600" />
                    </div>
                    <div>
                      <p className="font-medium text-navy-dark">Great progress!</p>
                      <p className="text-sm text-navy-light">You're in the top 5% of students this week.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Features Section */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="inline-block py-1 px-3 rounded-full bg-indigo-100 text-indigo-700 font-medium text-sm mb-4">How SwiftLearn Works</span>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-navy-dark">Learn Anything, Anywhere, Anytime</h2>
              <p className="text-lg text-navy-light">Our platform is designed to make learning engaging, effective, and accessible for everyone.</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: "Personalized Learning Paths",
                  description: "AI-powered curriculum adapts to your learning style, strengths, and weaknesses in real-time.",
                  icon: <BarChart className="h-6 w-6 text-indigo-600" />,
                },
                {
                  title: "Interactive Video Lessons",
                  description: "Engage with content through interactive elements that test your understanding as you learn.",
                  icon: <Monitor className="h-6 w-6 text-indigo-600" />,
                },
                {
                  title: "Learn With Others",
                  description: "Join study groups, participate in discussions, and collaborate on projects with peers.",
                  icon: <Users className="h-6 w-6 text-indigo-600" />,
                },
              ].map((feature, index) => (
                <div key={index} className="bg-white p-8 rounded-xl shadow-md border border-gray-100 hover:shadow-lg transition-all duration-300">
                  <div className="bg-indigo-100 p-3 rounded-lg inline-block mb-6">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-navy-dark">{feature.title}</h3>
                  <p className="text-navy-light">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Popular Courses */}
        <section className="py-16 md:py-24 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="inline-block py-1 px-3 rounded-full bg-indigo-100 text-indigo-700 font-medium text-sm mb-4">Courses For Everyone</span>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-navy-dark">Explore Our Most Popular Courses</h2>
              <p className="text-lg text-navy-light">From beginner to advanced, we have courses to help you achieve your goals.</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "Complete Python Developer",
                  instructor: "Dr. Sarah Williams",
                  students: "34,567",
                  level: "Beginner",
                  image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8"
                },
                {
                  title: "Data Science Fundamentals",
                  instructor: "Prof. Michael Chen",
                  students: "28,912",
                  level: "Intermediate",
                  image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8"
                },
                {
                  title: "Web Development Bootcamp",
                  instructor: "Jessica Taylor",
                  students: "45,234",
                  level: "All Levels",
                  image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8"
                },
              ].map((course, index) => (
                <div key={index} className="bg-white rounded-xl shadow-md border border-gray-100 overflow-hidden hover:shadow-lg transition-all duration-300 group">
                  <div className="relative">
                    <img 
                      src={course.image} 
                      alt={course.title} 
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-4 right-4 bg-white py-1 px-3 rounded-full text-xs font-medium text-indigo-600">
                      {course.level}
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2 text-navy-dark">{course.title}</h3>
                    <p className="text-navy-light mb-4">by {course.instructor}</p>
                    <div className="flex justify-between items-center">
                      <div className="flex items-center">
                        <Users className="h-4 w-4 text-navy-light mr-1" />
                        <span className="text-sm text-navy-light">{course.students} students</span>
                      </div>
                      <div className="flex items-center">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <Star key={star} className="h-4 w-4 text-yellow-400 fill-yellow-400" />
                        ))}
                      </div>
                    </div>
                    <Button className="w-full mt-4 bg-indigo-600 hover:bg-indigo-700 text-white">
                      Enroll Now
                    </Button>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="text-center mt-12">
              <Button variant="outline" className="border-indigo-600 text-indigo-600 hover:bg-indigo-50">
                Browse All Courses
              </Button>
            </div>
          </div>
        </section>
        
        {/* Testimonials */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="inline-block py-1 px-3 rounded-full bg-indigo-100 text-indigo-700 font-medium text-sm mb-4">Success Stories</span>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-navy-dark">What Our Students Say</h2>
              <p className="text-lg text-navy-light">Join thousands of satisfied learners who have transformed their careers with SwiftLearn.</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  name: "David Cooper",
                  role: "Software Developer",
                  quote: "The Python Developer course helped me switch careers from finance to tech. The interactive challenges and real-world projects gave me the confidence to apply for developer roles.",
                },
                {
                  name: "Emma Richards",
                  role: "Data Analyst",
                  quote: "SwiftLearn's Data Science course is exceptional. The personalized learning path helped me focus on areas I struggled with, and the community support was invaluable.",
                },
                {
                  name: "Jason Miller",
                  role: "Web Developer",
                  quote: "I tried many platforms, but SwiftLearn's gamified approach kept me motivated. I completed the Web Development Bootcamp in 3 months and landed my dream job!",
                },
              ].map((testimonial, index) => (
                <div key={index} className="bg-white p-8 rounded-xl shadow-md border border-gray-100">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 rounded-full bg-indigo-100 mr-4"></div>
                    <div>
                      <p className="font-medium text-navy-dark">{testimonial.name}</p>
                      <p className="text-sm text-navy-light">{testimonial.role}</p>
                    </div>
                  </div>
                  <p className="text-navy-light">&ldquo;{testimonial.quote}&rdquo;</p>
                  <div className="mt-4 flex">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star key={star} className="h-4 w-4 text-yellow-400 fill-yellow-400" />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Pricing Section */}
        <section className="py-16 md:py-24 bg-indigo-50">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="inline-block py-1 px-3 rounded-full bg-indigo-100 text-indigo-700 font-medium text-sm mb-4">Pricing Plans</span>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-navy-dark">Choose Your Learning Journey</h2>
              <p className="text-lg text-navy-light">Flexible plans for individuals and teams with no long-term commitments.</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {[
                {
                  name: "Basic",
                  price: "$9.99",
                  period: "per month",
                  description: "Perfect for casual learners and beginners",
                  features: [
                    "Access to 50+ basic courses",
                    "Interactive quizzes",
                    "Mobile app access",
                    "Course completion certificates",
                  ],
                  button: "Start Free Trial",
                  highlight: false,
                },
                {
                  name: "Pro",
                  price: "$19.99",
                  period: "per month",
                  description: "Our most popular plan for serious learners",
                  features: [
                    "Access to all 300+ courses",
                    "Personalized learning paths",
                    "1-on-1 mentor sessions (2/month)",
                    "Project-based assessments",
                    "Priority support",
                  ],
                  button: "Start Free Trial",
                  highlight: true,
                },
                {
                  name: "Team",
                  price: "$49.99",
                  period: "per month",
                  description: "For organizations and learning groups",
                  features: [
                    "Everything in Pro plan",
                    "Up to 5 team members",
                    "Team progress dashboard",
                    "Collaborative projects",
                    "Custom learning paths",
                    "Dedicated account manager",
                  ],
                  button: "Contact Sales",
                  highlight: false,
                },
              ].map((plan, index) => (
                <div 
                  key={index} 
                  className={`rounded-xl shadow-md overflow-hidden ${
                    plan.highlight 
                      ? "bg-white border-2 border-indigo-600 relative shadow-lg scale-105 z-10" 
                      : "bg-white border border-gray-100"
                  }`}
                >
                  {plan.highlight && (
                    <div className="absolute top-0 left-0 right-0 bg-indigo-600 py-1 text-center text-white text-sm font-medium">
                      Most Popular
                    </div>
                  )}
                  <div className={`p-8 ${plan.highlight ? "pt-12" : ""}`}>
                    <h3 className="text-xl font-semibold text-navy-dark mb-4">{plan.name}</h3>
                    <div className="flex items-baseline mb-4">
                      <span className="text-4xl font-bold text-navy-dark">{plan.price}</span>
                      <span className="text-navy-light ml-2">{plan.period}</span>
                    </div>
                    <p className="text-navy-light mb-6">{plan.description}</p>
                    <Button 
                      className={`w-full ${
                        plan.highlight 
                          ? "bg-indigo-600 hover:bg-indigo-700 text-white" 
                          : "bg-white border border-indigo-600 text-indigo-600 hover:bg-indigo-50"
                      }`}
                    >
                      {plan.button}
                    </Button>
                  </div>
                  <div className="bg-gray-50 p-8">
                    <p className="font-medium text-navy-dark mb-4">What's included:</p>
                    <ul className="space-y-3">
                      {plan.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start">
                          <CheckCircle2 className="h-5 w-5 text-indigo-600 mr-2 flex-shrink-0" />
                          <span className="text-navy-light">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-16 md:py-24 bg-indigo-600 text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Learning?</h2>
              <p className="text-lg mb-8 text-white/90">Join over 200,000 learners already transforming their careers with SwiftLearn.</p>
              <Button className="bg-white text-indigo-600 hover:bg-indigo-50 px-8 py-6 text-lg">
                Get Started For Free
              </Button>
              <p className="mt-4 text-white/80">No credit card required. 14-day free trial.</p>
            </div>
          </div>
        </section>
        
        {/* Back to Projects */}
        <div className="container mx-auto px-4 py-12">
          <Link to="/#work">
            <Button variant="outline" className="border-redox text-redox hover:bg-redox/10">
              Back to Projects
            </Button>
          </Link>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default SwiftLearnEducation;
