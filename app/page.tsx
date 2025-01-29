"use client"

import { useState, useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"

const fonts = [
  "Arial",
  "Helvetica",
  "Times New Roman",
  "Courier",
  "Verdana",
  "Georgia",
  "Palatino",
  "Garamond",
  "Bookman",
  "Comic Sans MS",
  "Trebuchet MS",
  "Arial Black",
  "Impact",
]

export default function Home() {
  const [clicks, setClicks] = useState(0)
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    const drawMasivo = () => {
      const x = Math.random() * canvas.width
      const y = Math.random() * canvas.height
      const size = Math.random() * 50 + 10 // Tamaño entre 10 y 60
      const font = fonts[Math.floor(Math.random() * fonts.length)]

      ctx.font = `${size}px "${font}"`
      ctx.fillStyle = "red"
      ctx.fillText("MASIVO", x, y)
    }

    for (let i = 0; i < clicks; i++) {
      drawMasivo()
    }
  }, [clicks])

  return (
    <div className="relative h-screen w-full overflow-hidden">
      <canvas ref={canvasRef} className="absolute inset-0 z-0" />
      <div className="relative z-10 flex h-full items-center justify-center">
        <Button onClick={() => setClicks((prev) => prev + 1)} className="text-2xl font-bold px-8 py-6">
          MASIVO
        </Button>
      </div>
    </div>
  )
}

