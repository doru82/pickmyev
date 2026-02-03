'use client'

import { useState } from 'react'

const evDatabase = [
  { id: 1, name: "Nissan Leaf 24kWh", brand: "Nissan", price: 8000, priceRange: "sub10k", range: 135, batterySize: 24, bodyType: "hatchback", chargingSpeed: 50, spaceScore: 3, year: "2015-2017", condition: "used" },
  { id: 2, name: "Renault Zoe 22kWh", brand: "Renault", price: 9000, priceRange: "sub10k", range: 150, batterySize: 22, bodyType: "hatchback", chargingSpeed: 43, spaceScore: 2, year: "2015-2017", condition: "used" },
  { id: 3, name: "Nissan Leaf 40kWh", brand: "Nissan", price: 15000, priceRange: "10k-20k", range: 270, batterySize: 40, bodyType: "hatchback", chargingSpeed: 50, spaceScore: 3, year: "2018-2020", condition: "used" },
  { id: 4, name: "Renault Zoe 40kWh", brand: "Renault", price: 14000, priceRange: "10k-20k", range: 300, batterySize: 40, bodyType: "hatchback", chargingSpeed: 50, spaceScore: 2, year: "2019-2021", condition: "used" },
  { id: 5, name: "BMW i3", brand: "BMW", price: 18000, priceRange: "10k-20k", range: 260, batterySize: 42, bodyType: "hatchback", chargingSpeed: 50, spaceScore: 2, year: "2018-2020", condition: "used" },
  { id: 6, name: "VW e-Golf", brand: "Volkswagen", price: 17000, priceRange: "10k-20k", range: 230, batterySize: 35, bodyType: "hatchback", chargingSpeed: 40, spaceScore: 3, year: "2017-2020", condition: "used" },
  { id: 7, name: "Hyundai Ioniq Electric", brand: "Hyundai", price: 16000, priceRange: "10k-20k", range: 294, batterySize: 38, bodyType: "hatchback", chargingSpeed: 70, spaceScore: 3, year: "2019-2021", condition: "used" },
  { id: 8, name: "MG4 Standard", brand: "MG", price: 28000, priceRange: "20k-30k", range: 350, batterySize: 51, bodyType: "hatchback", chargingSpeed: 117, spaceScore: 4, year: "2023-2024", condition: "new" },
  { id: 9, name: "BYD Dolphin", brand: "BYD", price: 27000, priceRange: "20k-30k", range: 340, batterySize: 45, bodyType: "hatchback", chargingSpeed: 88, spaceScore: 3, year: "2023-2024", condition: "new" },
  { id: 10, name: "Peugeot e-208", brand: "Peugeot", price: 29000, priceRange: "20k-30k", range: 362, batterySize: 50, bodyType: "hatchback", chargingSpeed: 100, spaceScore: 2, year: "2023-2024", condition: "new" },
  { id: 11, name: "Opel Corsa-e", brand: "Opel", price: 28500, priceRange: "20k-30k", range: 359, batterySize: 50, bodyType: "hatchback", chargingSpeed: 100, spaceScore: 2, year: "2023-2024", condition: "new" },
  { id: 12, name: "VW ID.3", brand: "Volkswagen", price: 38000, priceRange: "30k-45k", range: 426, batterySize: 58, bodyType: "hatchback", chargingSpeed: 120, spaceScore: 4, year: "2023-2024", condition: "new" },
  { id: 13, name: "VW ID.4", brand: "Volkswagen", price: 44000, priceRange: "30k-45k", range: 520, batterySize: 77, bodyType: "suv", chargingSpeed: 135, spaceScore: 5, year: "2023-2024", condition: "new" },
  { id: 14, name: "Hyundai Kona Electric", brand: "Hyundai", price: 37000, priceRange: "30k-45k", range: 484, batterySize: 65, bodyType: "suv", chargingSpeed: 100, spaceScore: 4, year: "2023-2024", condition: "new" },
  { id: 15, name: "Kia Niro EV", brand: "Kia", price: 41000, priceRange: "30k-45k", range: 463, batterySize: 65, bodyType: "suv", chargingSpeed: 80, spaceScore: 4, year: "2023-2024", condition: "new" },
  { id: 16, name: "Skoda Enyaq", brand: "Skoda", price: 43000, priceRange: "30k-45k", range: 510, batterySize: 77, bodyType: "suv", chargingSpeed: 135, spaceScore: 5, year: "2023-2024", condition: "new" },
  { id: 17, name: "Cupra Born", brand: "Cupra", price: 38000, priceRange: "30k-45k", range: 424, batterySize: 58, bodyType: "hatchback", chargingSpeed: 120, spaceScore: 4, year: "2023-2024", condition: "new" },
  { id: 18, name: "Tesla Model 3", brand: "Tesla", price: 35000, priceRange: "30k-45k", range: 491, batterySize: 60, bodyType: "sedan", chargingSpeed: 170, spaceScore: 4, year: "2020-2022", condition: "used" },
  { id: 19, name: "Tesla Model 3 (New)", brand: "Tesla", price: 47000, priceRange: "45k-60k", range: 510, batterySize: 75, bodyType: "sedan", chargingSpeed: 250, spaceScore: 4, year: "2024", condition: "new" },
  { id: 20, name: "Tesla Model Y", brand: "Tesla", price: 52000, priceRange: "45k-60k", range: 533, batterySize: 75, bodyType: "suv", chargingSpeed: 250, spaceScore: 5, year: "2024", condition: "new" },
  { id: 21, name: "Hyundai Ioniq 5", brand: "Hyundai", price: 48000, priceRange: "45k-60k", range: 507, batterySize: 77, bodyType: "suv", chargingSpeed: 233, spaceScore: 5, year: "2023-2024", condition: "new" },
  { id: 22, name: "Kia EV6", brand: "Kia", price: 52000, priceRange: "45k-60k", range: 528, batterySize: 77, bodyType: "suv", chargingSpeed: 233, spaceScore: 5, year: "2023-2024", condition: "new" },
  { id: 23, name: "Ford Mustang Mach-E", brand: "Ford", price: 55000, priceRange: "45k-60k", range: 600, batterySize: 91, bodyType: "suv", chargingSpeed: 150, spaceScore: 5, year: "2023-2024", condition: "new" },
  { id: 24, name: "BMW iX", brand: "BMW", price: 85000, priceRange: "60k+", range: 630, batterySize: 111, bodyType: "suv", chargingSpeed: 200, spaceScore: 5, year: "2023-2024", condition: "new" },
  { id: 25, name: "Porsche Taycan", brand: "Porsche", price: 95000, priceRange: "60k+", range: 484, batterySize: 93, bodyType: "sedan", chargingSpeed: 270, spaceScore: 4, year: "2023-2024", condition: "new" },
]

const questions = [
  { id: 1, question: "What's your budget?", options: [
    { value: "sub10k", label: "Under €10,000" },
    { value: "10k-20k", label: "€10,000 - €20,000" },
    { value: "20k-30k", label: "€20,000 - €30,000" },
    { value: "30k-45k", label: "€30,000 - €45,000" },
    { value: "45k-60k", label: "€45,000 - €60,000" },
    { value: "60k+", label: "Over €60,000" },
  ]},
  { id: 2, question: "How many km do you drive daily?", options: [
    { value: "under50", label: "Under 50 km" },
    { value: "50-100", label: "50 - 100 km" },
    { value: "100-150", label: "100 - 150 km" },
    { value: "over150", label: "Over 150 km" },
  ]},
  { id: 3, question: "What type of car do you prefer?", options: [
    { value: "hatchback", label: "Hatchback / Compact" },
    { value: "suv", label: "SUV / Crossover" },
    { value: "sedan", label: "Sedan" },
    { value: "any", label: "No preference" },
  ]},
  { id: 4, question: "Can you charge at home?", options: [
    { value: "yes-wallbox", label: "Yes, I have a wallbox" },
    { value: "yes-can-install", label: "Yes, I can install one" },
    { value: "no", label: "No, public chargers only" },
  ]},
  { id: 5, question: "What matters most to you?", options: [
    { value: "price", label: "Low price" },
    { value: "range", label: "Long range" },
    { value: "charging", label: "Fast charging" },
    { value: "space", label: "Interior space" },
  ]},
  { id: 6, question: "New or used?", options: [
    { value: "new", label: "New only" },
    { value: "used", label: "Used only" },
    { value: "any", label: "Either" },
  ]},
]

function CostCalculator({ darkMode }) {
  const [kmPerYear, setKmPerYear] = useState(15000)
  const [fuelConsumption, setFuelConsumption] = useState(7)
  const [fuelPrice, setFuelPrice] = useState(1.75)
  const [electricityPrice, setElectricityPrice] = useState(0.25)
  const [evConsumption, setEvConsumption] = useState(16)
  const [showResults, setShowResults] = useState(false)

  const cardBg = darkMode ? 'bg-slate-800' : 'bg-white'
  const text = darkMode ? 'text-white' : 'text-slate-800'
  const textMuted = darkMode ? 'text-slate-400' : 'text-slate-500'
  const inputBg = darkMode ? 'bg-slate-700 border-slate-600' : 'bg-gray-50 border-gray-200'

  const fuelCostPerYear = (kmPerYear / 100) * fuelConsumption * fuelPrice
  const evCostPerYear = (kmPerYear / 100) * evConsumption * electricityPrice
  const savingsPerYear = fuelCostPerYear - evCostPerYear
  const savingsPerMonth = savingsPerYear / 12
  const savings5Years = savingsPerYear * 5

  const calculate = () => setShowResults(true)
  const reset = () => setShowResults(false)

  if (!showResults) {
    return (
      <div className={`rounded-3xl p-6 sm:p-8 shadow-2xl ${cardBg}`}>
        <h2 className={`text-2xl sm:text-3xl font-bold mb-2 ${text}`}>
          EV vs Petrol/Diesel Calculator
        </h2>
        <p className={`mb-8 ${textMuted}`}>
          See how much you could save by switching to electric
        </p>

        <div className="space-y-6">
          <div>
            <label className={`block text-sm font-semibold mb-2 ${text}`}>
              Kilometres per year
            </label>
            <input
              type="number"
              value={kmPerYear}
              onChange={(e) => setKmPerYear(Number(e.target.value))}
              className={`w-full p-4 rounded-xl border-2 font-medium ${inputBg} ${text} focus:border-emerald-500 focus:outline-none transition-colors`}
            />
            <p className={`text-xs mt-1 ${textMuted}`}>Average in Ireland: 16,000 km/year</p>
          </div>

          <div>
            <label className={`block text-sm font-semibold mb-2 ${text}`}>
              Current fuel consumption (L/100km)
            </label>
            <input
              type="number"
              step="0.1"
              value={fuelConsumption}
              onChange={(e) => setFuelConsumption(Number(e.target.value))}
              className={`w-full p-4 rounded-xl border-2 font-medium ${inputBg} ${text} focus:border-emerald-500 focus:outline-none transition-colors`}
            />
            <p className={`text-xs mt-1 ${textMuted}`}>Typical petrol car: 6-8 L/100km</p>
          </div>

          <div>
            <label className={`block text-sm font-semibold mb-2 ${text}`}>
              Fuel price (€/litre)
            </label>
            <input
              type="number"
              step="0.01"
              value={fuelPrice}
              onChange={(e) => setFuelPrice(Number(e.target.value))}
              className={`w-full p-4 rounded-xl border-2 font-medium ${inputBg} ${text} focus:border-emerald-500 focus:outline-none transition-colors`}
            />
            <p className={`text-xs mt-1 ${textMuted}`}>Current average in Ireland: ~€1.70-1.80</p>
          </div>

          <div>
            <label className={`block text-sm font-semibold mb-2 ${text}`}>
              Electricity price (€/kWh)
            </label>
            <input
              type="number"
              step="0.01"
              value={electricityPrice}
              onChange={(e) => setElectricityPrice(Number(e.target.value))}
              className={`w-full p-4 rounded-xl border-2 font-medium ${inputBg} ${text} focus:border-emerald-500 focus:outline-none transition-colors`}
            />
            <p className={`text-xs mt-1 ${textMuted}`}>Home: ~€0.20-0.30/kWh • Night rate: ~€0.10-0.15</p>
          </div>

          <div>
            <label className={`block text-sm font-semibold mb-2 ${text}`}>
              EV consumption (kWh/100km)
            </label>
            <input
              type="number"
              step="0.5"
              value={evConsumption}
              onChange={(e) => setEvConsumption(Number(e.target.value))}
              className={`w-full p-4 rounded-xl border-2 font-medium ${inputBg} ${text} focus:border-emerald-500 focus:outline-none transition-colors`}
            />
            <p className={`text-xs mt-1 ${textMuted}`}>Average EV: 15-18 kWh/100km</p>
          </div>

          <button
            onClick={calculate}
            className="w-full py-4 bg-gradient-to-r from-emerald-500 to-teal-600 text-white text-lg font-bold rounded-2xl shadow-xl shadow-emerald-500/30 hover:shadow-emerald-500/50 hover:scale-[1.02] transition-all duration-300"
          >
            Calculate Savings →
          </button>
        </div>
      </div>
    )
  }

  return (
    <div>
      <div className="text-center mb-8">
        <div className="w-20 h-20 mx-auto rounded-full bg-gradient-to-br from-emerald-400 to-teal-600 flex items-center justify-center mb-6 shadow-xl">
          <span className="text-4xl">💰</span>
        </div>
        <h2 className={`text-3xl sm:text-4xl font-extrabold mb-3 ${text}`}>
          Your Savings
        </h2>
        <p className={textMuted}>Based on {kmPerYear.toLocaleString()} km/year</p>
      </div>

      <div className="space-y-4">
        <div className={`rounded-2xl p-6 shadow-xl ${cardBg}`}>
          <h3 className={`text-lg font-bold mb-4 ${text}`}>Annual Fuel Costs</h3>
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-3">
                <span className="text-2xl">⛽</span>
                <span className={textMuted}>Petrol/Diesel</span>
              </div>
              <span className="text-xl font-bold text-red-500">€{fuelCostPerYear.toFixed(0)}</span>
            </div>
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-3">
                <span className="text-2xl">⚡</span>
                <span className={textMuted}>Electric</span>
              </div>
              <span className="text-xl font-bold text-emerald-500">€{evCostPerYear.toFixed(0)}</span>
            </div>
          </div>
        </div>

        <div className={`rounded-2xl p-6 shadow-xl ring-2 ring-emerald-500 ${cardBg}`}>
          <div className="inline-block px-4 py-1.5 bg-gradient-to-r from-emerald-500 to-teal-600 text-white text-xs font-bold rounded-full mb-4">
            💰 YOUR SAVINGS
          </div>
          <div className="grid grid-cols-3 gap-4">
            <div className="text-center">
              <div className={`text-xs font-medium ${textMuted}`}>Per Month</div>
              <div className="text-2xl font-bold text-emerald-500">€{savingsPerMonth.toFixed(0)}</div>
            </div>
            <div className="text-center">
              <div className={`text-xs font-medium ${textMuted}`}>Per Year</div>
              <div className="text-2xl font-bold text-emerald-500">€{savingsPerYear.toFixed(0)}</div>
            </div>
            <div className="text-center">
              <div className={`text-xs font-medium ${textMuted}`}>Over 5 Years</div>
              <div className="text-2xl font-bold text-emerald-500">€{savings5Years.toFixed(0)}</div>
            </div>
          </div>
        </div>

        <div className={`rounded-2xl p-6 shadow-xl ${cardBg}`}>
          <h3 className={`text-lg font-bold mb-4 ${text}`}>Cost Breakdown</h3>
          <div className="space-y-3">
            <div className="flex justify-between">
              <span className={textMuted}>Cost per km (Petrol)</span>
              <span className={`font-semibold ${text}`}>€{((fuelConsumption / 100) * fuelPrice).toFixed(3)}</span>
            </div>
            <div className="flex justify-between">
              <span className={textMuted}>Cost per km (Electric)</span>
              <span className={`font-semibold ${text}`}>€{((evConsumption / 100) * electricityPrice).toFixed(3)}</span>
            </div>
            <div className={`h-px ${darkMode ? 'bg-slate-700' : 'bg-gray-200'}`} />
            <div className="flex justify-between">
              <span className={textMuted}>Savings per km</span>
              <span className="font-semibold text-emerald-500">
                €{(((fuelConsumption / 100) * fuelPrice) - ((evConsumption / 100) * electricityPrice)).toFixed(3)}
              </span>
            </div>
          </div>
        </div>

        <div className={`rounded-2xl p-5 ${darkMode ? 'bg-emerald-900/30' : 'bg-emerald-50'} border-2 border-emerald-500/30`}>
          <p className={`text-sm ${darkMode ? 'text-emerald-300' : 'text-emerald-700'}`}>
            💡 <strong>Tip:</strong> Charging at night rates (€0.10-0.15/kWh) could save you even more!
          </p>
        </div>
      </div>

      <div className="text-center mt-8">
        <button
          onClick={reset}
          className="px-8 py-4 bg-gradient-to-r from-emerald-500 to-teal-600 text-white font-bold rounded-2xl shadow-xl hover:shadow-emerald-500/30 hover:scale-105 transition-all duration-300"
        >
          Calculate Again
        </button>
      </div>
    </div>
  )
}

export default function Home() {
  const [darkMode, setDarkMode] = useState(false)
  const [activeTab, setActiveTab] = useState('home')
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [answers, setAnswers] = useState({})
  const [showResults, setShowResults] = useState(false)
  const [recommendations, setRecommendations] = useState([])

  const calculateRecommendations = (finalAnswers) => {
    let filtered = [...evDatabase]
    
    if (finalAnswers.budget) {
      const budgetMap = {
        'sub10k': ['sub10k'],
        '10k-20k': ['sub10k', '10k-20k'],
        '20k-30k': ['10k-20k', '20k-30k'],
        '30k-45k': ['20k-30k', '30k-45k'],
        '45k-60k': ['30k-45k', '45k-60k'],
        '60k+': ['45k-60k', '60k+'],
      }
      const allowedRanges = budgetMap[finalAnswers.budget] || []
      filtered = filtered.filter(ev => allowedRanges.includes(ev.priceRange))
    }
    
    if (finalAnswers.bodyType && finalAnswers.bodyType !== 'any') {
      filtered = filtered.filter(ev => ev.bodyType === finalAnswers.bodyType)
    }
    
    if (finalAnswers.condition && finalAnswers.condition !== 'any') {
      filtered = filtered.filter(ev => ev.condition === finalAnswers.condition)
    }
    
    if (finalAnswers.dailyKm) {
      const minRange = { 'under50': 100, '50-100': 200, '100-150': 300, 'over150': 400 }
      const required = minRange[finalAnswers.dailyKm] || 100
      filtered = filtered.filter(ev => ev.range >= required)
    }
    
    if (finalAnswers.homeCharging === 'no') {
      filtered = filtered.filter(ev => ev.chargingSpeed >= 70)
    }
    
    filtered = filtered.map(ev => {
      let score = 0
      if (finalAnswers.priority === 'price') score = 100000 - ev.price
      else if (finalAnswers.priority === 'range') score = ev.range * 10
      else if (finalAnswers.priority === 'charging') score = ev.chargingSpeed * 10
      else if (finalAnswers.priority === 'space') score = ev.spaceScore * 100
      return { ...ev, score }
    })
    
    filtered.sort((a, b) => b.score - a.score)
    return filtered.slice(0, 5)
  }

  const handleAnswer = (value) => {
    const keyMap = ['budget', 'dailyKm', 'bodyType', 'homeCharging', 'priority', 'condition']
    const key = keyMap[currentQuestion]
    const newAnswers = { ...answers, [key]: value }
    setAnswers(newAnswers)
    
    if (currentQuestion < questions.length - 1) {
      setTimeout(() => setCurrentQuestion(prev => prev + 1), 200)
    } else {
      setTimeout(() => {
        const recs = calculateRecommendations(newAnswers)
        setRecommendations(recs)
        setShowResults(true)
      }, 200)
    }
  }

  const resetQuiz = () => {
    setActiveTab('home')
    setCurrentQuestion(0)
    setAnswers({})
    setShowResults(false)
    setRecommendations([])
  }

  const bg = darkMode ? 'bg-slate-900' : 'bg-gradient-to-br from-gray-50 to-gray-100'
  const cardBg = darkMode ? 'bg-slate-800' : 'bg-white'
  const text = darkMode ? 'text-white' : 'text-slate-800'
  const textMuted = darkMode ? 'text-slate-400' : 'text-slate-500'
  const border = darkMode ? 'border-slate-700' : 'border-gray-200'

  return (
    <div className={`min-h-screen ${bg} transition-colors duration-300`}>
      <header className={`py-4 px-6 flex justify-between items-center border-b ${border} ${cardBg}`}>
        <button 
          onClick={() => { resetQuiz(); setActiveTab('home'); }}
          className="flex items-center gap-3 hover:opacity-80 transition-opacity"
        >
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-400 to-teal-600 flex items-center justify-center shadow-lg shadow-emerald-500/20">
            <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          </div>
          <span className={`text-xl font-bold ${text}`}>
            PickMy<span className="text-emerald-500">EV</span>
          </span>
        </button>
        
        <button
          onClick={() => setDarkMode(!darkMode)}
          className={`p-2.5 rounded-xl transition-all ${darkMode ? 'bg-slate-700 hover:bg-slate-600' : 'bg-gray-100 hover:bg-gray-200'}`}
        >
          {darkMode ? '☀️' : '🌙'}
        </button>
      </header>

      <main className="max-w-2xl mx-auto px-4 py-8 sm:py-12">
        {activeTab === 'home' ? (
          <div className="text-center">
            <div className="w-28 h-28 mx-auto rounded-3xl bg-gradient-to-br from-emerald-400 to-teal-600 flex items-center justify-center mb-8 shadow-2xl shadow-emerald-500/30 transform hover:scale-105 transition-transform">
              <span className="text-6xl">🔌</span>
            </div>
            <h1 className={`text-4xl sm:text-5xl font-extrabold mb-4 ${text}`}>
              Find Your Perfect EV
            </h1>
            <p className={`text-lg mb-10 ${textMuted} max-w-md mx-auto`}>
              Tools to help Irish drivers make the switch to electric
            </p>
            
            <div className="grid sm:grid-cols-2 gap-4 mb-10">
              <button
                onClick={() => setActiveTab('quiz')}
                className={`p-6 rounded-2xl text-left transition-all duration-300 hover:scale-[1.02] ${cardBg} shadow-xl hover:shadow-2xl border-2 border-transparent hover:border-emerald-500`}
              >
                <span className="text-4xl mb-4 block">🎯</span>
                <h3 className={`text-xl font-bold mb-2 ${text}`}>EV Finder Quiz</h3>
                <p className={`text-sm ${textMuted}`}>
                  Answer 6 questions and get personalized EV recommendations
                </p>
              </button>

              <button
                onClick={() => setActiveTab('calculator')}
                className={`p-6 rounded-2xl text-left transition-all duration-300 hover:scale-[1.02] ${cardBg} shadow-xl hover:shadow-2xl border-2 border-transparent hover:border-emerald-500`}
              >
                <span className="text-4xl mb-4 block">💰</span>
                <h3 className={`text-xl font-bold mb-2 ${text}`}>Cost Calculator</h3>
                <p className={`text-sm ${textMuted}`}>
                  See how much you could save by switching to electric
                </p>
              </button>
            </div>
            
            <div className={`flex flex-wrap justify-center gap-6 sm:gap-10 ${textMuted}`}>
              <div className="flex items-center gap-2">
                <span className="text-2xl">🇮🇪</span>
                <span className="text-sm font-medium">Ireland Focused</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-2xl">⚡</span>
                <span className="text-sm font-medium">Free Tools</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-2xl">🎯</span>
                <span className="text-sm font-medium">Personalized</span>
              </div>
            </div>
          </div>
        ) : activeTab === 'calculator' ? (
          <div>
            <button
              onClick={() => setActiveTab('home')}
              className={`mb-6 px-4 py-2 rounded-xl font-semibold transition-colors ${textMuted} hover:${text}`}
            >
              ← Back
            </button>
            <CostCalculator darkMode={darkMode} />
          </div>
        ) : !showResults ? (
          <div>
            <button
              onClick={() => setActiveTab('home')}
              className={`mb-6 px-4 py-2 rounded-xl font-semibold transition-colors ${textMuted} hover:${text}`}
            >
              ← Back
            </button>
            
            <div className="mb-8">
              <div className="flex justify-between items-center mb-3">
                <span className={`text-sm font-semibold ${textMuted}`}>
                  Question {currentQuestion + 1} of {questions.length}
                </span>
                <span className="text-sm font-bold text-emerald-500">
                  {Math.round(((currentQuestion + 1) / questions.length) * 100)}%
                </span>
              </div>
              <div className={`h-3 rounded-full ${darkMode ? 'bg-slate-700' : 'bg-gray-200'}`}>
                <div 
                  className="h-full rounded-full bg-gradient-to-r from-emerald-500 to-teal-500 transition-all duration-500 ease-out"
                  style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
                />
              </div>
            </div>

            <div className={`rounded-3xl p-6 sm:p-8 shadow-2xl ${cardBg}`}>
              <h2 className={`text-2xl sm:text-3xl font-bold mb-8 ${text}`}>
                {questions[currentQuestion].question}
              </h2>
              
              <div className="space-y-3">
                {questions[currentQuestion].options.map((option, index) => (
                  <button
                    key={option.value}
                    onClick={() => handleAnswer(option.value)}
                    className={`w-full p-4 sm:p-5 rounded-2xl text-left font-semibold transition-all duration-200 border-2 flex items-center gap-4 ${
                      darkMode 
                        ? 'bg-slate-700/50 border-slate-600 text-white hover:border-emerald-400 hover:bg-slate-700' 
                        : 'bg-gray-50 border-gray-200 text-slate-700 hover:border-emerald-500 hover:bg-emerald-50'
                    }`}
                  >
                    <span className={`inline-flex items-center justify-center w-10 h-10 rounded-xl text-sm font-bold ${
                      darkMode ? 'bg-slate-600 text-slate-300' : 'bg-white text-slate-500 shadow-sm'
                    }`}>
                      {String.fromCharCode(65 + index)}
                    </span>
                    {option.label}
                  </button>
                ))}
              </div>
            </div>

            {currentQuestion > 0 && (
              <button
                onClick={() => setCurrentQuestion(prev => prev - 1)}
                className={`mt-6 px-5 py-2.5 rounded-xl font-semibold transition-colors ${textMuted}`}
              >
                ← Previous Question
              </button>
            )}
          </div>
        ) : (
          <div>
            <div className="text-center mb-10">
              <div className="w-20 h-20 mx-auto rounded-full bg-gradient-to-br from-emerald-400 to-teal-600 flex items-center justify-center mb-6 shadow-xl">
                <span className="text-4xl">🎉</span>
              </div>
              <h2 className={`text-3xl sm:text-4xl font-extrabold mb-3 ${text}`}>
                Your Top EV Matches
              </h2>
              <p className={textMuted}>Based on your preferences, here are your best options</p>
            </div>

            {recommendations.length > 0 ? (
              <div className="space-y-4">
                {recommendations.map((ev, index) => (
                  <div 
                    key={ev.id}
                    className={`rounded-2xl p-5 sm:p-6 shadow-xl transition-all duration-300 hover:scale-[1.02] ${cardBg} ${
                      index === 0 ? 'ring-2 ring-emerald-500 ring-offset-2 ' + (darkMode ? 'ring-offset-slate-900' : 'ring-offset-gray-50') : ''
                    }`}
                  >
                    {index === 0 && (
                      <div className="inline-block px-4 py-1.5 bg-gradient-to-r from-emerald-500 to-teal-600 text-white text-xs font-bold rounded-full mb-4">
                        🏆 BEST MATCH
                      </div>
                    )}
                    
                    <div className="flex flex-col sm:flex-row sm:items-start gap-4">
                      <div className={`w-16 h-16 rounded-2xl flex items-center justify-center text-3xl shrink-0 ${darkMode ? 'bg-slate-700' : 'bg-gray-100'}`}>
                        {ev.bodyType === 'suv' ? '🚙' : '🚗'}
                      </div>
                      
                      <div className="flex-1 min-w-0">
                        <h3 className={`text-xl font-bold mb-1 ${text}`}>{ev.name}</h3>
                        <p className={`text-sm mb-4 ${textMuted}`}>
                          {ev.brand} • {ev.year} • {ev.condition === 'new' ? '✨ New' : '🔄 Used'}
                        </p>
                        
                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-3">
                          <div className={`rounded-xl p-3 text-center ${darkMode ? 'bg-slate-700' : 'bg-gray-50'}`}>
                            <div className={`text-xs font-medium ${textMuted}`}>Range</div>
                            <div className="font-bold text-emerald-500">{ev.range} km</div>
                          </div>
                          <div className={`rounded-xl p-3 text-center ${darkMode ? 'bg-slate-700' : 'bg-gray-50'}`}>
                            <div className={`text-xs font-medium ${textMuted}`}>Battery</div>
                            <div className={`font-bold ${text}`}>{ev.batterySize} kWh</div>
                          </div>
                          <div className={`rounded-xl p-3 text-center ${darkMode ? 'bg-slate-700' : 'bg-gray-50'}`}>
                            <div className={`text-xs font-medium ${textMuted}`}>Fast Charge</div>
                            <div className={`font-bold ${text}`}>{ev.chargingSpeed} kW</div>
                          </div>
                          <div className={`rounded-xl p-3 text-center ${darkMode ? 'bg-slate-700' : 'bg-gray-50'}`}>
                            <div className={`text-xs font-medium ${textMuted}`}>Price</div>
                            <div className={`font-bold ${text}`}>€{ev.price.toLocaleString()}</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className={`text-center py-16 rounded-3xl ${cardBg}`}>
                <span className="text-5xl mb-4 block">🤔</span>
                <p className={textMuted}>No exact matches found. Try different preferences.</p>
              </div>
            )}

            <div className="text-center mt-10">
              <button
                onClick={resetQuiz}
                className="px-8 py-4 bg-gradient-to-r from-emerald-500 to-teal-600 text-white font-bold rounded-2xl shadow-xl hover:shadow-emerald-500/30 hover:scale-105 transition-all duration-300"
              >
                Start Over
              </button>
            </div>
          </div>
        )}
      </main>

      <footer className={`py-8 text-center text-sm ${textMuted}`}>
        <p>© 2026 PickMyEV.ie • Helping Irish drivers go electric ⚡🇮🇪</p>
      </footer>
    </div>
  )
}
