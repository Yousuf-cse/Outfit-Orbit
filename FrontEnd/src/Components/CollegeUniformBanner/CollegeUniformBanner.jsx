import { GraduationCap, Users, Shield, ArrowRight, CheckCircle } from "lucide-react"
import collegeUniform from '../../assets/Images/CollegeUniform.jpeg'

export default function CollegeUniformBanner() {
  return (
    <section className="w-full bg-white py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Main Banner */}
        <div className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-gray-50 via-white to-cyan-50 border border-gray-200">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute top-10 left-10 w-32 h-32 border-2 border-cyan-300 rounded-full"></div>
            <div className="absolute bottom-10 right-10 w-24 h-24 border-2 border-gray-300 rounded-full"></div>
            <div className="absolute top-1/2 left-1/4 w-16 h-16 border border-cyan-200 rounded-full"></div>
          </div>

          <div className="relative grid lg:grid-cols-2 gap-12 p-8 lg:p-16 items-center">
            {/* Content Side */}
            <div className="space-y-8">
              {/* Header */}
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-cyan-500 rounded-xl flex items-center justify-center">
                    <GraduationCap className="w-6 h-6 text-white" />
                  </div>
                  <span className="text-cyan-600 font-semibold text-sm tracking-wider uppercase cursor-default">
                    Institutional Solutions
                  </span>
                </div>

                <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight cursor-default">
                  College Uniform
                  <span className="block text-cyan-600 cursor-default">Partnerships</span>
                </h2>

                <p className="text-gray-600 text-lg leading-relaxed cursor-default cursor-default">
                  Partner with us for premium quality uniforms tailored to your institution's needs. From custom designs
                  to bulk orders, we provide comprehensive uniform solutions for colleges nationwide.
                </p>
              </div>

              {/* Features */}
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-cyan-500 flex-shrink-0" />
                  <span className="text-gray-700 text-sm cursor-default">Custom Logo & Branding</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-cyan-500 flex-shrink-0" />
                  <span className="text-gray-700 text-sm cursor-default">Bulk Order Discounts</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-cyan-500 flex-shrink-0" />
                  <span className="text-gray-700 text-sm cursor-default">Quality Guarantee</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-cyan-500 flex-shrink-0" />
                  <span className="text-gray-700 text-sm cursor-default">Flexible Payment Terms</span>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  size="lg"
                  className="bg-cyan-600 hover:bg-cyan-700 text-white px-8 py-3 rounded-xl font-semibold group"
                >
                  Request Partnership
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </button>
                <button
                  variant="outline"
                  size="lg"
                  className="border-gray-300 text-gray-700 hover:bg-gray-50 px-8 py-3 rounded-xl font-semibold"
                >
                  View Catalog
                </button>
              </div>

              {/* Trust Indicators */}
              <div className="flex items-center gap-6 pt-4 border-t border-gray-200">
                <div className="flex items-center gap-2">
                  <Users className="w-5 h-5 text-gray-400" />
                  <span className="text-gray-600 text-sm cursor-default">500+ Colleges</span>
                </div>
                <div className="flex items-center gap-2">
                  <Shield className="w-5 h-5 text-gray-400" />
                  <span className="text-gray-600 text-sm cursor-default">ISO Certified</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-gray-400" />
                  <span className="text-gray-600 text-sm cursor-default">5 Year Warranty</span>
                </div>
              </div>
            </div>

            {/* Visual Side */}
            <div className="relative">
              <div className="relative rounded-xl overflow-hidden bg-cover bg-center aspect-square lg:aspect-auto lg:h-96"
              style={{ backgroundImage: `url(${collegeUniform})` }}
              >
                {/* Placeholder for uniform images */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center space-y-4">
                    <div className="w-24 h-24 bg-cyan-100 rounded-full flex items-center justify-center mx-auto">
                      <GraduationCap className="w-12 h-12 text-cyan-600" />
                    </div>
                    <div className="space-y-2">
                      <div className="text-white bg-gray-700 rounded-lg p-2 font-semibold cursor-default">Premium Quality Uniforms</div>
                      <div className="text-white bg-gray-600 rounded-lg p-1 text-sm cursor-default">Custom designed for your institution</div>
                    </div>
                  </div>
                </div>

                {/* Floating Cards */}
                <div className="hidden sm:block">
                <div className="absolute top-4 left-4 bg-white rounded-lg p-3 shadow-lg">
                  <div className="text-xs text-gray-500 mb-1 cursor-default">Starting from</div>
                  <div className="text-lg font-bold text-gray-900 cursor-default">₹299/piece</div>
                </div>

                <div className="absolute bottom-4 right-4 bg-white rounded-lg p-3 shadow-lg">
                  <div className="text-xs text-gray-500 mb-1 cursor-default">Minimum Order</div>
                  <div className="text-lg font-bold text-gray-900 cursor-default">50 pieces</div>
                </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Secondary Info Cards */}
        <div className="grid md:grid-cols-3 gap-6 mt-12">
          <div className="bg-white rounded-xl border border-gray-200 p-6 text-center hover:shadow-lg transition-shadow">
            <div className="w-12 h-12 bg-cyan-100 rounded-xl flex items-center justify-center mx-auto mb-4">
              <Users className="w-6 h-6 text-cyan-600" />
            </div>
            <h3 className="font-semibold text-gray-900 mb-2 cursor-default">Bulk Orders</h3>
            <p className="text-gray-600 text-sm cursor-default">
              Special pricing for large quantity orders with flexible delivery schedules.
            </p>
          </div>

          <div className="bg-white rounded-xl border border-gray-200 p-6 text-center hover:shadow-lg transition-shadow">
            <div className="w-12 h-12 bg-cyan-100 rounded-xl flex items-center justify-center mx-auto mb-4">
              <Shield className="w-6 h-6 text-cyan-600" />
            </div>
            <h3 className="font-semibold text-gray-900 mb-2 cursor-default">Quality Assurance</h3>
            <p className="text-gray-600 text-sm cursor-default">
              Premium fabrics and construction with comprehensive quality guarantees.
            </p>
          </div>

          <div className="bg-white rounded-xl border border-gray-200 p-6 text-center hover:shadow-lg transition-shadow">
            <div className="w-12 h-12 bg-cyan-100 rounded-xl flex items-center justify-center mx-auto mb-4">
              <GraduationCap className="w-6 h-6 text-cyan-600" />
            </div>
            <h3 className="font-semibold text-gray-900 mb-2 cursor-default">Custom Design</h3>
            <p className="text-gray-600 text-sm cursor-default">
              Tailored designs with your college logo, colors, and specific requirements.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}