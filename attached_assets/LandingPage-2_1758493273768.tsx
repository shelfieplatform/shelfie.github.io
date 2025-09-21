"use client"

import { useEffect, useRef, useState } from "react"
import * as THREE from "three"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import Header from "./Header"
import Hero from "./Hero"
import Features from "./Features"
import Footer from "./Footer"
import FloatingWaitlist from "./FloatingWaitlist"
import HowItWorks from "./HowItWorks"
import AnimationDebugger from "./AnimationDebugger"
import ScrollDebugger from "./ScrollDebugger"

gsap.registerPlugin(ScrollTrigger)

const MEDIA_ITEM_COUNT = 500
const USER_BUBBLE_COUNT = 40
const UNIVERSE_RADIUS = 20
const USER_BUBBLE_RADIUS = 0.8
const MIN_PARTICLE_SCALE = 0.2

const mediaTypes = [
  { name: "Book", emoji: "📚", color: "#4CAF50" },
  { name: "Music", emoji: "🎵", color: "#2196F3" },
  { name: "Film", emoji: "🎬", color: "#FFC107" },
  { name: "TV", emoji: "📺", color: "#9C27B0" },
  { name: "Podcast", emoji: "🎙️", color: "#FF5722" },
]

// Update user names to be more concise and unique
const userNames = [
  "Alex",
  "Blake",
  "Casey",
  "Dana",
  "Eden",
  "Finn",
  "Gray",
  "Harper",
  "Indigo",
  "Jordan",
  "Kennedy",
  "Logan",
  "Morgan",
  "Noah",
  "Parker",
  "Quinn",
  "Riley",
  "Sage",
  "Taylor",
  "Val",
  "Winter",
  "Mustafa",
  "Yuri",
  "Zen",
  "Ash",
  "Brook",
  "Charlie",
  "Drew",
  "Ellis",
  "Fran",
  "Cindy",
  "Haven",
  "Liam",
  "Jamie",
  "Kai",
  "Lee",
  "Max",
  "Nico",
  "Oakley",
  "Piper",
  "River",
  "Noah",
  "Tate",
  "Uma",
  "Oliver",
  "West",
  "Xu",
  "Yang",
  "Zion",
  "Avery",
]

const generateRandomName = () => {
  return userNames[Math.floor(Math.random() * userNames.length)]
}

export default function LandingPage() {
  const animationContainerRef = useRef<HTMLDivElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)

  const [animationSettings, setAnimationSettings] = useState([])
  const [scrollSettings, setScrollSettings] = useState({
    scrollDistance: 200,
    scrubValue: 1,
    easeFunction: "power2.inOut",
    duration: 1,
  })

  useEffect(() => {
    if (typeof window === "undefined" || !animationContainerRef.current) return

    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })

    renderer.setSize(window.innerWidth, window.innerHeight)
    animationContainerRef.current.appendChild(renderer.domElement)

    const mediaItems: THREE.Group[] = []
    const userBubbles: THREE.Group[] = []

    // Create media items
    mediaTypes.forEach((mediaType) => {
      const canvas = document.createElement("canvas")
      canvas.width = 64
      canvas.height = 64
      const ctx = canvas.getContext("2d")
      if (ctx) {
        ctx.font = "48px Arial"
        ctx.textAlign = "center"
        ctx.textBaseline = "middle"
        ctx.fillText(mediaType.emoji, 32, 32)
      }
      const texture = new THREE.CanvasTexture(canvas)

      for (let i = 0; i < MEDIA_ITEM_COUNT / mediaTypes.length; i++) {
        const group = new THREE.Group()

        // Create emoji sprite
        const spriteMaterial = new THREE.SpriteMaterial({ map: texture })
        const sprite = new THREE.Sprite(spriteMaterial)
        sprite.scale.set(0.3, 0.3, 1)
        group.add(sprite)

        // Create background circle
        const circleGeometry = new THREE.CircleGeometry(0.2, 32)
        const circleMaterial = new THREE.MeshBasicMaterial({
          color: mediaType.color,
          side: THREE.DoubleSide,
          transparent: true,
          opacity: 0.3,
        })
        const circle = new THREE.Mesh(circleGeometry, circleMaterial)
        circle.position.z = -0.01 // Slightly behind the emoji
        group.add(circle)

        const theta = Math.random() * Math.PI * 2
        const phi = Math.acos(Math.random() * 2 - 1)
        const radius = Math.random() * UNIVERSE_RADIUS

        group.position.x = radius * Math.sin(phi) * Math.cos(theta)
        group.position.y = radius * Math.sin(phi) * Math.sin(theta)
        group.position.z = radius * Math.cos(phi)

        group.userData = { originalPosition: group.position.clone(), mediaType: mediaType.name }

        scene.add(group)
        mediaItems.push(group)
      }
    })

    // Create user bubbles
    for (let i = 0; i < USER_BUBBLE_COUNT; i++) {
      const group = new THREE.Group()

      // Create bubble
      const geometry = new THREE.SphereGeometry(USER_BUBBLE_RADIUS, 32, 32)
      const material = new THREE.MeshBasicMaterial({
        color: new THREE.Color().setHSL(Math.random(), 0.5, 0.5),
        transparent: true,
        opacity: 0.3,
      })
      const bubble = new THREE.Mesh(geometry, material)
      group.add(bubble)

      // Create name label
      const name = generateRandomName()
      const canvas = document.createElement("canvas")
      canvas.width = 256
      canvas.height = 64
      const ctx = canvas.getContext("2d")
      if (ctx) {
        ctx.font = "bold 32px Arial"
        ctx.fillStyle = "white"
        ctx.textAlign = "center"
        ctx.textBaseline = "middle"
        ctx.fillText(name, 128, 32)
      }
      const texture = new THREE.CanvasTexture(canvas)
      const spriteMaterial = new THREE.SpriteMaterial({ map: texture })
      const sprite = new THREE.Sprite(spriteMaterial)
      sprite.scale.set(2, 0.5, 1)
      sprite.position.y = USER_BUBBLE_RADIUS + 0.4
      group.add(sprite)

      const theta = Math.random() * Math.PI * 2
      const phi = Math.acos(Math.random() * 2 - 1)
      const radius = UNIVERSE_RADIUS * (0.5 + Math.random() * 0.5) // Distribute bubbles between 50% and 100% of UNIVERSE_RADIUS

      group.position.x = radius * Math.sin(phi) * Math.cos(theta)
      group.position.y = radius * Math.sin(phi) * Math.sin(theta)
      group.position.z = radius * Math.cos(phi)

      scene.add(group)
      userBubbles.push(group)
    }

    camera.position.z = 25

    // Animation function
    const animate = () => {
      rafId = requestAnimationFrame(animate)

      mediaItems.forEach((item) => {
        item.quaternion.copy(camera.quaternion)
      })

      userBubbles.forEach((bubble) => {
        bubble.quaternion.copy(camera.quaternion)
      })

      renderer.render(scene, camera)
    }
    let rafId: number

    animate()

    setAnimationSettings(
      mediaItems.map((item) => ({
        name: item.userData.mediaType,
        scale: 1,
        opacity: 1,
        startPosition: item.userData.originalPosition.clone(),
        endPosition: new THREE.Vector3(),
      })),
    )

    // Scroll-based animation
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: animationContainerRef.current,
        start: "top top",
        end: `+=${scrollSettings.scrollDistance}vh`,
        scrub: scrollSettings.scrubValue,
      },
    })

    tl.to(mediaItems, {
      duration: scrollSettings.duration,
      ease: scrollSettings.easeFunction,
      onUpdate: () => {
        const progress = tl.progress()
        mediaItems.forEach((item, index) => {
          const originalPos = item.userData.originalPosition
          const targetBubble = userBubbles[index % userBubbles.length]
          const targetPos = targetBubble.position

          // Always move towards the target bubble
          item.position.lerpVectors(originalPos, targetPos, progress)

          // Adjust scale to keep particles visible from a distance
          const scale = Math.max(MIN_PARTICLE_SCALE, 1 - progress * 0.4)
          item.scale.set(scale, scale, scale)

          // Adjust opacity to maintain visibility
          item.children.forEach((child) => {
            if (child instanceof THREE.Mesh || child instanceof THREE.Sprite) {
              const material = child.material as THREE.Material & { opacity?: number }
              if (material.opacity !== undefined) {
                material.opacity = Math.max(0.3, 1 - progress * 0.7)
              }
            }
          })
        })
      },
    })

    // Update the camera movement to zoom out less
    tl.to(
      camera.position,
      {
        z: 30,
        duration: 1,
        ease: "power2.inOut",
      },
      0,
    )

    // Handle window resize
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight
      camera.updateProjectionMatrix()
      renderer.setSize(window.innerWidth, window.innerHeight)
      ScrollTrigger.refresh()
    }

    window.addEventListener("resize", handleResize)

    return () => {
      window.removeEventListener("resize", handleResize)
      if (animationContainerRef.current) {
        animationContainerRef.current.removeChild(renderer.domElement)
      }
      ScrollTrigger.getAll().forEach((st) => st.kill())
      cancelAnimationFrame(rafId)
    }
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#A690F2] to-[#2C1761] text-white">
      <div className="relative">
        <Header />
        <Hero />
        <div className="relative">
          <div className="h-[200vh] relative">
            <div
              ref={animationContainerRef}
              className="w-full h-screen sticky top-0 left-0 flex items-center justify-center z-10"
            />
          </div>
          <div ref={contentRef} className="relative z-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <Features />
              <HowItWorks />
              <Footer />
            </div>
          </div>
        </div>
      </div>
      <FloatingWaitlist />
      <AnimationDebugger items={animationSettings} onUpdate={setAnimationSettings} />
      <ScrollDebugger initialSettings={scrollSettings} onUpdate={setScrollSettings} />
    </div>
  )
}

