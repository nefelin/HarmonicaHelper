import React from 'react'
import HarmonicaNote from './HarmonicaNote'

interface NoteData {
  note: string
  empty?: boolean
  bend?: boolean
}

interface HarmonicaRowProps {
  label: string
  notes: NoteData[]
  selectedRoot: string | null
  showScaleDegrees: boolean
  selectedDegrees: Set<string>
  onNoteClick: (note: string) => void
}

const HarmonicaRow: React.FC<HarmonicaRowProps> = ({
  label,
  notes,
  selectedRoot,
  showScaleDegrees,
  selectedDegrees,
  onNoteClick,
}) => {
  return (
    <div className="flex items-center my-1">
      <div className="label font-bold text-gray-800 text-responsive-label">
        {label}
      </div>
      {notes.map((noteData, index) => (
        <HarmonicaNote
          key={index}
          note={noteData.note}
          empty={noteData.empty}
          bend={noteData.bend}
          selectedRoot={selectedRoot}
          showScaleDegrees={showScaleDegrees}
          selectedDegrees={selectedDegrees}
          onNoteClick={onNoteClick}
        />
      ))}
    </div>
  )
}

export default HarmonicaRow
