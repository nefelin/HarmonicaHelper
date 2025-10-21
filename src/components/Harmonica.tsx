import React from 'react'
import HarmonicaRow from './HarmonicaRow'

interface HarmonicaProps {
  selectedRoot: string | null
  showScaleDegrees: boolean
  selectedDegrees: Set<string>
  onNoteClick: (note: string) => void
}

const Harmonica: React.FC<HarmonicaProps> = ({
  selectedRoot,
  showScaleDegrees,
  selectedDegrees,
  onNoteClick,
}) => {
  // Blow side data (top half)
  const blowData = [
    {
      label: 'Blow bend',
      notes: [
        { note: '', empty: true },
        { note: '', empty: true },
        { note: '', empty: true },
        { note: '', empty: true },
        { note: '', empty: true },
        { note: '', empty: true },
        { note: '', empty: true },
        { note: 'Eb', bend: true },
        { note: 'F#', bend: true },
        { note: 'B', bend: true },
      ],
    },
    {
      label: '',
      notes: [
        { note: '', empty: true },
        { note: '', empty: true },
        { note: '', empty: true },
        { note: '', empty: true },
        { note: '', empty: true },
        { note: '', empty: true },
        { note: '', empty: true },
        { note: '', empty: true },
        { note: '', empty: true },
        { note: 'Bb', bend: true },
      ],
    },
    {
      label: 'Blow',
      notes: [
        { note: 'C' },
        { note: 'E' },
        { note: 'G' },
        { note: 'C' },
        { note: 'E' },
        { note: 'G' },
        { note: 'C' },
        { note: 'E' },
        { note: 'G' },
        { note: 'C' },
      ],
    },
  ]

  // Draw side data (bottom half)
  const drawData = [
    {
      label: 'Draw',
      notes: [
        { note: 'D' },
        { note: 'G' },
        { note: 'B' },
        { note: 'D' },
        { note: 'F' },
        { note: 'A' },
        { note: 'B' },
        { note: 'D' },
        { note: 'F' },
        { note: 'A' },
      ],
    },
    {
      label: 'Bend',
      notes: [
        { note: 'Db', bend: true },
        { note: 'F#', bend: true },
        { note: 'Bb', bend: true },
        { note: 'Db', bend: true },
        { note: '', empty: true },
        { note: 'Ab', bend: true },
        { note: '', empty: true },
        { note: '', empty: true },
        { note: '', empty: true },
        { note: '', empty: true },
      ],
    },
    {
      label: '',
      notes: [
        { note: '', empty: true },
        { note: 'F', bend: true },
        { note: 'A', bend: true },
        { note: '', empty: true },
        { note: '', empty: true },
        { note: '', empty: true },
        { note: '', empty: true },
        { note: '', empty: true },
        { note: '', empty: true },
        { note: '', empty: true },
      ],
    },
    {
      label: '',
      notes: [
        { note: '', empty: true },
        { note: '', empty: true },
        { note: 'Ab', bend: true },
        { note: '', empty: true },
        { note: '', empty: true },
        { note: '', empty: true },
        { note: '', empty: true },
        { note: '', empty: true },
        { note: '', empty: true },
        { note: '', empty: true },
      ],
    },
  ]

  return (
    <div className="inline-block">
      {/* Blow side */}
      {blowData.map((row, index) => (
        <HarmonicaRow
          key={`blow-${index}`}
          label={row.label}
          notes={row.notes}
          selectedRoot={selectedRoot}
          showScaleDegrees={showScaleDegrees}
          selectedDegrees={selectedDegrees}
          onNoteClick={onNoteClick}
        />
      ))}
      
      {/* Hole numbers in the middle */}
      <div className="flex ml-20 my-2">
        {Array.from({ length: 10 }, (_, i) => (
          <div
            key={i}
            className="hole-number bg-gray-800 text-white flex items-center justify-center font-bold text-responsive-hole mx-0.5"
          >
            {i + 1}
          </div>
        ))}
      </div>
      
      {/* Draw side */}
      {drawData.map((row, index) => (
        <HarmonicaRow
          key={`draw-${index}`}
          label={row.label}
          notes={row.notes}
          selectedRoot={selectedRoot}
          showScaleDegrees={showScaleDegrees}
          selectedDegrees={selectedDegrees}
          onNoteClick={onNoteClick}
        />
      ))}
    </div>
  )
}

export default Harmonica
