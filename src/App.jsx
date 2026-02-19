import { useState, useEffect, useRef } from 'react'
import './App.css'

const images = [
  'WhatsApp Image 2025-10-06 at 15.50.57.jpeg',
  'WhatsApp Image 2025-10-06 at 15.54.11.jpeg',
  'WhatsApp Image 2025-10-06 at 19.04.59.jpeg',
  'WhatsApp Image 2025-10-06 at 19.05.00 (1).jpeg',
  'WhatsApp Image 2025-10-06 at 19.05.00.jpeg',
  'WhatsApp Image 2025-10-06 at 19.05.01 (1).jpeg',
  'WhatsApp Image 2025-10-06 at 19.05.01.jpeg',
  'WhatsApp Image 2025-10-06 at 19.06.29.jpeg',
  'WhatsApp Image 2025-10-06 at 19.06.54.jpeg',
  'WhatsApp Image 2025-10-06 at 19.07.14.jpeg',
  'WhatsApp Image 2025-10-11 at 16.29.39.jpeg',
  'WhatsApp Image 2025-10-06 at 19.08.34.jpeg',
  'WhatsApp Image 2025-10-06 at 19.08.59.jpeg',
  'WhatsApp Image 2025-10-06 at 19.09.27.jpeg'
]

const captions = [
  "🌸 'In this new year of your life, may grace beautify you and love surround you — I thank God for you.'",
  "💖 'You are a gift wrapped in purpose — may joy and favor overflow in your path.'",
  "🌷 'May every day ahead echo God's goodness and unfold His promises over your life.'",
  "🌿 'You are proof that God writes beautiful stories — and I'm grateful to be part of yours.'",
  "🌹 'This year, may your light shine brighter, your heart laugh louder, and your dreams unfold effortlessly.'",
  "💞 'Heaven rejoices over your life — may peace, beauty, and divine increase rest upon you.'",
  "✨ 'You walk in wisdom, bloom in grace, and radiate love — may this new chapter reveal even more of Him through you.'",
  "🌻 'You are favored beyond measure — may this birthday mark the beginning of greater glory.'",
  "🌺 'Your life is a testimony of grace; may every step ahead be drenched in divine joy and purpose.'",
  "☀️ 'May your heart never lack peace, your smile never fade, and your days never run dry of love.'",
  "💐 'God's hand is upon you, His love within you, and His favor all around you — happy birthday, my love.'",
  "🌈 'This year, may laughter and grace overflow in your life — you are deeply loved and divinely helped.'",
  "🌷 'You carry beauty and strength with such ease — may this year reward your faith with fulfillment.'",
  "💎 'You are the evidence of God's intentional love — may this season usher you into joy unending.'"
]

function App() {
  const [loading, setLoading] = useState(true)
  const [progress, setProgress] = useState(0)
  const [currentSlide, setCurrentSlide] = useState(0)
  const [showBenediction, setShowBenediction] = useState(false)
  const audioRef = useRef(null)

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(p => {
        if (p >= 100) {
          clearInterval(interval)
          setTimeout(() => setLoading(false), 800)
          return 100
        }
        return p + 5
      })
    }, 200)
    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    if (!loading) {
      const slideInterval = setInterval(() => {
        setCurrentSlide(s => (s + 1) % images.length)
      }, 6000)
      return () => clearInterval(slideInterval)
    }
  }, [loading])

  useEffect(() => {
    if (!loading && audioRef.current) {
      audioRef.current.play().catch(err => console.log('Autoplay blocked:', err))
      const timer = setTimeout(() => {
        setShowBenediction(true)
      }, 95000)
      return () => clearTimeout(timer)
    }
  }, [loading])





  if (loading) {
    return (
      <div className="fixed inset-0 flex flex-col items-center justify-center bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 text-white text-center z-50">
        <h1 className="text-4xl md:text-5xl font-light mb-8 tracking-wider float">Lennie, My Chocolatie Queen 💖</h1>
        <div className="w-80 h-1 bg-white/20 rounded-full overflow-hidden">
          <div className="h-full bg-gradient-to-r from-white to-pink-200 rounded-full transition-all duration-300" style={{ width: `${progress}%` }} />
        </div>
        <p className="mt-8 text-2xl font-light tracking-widest opacity-90">Happy Birthday ✨</p>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex flex-col items-center justify-center text-center px-4 py-8 animate-[fadeIn_1.2s_ease-out]">
      <h1 className="text-5xl md:text-6xl font-light gradient-text mb-6 tracking-tight">
        New Beginnings, Greater Glory
      </h1>
      <p className="text-white/80 text-lg md:text-xl mb-12 max-w-2xl font-light leading-relaxed">
        Step into new dimensions of favor, wisdom, and peace. In this season, may your life reveal the faithfulness of God 🌸
      </p>

      <div className="relative w-80 h-80 sm:w-[500px] sm:h-[500px] overflow-hidden rounded-3xl shadow-2xl glass">
        {images.map((img, i) => (
          <img
            key={i}
            src={`/images/${img}`}
            alt=""
            className="absolute inset-0 w-full h-full object-cover transition-opacity duration-1000"
            style={{ opacity: i === currentSlide ? 1 : 0 }}
          />
        ))}
      </div>

      <p className="mt-8 text-lg sm:text-xl text-white/90 font-light max-w-3xl px-4 drop-shadow-[0_0_20px_rgba(102,126,234,0.3)] transition-all duration-700">
        {captions[currentSlide]}
      </p>



      <audio ref={audioRef} src="/music/One of The Most Beautiful Songs Ever Written 🥹😭 (GET THE TISSUES READY) (35k)_1759766231667.oga" loop autoPlay />

      {showBenediction && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50" onClick={() => setShowBenediction(false)}>
          <div className="glass rounded-3xl p-8 text-center shadow-2xl max-w-lg mx-4 max-h-[90vh] overflow-y-auto" onClick={e => e.stopPropagation()}>
            <h2 className="text-3xl font-light gradient-text mb-6">💞 CAREN LENNIE 💞</h2>
            <div className="text-white/90 mb-6 leading-relaxed text-left space-y-4">
              <p>My Dearest Love,</p>
              <p>As you walk into this new season, may heaven crown you with joy unending and peace that never fades. May your laughter echo with grace and your heart overflow with hope. 🌸</p>
              <p>I thank God daily for the gift of you, your light, your strength, your beauty, and your faith. You are a reflection of Proverbs 31:25 <em>"Clothed with strength and dignity, and you laugh without fear of the future."</em></p>
              <p>I speak over you Numbers 6:24–26 <em>"The Lord bless you and keep you; the Lord make His face shine upon you and be gracious to you; the Lord turn His face toward you and give you peace."</em> ✨</p>
              <p>And as for me, my heart makes this promise: I will walk beside you through every sunrise and against every storm. I will pray for you, believe with you, and love you in the pattern of 1 Corinthians 13 <em>patiently, kindly, faithfully, and without end.</em> 💞</p>
              <p>You are my answered prayer, and I vow to cherish you as God cherishes His beloved, with grace, honor, and truth. Song of Solomon 3:4 says, <em>"I have found the one whom my soul loves."</em> That one is you. 💖</p>
              <p>Forever yours, in faith, love, and prayer.</p>
              <p className="gradient-text font-medium text-xl text-center">💋 Yours, Always</p>
            </div>
            <button className="glass text-white rounded-full px-8 py-3 hover:bg-white/20 transition-all duration-300 mt-4" onClick={() => setShowBenediction(false)}>
              💞 With All My Love
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

export default App
