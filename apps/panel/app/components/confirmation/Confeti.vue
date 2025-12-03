<template>
  <canvas ref="canvasRef" class="fixed inset-0 pointer-events-none z-40"></canvas>
</template>

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue'

const canvasRef = ref<HTMLCanvasElement | null>(null)

onMounted(() => {
  const canvas = canvasRef.value
  if (!canvas) return

  const ctx = canvas.getContext('2d')
  if (!ctx) return

  const resizeCanvas = () => {
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight
  }
  resizeCanvas()

  let confetti: Array<{
    x: number
    y: number
    vx: number
    vy: number
    size: number
    color: string
    rotation: number
    rotationSpeed: number
  }> = []

  const colors = [
    'oklch(0.75 0.15 85)', // gold
    'oklch(0.95 0.05 15)', // light pink
    'oklch(0.88 0.08 290)', // lavender
    'oklch(1 0 0)', // white
  ]

  // Create confetti particles
  for (let i = 0; i < 50; i++) {
    confetti.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height - canvas.height,
      vx: (Math.random() - 0.5) * 4,
      vy: Math.random() * 2 + 1,
      size: Math.random() * 8 + 4,
      color: colors[Math.floor(Math.random() * colors.length)] || 'oklch(1 0 0)',
      rotation: Math.random() * Math.PI * 2,
      rotationSpeed: (Math.random() - 0.5) * 0.1,
    })
  }

  let animationId: number

  const animate = () => {
    // Clear with slight transparency for trail effect
ctx.globalCompositeOperation = 'destination-out'
ctx.fillStyle = 'rgba(0, 0, 0, 0.06)' // ajusta 0.03–0.1 según gusto
ctx.fillRect(0, 0, canvas.width, canvas.height)
ctx.globalCompositeOperation = 'source-over' // vuelve a modo normal

    confetti.forEach((particle) => {
      particle.x += particle.vx
      particle.y += particle.vy
      particle.vy += 0.1 // gravity
      particle.rotation += particle.rotationSpeed

      ctx.save()
      ctx.translate(particle.x, particle.y)
      ctx.rotate(particle.rotation)
      ctx.fillStyle = particle.color
      ctx.fillRect(-particle.size / 2, -particle.size / 2, particle.size, particle.size)
      ctx.restore()
    })

    // Remove off-screen particles
    confetti = confetti.filter(p => p.y - 1500 <= canvas.height)

    if (confetti.length > 0) {
      animationId = requestAnimationFrame(animate)
    } else {
      // Clear canvas when done
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      canvas.style.transition = 'opacity 0.5s ease'
      canvas.style.opacity = '0'
    }
  }

  animate()
  window.addEventListener('resize', resizeCanvas)

  onBeforeUnmount(() => {
    cancelAnimationFrame(animationId)
    window.removeEventListener('resize', resizeCanvas)
  })
})
</script>
