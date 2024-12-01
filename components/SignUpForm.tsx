import { useState } from 'react'
import { Button } from './ui/button'
import { Input } from './ui/input'
import { Select } from './ui/select'

interface SignUpFormProps {
  step: number
  onNext: (data: any) => void
  formData: any
}

export default function SignUpForm({ step, onNext, formData }: SignUpFormProps) {
  const [currentData, setCurrentData] = useState(formData)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setCurrentData({ ...currentData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onNext(currentData)
  }

  return (
    <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-6 text-center">
        {step === 1 ? 'Sign up' : `Step ${step}`}
      </h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        {step === 1 && (
          <>
            <Input
              type="text"
              name="name"
              placeholder="Name"
              value={currentData.name}
              onChange={handleChange}
              required
            />
            <Input
              type="email"
              name="email"
              placeholder="Email"
              value={currentData.email}
              onChange={handleChange}
              required
            />
            <Input
              type="password"
              name="password"
              placeholder="Password"
              value={currentData.password}
              onChange={handleChange}
              required
            />
          </>
        )}
        {step === 2 && (
          <Select
            name="location"
            value={currentData.location}
            onChange={handleChange}
            required
          >
            <option value="">Select Location</option>
            <option value="location1">Location 1</option>
            <option value="location2">Location 2</option>
          </Select>
        )}
        {step === 3 && (
          <Select
            name="perimeter"
            value={currentData.perimeter}
            onChange={handleChange}
            required
          >
            <option value="">Select Perimeter</option>
            <option value="12">12 Acres</option>
            <option value="24">24 Acres</option>
          </Select>
        )}
        {step === 4 && <p className="text-center">Confirm your details</p>}
        <Button type="submit" className="w-full">
          {step === 4 ? 'View Layouts' : 'Next'}
        </Button>
      </form>
      {step === 1 && (
        <p className="mt-4 text-center text-sm text-gray-600">
          Already Registered? <a href="#" className="text-blue-600 hover:underline">Log in here</a>.
        </p>
      )}
    </div>
  )
}

