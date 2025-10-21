import React, { useState, useEffect } from 'react'

const InstallPrompt: React.FC = () => {
  const [showPrompt, setShowPrompt] = useState(false)
  const [deferredPrompt, setDeferredPrompt] = useState<any>(null)

  useEffect(() => {
    // Register service worker
    if ('serviceWorker' in navigator) {
      window.addEventListener('load', () => {
        navigator.serviceWorker.register('/service-worker.js')
          .then(() => console.log('Service Worker registered'))
          .catch(err => console.log('Service Worker registration failed:', err))
      })
    }

    // Handle install prompt
    const handleBeforeInstallPrompt = (e: Event) => {
      e.preventDefault()
      setDeferredPrompt(e)
      setShowPrompt(true)
    }

    window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt)

    // Handle successful installation
    const handleAppInstalled = () => {
      console.log('PWA installed successfully')
      setShowPrompt(false)
    }

    window.addEventListener('appinstalled', handleAppInstalled)

    return () => {
      window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt)
      window.removeEventListener('appinstalled', handleAppInstalled)
    }
  }, [])

  const handleInstall = async () => {
    if (!deferredPrompt) return

    deferredPrompt.prompt()
    await deferredPrompt.userChoice

    setDeferredPrompt(null)
    setShowPrompt(false)
  }

  const handleClose = () => {
    setShowPrompt(false)
  }

  if (!showPrompt) return null

  return (
    <div className="fixed bottom-5 left-1/2 transform -translate-x-1/2 bg-green-500 text-white px-6 py-4 rounded-lg shadow-lg flex items-center gap-4 z-50">
      <span>Install this app for offline use?</span>
      <button
        onClick={handleInstall}
        className="bg-white text-green-500 border-none px-4 py-2 rounded cursor-pointer font-bold hover:bg-gray-100"
      >
        Install
      </button>
      <button
        onClick={handleClose}
        className="bg-transparent text-white text-xl p-0 w-8 h-8 hover:bg-gray-100 hover:text-gray-800"
      >
        ×
      </button>
    </div>
  )
}

export default InstallPrompt
