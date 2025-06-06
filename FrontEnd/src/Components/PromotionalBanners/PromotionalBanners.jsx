import { ChevronLeft, ChevronRight, ShoppingBag, Percent, Star } from "lucide-react"
import { useState } from "react"
import { Link } from "react-router-dom"

export default function PromotionalBanners() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % 3)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + 3) % 3)
  }

  return (
    <div className="w-full bg-white py-12 px-4 mt-4">
      {/* Desktop Layout */}
      <div className="hidden lg:flex max-w-7xl mx-auto gap-8 items-center">
        {/* Left Side Banners */}
        <div className="flex flex-col gap-6 w-80">
          <div className="relative h-48 rounded-xl overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100 border border-gray-200 p-6 group hover:shadow-lg transition-all duration-300">
            <div className="absolute top-4 right-4">
              <div className="w-10 h-10 bg-cyan-500 rounded-full flex items-center justify-center">
                <ShoppingBag className="w-5 h-5 text-white" />
              </div>
            </div>
            <div className="mt-8">
              <div className="text-gray-600 text-sm font-medium mb-2 cursor-default">NEW ARRIVALS</div>
              <div className="text-gray-900 text-2xl font-bold mb-2 cursor-default">Fresh Styles</div>
              <div className="text-gray-500 text-sm cursor-default cursor-default">Discover the latest trends</div>
            </div>
            <div className="absolute bottom-4 left-6">
              <Link 
                to=""
                className="text-xs">
                Shop Now
              </Link>
            </div>
          </div>

          <Link to="" className="relative h-32 rounded-xl overflow-hidden bg-gradient-to-r from-cyan-50 to-cyan-100 border border-cyan-200 p-4 group hover:shadow-lg transition-all duration-300">
            <div className="flex items-center justify-between h-full">
              <div>
                <div className="text-cyan-700 text-lg font-bold">Student</div>
                <div className="text-cyan-700 text-lg font-bold">Discount</div>
                <div className="text-cyan-600 text-xs">15% off with ID</div>
              </div>
              <div className="w-8 h-8 bg-cyan-500 rounded-full flex items-center justify-center">
                <Percent className="w-4 h-4 text-white" />
              </div>
            </div>
          </Link>
        </div>

        {/* Main Center Banner */}
        <div className="flex-1 relative">
          <div className="relative h-80 rounded-2xl overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-black p-8 group hover:shadow-2xl transition-all duration-300">
            {/* Subtle Decorative Elements */}
            <div className="absolute top-8 right-12 w-2 h-2 bg-cyan-400 rounded-full opacity-60"></div>
            <div className="absolute top-16 right-8 w-1 h-1 bg-white rounded-full opacity-40"></div>
            <div className="absolute bottom-16 left-12 w-3 h-3 bg-cyan-400 rounded-full opacity-30"></div>
            <div className="absolute top-12 left-16 w-1 h-8 bg-gradient-to-b from-cyan-400 to-transparent opacity-20"></div>

            {/* Content */}
            <div className="relative text-center pt-12">
              <div className="text-cyan-400 text-sm font-medium mb-3 tracking-wider cursor-default">UP TO 80% OFF</div>
              <div className="text-white text-5xl font-light mb-2 tracking-tight cursor-default">SUPER</div>
              <div className="text-white text-5xl font-bold mb-8 tracking-tight cursor-default">SALE</div>
              <Link to="" className="inline-block bg-white text-gray-900 px-8 py-3 rounded-full font-medium text-sm hover:bg-gray-100 transition-colors cursor-pointer">
                LIMITED TIME OFFER
              </Link>
            </div>

            {/* Navigation Arrows */}
            <button
              variant="ghost"
              size="icon"
              className="absolute left-6 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/10 hover:bg-white/20 text-white rounded-full backdrop-blur-sm border border-white/20"
              onClick={prevSlide}
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              variant="ghost"
              size="icon"
              className="absolute right-6 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/10 hover:bg-white/20 text-white rounded-full backdrop-blur-sm border border-white/20"
              onClick={nextSlide}
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Dots Indicator */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2">
              <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
              <div className="w-2 h-2 bg-white/30 rounded-full"></div>
              <div className="w-2 h-2 bg-white/30 rounded-full"></div>
            </div>
          </div>
        </div>

        {/* Right Side Banners */}
        <div className="flex flex-col gap-6 w-80">
          <div className="relative h-48 rounded-xl overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100 border border-gray-200 p-6 group hover:shadow-lg transition-all duration-300">
            <div className="absolute top-4 right-4">
              <div className="w-10 h-10 bg-gray-900 rounded-full flex items-center justify-center">
                <Star className="w-5 h-5 text-white" />
              </div>
            </div>
            <div className="mt-8">
              <div className="text-gray-600 text-sm font-medium mb-2 cursor-default">PREMIUM COLLECTION</div>
              <div className="text-gray-900 text-2xl font-bold mb-2 cursor-default">Luxury Line</div>
              <div className="text-gray-500 text-sm cursor-default">Exclusive designs</div>
            </div>
            <div className="absolute bottom-4 left-6">
              <Link to="" variant="outline" size="sm" className="text-xs">
                Explore
              </Link>
            </div>
          </div>

          <Link 
          to=""
          className="relative h-32 rounded-xl overflow-hidden bg-gradient-to-r from-gray-100 to-gray-200 border border-gray-300 p-4 group hover:shadow-lg transition-all duration-300">
            <div className="flex items-center justify-between h-full">
              <div>
                <div className="text-gray-800 text-lg font-bold">Free</div>
                <div className="text-gray-800 text-lg font-bold">Shipping</div>
                <div className="text-gray-600 text-xs">Orders over $50</div>
              </div>
              <div className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center">
                <ShoppingBag className="w-4 h-4 text-white" />
              </div>
            </div>
          </Link>
        </div>
      </div>

      {/* Mobile Layout */}
      <div className="lg:hidden max-w-md mx-auto space-y-6">
        {/* Main Banner */}
        <div className="relative h-72 rounded-xl overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-black p-6">
          {/* Subtle Decorative Elements */}
          <div className="absolute top-6 right-8 w-2 h-2 bg-cyan-400 rounded-full opacity-60"></div>
          <div className="absolute bottom-12 left-6 w-2 h-2 bg-cyan-400 rounded-full opacity-30"></div>

          {/* Content */}
          <div className="relative z-10 text-center pt-8">
            <div className="text-cyan-400 text-xs font-medium mb-2 tracking-wider">UP TO 80% OFF</div>
            <div className="text-white text-4xl font-light mb-1 tracking-tight">SUPER</div>
            <div className="text-white text-4xl font-bold mb-6 tracking-tight">SALE</div>
            <div className="inline-block bg-white text-gray-900 px-6 py-2 rounded-full font-medium text-sm">
              LIMITED TIME OFFER
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            variant="ghost"
            size="icon"
            className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/10 hover:bg-white/20 text-white rounded-full backdrop-blur-sm border border-white/20"
            onClick={prevSlide}
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            variant="ghost"
            size="icon"
            className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/10 hover:bg-white/20 text-white rounded-full backdrop-blur-sm border border-white/20"
            onClick={nextSlide}
          >
            <ChevronRight className="w-5 h-5" />
          </button>

          {/* Dots Indicator */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
            <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
            <div className="w-2 h-2 bg-white/30 rounded-full"></div>
            <div className="w-2 h-2 bg-white/30 rounded-full"></div>
          </div>
        </div>

        {/* Secondary Banner */}
        <div className="relative h-40 rounded-xl overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100 border border-gray-200 p-4">
          <div className="flex items-center justify-between h-full">
            <div>
              <div className="text-gray-600 text-xs font-medium mb-1">NEW ARRIVALS</div>
              <div className="text-gray-900 text-xl font-bold mb-1">Fresh Styles</div>
              <div className="text-gray-500 text-xs mb-3">Discover latest trends</div>
              <button variant="outline" size="sm" className="text-xs">
                Shop Now
              </button>
            </div>
            <div className="w-12 h-12 bg-cyan-500 rounded-full flex items-center justify-center">
              <ShoppingBag className="w-6 h-6 text-white" />
            </div>
          </div>
        </div>

        {/* Bottom Banners */}
        <div className="grid grid-cols-2 gap-4">
          <div className="relative h-28 rounded-xl overflow-hidden bg-gradient-to-r from-cyan-50 to-cyan-100 border border-cyan-200 p-3">
            <div className="flex flex-col justify-between h-full">
              <div className="w-6 h-6 bg-cyan-500 rounded-full flex items-center justify-center">
                <Percent className="w-3 h-3 text-white" />
              </div>
              <div>
                <div className="text-cyan-700 text-sm font-bold">Student</div>
                <div className="text-cyan-700 text-sm font-bold">Discount</div>
                <div className="text-cyan-600 text-xs">15% off</div>
              </div>
            </div>
          </div>

          <div className="relative h-28 rounded-xl overflow-hidden bg-gradient-to-r from-gray-100 to-gray-200 border border-gray-300 p-3">
            <div className="flex flex-col justify-between h-full">
              <div className="w-6 h-6 bg-gray-700 rounded-full flex items-center justify-center">
                <ShoppingBag className="w-3 h-3 text-white" />
              </div>
              <div>
                <div className="text-gray-800 text-sm font-bold">Free</div>
                <div className="text-gray-800 text-sm font-bold">Shipping</div>
                <div className="text-gray-600 text-xs">$50+</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}