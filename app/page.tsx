import Nav from "@/components/Nav";
import LeadForm from "@/components/LeadForm";
import { CheckCircle2, FileText, Upload, Clock, Phone, Mail, MessageCircle, MapPin } from "lucide-react";

export default function Page() {
  return (
    <main>
      <Nav />
      {/* Hero */}
      <section className="section">
        <div className="container grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-4">
            <h1 className="text-3xl md:text-5xl font-bold leading-tight">
                נספחים סניטריים - תכנון פרויקטים בתחום אינסטלציה
            </h1>
            <p className="muted text-lg">
              אוספים, מגישים, עוקבים — ואתם מתמקדים בקבלת אישורים מול תאגיד וגורמים אחרים.
            </p>
            <div className="flex gap-3">
              <a href="#contact" className="btn">קבלו שיחה חוזרת</a>
              <a href="#process" className="btn-outline">כך זה עובד</a>
            </div>
            <div className="flex gap-6 pt-4 text-sm">
              <div className="flex items-center gap-2"><CheckCircle2 className="w-5 h-5" /> 100% הצלחה</div>
              <div className="flex items-center gap-2"><Clock className="w-5 h-5" /> החל מ-30 ימים עד לקבלת אישור</div>
            </div>
          </div>
          <div className="rounded-2xl border p-6">
            <h3 className="font-semibold mb-3">סימולטור מסמכים מהיר</h3>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center gap-2"><FileText className="w-4 h-4" /> תוכנית אדריכלית (PDF)</li>
              <li className="flex items-center gap-2"><FileText className="w-4 h-4" /> יועץ בטיחות / תנועה</li>
              <li className="flex items-center gap-2"><FileText className="w-4 h-4" /> בעלויות / מדידות</li>
            </ul>
            <p className="muted mt-3 text-xs">* הרשימה משתנה בין רשויות</p>
          </div>
        </div>
      </section>

      {/* Domain / Scope */}
      <section id="domain" className="section">
        <div className="container">
          <h2 className="text-2xl md:text-3xl font-bold mb-8">תחום העיסוק</h2>
          <p className="muted max-w-3xl mb-6">
          אנחנו מהנדסים  עם נסיון רב שנתי בתכנון מערכות אינסטלציה בפרויקטים שונים.  מלווים פרויקטים משלב התכנון ועד לקבלת האישורים הנדרשים   
          </p>
          <div className="grid md:grid-cols-4 gap-4">
            <div className="rounded-2xl border p-6 bg-white">
            <h3 className="font-semibold text-lg">ביוב</h3>
            <p className="muted mt-2 text-sm">תכנון מערכות דלוחין/שופכין על פי תקנים ישראלים (הל׳׳ת, ת׳י 1205)</p>
            </div>
            <div className="rounded-2xl border p-6 bg-white">
              <h3 className="font-semibold text-lg">מים</h3>
              <p className="muted mt-2 text-sm">תכנון מערכות מים לפי שיטות Pexgol/ SP/ Multigol</p>
              <p className="muted mt-2 text-sm">תכנון מערכות כיבוי אש</p>
            </div>
            <div className="rounded-2xl border p-6 bg-white">
              <h3 className="font-semibold text-lg">ניקוז</h3>
              <p className="muted mt-2 text-sm">תכנון מערכות ניקוז/תעול</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="section bg-zinc-50">
        <div className="container">
          <h2 className="text-2xl md:text-3xl font-bold mb-8">שירותים עיקריים</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              { title: "נספח סניטרי (הגשה סניטרית)", desc: "נכין לכם נספח סניטרי מלא בהתאם לכל הדרישות של התאגיד או גורמים נוספים" },
              { 
                title: "פתרונות תכנון ייעודיים", 
                desc: (
                  <>
                    <span>לא צריכים נספח סניטרי מלא? אפשר לבחור פתרון לבעיה הספציפית שלכם:</span>
                    <ul className="list-disc pr-5 mt-2 space-y-1 text-right text-sm text-zinc-600">
                      <li>חישוב ספיקות</li>
                      <li>חישוב מאגרים</li>
                      <li>סכמת מים</li>
                      <li>פתרונות לגגות כחולים</li>
                      <li>תכנית ניקוז לפי תכנית הידרולוגיה</li>
                    </ul>
                  </>
                )
              }
            ].map((s) => (
              <div key={s.title} className="rounded-2xl border p-6 bg-white">
                <h3 className="font-semibold text-lg">{s.title}</h3>
                <div className="muted mt-2">{s.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════ */}
      {/* УЛУЧШЕННАЯ СЕКЦИЯ ЦЕН - Mobile Friendly */}
      {/* ═══════════════════════════════════════════════════════════════ */}
      <section id="pricing" className="section">
        <div className="container">
          <h2 className="text-2xl md:text-3xl font-bold mb-8">הצהרת מחיר</h2>
          <p className="muted max-w-3xl mb-6">
            המחירים להלן הינם טווחי הערכה ראשוניים בלבד, ההצעה הסופית תינתן לאחר בחינת הנתונים והמסמכים.
          </p>

          {/* DESKTOP VERSION - Table (скрыто на мобильных) */}
          <div className="hidden md:block rounded-2xl border overflow-hidden bg-white">
            {/* Desktop table code remains the same as original */}
            <div className="grid grid-cols-[minmax(150px,200px)_1fr_1fr] text-sm font-semibold bg-zinc-50">
              <div className="p-3"></div>
              <div className="p-3 text-start">
                <div className="font-semibold">ללא אישורים</div>
                <div className="text-xs font-normal text-zinc-500 mt-0.5">תכנון בלבד</div>
              </div>
              <div className="p-3 text-start">
                <div className="font-semibold">עם אישורים</div>
                <div className="text-xs font-normal text-zinc-500 mt-0.5">כולל נספח + הגשה</div>
              </div>
            </div>

            {/* בית פרטי */}
            <div className="grid grid-cols-[minmax(150px,200px)_1fr_1fr] border-t">
              <div className="p-4 font-semibold bg-zinc-50 text-right">בית פרטי</div>
              <div className="p-4 border-r">
                <div className="text-lg font-semibold mb-2">₪4,000–₪7,000</div>
                <ul className="list-disc pr-5 space-y-1 text-sm text-zinc-700 mb-4">
                  <li>תכנון בסיסי (מים/ביוב/ניקוז)</li>
                  <li>סכמות ועקרונות</li>
                </ul>
                <div className="flex flex-col sm:flex-row gap-4 mt-auto items-center">
                  <a href="#contact" className="btn-outline text-center py-2 px-4 text-sm flex-2">
                    קבלו הצעה
                  </a>
                  <a href="https://wa.me/0546314848" target="_blank" rel="noreferrer" className="text-xs text-center py-2 text-zinc-600 hover:text-zinc-900 underline">
                    או ב‑WhatsApp
                  </a>
                </div>
              </div>
              <div className="p-4 bg-zinc-50/30">
                <div className="text-lg font-semibold mb-2">₪7,000–₪12,000</div>
                <ul className="list-disc pr-5 space-y-1 text-sm text-zinc-700 mb-4">
                  <li>כולל הכנת נספח סניטרי</li>
                  <li>הגשה ומעקב עד אישור</li>
                </ul>
                <div className="flex flex-col sm:flex-row gap-4 mt-auto items-center">
                  <a href="#contact" className="btn text-center py-2 px-4 text-sm flex-2">קבלו הצעה</a>
                  <a href="https://wa.me/0546314848" target="_blank" rel="noreferrer" className="text-xs text-center py-2 text-zinc-600 hover:text-zinc-900 underline">או ב‑WhatsApp</a>
                </div>
              </div>
            </div>

            {/* בניין מגורים */}
            <div className="grid grid-cols-[minmax(150px,200px)_1fr_1fr] border-t">
              <div className="p-4 font-semibold bg-zinc-50 text-right">בניין מגורים</div>
              <div className="p-4 border-r">
                <div className="text-lg font-semibold mb-2">₪12,000–₪25,000</div>
                <ul className="list-disc pr-5 space-y-1 text-sm text-zinc-700 mb-4">
                  <li>תכנון מערכות סניטריות</li>
                  <li>חישובי ספיקות ומאגרים</li>
                </ul>
                <div className="flex flex-col sm:flex-row gap-4 mt-auto items-center">
                  <a href="#contact" className="btn-outline text-center py-2 px-4 text-sm flex-2">קבלו הצעה</a>
                  <a href="https://wa.me/0546314848" target="_blank" rel="noreferrer" className="text-xs text-center py-2 text-zinc-600 hover:text-zinc-900 underline">או ב‑WhatsApp</a>
                </div>
              </div>
              <div className="p-4 bg-zinc-50/30">
                <div className="text-lg font-semibold mb-2">₪20,000–₪45,000</div>
                <ul className="list-disc pr-5 space-y-1 text-sm text-zinc-700 mb-4">
                  <li>כולל נספח סניטרי מלא</li>
                  <li>הגשה לתאגיד + מעקב</li>
                </ul>
                <div className="flex flex-col sm:flex-row gap-4 mt-auto items-center">
                  <a href="#contact" className="btn text-center py-2 px-4 text-sm flex-2">קבלו הצעה</a>
                  <a href="https://wa.me/0546314848" target="_blank" rel="noreferrer" className="text-xs text-center py-2 text-zinc-600 hover:text-zinc-900 underline">או ב‑WhatsApp</a>
                </div>
              </div>
            </div>

            {/* בניין מגורים משותף */}
            <div className="grid grid-cols-[minmax(150px,200px)_1fr_1fr] border-t">
              <div className="p-4 font-semibold bg-zinc-50 text-right">בניין מגורים משותף</div>
              <div className="p-4 border-r">
                <div className="text-lg font-semibold mb-2">₪20,000–₪35,000</div>
                <ul className="list-disc pr-5 space-y-1 text-sm text-zinc-700 mb-4">
                  <li>תכנון מערכות משותפות</li>
                  <li>תיאום בין יזמים</li>
                </ul>
                <div className="flex flex-col sm:flex-row gap-4 mt-auto items-center">
                  <a href="#contact" className="btn-outline text-center py-2 px-4 text-sm flex-2">קבלו הצעה</a>
                  <a href="https://wa.me/0546314848" target="_blank" rel="noreferrer" className="text-xs text-center py-2 text-zinc-600 hover:text-zinc-900 underline">או ב‑WhatsApp</a>
                </div>
              </div>
              <div className="p-4 bg-zinc-50/30">
                <div className="text-lg font-semibold mb-2">₪35,000–₪60,000</div>
                <ul className="list-disc pr-5 space-y-1 text-sm text-zinc-700 mb-4">
                  <li>כולל נספח מלא</li>
                  <li>הגשה משותפת + תיאום</li>
                </ul>
                <div className="flex flex-col sm:flex-row gap-4 mt-auto items-center">
                  <a href="#contact" className="btn text-center py-2 px-4 text-sm flex-2">קבלו הצעה</a>
                  <a href="https://wa.me/0546314848" target="_blank" rel="noreferrer" className="text-xs text-center py-2 text-zinc-600 hover:text-zinc-900 underline">או ב‑WhatsApp</a>
                </div>
              </div>
            </div>
          </div>

          {/* MOBILE VERSION - Cards (показывается только на мобильных) */}
          <div className="md:hidden space-y-6">
            {/* בית פרטי */}
            <div className="rounded-2xl border-2 border-zinc-200 overflow-hidden bg-white">
              <div className="bg-zinc-50 p-4 border-b-2 border-zinc-200">
                <h3 className="text-xl font-bold text-center">בית פרטי</h3>
              </div>

              <div className="p-6 border-b-2 border-zinc-100">
                <div className="mb-4">
                  <div className="inline-block bg-zinc-100 px-3 py-1 rounded-full text-sm font-medium text-zinc-700 mb-3">
                    ללא אישורים
                  </div>
                  <div className="text-xs text-zinc-500">תכנון בלבד</div>
                </div>
                
                <div className="text-2xl font-bold mb-4">₪4,000–₪7,000</div>
                
                <ul className="space-y-2 text-sm text-zinc-700 mb-6">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>תכנון בסיסי (מים/ביוב/ניקוז)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>סכמות ועקרונות</span>
                  </li>
                </ul>

                <div className="space-y-3">
                  <a href="#contact" className="btn-outline w-full text-center py-3">
                    קבלו הצעה
                  </a>
                  <a href="https://wa.me/0546314848" target="_blank" rel="noreferrer" className="block text-center text-sm text-zinc-600 hover:text-zinc-900 underline">
                    או ב-WhatsApp
                  </a>
                </div>
              </div>

              <div className="p-6 bg-zinc-50">
                <div className="mb-4">
                  <div className="inline-block bg-green-600 text-white px-3 py-1 rounded-full text-sm font-medium mb-3">
                    עם אישורים
                  </div>
                  <div className="text-xs text-zinc-500">כולל נספח + הגשה</div>
                </div>
                
                <div className="text-2xl font-bold mb-4">₪7,000–₪12,000</div>
                
                <ul className="space-y-2 text-sm text-zinc-700 mb-6">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>כולל הכנת נספח סניטרי</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>הגשה ומעקב עד אישור</span>
                  </li>
                </ul>

                <div className="space-y-3">
                  <a href="#contact" className="btn w-full text-center py-3">
                    קבלו הצעה
                  </a>
                  <a href="https://wa.me/0546314848" target="_blank" rel="noreferrer" className="block text-center text-sm text-zinc-600 hover:text-zinc-900 underline">
                    או ב-WhatsApp
                  </a>
                </div>
              </div>
            </div>

            {/* בניין מגורים - Similar structure */}
            <div className="rounded-2xl border-2 border-zinc-200 overflow-hidden bg-white">
              <div className="bg-zinc-50 p-4 border-b-2 border-zinc-200">
                <h3 className="text-xl font-bold text-center">בניין מגורים</h3>
              </div>

              <div className="p-6 border-b-2 border-zinc-100">
                <div className="mb-4">
                  <div className="inline-block bg-zinc-100 px-3 py-1 rounded-full text-sm font-medium text-zinc-700 mb-3">
                    ללא אישורים
                  </div>
                  <div className="text-xs text-zinc-500">תכנון בלבד</div>
                </div>
                
                <div className="text-2xl font-bold mb-4">₪12,000–₪25,000</div>
                
                <ul className="space-y-2 text-sm text-zinc-700 mb-6">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>תכנון מערכות סניטריות</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>חישובי ספיקות ומאגרים</span>
                  </li>
                </ul>

                <div className="space-y-3">
                  <a href="#contact" className="btn-outline w-full text-center py-3">קבלו הצעה</a>
                  <a href="https://wa.me/0546314848" target="_blank" rel="noreferrer" className="block text-center text-sm text-zinc-600 hover:text-zinc-900 underline">או ב-WhatsApp</a>
                </div>
              </div>

              <div className="p-6 bg-zinc-50">
                <div className="mb-4">
                  <div className="inline-block bg-green-600 text-white px-3 py-1 rounded-full text-sm font-medium mb-3">
                    עם אישורים
                  </div>
                  <div className="text-xs text-zinc-500">כולל נספח + הגשה</div>
                </div>
                
                <div className="text-2xl font-bold mb-4">₪20,000–₪45,000</div>
                
                <ul className="space-y-2 text-sm text-zinc-700 mb-6">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>כולל נספח סניטרי מלא</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>הגשה לתאגיד + מעקב</span>
                  </li>
                </ul>

                <div className="space-y-3">
                  <a href="#contact" className="btn w-full text-center py-3">קבלו הצעה</a>
                  <a href="https://wa.me/0546314848" target="_blank" rel="noreferrer" className="block text-center text-sm text-zinc-600 hover:text-zinc-900 underline">או ב-WhatsApp</a>
                </div>
              </div>
            </div>

            {/* בניין מגורים משותף */}
            <div className="rounded-2xl border-2 border-zinc-200 overflow-hidden bg-white">
              <div className="bg-zinc-50 p-4 border-b-2 border-zinc-200">
                <h3 className="text-xl font-bold text-center">בניין מגורים משותף</h3>
              </div>

              <div className="p-6 border-b-2 border-zinc-100">
                <div className="mb-4">
                  <div className="inline-block bg-zinc-100 px-3 py-1 rounded-full text-sm font-medium text-zinc-700 mb-3">
                    ללא אישורים
                  </div>
                  <div className="text-xs text-zinc-500">תכנון בלבד</div>
                </div>
                
                <div className="text-2xl font-bold mb-4">₪20,000–₪35,000</div>
                
                <ul className="space-y-2 text-sm text-zinc-700 mb-6">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>תכנון מערכות משותפות</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>תיאום בין יזמים</span>
                  </li>
                </ul>

                <div className="space-y-3">
                  <a href="#contact" className="btn-outline w-full text-center py-3">קבלו הצעה</a>
                  <a href="https://wa.me/0546314848" target="_blank" rel="noreferrer" className="block text-center text-sm text-zinc-600 hover:text-zinc-900 underline">או ב-WhatsApp</a>
                </div>
              </div>

              <div className="p-6 bg-zinc-50">
                <div className="mb-4">
                  <div className="inline-block bg-green-600 text-white px-3 py-1 rounded-full text-sm font-medium mb-3">
                    עם אישורים
                  </div>
                  <div className="text-xs text-zinc-500">כולל נספח + הגשה</div>
                </div>
                
                <div className="text-2xl font-bold mb-4">₪35,000–₪60,000</div>
                
                <ul className="space-y-2 text-sm text-zinc-700 mb-6">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>כולל נספח מלא</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>הגשה משותפת + תיאום</span>
                  </li>
                </ul>

                <div className="space-y-3">
                  <a href="#contact" className="btn w-full text-center py-3">קבלו הצעה</a>
                  <a href="https://wa.me/0546314848" target="_blank" rel="noreferrer" className="block text-center text-sm text-zinc-600 hover:text-zinc-900 underline">או ב-WhatsApp</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="section bg-zinc-50">
        <div className="container">
          <h2 className="text-2xl md:text-3xl font-bold mb-8">פרויקטים אחרונים</h2>
          <div className="grid md:grid-cols-3 gap-4">
            {[1,2,3].map((i) => (
              <div key={i} className="rounded-2xl border p-6 bg-white">
                <h3 className="font-semibold">מגדל משרדים — רמת גן</h3>
                <p className="muted text-sm mt-1">אישור: 18 ימים • יועצים: בטיחות, תנועה</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="section">
        <div className="container">
          <h2 className="text-2xl md:text-3xl font-bold mb-8">שאלות נפוצות</h2>
          <div className="space-y-4">
            <details className="rounded-2xl border p-4">
              <summary className="font-semibold cursor-pointer">כמה זמן לוקח אישור?</summary>
              <p className="muted mt-2">בממוצע 21 ימים, תלוי ברשות ובמסמכים.</p>
            </details>
            <details className="rounded-2xl border p-4">
              <summary className="font-semibold cursor-pointer">מה אתם צריכים ממני כדי להתחיל?</summary>
              <p className="muted mt-2">תכנית אדריכלית, פרטי יועצים רלוונטיים, ואישורי בעלות/מדידות אם יש.</p>
            </details>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════ */}
      {/* УЛУЧШЕННАЯ СЕКЦИЯ КОНТАКТОВ - Мягкий зеленый */}
      {/* ═══════════════════════════════════════════════════════════════ */}
      <section id="contact" className="section bg-gradient-to-b from-white to-zinc-50">
        <div className="container max-w-5xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">בואו נדבר</h2>
            <p className="text-lg text-zinc-600 max-w-2xl mx-auto">
              השאירו פרטים ונחזור אליכם תוך 24 שעות עם הצעת מחיר מדויקת
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-8">
            {/* Soft Green CTA Card */}
            <div className="rounded-3xl bg-green-50 border-2 border-green-200 p-8 shadow-lg">
              <div className="mb-6">
                <h3 className="text-2xl font-bold mb-2 text-zinc-900">רוצים להתחיל מהר?</h3>
                <p className="text-zinc-600">שלחו לנו הודעה ב-WhatsApp ונחזור תוך דקות</p>
              </div>
              
              <a 
                href="https://wa.me/0546314848" 
                target="_blank" 
                rel="noreferrer"
                className="flex items-center justify-center gap-3 bg-green-600 text-white font-semibold py-4 px-6 rounded-2xl hover:bg-green-700 transition-all hover:scale-105 shadow-lg mb-4"
              >
                <MessageCircle className="w-6 h-6" />
                <span className="text-lg">שלח הודעה ב-WhatsApp</span>
              </a>

              <div className="space-y-3 pt-4 border-t border-green-200">
                <div className="flex items-center gap-3 text-zinc-700">
                  <Phone className="w-5 h-5 text-green-600" />
                  <a href="tel:0546314848" className="hover:text-green-600 text-lg">0546314848</a>
                </div>
                <div className="flex items-center gap-3 text-zinc-700">
                  <Mail className="w-5 h-5 text-green-600" />
                  <a href="mailto:hello@sycamore.co.il" className="hover:text-green-600">hello@sycamore.co.il</a>
                </div>
              </div>
            </div>

            {/* Info Card */}
            <div className="rounded-3xl bg-white border-2 border-zinc-200 p-8 shadow-lg">
              <h3 className="text-xl font-bold mb-6">פרטים נוספים</h3>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <div className="font-semibold text-zinc-900 mb-1">שעות פעילות</div>
                    <div className="text-zinc-600">א׳–ה׳ 9:00–18:00</div>
                    <div className="text-sm text-zinc-500 mt-1">מענה מהיר ב-WhatsApp גם מחוץ לשעות העבודה</div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-green-50 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <div className="font-semibold text-zinc-900 mb-1">אזור שירות</div>
                    <div className="text-zinc-600">מרכז + גוש דן</div>
                    <div className="text-sm text-zinc-500 mt-1">פרויקטים מיוחדים בכל הארץ</div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-purple-50 flex items-center justify-center flex-shrink-0">
                    <CheckCircle2 className="w-6 h-6 text-purple-600" />
                  </div>
                  <div>
                    <div className="font-semibold text-zinc-900 mb-1">זמן תגובה</div>
                    <div className="text-zinc-600">תוך 24 שעות</div>
                    <div className="text-sm text-zinc-500 mt-1">מחויבים למענה מהיר ומקצועי</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:0546314848" className="btn-outline px-8 py-4 text-center text-lg hover:bg-zinc-50">
              <Phone className="w-5 h-5 inline-block ml-2" />
              התקשרו עכשיו
            </a>
            <a href="mailto:hello@sycamore.co.il" className="btn-outline px-8 py-4 text-center text-lg hover:bg-zinc-50">
              <Mail className="w-5 h-5 inline-block ml-2" />
              שלחו אימייל
            </a>
          </div>

          <div className="mt-12 text-center">
            <div className="inline-flex items-center gap-6 px-8 py-4 bg-white rounded-2xl border border-zinc-200 shadow-sm">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-600" />
                <span className="text-sm font-medium">100% שביעות רצון</span>
              </div>
              <div className="h-6 w-px bg-zinc-300"></div>
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5 text-blue-600" />
                <span className="text-sm font-medium">מענה תוך 24 שעות</span>
              </div>
              <div className="h-6 w-px bg-zinc-300"></div>
              <div className="flex items-center gap-2">
                <FileText className="w-5 h-5 text-purple-600" />
                <span className="text-sm font-medium">הצעת מחיר חינם</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sticky mobile CTA */}
      <div className="md:hidden fixed bottom-0 inset-x-0 z-50 bg-white/95 backdrop-blur border-t p-3">
        <div className="container flex gap-3">
          <a href="#contact" className="btn flex-1 text-center">קבלו הצעה</a>
          <a href="https://wa.me/0546314848" target="_blank" rel="noreferrer" className="btn-outline flex-1 text-center">WhatsApp</a>
        </div>
      </div>

      <footer className="border-t">
        <div className="container py-8 text-sm flex flex-col md:flex-row gap-2 justify-between">
          <span>© {new Date().getFullYear()} Sycamore</span>
          <a href="#" className="muted">Privacy</a>
        </div>
      </footer>
    </main>
  );
}