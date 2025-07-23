import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { Star, Users, Zap, Shield, CheckCircle, ArrowLeft, Instagram, Facebook, Twitter, Youtube, TrendingUp, Gift, Code, Heart, Clock, MessageCircle, Phone } from 'lucide-react'
import hypeekLogo from './assets/hypeek-logo.png'
import canvaPromo from './assets/canva-promo.jpg'
import netflixGift from './assets/netflix-gift.jpg'
import socialMediaGrowth from './assets/social-media-growth.jpg'
import './App.css'

function App() {
  const [activeService, setActiveService] = useState('codes')
  const [timeLeft, setTimeLeft] = useState({ hours: 23, minutes: 45, seconds: 30 })
  const [isScrolled, setIsScrolled] = useState(false)

  // Scroll detection for header
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Scroll animations
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible')
        }
      })
    }, observerOptions)

    const animatedElements = document.querySelectorAll('.scroll-fade-in, .scroll-slide-left, .scroll-slide-right, .scroll-scale')
    animatedElements.forEach(el => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  // Countdown timer for limited offers
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 }
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 }
        } else if (prev.hours > 0) {
          return { hours: prev.hours - 1, minutes: 59, seconds: 59 }
        }
        return prev
      })
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  const services = {
    codes: {
      title: 'أكواد التفعيل',
      description: 'احصل على أكواد تفعيل أصلية لأشهر الخدمات الرقمية',
      items: [
        { 
          name: 'Canva Pro', 
          price: '15 ريال', 
          originalPrice: '25 ريال',
          duration: 'شهر واحد', 
          image: canvaPromo,
          popular: true,
          discount: '40%'
        },
        { 
          name: 'Netflix Premium', 
          price: '25 ريال', 
          originalPrice: '35 ريال',
          duration: 'شهر واحد', 
          image: netflixGift,
          discount: '29%'
        },
        { 
          name: 'Spotify Premium', 
          price: '12 ريال', 
          originalPrice: '18 ريال',
          duration: 'شهر واحد',
          discount: '33%'
        },
        { 
          name: 'Adobe Creative Cloud', 
          price: '45 ريال', 
          originalPrice: '60 ريال',
          duration: 'شهر واحد',
          discount: '25%'
        }
      ]
    },
    followers: {
      title: 'زيادة المتابعين',
      description: 'خدمات زيادة المتابعين الحقيقيين لجميع منصات التواصل',
      items: [
        { 
          name: 'متابعين Instagram', 
          price: '20 ريال', 
          originalPrice: '30 ريال',
          duration: '1000 متابع', 
          icon: Instagram,
          popular: true,
          discount: '33%'
        },
        { 
          name: 'متابعين TikTok', 
          price: '18 ريال', 
          originalPrice: '25 ريال',
          duration: '1000 متابع',
          discount: '28%'
        },
        { 
          name: 'متابعين Twitter', 
          price: '22 ريال', 
          originalPrice: '32 ريال',
          duration: '1000 متابع', 
          icon: Twitter,
          discount: '31%'
        },
        { 
          name: 'متابعين YouTube', 
          price: '35 ريال', 
          originalPrice: '50 ريال',
          duration: '1000 متابع', 
          icon: Youtube,
          discount: '30%'
        }
      ]
    },
    engagement: {
      title: 'زيادة التفاعل',
      description: 'خدمات زيادة الإعجابات والتعليقات والمشاهدات',
      items: [
        { 
          name: 'إعجابات Instagram', 
          price: '5 ريال', 
          originalPrice: '8 ريال',
          duration: '1000 إعجاب', 
          icon: Heart,
          discount: '38%'
        },
        { 
          name: 'مشاهدات YouTube', 
          price: '8 ريال', 
          originalPrice: '12 ريال',
          duration: '10000 مشاهدة', 
          icon: Youtube,
          popular: true,
          discount: '33%'
        },
        { 
          name: 'إعجابات Facebook', 
          price: '6 ريال', 
          originalPrice: '10 ريال',
          duration: '1000 إعجاب', 
          icon: Facebook,
          discount: '40%'
        },
        { 
          name: 'تفاعل TikTok', 
          price: '10 ريال', 
          originalPrice: '15 ريال',
          duration: 'باقة شاملة',
          discount: '33%'
        }
      ]
    }
  }

  const features = [
    {
      icon: Shield,
      title: 'ضمان الجودة',
      description: 'جميع خدماتنا مضمونة 100% مع إمكانية الاسترداد'
    },
    {
      icon: Zap,
      title: 'تسليم فوري',
      description: 'احصل على طلبك خلال دقائق من إتمام الدفع'
    },
    {
      icon: Users,
      title: 'دعم 24/7',
      description: 'فريق دعم متاح على مدار الساعة لمساعدتك'
    },
    {
      icon: TrendingUp,
      title: 'نتائج مضمونة',
      description: 'نضمن لك تحقيق النتائج المطلوبة أو استرداد المال'
    }
  ]

  const testimonials = [
    {
      name: 'أحمد محمد',
      rating: 5,
      comment: 'خدمة ممتازة! حصلت على كود Canva Pro وعمل بشكل مثالي. التسليم كان سريع جداً!'
    },
    {
      name: 'فاطمة العلي',
      rating: 5,
      comment: 'زادت متابعيني على Instagram بشكل طبيعي وآمن. أنصح الجميع بالتعامل معهم'
    },
    {
      name: 'خالد السعيد',
      rating: 5,
      comment: 'أسعار ممتازة وخدمة عملاء رائعة. حصلت على Netflix بسعر أقل من المتوقع!'
    }
  ]

  const whatsappNumber = "+966501234567"

  return (
    <div className="min-h-screen" dir="rtl" style={{ background: 'var(--gradient-warm)' }}>
      {/* Header */}
      <header className={`header-sticky sticky top-0 z-50 transition-all duration-300 ${isScrolled ? 'scrolled' : ''}`}>
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3 floating-element">
            <img src={hypeekLogo} alt="Hypeek Logo" className="h-10 w-10" />
            <div>
              <h1 className="text-xl font-bold kufic-style text-gradient">
                Hypeek
              </h1>
              <p className="text-xs arabic-text" style={{ color: 'var(--text-medium)' }}>متجرك الرقمي</p>
            </div>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <a href="#services" className="arabic-text hover-lift" style={{ color: 'var(--text-dark)' }}>الخدمات</a>
            <a href="#features" className="arabic-text hover-lift" style={{ color: 'var(--text-dark)' }}>المميزات</a>
            <a href="#testimonials" className="arabic-text hover-lift" style={{ color: 'var(--text-dark)' }}>آراء العملاء</a>
            <Button 
              className="btn-primary hover-glow"
              onClick={() => window.open(`https://wa.me/${whatsappNumber}`, '_blank')}
            >
              <MessageCircle className="ml-2 h-4 w-4" />
              تواصل واتساب
            </Button>
          </nav>
        </div>
      </header>

      {/* Limited Time Offer Banner */}
      <div className="countdown-timer">
        <div className="container mx-auto px-4 flex items-center justify-center gap-4">
          <Clock className="h-5 w-5 floating-delayed" />
          <span className="font-bold arabic-heading">عرض محدود! خصم حتى 40% - ينتهي خلال:</span>
          <div className="flex gap-2">
            <span className="countdown-box">{timeLeft.hours.toString().padStart(2, '0')}</span>
            <span>:</span>
            <span className="countdown-box">{timeLeft.minutes.toString().padStart(2, '0')}</span>
            <span>:</span>
            <span className="countdown-box">{timeLeft.seconds.toString().padStart(2, '0')}</span>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="hero-section py-20 px-4 pattern-waves">
        <div className="container mx-auto text-center">
          <Badge className="mb-6 glass-effect scroll-fade-in" style={{ 
            background: 'var(--accent-orange)', 
            color: 'white',
            fontSize: '1.1rem',
            padding: '12px 24px'
          }}>
            🔥 عروض خاصة لفترة محدودة - وفر حتى 40%
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 kufic-style text-gradient scroll-fade-in">
            متجرك الرقمي الشامل
          </h1>
          <p className="text-xl mb-8 max-w-3xl mx-auto leading-relaxed arabic-text scroll-fade-in" style={{ color: 'var(--text-medium)' }}>
            احصل على أكواد تفعيل أصلية لأشهر الخدمات الرقمية، وخدمات زيادة المتابعين والتفاعل 
            على وسائل التواصل الاجتماعي بأفضل الأسعار وأعلى جودة
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center scroll-scale">
            <Button 
              size="lg" 
              className="btn-primary text-lg px-8 py-3 hover-lift"
              onClick={() => window.open(`https://wa.me/${whatsappNumber}?text=مرحباً، أريد الاستفسار عن خدماتكم`, '_blank')}
            >
              <MessageCircle className="ml-2 h-5 w-5" />
              اطلب عبر واتساب
            </Button>
            <Button size="lg" className="btn-secondary text-lg px-8 py-3 hover-lift">
              <Gift className="ml-2 h-5 w-5" />
              تصفح العروض
            </Button>
          </div>
          
          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16">
            {[
              { number: '15K+', label: 'عميل راضي' },
              { number: '50+', label: 'خدمة متاحة' },
              { number: '24/7', label: 'دعم فني' },
              { number: '99%', label: 'نسبة النجاح' }
            ].map((stat, index) => (
              <div key={index} className={`stats-card floating-${index % 2 === 0 ? 'element' : 'delayed'} scroll-fade-in`}>
                <div className="stats-number">{stat.number}</div>
                <div className="arabic-text" style={{ color: 'var(--text-medium)' }}>{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-4" style={{ background: 'var(--off-white)' }}>
        <div className="container mx-auto">
          <div className="text-center mb-16 scroll-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 arabic-heading" style={{ color: 'var(--text-dark)' }}>خدماتنا المميزة</h2>
            <p className="text-xl max-w-2xl mx-auto arabic-text" style={{ color: 'var(--text-medium)' }}>
              نقدم مجموعة شاملة من الخدمات الرقمية بأسعار تنافسية وجودة عالية
            </p>
          </div>

          {/* Service Tabs */}
          <div className="flex flex-wrap justify-center gap-4 mb-12 scroll-slide-left">
            {Object.entries(services).map(([key, service]) => (
              <Button
                key={key}
                variant={activeService === key ? "default" : "outline"}
                onClick={() => setActiveService(key)}
                className={activeService === key 
                  ? "btn-primary arabic-text" 
                  : "btn-secondary arabic-text"
                }
              >
                {service.title}
              </Button>
            ))}
          </div>

          {/* Service Content */}
          <div className="text-center mb-8 scroll-fade-in">
            <h3 className="text-2xl font-bold mb-2 arabic-heading" style={{ color: 'var(--text-dark)' }}>{services[activeService].title}</h3>
            <p className="arabic-text" style={{ color: 'var(--text-medium)' }}>{services[activeService].description}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services[activeService].items.map((item, index) => (
              <div key={index} className={`service-card enhanced-card hover-lift scroll-scale`} style={{ animationDelay: `${index * 0.1}s` }}>
                {item.popular && (
                  <Badge className="absolute -top-2 right-4" style={{ background: 'var(--accent-orange)', color: 'white' }}>الأكثر طلباً</Badge>
                )}
                {item.discount && (
                  <Badge className="absolute -top-2 left-4" style={{ background: 'var(--accent-green)', color: 'white' }}>خصم {item.discount}</Badge>
                )}
                <CardHeader className="text-center">
                  {item.image ? (
                    <img src={item.image} alt={item.name} className="w-full h-32 object-cover rounded-lg mb-4 floating-slow" />
                  ) : item.icon ? (
                    <item.icon className="h-12 w-12 mx-auto mb-4 floating-element" style={{ color: 'var(--accent-blue)' }} />
                  ) : (
                    <div className="h-12 w-12 mx-auto mb-4 rounded-lg flex items-center justify-center floating-delayed" style={{ background: 'var(--gradient-primary)' }}>
                      <Gift className="h-6 w-6 text-white" />
                    </div>
                  )}
                  <CardTitle className="text-lg arabic-heading">{item.name}</CardTitle>
                  <CardDescription className="arabic-text">{item.duration}</CardDescription>
                </CardHeader>
                <CardContent className="text-center">
                  <div className="mb-4">
                    <div className="text-2xl font-bold text-gradient arabic-heading">{item.price}</div>
                    {item.originalPrice && (
                      <div className="text-sm line-through arabic-text" style={{ color: 'var(--text-light)' }}>{item.originalPrice}</div>
                    )}
                  </div>
                  <Button 
                    className="w-full btn-primary hover-glow"
                    onClick={() => window.open(`https://wa.me/${whatsappNumber}?text=أريد طلب ${item.name} بسعر ${item.price}`, '_blank')}
                  >
                    <MessageCircle className="ml-2 h-4 w-4" />
                    اطلب الآن
                  </Button>
                </CardContent>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-4 pattern-dots">
        <div className="container mx-auto">
          <div className="text-center mb-16 scroll-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 arabic-heading" style={{ color: 'var(--text-dark)' }}>لماذا تختار Hypeek؟</h2>
            <p className="text-xl max-w-2xl mx-auto arabic-text" style={{ color: 'var(--text-medium)' }}>
              نحن نقدم أفضل الخدمات الرقمية مع ضمان الجودة والأمان
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className={`enhanced-card text-center hover-lift scroll-slide-${index % 2 === 0 ? 'left' : 'right'}`}>
                <CardHeader>
                  <feature.icon className={`h-12 w-12 mx-auto mb-4 floating-${index % 3 === 0 ? 'element' : index % 3 === 1 ? 'delayed' : 'slow'}`} style={{ color: 'var(--accent-blue)' }} />
                  <CardTitle className="text-xl arabic-heading">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="arabic-text" style={{ color: 'var(--text-medium)' }}>{feature.description}</p>
                </CardContent>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 px-4" style={{ background: 'var(--off-white)' }}>
        <div className="container mx-auto">
          <div className="text-center mb-16 scroll-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 arabic-heading" style={{ color: 'var(--text-dark)' }}>آراء عملائنا</h2>
            <p className="text-xl max-w-2xl mx-auto arabic-text" style={{ color: 'var(--text-medium)' }}>
              اكتشف تجارب عملائنا الراضين عن خدماتنا
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className={`testimonial-card hover-lift scroll-scale`} style={{ animationDelay: `${index * 0.2}s` }}>
                <CardHeader>
                  <div className="flex items-center gap-2 mb-2">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <CardTitle className="text-lg arabic-heading">{testimonial.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="arabic-text italic" style={{ color: 'var(--text-medium)' }}>"{testimonial.comment}"</p>
                </CardContent>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4" style={{ background: 'var(--gradient-primary)' }}>
        <div className="container mx-auto text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 arabic-heading scroll-fade-in">ابدأ رحلتك الرقمية اليوم</h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto arabic-text scroll-fade-in">
            انضم إلى آلاف العملاء الراضين واحصل على أفضل الخدمات الرقمية بأسعار لا تُقاوم
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8 scroll-scale">
            <Button 
              size="lg" 
              className="bg-white hover:bg-gray-100 text-lg px-8 py-3 hover-lift"
              style={{ color: 'var(--accent-blue)' }}
              onClick={() => window.open(`https://wa.me/${whatsappNumber}?text=مرحباً، أريد الاستفسار عن خدماتكم`, '_blank')}
            >
              <MessageCircle className="ml-2 h-5 w-5" />
              تواصل واتساب
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-white text-white hover:bg-white text-lg px-8 py-3 hover-lift"
              style={{ '--hover-color': 'var(--accent-blue)' }}
              onClick={() => window.open(`tel:${whatsappNumber}`, '_blank')}
            >
              <Phone className="ml-2 h-5 w-5" />
              اتصل بنا
            </Button>
          </div>
          <div className="text-center scroll-fade-in">
            <p className="text-lg mb-2 arabic-text">📱 واتساب: {whatsappNumber}</p>
            <p className="text-sm opacity-75 arabic-text">متاح 24/7 للرد على استفساراتكم</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer-section py-12 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="scroll-slide-right">
              <div className="flex items-center gap-3 mb-4">
                <img src={hypeekLogo} alt="Hypeek Logo" className="h-8 w-8" />
                <h3 className="text-xl font-bold kufic-style">Hypeek</h3>
              </div>
              <p className="mb-4 arabic-text" style={{ color: 'var(--text-light)' }}>
                متجرك الرقمي الموثوق للحصول على أفضل الخدمات الرقمية بأسعار تنافسية
              </p>
              <div className="flex gap-4">
                <Instagram className="h-6 w-6 hover-lift cursor-pointer" style={{ color: 'var(--text-light)' }} />
                <Twitter className="h-6 w-6 hover-lift cursor-pointer" style={{ color: 'var(--text-light)' }} />
                <Facebook className="h-6 w-6 hover-lift cursor-pointer" style={{ color: 'var(--text-light)' }} />
                <Youtube className="h-6 w-6 hover-lift cursor-pointer" style={{ color: 'var(--text-light)' }} />
              </div>
            </div>
            <div className="scroll-slide-left">
              <h4 className="font-semibold mb-4 arabic-heading">الخدمات</h4>
              <ul className="space-y-2 arabic-text" style={{ color: 'var(--text-light)' }}>
                <li className="hover-lift cursor-pointer">أكواد التفعيل</li>
                <li className="hover-lift cursor-pointer">زيادة المتابعين</li>
                <li className="hover-lift cursor-pointer">زيادة التفاعل</li>
                <li className="hover-lift cursor-pointer">خدمات السوشيال ميديا</li>
              </ul>
            </div>
            <div className="scroll-slide-right">
              <h4 className="font-semibold mb-4 arabic-heading">الدعم</h4>
              <ul className="space-y-2 arabic-text" style={{ color: 'var(--text-light)' }}>
                <li className="hover-lift cursor-pointer">مركز المساعدة</li>
                <li className="hover-lift cursor-pointer">تواصل معنا</li>
                <li className="hover-lift cursor-pointer">الأسئلة الشائعة</li>
                <li className="hover-lift cursor-pointer">سياسة الاسترداد</li>
              </ul>
            </div>
            <div className="scroll-slide-left">
              <h4 className="font-semibold mb-4 arabic-heading">تواصل معنا</h4>
              <div className="space-y-2 arabic-text" style={{ color: 'var(--text-light)' }}>
                <p>📱 واتساب: {whatsappNumber}</p>
                <p>⏰ متاح 24/7</p>
                <p>🚀 تسليم فوري</p>
                <p>💯 ضمان الجودة</p>
              </div>
            </div>
          </div>
          <div className="border-t mt-8 pt-8 text-center arabic-text" style={{ borderColor: 'var(--border-light)', color: 'var(--text-light)' }}>
            <p>&copy; 2024 Hypeek. جميع الحقوق محفوظة.</p>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp Button */}
      <div className="whatsapp-float">
        <Button
          className="bg-transparent border-0 p-0 w-full h-full"
          onClick={() => window.open(`https://wa.me/${whatsappNumber}?text=مرحباً، أريد الاستفسار عن خدماتكم`, '_blank')}
        >
          <MessageCircle className="h-6 w-6" />
        </Button>
      </div>
    </div>
  )
}

export default App

