"use client"

import { useEffect, useRef } from "react"

export default function AudioManager() {
  const audioRef = useRef<HTMLAudioElement | null>(null)

  useEffect(() => {
    // Create an audio element if it doesn't exist
    if (!audioRef.current) {
      audioRef.current = new Audio("https://hebbkx1anhila5yf.public.blob.vercel-storage.com/DaniHaDani%20-%20Lev%201-8WrSeomYufOVNSCKfl8V1yCGYeiLbL.mp3")
      audioRef.current.loop = true // Loop the song
      audioRef.current.volume = 0.05 // Set a subtle volume
    }

    // Function to start audio on user interaction
    const startAudio = () => {
      if (audioRef.current && audioRef.current.paused) {
        audioRef.current.play().catch((error) => {
          console.log("Audio playback prevented:", error)
        })
      }
      // Remove event listeners after the first interaction
      document.removeEventListener("click", startAudio)
      document.removeEventListener("touchstart", startAudio)
    }

    // Add event listeners to start audio on user interaction
    document.addEventListener("click", startAudio)
    document.addEventListener("touchstart", startAudio)

    return () => {
      // Clean up: remove event listeners and pause audio
      document.removeEventListener("click", startAudio)
      document.removeEventListener("touchstart", startAudio)

      if (audioRef.current) {
        audioRef.current.pause()
        audioRef.current.currentTime = 0 // Reset playback to start
        audioRef.current = null // Clean up the audio element
      }
    }
  }, []) // Empty dependency array ensures this runs once on mount

  return null
}
