'use client'

import { useState } from 'react'
import SignUpForm from '../components/SignUpForm'
import LayoutSelection from '../components/LayoutSelection'

export default function Home() {
  const [step, setStep] = useState(1)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    location: '',
    perimeter: '',
  })

  const handleNext = (data: Partial<typeof formData>) => {
    setFormData(prev => ({ ...prev, ...data }))
    setStep(prev => prev + 1)
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24 bg-gray-100">
      {step < 5 ? (
        <SignUpForm step={step} onNext={handleNext} formData={formData} />
      ) : (
        <LayoutSelection />
      )}
    </main>
  )
}

