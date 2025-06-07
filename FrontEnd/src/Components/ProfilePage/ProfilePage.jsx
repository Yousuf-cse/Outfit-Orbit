import { useState, useEffect } from "react"
import {
  User,
  Mail,
  MapPin,
  Settings,
   Shield,
  Bell,
  Heart,
  Package,
  Edit3,
  Camera,
  Save,
  X,
  CheckCircle,
} from "lucide-react"

// Custom Button Component
const Button = ({ children, onClick, variant = "default", size = "default", disabled = false, className = "", ...props }) => {
  const baseClasses = "inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none"
  
  const variants = {
    default: "bg-cyan-600 text-white hover:bg-cyan-700",
    outline: "border border-gray-300 bg-white hover:bg-gray-50 text-gray-700",
    secondary: "bg-gray-100 text-gray-900 hover:bg-gray-200"
  }
  
  const sizes = {
    default: "h-10 py-2 px-4",
    sm: "h-9 px-3 text-sm",
    icon: "h-10 w-10"
  }
  
  return (
    <button
      className={`${baseClasses} ${variants[variant]} ${sizes[size]} ${className}`}
      onClick={onClick}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  )
}

// Custom Input Component
const Input = ({ className = "", disabled = false, ...props }) => {
  return (
    <input
      className={`flex h-10 w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent disabled:cursor-not-allowed disabled:opacity-50 ${className}`}
      disabled={disabled}
      {...props}
    />
  )
}

// Custom Label Component
const Label = ({ children, htmlFor, className = "" }) => {
  return (
    <label
      htmlFor={htmlFor}
      className={`text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 ${className}`}
    >
      {children}
    </label>
  )
}

// Custom Select Components
const Select = ({ children, value, onValueChange, disabled = false }) => {
  const [isOpen, setIsOpen] = useState(false)
  const [selectedValue, setSelectedValue] = useState(value)

  useEffect(() => {
    setSelectedValue(value)
  }, [value])

  const handleSelect = (newValue, displayText) => {
    setSelectedValue(newValue)
    onValueChange(newValue)
    setIsOpen(false)
  }

  return (
    <div className="relative">
      <button
        type="button"
        className={`flex h-10 w-full items-center justify-between rounded-md border border-gray-300 bg-white px-3 py-2 text-sm placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent disabled:cursor-not-allowed disabled:opacity-50 ${disabled ? 'opacity-50 cursor-not-allowed' : ''}`}
        onClick={() => !disabled && setIsOpen(!isOpen)}
        disabled={disabled}
      >
        <span>{selectedValue || "Select..."}</span>
        <svg className="h-4 w-4 opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      {isOpen && !disabled && (
        <div className="absolute z-50 min-w-[8rem] overflow-hidden rounded-md border border-gray-200 bg-white shadow-md mt-1 w-full">
          {children}
        </div>
      )}
    </div>
  )
}

const SelectItem = ({ children, value, onSelect }) => {
  return (
    <div
      className="relative flex select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none hover:bg-gray-100 cursor-pointer"
      onClick={() => onSelect && onSelect(value, children)}
    >
      {children}
    </div>
  )
}

// Custom Switch Component
const Switch = ({ checked, onCheckedChange, disabled = false }) => {
  return (
    <button
      type="button"
      role="switch"
      aria-checked={checked}
      className={`peer inline-flex h-6 w-11 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50 ${
        checked ? 'bg-cyan-600' : 'bg-gray-200'
      } ${disabled ? 'opacity-50 cursor-not-allowed' : ''}`}
      onClick={() => !disabled && onCheckedChange(!checked)}
      disabled={disabled}
    >
      <span
        className={`pointer-events-none block h-5 w-5 rounded-full bg-white shadow-lg ring-0 transition-transform ${
          checked ? 'translate-x-5' : 'translate-x-0'
        }`}
      />
    </button>
  )
}

// Custom Badge Component
const Badge = ({ children, variant = "default", className = "", onClick }) => {
  const variants = {
    default: "bg-cyan-600 text-white",
    secondary: "bg-gray-100 text-gray-900"
  }
  
  return (
    <div
      className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold transition-colors ${variants[variant]} ${onClick ? 'cursor-pointer hover:opacity-80' : ''} ${className}`}
      onClick={onClick}
    >
      {children}
    </div>
  )
}

// Custom Tabs Components
const Tabs = ({ children, value, onValueChange, className = "" }) => {
  return (
    <div className={className} data-value={value} data-onValueChange={onValueChange}>
      {children}
    </div>
  )
}

const TabsList = ({ children, className = "" }) => {
  return (
    <div className={`inline-flex h-10 items-center justify-center rounded-md bg-gray-100 p-1 text-gray-500 ${className}`}>
      {children}
    </div>
  )
}

const TabsTrigger = ({ children, value, className = "", onClick }) => {
  return (
    <button
      className={`inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-white transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-white data-[state=active]:text-gray-950 data-[state=active]:shadow-sm ${className}`}
      onClick={onClick}
      data-value={value}
    >
      {children}
    </button>
  )
}

const TabsContent = ({ children, value, className = "" }) => {
  return (
    <div className={`mt-2 ring-offset-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500 focus-visible:ring-offset-2 ${className}`} data-value={value}>
      {children}
    </div>
  )
}

export default function ProfilePage() {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)
  const [editing, setEditing] = useState(false)
  const [saving, setSaving] = useState(false)
  const [activeTab, setActiveTab] = useState("profile")
  const [formData, setFormData] = useState({})
  const [passwordData, setPasswordData] = useState({
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  })

  // Mock user data for demonstration
  useEffect(() => {
    // Simulate API call
    setTimeout(() => {
      const mockUser = {
        _id: "1",
        fullName: "Rahul Sharma",
        phoneNumber: "9876543210",
        email: "rahul.sharma@email.com",
        dateOfBirth: "1995-06-15",
        gender: "male",
        address: {
          street: "123 MG Road",
          city: "Mumbai",
          state: "Maharashtra",
          pincode: "400001",
          country: "India",
        },
        preferences: {
          newsletter: true,
          smsUpdates: false,
          size: "L",
          favoriteCategories: ["casual", "formal"],
        },
        avatar: "",
        isVerified: true,
        createdAt: "2023-01-15T10:30:00Z",
        lastLogin: "2024-01-15T14:20:00Z",
      }
      setUser(mockUser)
      setFormData(mockUser)
      setLoading(false)
    }, 1000)
  }, [])

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }))
  }

  const handleAddressChange = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      address: {
        ...prev.address,
        [field]: value,
      },
    }))
  }

  const handlePreferencesChange = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      preferences: {
        ...prev.preferences,
        [field]: value,
      },
    }))
  }

  const handleSaveProfile = async () => {
    setSaving(true)
    // Simulate API call
    setTimeout(() => {
      setUser(formData)
      setEditing(false)
      setSaving(false)
    }, 1000)
  }

  const handlePasswordChange = async () => {
    if (passwordData.newPassword !== passwordData.confirmPassword) {
      alert("New passwords don't match")
      return
    }
    setSaving(true)
    // Simulate API call
    setTimeout(() => {
      setPasswordData({ currentPassword: "", newPassword: "", confirmPassword: "" })
      setSaving(false)
      alert("Password changed successfully")
    }, 1000)
  }

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString("en-IN", {
      year: "numeric",
      month: "long",
      day: "numeric",
    })
  }

  const handleTabChange = (newTab) => {
    setActiveTab(newTab)
  }

  const handleSelectChange = (field, value) => {
    if (field.includes('.')) {
      const [parent, child] = field.split('.')
      if (parent === 'preferences') {
        handlePreferencesChange(child, value)
      }
    } else {
      handleInputChange(field, value)
    }
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <div className="w-8 h-8 border-2 border-cyan-600 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-600">Loading profile...</p>
        </div>
      </div>
    )
  }

  if (!user) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <p className="text-red-600 mb-4">Error loading profile</p>
          <Button onClick={() => window.location.reload()} variant="outline">
            Try Again
          </Button>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Breadcrumb */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 py-3">
          <div className="flex items-center text-sm text-gray-600">
            <span className="hover:text-cyan-600 cursor-pointer">Home</span>
            <span className="mx-2">/</span>
            <span className="text-gray-900 font-medium">My Profile</span>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Profile Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl border border-gray-200 p-6 sticky top-8">
              {/* Profile Header */}
              <div className="text-center mb-6">
                <div className="relative inline-block">
                  <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    {user.avatar ? (
                      <img
                        src={user.avatar || "/placeholder.svg"}
                        alt={user.fullName}
                        className="w-full h-full rounded-full object-cover"
                      />
                    ) : (
                      <User className="w-12 h-12 text-gray-400" />
                    )}
                  </div>
                  <Button
                    size="icon"
                    variant="outline"
                    className="absolute -bottom-2 -right-2 w-8 h-8 rounded-full bg-white border-2 border-white shadow-sm"
                  >
                    <Camera className="w-4 h-4" />
                  </Button>
                </div>

                <h2 className="text-xl font-bold text-gray-900 mb-1">{user.fullName}</h2>
                <p className="text-gray-600 text-sm mb-2">{user.phoneNumber}</p>
                <div className="flex items-center justify-center gap-2">
                  {user.isVerified ? (
                    <Badge className="bg-green-100 text-green-700">
                      <CheckCircle className="w-3 h-3 mr-1" />
                      Verified
                    </Badge>
                  ) : (
                    <Badge variant="secondary">Not Verified</Badge>
                  )}
                </div>
              </div>

              {/* Quick Stats */}
              <div className="space-y-3 mb-6">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-600">Member since</span>
                  <span className="font-medium">{formatDate(user.createdAt)}</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-600">Last login</span>
                  <span className="font-medium">{formatDate(user.lastLogin)}</span>
                </div>
              </div>

              {/* Quick Actions */}
              <div className="space-y-2">
                <Button variant="outline" className="w-full justify-start" size="sm">
                  <Package className="w-4 h-4 mr-2" />
                  My Orders
                </Button>
                <Button variant="outline" className="w-full justify-start" size="sm">
                  <Heart className="w-4 h-4 mr-2" />
                  Wishlist
                </Button>
                <Button variant="outline" className="w-full justify-start" size="sm">
                  <MapPin className="w-4 h-4 mr-2" />
                  Addresses
                </Button>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            <div className="bg-white rounded-xl border border-gray-200">
              <Tabs value={activeTab} onValueChange={handleTabChange} className="w-full">
                <div className="border-b border-gray-200 px-6 pt-6">
                  <TabsList className="grid w-full grid-cols-3">
                    <TabsTrigger 
                      value="profile" 
                      className={`flex items-center gap-2 ${activeTab === 'profile' ? 'bg-white text-gray-950 shadow-sm' : ''}`}
                      onClick={() => handleTabChange('profile')}
                    >
                      <User className="w-4 h-4" />
                      Profile
                    </TabsTrigger>
                    <TabsTrigger 
                      value="security" 
                      className={`flex items-center gap-2 ${activeTab === 'security' ? 'bg-white text-gray-950 shadow-sm' : ''}`}
                      onClick={() => handleTabChange('security')}
                    >
                      <Shield className="w-4 h-4" />
                      Security
                    </TabsTrigger>
                    <TabsTrigger 
                      value="preferences" 
                      className={`flex items-center gap-2 ${activeTab === 'preferences' ? 'bg-white text-gray-950 shadow-sm' : ''}`}
                      onClick={() => handleTabChange('preferences')}
                    >
                      <Settings className="w-4 h-4" />
                      Preferences
                    </TabsTrigger>
                  </TabsList>
                </div>

                {/* Profile Tab */}
                {activeTab === 'profile' && (
                  <TabsContent value="profile" className="p-6">
                    <div className="flex items-center justify-between mb-6">
                      <h3 className="text-lg font-semibold text-gray-900">Personal Information</h3>
                      {!editing ? (
                        <Button onClick={() => setEditing(true)} variant="outline" size="sm">
                          <Edit3 className="w-4 h-4 mr-2" />
                          Edit
                        </Button>
                      ) : (
                        <div className="flex gap-2">
                          <Button onClick={handleSaveProfile} size="sm" disabled={saving}>
                            <Save className="w-4 h-4 mr-2" />
                            {saving ? "Saving..." : "Save"}
                          </Button>
                          <Button onClick={() => setEditing(false)} variant="outline" size="sm">
                            <X className="w-4 h-4 mr-2" />
                            Cancel
                          </Button>
                        </div>
                      )}
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      {/* Basic Information */}
                      <div className="space-y-4">
                        <div>
                          <Label htmlFor="fullName">Full Name</Label>
                          <Input
                            id="fullName"
                            value={formData.fullName || ""}
                            onChange={(e) => handleInputChange("fullName", e.target.value)}
                            disabled={!editing}
                            className="mt-1"
                          />
                        </div>

                        <div>
                          <Label htmlFor="phoneNumber">Phone Number</Label>
                          <Input
                            id="phoneNumber"
                            value={formData.phoneNumber || ""}
                            disabled={true}
                            className="mt-1 bg-gray-50"
                          />
                          <p className="text-xs text-gray-500 mt-1">Phone number cannot be changed</p>
                        </div>

                        <div>
                          <Label htmlFor="email">Email Address</Label>
                          <Input
                            id="email"
                            type="email"
                            value={formData.email || ""}
                            onChange={(e) => handleInputChange("email", e.target.value)}
                            disabled={!editing}
                            className="mt-1"
                            placeholder="Enter your email"
                          />
                        </div>

                        <div>
                          <Label htmlFor="dateOfBirth">Date of Birth</Label>
                          <Input
                            id="dateOfBirth"
                            type="date"
                            value={formData.dateOfBirth || ""}
                            onChange={(e) => handleInputChange("dateOfBirth", e.target.value)}
                            disabled={!editing}
                            className="mt-1"
                          />
                        </div>

                        <div>
                          <Label htmlFor="gender">Gender</Label>
                          <div className="mt-1">
                            <Select
                              value={formData.gender || ""}
                              onValueChange={(value) => handleInputChange("gender", value)}
                              disabled={!editing}
                            >
                              <SelectItem value="male" onSelect={(value) => handleInputChange("gender", value)}>Male</SelectItem>
                              <SelectItem value="female" onSelect={(value) => handleInputChange("gender", value)}>Female</SelectItem>
                              <SelectItem value="other" onSelect={(value) => handleInputChange("gender", value)}>Other</SelectItem>
                            </Select>
                          </div>
                        </div>
                      </div>

                      {/* Address Information */}
                      <div className="space-y-4">
                        <h4 className="font-medium text-gray-900">Address</h4>

                        <div>
                          <Label htmlFor="street">Street Address</Label>
                          <Input
                            id="street"
                            value={formData.address?.street || ""}
                            onChange={(e) => handleAddressChange("street", e.target.value)}
                            disabled={!editing}
                            className="mt-1"
                            placeholder="Enter street address"
                          />
                        </div>

                        <div className="grid grid-cols-2 gap-3">
                          <div>
                            <Label htmlFor="city">City</Label>
                            <Input
                              id="city"
                              value={formData.address?.city || ""}
                              onChange={(e) => handleAddressChange("city", e.target.value)}
                              disabled={!editing}
                              className="mt-1"
                              placeholder="City"
                            />
                          </div>
                          <div>
                            <Label htmlFor="state">State</Label>
                            <Input
                              id="state"
                              value={formData.address?.state || ""}
                              onChange={(e) => handleAddressChange("state", e.target.value)}
                              disabled={!editing}
                              className="mt-1"
                              placeholder="State"
                            />
                          </div>
                        </div>

                        <div className="grid grid-cols-2 gap-3">
                          <div>
                            <Label htmlFor="pincode">Pincode</Label>
                            <Input
                              id="pincode"
                              value={formData.address?.pincode || ""}
                              onChange={(e) => handleAddressChange("pincode", e.target.value)}
                              disabled={!editing}
                              className="mt-1"
                              placeholder="Pincode"
                            />
                          </div>
                          <div>
                            <Label htmlFor="country">Country</Label>
                            <Input
                              id="country"
                              value={formData.address?.country || "India"}
                              disabled={true}
                              className="mt-1 bg-gray-50"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </TabsContent>
                )}

                {/* Security Tab */}
                {activeTab === 'security' && (
                  <TabsContent value="security" className="p-6">
                    <div className="max-w-md">
                      <h3 className="text-lg font-semibold text-gray-900 mb-6">Change Password</h3>

                      <div className="space-y-4">
                        <div>
                          <Label htmlFor="currentPassword">Current Password</Label>
                          <Input
                            id="currentPassword"
                            type="password"
                            value={passwordData.currentPassword}
                            onChange={(e) => setPasswordData((prev) => ({ ...prev, currentPassword: e.target.value }))}
                            className="mt-1"
                            placeholder="Enter current password"
                          />
                        </div>

                        <div>
                          <Label htmlFor="newPassword">New Password</Label>
                          <Input
                            id="newPassword"
                            type="password"
                            value={passwordData.newPassword}
                            onChange={(e) => setPasswordData((prev) => ({ ...prev, newPassword: e.target.value }))}
                            className="mt-1"
                            placeholder="Enter new password"
                          />
                        </div>

                        <div>
                          <Label htmlFor="confirmPassword">Confirm New Password</Label>
                          <Input
                            id="confirmPassword"
                            type="password"
                            value={passwordData.confirmPassword}
                            onChange={(e) => setPasswordData((prev) => ({ ...prev, confirmPassword: e.target.value }))}
                            className="mt-1"
                            placeholder="Confirm new password"
                          />
                        </div>

                        <Button onClick={handlePasswordChange} disabled={saving} className="w-full">
                          {saving ? "Changing..." : "Change Password"}
                        </Button>
                      </div>
                    </div>
                  </TabsContent>
                )}

                {/* Preferences Tab */}
                {activeTab === 'preferences' && (
                  <TabsContent value="preferences" className="p-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-6">Preferences & Settings</h3>

                    <div className="space-y-6">
                      {/* Notifications */}
                      <div>
                        <h4 className="font-medium text-gray-900 mb-4">Notifications</h4>
                        <div className="space-y-3">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-3">
                              <Mail className="w-5 h-5 text-gray-400" />
                              <div>
                                <p className="font-medium">Email Newsletter</p>
                                <p className="text-sm text-gray-600">Receive updates about new products and offers</p>
                              </div>
                            </div>
                            <Switch
                              checked={formData.preferences?.newsletter || false}
                              onCheckedChange={(checked) => handlePreferencesChange("newsletter", checked)}
                            />
                          </div>

                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-3">
                              <Bell className="w-5 h-5 text-gray-400" />
                              <div>
                                <p className="font-medium">SMS Updates</p>
                                <p className="text-sm text-gray-600">Get order updates via SMS</p>
                              </div>
                            </div>
                            <Switch
                              checked={formData.preferences?.smsUpdates || false}
                              onCheckedChange={(checked) => handlePreferencesChange("smsUpdates", checked)}
                            />
                          </div>
                        </div>
                      </div>

                      {/* Size Preference */}
                      <div>
                        <h4 className="font-medium text-gray-900 mb-4">Size Preference</h4>
                        <div className="w-48">
                          <Select
                            value={formData.preferences?.size || ""}
                            onValueChange={(value) => handlePreferencesChange("size", value)}
                          >
                            <SelectItem value="XS" onSelect={(value) => handlePreferencesChange("size", value)}>XS</SelectItem>
                            <SelectItem value="S" onSelect={(value) => handlePreferencesChange("size", value)}>S</SelectItem>
                            <SelectItem value="M" onSelect={(value) => handlePreferencesChange("size", value)}>M</SelectItem>
                            <SelectItem value="L" onSelect={(value) => handlePreferencesChange("size", value)}>L</SelectItem>
                            <SelectItem value="XL" onSelect={(value) => handlePreferencesChange("size", value)}>XL</SelectItem>
                            <SelectItem value="XXL" onSelect={(value) => handlePreferencesChange("size", value)}>XXL</SelectItem>
                          </Select>
                        </div>
                      </div>

                      {/* Favorite Categories */}
                      <div>
                        <h4 className="font-medium text-gray-900 mb-4">Favorite Categories</h4>
                        <div className="flex flex-wrap gap-2">
                          {["casual", "formal", "ethnic", "party-wear", "sports"].map((category) => (
                            <Badge
                              key={category}
                              variant={
                                formData.preferences?.favoriteCategories?.includes(category) ? "default" : "secondary"
                              }
                              className="cursor-pointer"
                              onClick={() => {
                                const current = formData.preferences?.favoriteCategories || []
                                const updated = current.includes(category)
                                  ? current.filter((c) => c !== category)
                                  : [...current, category]
                                handlePreferencesChange("favoriteCategories", updated)
                              }}
                            >
                              {category.charAt(0).toUpperCase() + category.slice(1)}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                  </TabsContent>
                )}
              </Tabs>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}