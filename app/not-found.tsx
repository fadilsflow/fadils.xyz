'use client'

import { useState, useEffect } from 'react'

import { motion } from 'framer-motion'

export default function NotFound() {
  const [progress, setProgress] = useState(0)
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((oldProgress) => {
        if (oldProgress === 100) {
          return 0
        }
        const diff = Math.random() * 10
        return Math.min(oldProgress + diff, 100)
      })
    }, 500)

    return () => {
      clearInterval(timer)
    }
  }, [])

  const handleReload = () => {
    setIsLoading(true)
    setTimeout(() => {
      window.location.reload()
    }, 1500)
  }

  return (
    <div className="bg-background text-foreground flex min-h-screen flex-col items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center"
      >
        <h1 className="text-primary mb-4 text-9xl font-extrabold">404</h1>
        <h2 className="mb-4 text-3xl font-semibold">Page Not Found</h2>
        <p className="text-muted-foreground mb-8 text-xl">
          Oops! The page you&apos;re looking for doesn&apos;t exist.
        </p>
      </motion.div>

      <motion.div
        className="text-muted-foreground mt-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.5 }}
      >
        <p>Lost? Try searching or navigate back to the homepage.</p>
      </motion.div>
    </div>
  )
}
