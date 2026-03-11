import { Button } from "@/components/ui/button";
import { Heart, Globe, Users, Zap, DollarSign, MapPin, Star, CheckCircle2, Play } from "lucide-react";

/**
 * صفحة الهبوط الرئيسية لـ Retreat Mastery
 * تصميم مستوحى من soulstar.life/retreat-mastery
 * 
 * الألوان الأساسية:
 * - الأحمر الوردي: #FF3366 (الأزرار والكلمات المفتاحية)
 * - الأبيض: #FFFFFF (الخلفيات الأساسية)
 * - الأسود: #000000 (الخلفيات الداكنة والنصوص)
 * 
 * الخطوط:
 * - العناوين: Cairo (700-800)
 * - الأجسام: Tajawal (400-500)
 */

export default function Home() {
  return (
    <div className="w-full min-h-screen bg-white">
      {/* ===== Hero Section ===== */}
      <section className="relative w-full h-screen flex items-center justify-center bg-black text-white overflow-hidden">
        {/* صورة الخلفية (placeholder) */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/60 z-10"></div>
        <div className="absolute inset-0 bg-black/50 z-10"></div>
        <div className="absolute inset-0 flex items-center justify-center text-gray-400 text-lg z-0">
          [صورة الخلفية - Hero Image]
        </div>

        {/* محتوى Hero */}
        <div className="relative z-20 text-center max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* شعار صغير */}
          <div className="mb-6 flex justify-center">
            <div className="w-12 h-12 rounded-full border-2 border-[#FF3366] flex items-center justify-center">
              <Star className="w-6 h-6 text-[#FF3366]" />
            </div>
          </div>

          {/* العنوان الرئيسي */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            نظم ريتريت وحقق أكثر من <span className="text-[#FF3366]">20,000$</span> صافي أرباح
          </h1>

          {/* النص الوصفي */}
          <p className="text-lg sm:text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            تعلم كيفية تنظيم ريتريت ناجح يحقق لك دخلاً حقيقياً ويترك أثراً عميقاً في حياة المشاركين
          </p>

          {/* زر CTA */}
          <Button
            size="lg"
            className="bg-[#FF3366] hover:bg-[#FF1744] text-white font-bold text-lg px-8 py-6 rounded-lg"
          >
            احجز مكالمتك المجانية الآن
          </Button>
        </div>
      </section>

      {/* ===== Stats Section ===== */}
      <section className="w-full bg-white py-12 sm:py-16 lg:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 sm:gap-4">
            {/* Stat 1 */}
            <div className="flex flex-col items-center text-center border-b-2 sm:border-b-0 sm:border-l-2 border-gray-200 pb-6 sm:pb-0 sm:pl-6">
              <Users className="w-8 h-8 text-[#FF3366] mb-3" />
              <p className="text-3xl font-bold text-black mb-2">1000+</p>
              <p className="text-sm text-gray-600">شخص خاضوا التجربة</p>
            </div>

            {/* Stat 2 */}
            <div className="flex flex-col items-center text-center border-b-2 sm:border-b-0 sm:border-l-2 border-gray-200 pb-6 sm:pb-0 sm:pl-6">
              <Heart className="w-8 h-8 text-[#FF3366] mb-3" />
              <p className="text-3xl font-bold text-black mb-2">98%</p>
              <p className="text-sm text-gray-600">نجاح وتوصية</p>
            </div>

            {/* Stat 3 */}
            <div className="flex flex-col items-center text-center border-b-2 sm:border-b-0 sm:border-l-2 border-gray-200 pb-6 sm:pb-0 sm:pl-6">
              <Globe className="w-8 h-8 text-[#FF3366] mb-3" />
              <p className="text-3xl font-bold text-black mb-2">50+</p>
              <p className="text-sm text-gray-600">ريتريت منظم</p>
            </div>

            {/* Stat 4 */}
            <div className="flex flex-col items-center text-center border-b-2 sm:border-b-0 sm:border-l-2 border-gray-200 pb-6 sm:pb-0 sm:pl-6">
              <Zap className="w-8 h-8 text-[#FF3366] mb-3" />
              <p className="text-3xl font-bold text-black mb-2">15+</p>
              <p className="text-sm text-gray-600">سنة خبرة</p>
            </div>

            {/* Stat 5 */}
            <div className="flex flex-col items-center text-center">
              <DollarSign className="w-8 h-8 text-[#FF3366] mb-3" />
              <p className="text-3xl font-bold text-black mb-2">5000+</p>
              <p className="text-sm text-gray-600">طالب أكاديمي</p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== What is a Retreat Section ===== */}
      <section className="w-full bg-gray-50 py-16 sm:py-20 lg:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center mb-4 text-black">
            تعلم كيف تنظم <span className="text-[#FF3366]">ريتريت ناجح</span>
          </h2>
          <p className="text-center text-gray-600 text-lg mb-12 max-w-2xl mx-auto">
            مباع بالكامل ويعبر عن شغفك
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {/* اليسار - من يستطيع عمل ريتريت */}
            <div className="bg-white rounded-2xl border-2 border-[#FFB3D9] p-8 sm:p-10">
              <h3 className="text-2xl font-bold text-black mb-8">مين بقدر يعمل ريتريت؟</h3>

              <div className="space-y-6">
                {[
                  { icon: Heart, title: "كوتش أو مدرب", desc: "إذا كنت كوتش أو مدرب وتحلم بتنظيم ريتريت خاص فيك" },
                  { icon: Zap, title: "هيلير أو معالج", desc: "إذا كنت متخصص في الشفاء والعافية" },
                  { icon: Globe, title: "رائد أعمال", desc: "إذا كنت تحب السفر وتريد تحويله لمصدر دخل" }
                ].map((item, idx) => (
                  <div key={idx} className="flex gap-4">
                    <item.icon className="w-6 h-6 text-[#FF3366] flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-bold text-black mb-1">{item.title}</p>
                      <p className="text-gray-600 text-sm">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* اليمين - شو يعني ريتريت */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-black">شو يعني "ريتريت"؟</h3>

              {[
                { icon: MapPin, title: "الطبيعة", desc: "مكان هادئ بعيد عن الضوضاء والزحام" },
                { icon: Users, title: "التجارب", desc: "مجموعة من الأنشطة والورش المتنوعة" },
                { icon: Heart, title: "المجتمع", desc: "مساحة آمنة للتواصل والنمو الشخصي" },
                { icon: Star, title: "التحول", desc: "رحلة داخلية تغير طريقة تفكير الناس" }
              ].map((item, idx) => (
                <div key={idx} className="flex gap-4 bg-white p-4 rounded-lg border-l-4 border-[#FF3366]">
                  <item.icon className="w-6 h-6 text-[#FF3366] flex-shrink-0" />
                  <div>
                    <p className="font-bold text-black">{item.title}</p>
                    <p className="text-gray-600 text-sm">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ===== Video Testimonials Section ===== */}
      <section className="w-full bg-white py-16 sm:py-20 lg:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center mb-4 text-black">
            استمع لتجاربهم: كيف غير الريتريت حياتهم
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            {/* فيديو 1 */}
            <div className="relative group cursor-pointer">
              <div className="w-full h-64 bg-gradient-to-br from-gray-300 to-gray-400 rounded-lg border-4 border-dashed border-yellow-400 flex items-center justify-center">
                <div className="text-center text-gray-600">
                  <p className="text-sm mb-2">[صورة معاينة الفيديو]</p>
                  <Play className="w-12 h-12 mx-auto text-[#FF3366] opacity-70 group-hover:opacity-100 transition" />
                </div>
              </div>
              <div className="mt-4">
                <p className="font-bold text-black">✨ رحلة اكتشاف الذات</p>
                <p className="text-sm text-gray-600">شهادة من أحد المشاركين</p>
              </div>
            </div>

            {/* فيديو 2 */}
            <div className="relative group cursor-pointer">
              <div className="w-full h-64 bg-gradient-to-br from-gray-300 to-gray-400 rounded-lg border-4 border-dashed border-yellow-400 flex items-center justify-center">
                <div className="text-center text-gray-600">
                  <p className="text-sm mb-2">[صورة معاينة الفيديو]</p>
                  <Play className="w-12 h-12 mx-auto text-[#FF3366] opacity-70 group-hover:opacity-100 transition" />
                </div>
              </div>
              <div className="mt-4">
                <p className="font-bold text-black">💫 تجربة فريدة لا تُنسى</p>
                <p className="text-sm text-gray-600">شهادة من أحد المشاركين</p>
              </div>
            </div>
          </div>

          <div className="flex justify-center mt-12">
            <Button
              size="lg"
              className="bg-[#FF3366] hover:bg-[#FF1744] text-white font-bold px-8 py-6 rounded-lg"
            >
              ابدأ رحلتك اليوم - احجز جلسة مجانية
            </Button>
          </div>
        </div>
      </section>

      {/* ===== Is This Program Right for You Section ===== */}
      <section className="w-full bg-black text-white py-16 sm:py-20 lg:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center mb-12 text-white">
            هل هذا البرنامج <span className="text-[#FF3366]">مناسب لك؟</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* الأسئلة */}
            <div className="space-y-6">
              {[
                "هل عندك شغف بالسفر، بالعافية، أو بتجربة حياة مليانة حرية؟",
                "هل حابب تتعلم عالم الريتريت؟",
                "هل بتحلم تلف العالم ويكون السفر مصدر دخلك؟",
                "هل بدك تحول هذا الشغف إلى بزنس حقيقي بدخل مستمر؟"
              ].map((question, idx) => (
                <div key={idx} className="flex gap-4 items-start">
                  <CheckCircle2 className="w-6 h-6 text-[#FF3366] flex-shrink-0 mt-1" />
                  <p className="text-lg text-gray-200">{question}</p>
                </div>
              ))}
            </div>

            {/* الفئات المستهدفة */}
            <div className="bg-gray-900 rounded-lg p-8 border border-gray-700">
              <h3 className="text-xl font-bold mb-6 text-white">الفئات المستهدفة:</h3>
              <div className="space-y-4">
                {[
                  "كوتش أو مدرب متخصص",
                  "هيلير أو معالج طاقة",
                  "رائد أعمال في مجال الرفاهية",
                  "أي شخص يحب السفر والتأثير"
                ].map((category, idx) => (
                  <div key={idx} className="flex gap-3 items-center">
                    <div className="w-2 h-2 bg-[#FF3366] rounded-full"></div>
                    <p className="text-gray-300">{category}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="flex justify-center mt-12">
            <Button
              size="lg"
              className="bg-[#FF3366] hover:bg-[#FF1744] text-white font-bold px-8 py-6 rounded-lg"
            >
              احجز جلستك الاستشارية المجانية الآن
            </Button>
          </div>
        </div>
      </section>

      {/* ===== Program Benefits Section ===== */}
      <section className="w-full bg-white py-16 sm:py-20 lg:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center mb-4 text-black">
            كيف رح تستفيد من البرنامج
          </h2>
          <p className="text-center text-gray-600 text-lg mb-12 max-w-2xl mx-auto">
            تعلم كيف تنظم ريتريت ناجح وتحقق أرباح تزيد عن <span className="text-[#FF3366] font-bold">20,000$</span>
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Zap, title: "الفكرة الصح", desc: "كيف تختار الفكرة الصح وتربطها بشغفك" },
              { icon: MapPin, title: "الوجهة المناسبة", desc: "كيف تختار الوجهة المناسبة" },
              { icon: DollarSign, title: "التسعير الذكي", desc: "كيف تسعّر الريتريت بذكاء" },
              { icon: Globe, title: "التسويق الجذاب", desc: "كيف تسوّق التجربة بأسلوب جذاب" },
              { icon: Heart, title: "تجربة غنية", desc: "كيف تبني تجربة غنية ومتكاملة" },
              { icon: Users, title: "جدول متوازن", desc: "كيف تصمّم جدول الريتريت" },
              { icon: Star, title: "مباع كلياً", desc: "كيف توصل لـ مباع كلياً" },
              { icon: Zap, title: "أول 10,000$", desc: "كيف تحقق أول 10,000$ من أول ريتريت" }
            ].map((benefit, idx) => (
              <div key={idx} className="bg-gray-50 rounded-lg p-6 border border-gray-200 hover:shadow-lg transition">
                <benefit.icon className="w-8 h-8 text-[#FF3366] mb-4" />
                <h3 className="font-bold text-black mb-2">{benefit.title}</h3>
                <p className="text-sm text-gray-600">{benefit.desc}</p>
              </div>
            ))}
          </div>

          <div className="bg-[#FFF5F9] border-l-4 border-[#FF3366] p-6 rounded-lg mt-12">
            <p className="text-black font-bold mb-2">⚠️ تنبيه مهم</p>
            <p className="text-gray-700">
              هذا مش تدريب عام… هذا برنامج <span className="font-bold">لايف عملي تطبيقي خطوة بخطوة</span>. بتطلع منه وإنت جاهز تنفّذ ريتريت ناجح، حقيقي، يحقق لك دخل عالي وشغف وتأثير.
            </p>
          </div>
        </div>
      </section>

      {/* ===== About Coach Section ===== */}
      <section className="w-full bg-gray-50 py-16 sm:py-20 lg:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* صورة المدرب */}
            <div className="flex justify-center lg:justify-start">
              <div className="w-80 h-96 bg-gradient-to-br from-gray-300 to-gray-400 rounded-lg border-4 border-dashed border-[#FF3366] flex items-center justify-center">
                <div className="text-center text-gray-600">
                  <p className="text-lg">[صورة المدرب]</p>
                  <p className="text-sm mt-2">صلاح عميرة</p>
                </div>
              </div>
            </div>

            {/* معلومات المدرب */}
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-black mb-6">
                تعرف على صلاح عميرة في سطور
              </h2>

              <p className="text-gray-700 mb-6 leading-relaxed">
                أنا صلاح عميرة، مؤسس شركة Soul Star Retreats. لقد نظمت أكثر من 50 ريتريت في أماكن ساحرة حول العالم، وساعدت أكثر من 1000 شخص على اكتشاف أنفسهم وتحقيق أحلامهم.
              </p>

              <p className="text-gray-700 mb-8 leading-relaxed">
                رسالتي ليست فقط تنظيم ريتريت، بل خلق تجارب تغير حياة الناس وتوصلهم إلى نقطة يشعرون فيها أنهم أقرب لأنفسهم وأصدق مع حالهم.
              </p>

              <h3 className="font-bold text-black mb-4">وجهات ساحرة نظمنا ريتريت عليها:</h3>
              <div className="flex flex-wrap gap-3">
                {["اليابان", "إيطاليا", "بالي", "زنجبار", "تايلاند", "سريلانكا", "دهب", "جورجيا", "تركيا"].map((destination) => (
                  <span key={destination} className="bg-[#FFF5F9] text-[#FF3366] px-4 py-2 rounded-full text-sm font-medium border border-[#FFB3D9]">
                    {destination}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== Closing Message Section ===== */}
      <section className="w-full bg-black text-white py-16 sm:py-20 lg:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            رسالتي مش بس <span className="text-[#FF3366]">تنظيم ريتريت</span>
          </h2>

          <p className="text-xl text-gray-300 mb-8 leading-relaxed">
            رسالتي أخلق تجارب توصل الناس لنقطة يشعروا فيها إنهم أقرب لنفسهم، أصدق مع حالهم، ومتصلين بروحهم. كل ريتريت هو فرصة حقيقية للتغيير، مش بس سفر...
          </p>

          <p className="text-2xl font-bold text-[#FF3366] mb-8">
            بل رحلة وعي
          </p>

          <p className="text-lg text-gray-400 mb-12">
            لأنه العالم محتاج أكتر قادة وعي وتغيير... مش بس منظمين رحلات
          </p>

          <Button
            size="lg"
            className="bg-[#FF3366] hover:bg-[#FF1744] text-white font-bold px-8 py-6 rounded-lg"
          >
            ابدأ رحلتك اليوم
          </Button>
        </div>
      </section>

      {/* ===== Testimonials Section ===== */}
      <section className="w-full bg-white py-16 sm:py-20 lg:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center mb-12 text-black">
            آراء <span className="text-[#FF3366]">المشاركين</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "ليا ديانة",
                role: "كوتش حياة",
                testimonial: "البرنامج غير حياتي تماماً. تعلمت كيف أنظم ريتريت احترافي وحققت أرباح أكثر من توقعاتي."
              },
              {
                name: "أحمد فرحان",
                role: "مدرب تطوير",
                testimonial: "أفضل استثمار قمت به. الخطوات واضحة والدعم مستمر. الآن عندي ريتريت ناجح كل شهر."
              },
              {
                name: "نور شريقان",
                role: "هيلير طاقة",
                testimonial: "شكراً صلاح على هذا البرنامج الرائع. ساعدني أوصل رسالتي لأشخاص أكثر وأحقق دخل حقيقي."
              }
            ].map((testimonial, idx) => (
              <div key={idx} className="bg-white border-2 border-dashed border-[#FFB3D9] rounded-lg p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-gray-300 to-gray-400 rounded-full flex items-center justify-center text-gray-600">
                    [صورة]
                  </div>
                  <div>
                    <p className="font-bold text-black">{testimonial.name}</p>
                    <p className="text-sm text-gray-600">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-gray-700 italic">{testimonial.testimonial}</p>
              </div>
            ))}
          </div>

          <div className="flex justify-center mt-12">
            <Button
              size="lg"
              className="bg-[#FF3366] hover:bg-[#FF1744] text-white font-bold px-8 py-6 rounded-lg"
            >
              احجز مكالمتك المجانية الآن
            </Button>
          </div>
        </div>
      </section>

      {/* ===== Footer Section ===== */}
      <footer className="w-full bg-black text-white py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* صورة جماعية (placeholder) */}
          <div className="w-full h-48 bg-gradient-to-b from-gray-700 to-gray-900 rounded-lg border-4 border-dashed border-[#FF3366] flex items-center justify-center mb-8">
            <div className="text-center text-gray-500">
              <p className="text-lg">[صورة جماعية للفريق والمشاركين]</p>
            </div>
          </div>

          {/* حقوق الملكية */}
          <div className="text-center border-t border-gray-700 pt-8">
            <p className="text-gray-400 text-sm">
              © Copyright 2026 Soul Star Life - All Rights Reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
