import React from 'react'

interface DegreeSelectorProps {
  selectedDegrees: Set<string>
  onDegreeToggle: (degree: string) => void
  showScaleDegrees: boolean
  selectedRoot: string | null
}

const degreeAltNames = ['1', 'b2', '2', 'b3', '3', '4', 'b5', '5', 'b6', '6', 'b7', '7']

const DegreeSelector: React.FC<DegreeSelectorProps> = ({
  selectedDegrees,
  onDegreeToggle,
}) => {
  return (
    <div className="flex justify-center gap-1 mb-5 flex-nowrap">
      {degreeAltNames.map((degree) => (
        <button
          key={degree}
          onClick={() => onDegreeToggle(degree)}
          className={`
            degree-button px-2 py-1 border-2 border-gray-400 bg-white cursor-pointer rounded font-bold text-responsive-degree transition-all duration-200 text-center
            hover:bg-gray-100
            ${selectedDegrees.has(degree) 
              ? 'bg-blue-500 text-white border-blue-600' 
              : 'border-gray-400'
            }
          `}
        >
          {degree}
        </button>
      ))}
    </div>
  )
}

export default DegreeSelector
