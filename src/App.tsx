import { useState } from 'react'
import Header from './components/Header'
import DegreeSelector from './components/DegreeSelector'
import Harmonica from './components/Harmonica'
import InstallPrompt from './components/InstallPrompt'

function App() {
  const [selectedRoot, setSelectedRoot] = useState<string | null>(null)
  const [showScaleDegrees, setShowScaleDegrees] = useState(false)
  const [selectedDegrees, setSelectedDegrees] = useState<Set<string>>(new Set())

  const handleNoteClick = (note: string) => {
    if (selectedRoot === note) {
      setShowScaleDegrees(false)
      setSelectedRoot(null)
    } else {
      setShowScaleDegrees(true)
      setSelectedRoot(note)
    }
  }

  const handleDegreeToggle = (degree: string) => {
    setSelectedDegrees(prev => {
      const newSet = new Set(prev)
      if (newSet.has(degree)) {
        newSet.delete(degree)
      } else {
        newSet.add(degree)
      }
      return newSet
    })
  }

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-5">
      <div className="bg-white rounded-lg shadow-lg max-w-full overflow-x-auto p-8 md:p-12">
        <Header />
        <DegreeSelector 
          selectedDegrees={selectedDegrees}
          onDegreeToggle={handleDegreeToggle}
          showScaleDegrees={showScaleDegrees}
          selectedRoot={selectedRoot}
        />
        <Harmonica 
          selectedRoot={selectedRoot}
          showScaleDegrees={showScaleDegrees}
          selectedDegrees={selectedDegrees}
          onNoteClick={handleNoteClick}
        />
      </div>
      <InstallPrompt />
    </div>
  )
}

export default App
