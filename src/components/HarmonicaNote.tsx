import React from 'react'

interface HarmonicaNoteProps {
  note: string
  empty?: boolean
  bend?: boolean
  selectedRoot: string | null
  showScaleDegrees: boolean
  selectedDegrees: Set<string>
  onNoteClick: (note: string) => void
}

const HarmonicaNote: React.FC<HarmonicaNoteProps> = ({
  note,
  empty = false,
  bend = false,
  selectedRoot,
  showScaleDegrees,
  selectedDegrees,
  onNoteClick,
}) => {
  const notes = ['C', 'Db', 'D', 'Eb', 'E', 'F', 'F#', 'G', 'Ab', 'A', 'Bb', 'B']
  const enharmonic: Record<string, string> = {
    'C#': 'Db',
    'D#': 'Eb',
    'Gb': 'F#',
    'G#': 'Ab',
    'A#': 'Bb',
  }

  const normalizeNote = (note: string) => {
    return enharmonic[note] || note
  }

  const getScaleDegree = (rootNote: string, targetNote: string) => {
    const root = normalizeNote(rootNote)
    const target = normalizeNote(targetNote)

    const rootIndex = notes.indexOf(root)
    const targetIndex = notes.indexOf(target)

    if (rootIndex === -1 || targetIndex === -1) return '?'

    const interval = (targetIndex - rootIndex + 12) % 12
    const degrees = ['1', 'b2', '2', 'b3', '3', '4', 'b5', '5', 'b6', '6', 'b7', '7']
    const degreeAlt = ['1', '#1', '2', '#2', '3', '4', '#4', '5', '#5', '6', '#6', '7']

    if (interval === 1 || interval === 4 || interval === 6 || interval === 9) {
      return degreeAlt[interval]
    }

    return degrees[interval]
  }

  const normalizeDegree = (degree: string) => {
    const mapping: Record<string, string> = {
      'b2': '#1',
      '#1': 'b2',
      'b3': '#2',
      '#2': 'b3',
      'b5': '#4',
      '#4': 'b5',
      'b6': '#5',
      '#5': 'b6',
      'b7': '#6',
      '#6': 'b7',
    }
    return mapping[degree] || degree
  }

  if (empty) {
    return (
      <div className="note border-transparent bg-transparent cursor-default mx-0.5" />
    )
  }

  const isSelected = selectedRoot && normalizeNote(note) === normalizeNote(selectedRoot)
  const degree = selectedRoot ? getScaleDegree(selectedRoot, note) : ''
  const isHighlighted = selectedDegrees.has(degree) || selectedDegrees.has(normalizeDegree(degree))

  const getDisplayContent = () => {
    if (!showScaleDegrees || !selectedRoot) {
      return note
    }

    if (isSelected) {
      return (
        <>
          1
          <div className="text-responsive-note-name text-gray-500 mt-0.5">{note}</div>
        </>
      )
    }

    return (
      <>
        {degree}
        <div className="text-responsive-note-name text-gray-500 mt-0.5">{note}</div>
      </>
    )
  }

  const getNoteClasses = () => {
    let classes = 'note flex flex-col items-center justify-center mx-0.5 cursor-pointer font-bold text-responsive-note transition-all duration-200 bg-white select-none border-2'

    if (bend) {
      classes += ' bg-orange-200 border-orange-600'
    } else {
      classes += ' border-gray-600'
    }

    if (isSelected) {
      classes += ' bg-green-500 text-white border-green-600'
    } else if (isHighlighted && showScaleDegrees) {
      classes += ' bg-yellow-300 border-yellow-500'
    }

    classes += ' hover:bg-gray-200 hover:scale-105'

    return classes
  }

  return (
    <div
      className={getNoteClasses()}
      onClick={() => onNoteClick(note)}
    >
      {getDisplayContent()}
    </div>
  )
}

export default HarmonicaNote
