import { useState } from "react"
import { CalendarClock, Bell } from "lucide-react"

export default function StudioComingSoonBanner() {
  const [email, setEmail] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle notification signup
    console.log("Notification signup:", email)
    setEmail("")
    // You would typically send this to your backend
  }

  return (
    <section className="w-full bg-white py-16 px-4 overflow-hidden">
      <div className="max-w-7xl mx-auto relative">
        {/* Decorative Background Elements - No images needed */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Large circle */}
          <div className="absolute -top-20 -right-20 w-64 h-64 rounded-full border border-gray-100"></div>

          {/* Small circles */}
          <div className="absolute top-40 left-10 w-6 h-6 rounded-full bg-cyan-50"></div>
          <div className="absolute bottom-10 right-40 w-8 h-8 rounded-full bg-gray-50"></div>

          {/* Diagonal lines */}
          <div className="absolute top-0 left-1/4 w-px h-16 bg-gradient-to-b from-transparent via-gray-200 to-transparent transform -rotate-45"></div>
          <div className="absolute bottom-10 right-1/4 w-px h-24 bg-gradient-to-b from-transparent via-gray-200 to-transparent transform rotate-45"></div>

          {/* Dots pattern */}
          <div className="absolute top-20 right-20 grid grid-cols-3 gap-2">
            {[...Array(9)].map((_, i) => (
              <div key={i} className="w-1 h-1 rounded-full bg-gray-200"></div>
            ))}
          </div>

          {/* Abstract shapes */}
          <div className="absolute bottom-20 left-20 w-20 h-px bg-gradient-to-r from-transparent via-cyan-200 to-transparent"></div>
          <div className="absolute top-1/2 right-1/3 w-16 h-16 border-t border-l border-gray-100 transform -rotate-12"></div>

          {/* Subtle gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-white via-transparent to-cyan-50 opacity-70"></div>
        </div>

        {/* Main Content */}
        <div className="relative z-10 bg-white/80 backdrop-blur-sm rounded-3xl border border-gray-100 shadow-sm p-8 lg:p-16">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              {/* Header */}
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-black rounded-xl flex items-center justify-center">
                    <CalendarClock className="w-6 h-6 text-white" />
                  </div>
                  <span className="text-gray-600 font-semibold text-sm tracking-wider uppercase cursor-default">Launching Soon</span>
                </div>

                <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight cursor-default">
                  Outfit Orbit
                  <span className="block text-cyan-600 cursor-default">Studio Store</span>
                </h2>

                <p className="text-gray-600 text-lg leading-relaxed cursor-default">
                  Our exclusive studio collection is coming soon. Premium designs, limited editions, and personalized
                  styling services all in one place.
                </p>
              </div>

              {/* Countdown */}
              <div className="grid grid-cols-4 gap-4">
                {[
                  { value: "28", label: "Days" },
                  { value: "14", label: "Hours" },
                  { value: "32", label: "Minutes" },
                  { value: "10", label: "Seconds" },
                ].map((item, index) => (
                  <div key={index} className="text-center">
                    <div className="bg-gray-50 border border-gray-100 rounded-lg p-3">
                      <div className="text-2xl font-bold text-gray-900 cursor-default">{item.value}</div>
                    </div>
                    <div className="text-xs text-gray-500 mt-2 cursor-default">{item.label}</div>
                  </div>
                ))}
              </div>

              {/* Notification Form */}
              <form onSubmit={handleSubmit} className="space-y-4">
                <p className="text-sm text-gray-600 cursor-default">
                  Get notified when we launch. Be the first to explore our studio collection.
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <div className="flex-1">
                    <input
                      type="email"
                      placeholder="Enter your email"
                      className="h-12 border-gray-200"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </div>
                  <button
                    type="submit"
                    className="h-12 bg-black hover:bg-gray-800 text-white px-6 rounded-lg font-medium"
                  >
                    Notify Me
                    <Bell className="w-4 h-4 ml-2" />
                  </button>
                </div>
              </form>
            </div>

            {/* Right Content - Studio Preview */}
            <div className="relative">
              <div className="aspect-square lg:aspect-auto lg:h-96 rounded-2xl bg-gradient-to-br from-gray-50 to-gray-100 border border-gray-200 p-6 flex items-center justify-center">
                {/* Studio Logo/Icon */}
                <div className="relative">
                  {/* Decorative elements */}
                  <div className="absolute -top-12 -left-12 w-24 h-24 border border-gray-200 rounded-full"></div>
                  <div className="absolute -bottom-12 -right-12 w-24 h-24 border border-gray-200 rounded-full"></div>

                  {/* Studio Icon */}
                  <div className="relative z-10 w-32 h-32 bg-black rounded-full flex items-center justify-center">
                    <div className="text-white font-bold text-4xl">S</div>
                  </div>

                  {/* Accent circle */}
                  <div className="absolute -bottom-4 -right-4 w-12 h-12 bg-cyan-500 rounded-full flex items-center justify-center">
                    <div className="w-8 h-8 bg-white rounded-full"></div>
                  </div>
                </div>

                {/* Floating Tags */}
                <div className="absolute top-8 left-8 bg-white rounded-full px-4 py-1 text-xs font-medium text-gray-600 shadow-sm cursor-default">
                  Premium Collection
                </div>
                <div className="absolute bottom-8 right-8 bg-white rounded-full px-4 py-1 text-xs font-medium text-gray-600 shadow-sm cursor-default">
                  Limited Edition
                </div>
              </div>
            </div>
          </div>

          {/* Features Preview */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12 pt-8 border-t border-gray-100">
            {[
              { title: "Exclusive Designs", description: "Limited edition pieces" },
              { title: "Personal Styling", description: "One-on-one sessions" },
              { title: "Custom Tailoring", description: "Perfect fit guarantee" },
              { title: "Member Benefits", description: "Early access & discounts" },
            ].map((feature, index) => (
              <div key={index} className="text-center">
                <div className="w-10 h-10 mx-auto mb-3 rounded-full bg-gray-50 border border-gray-100 flex items-center justify-center">
                  <div className="w-3 h-3 bg-cyan-500 rounded-full"></div>
                </div>
                <h3 className="font-medium text-gray-900 cursor-default">{feature.title}</h3>
                <p className="text-xs text-gray-500 mt-1 cursor-default">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}