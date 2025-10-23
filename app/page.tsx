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

      {/* Pricing / Price Declaration */}
      <section id="pricing" className="section">
        <div className="container">
          <h2 className="text-2xl md:text-3xl font-bold mb-8">הצהרת מחיר</h2>
          <p className="muted max-w-3xl mb-6">
            המחירים להלן הינם טווחי הערכה ראשוניים בלבד, ההצעה הסופית תינתן לאחר בחינת הנתונים והמסמכים.
          </p>

          {/* Matrix pricing: Type vs. Approvals */}
          <div className="rounded-2xl border overflow-hidden bg-white">
            {/* Header row */}
            <div className="grid grid-cols-1 md:grid-cols-[minmax(150px,200px)_1fr_1fr] text-sm font-semibold bg-zinc-50">
              <div className="p-3 hidden md:block"></div>
              <div className="p-3 text-start border-b md:border-b-0">
                <div className="font-semibold">ללא אישורים</div>
                <div className="text-xs font-normal text-zinc-500 mt-0.5">תכנון בלבד</div>
              </div>
              <div className="p-3 text-start">
                <div className="font-semibold">עם אישורים</div>
                <div className="text-xs font-normal text-zinc-500 mt-0.5">כולל נספח + הגשה</div>
              </div>
            </div>

            {/* Row: בית פרטי */}
            <div className="grid grid-cols-1 md:grid-cols-[minmax(150px,200px)_1fr_1fr] border-t">
              <div className="p-3 md:p-4 font-semibold bg-zinc-50 md:bg-white text-center md:text-right">
                בית פרטי
              </div>
              
              {/* Without approvals */}
              <div className="p-4 border-t md:border-t-0 md:border-r">
                <div className="text-lg font-semibold mb-2">₪4,000–₪7,000</div>
                <ul className="list-disc pr-5 space-y-1 text-sm text-zinc-700 mb-4">
                  <li>תכנון בסיסי (מים/ביוב/ניקוז)</li>
                  <li>סכמות ועקרונות</li>
                </ul>
                <div className="flex flex-col sm:flex-row gap-4 mt-auto items-center">
                  <a 
                    href="#contact" 
                    className="btn-outline text-center py-2 px-4 text-sm flex-2"
                  >
                    קבלו הצעה
                  </a>
                  <a 
                    href="https://wa.me/0546314848" 
                    target="_blank" 
                    rel="noreferrer" 
                    className="text-xs text-center py-2 text-zinc-600 hover:text-zinc-900 underline"
                  >
                    או ב‑WhatsApp
                  </a>
                </div>
              </div>

              {/* With approvals */}
              <div className="p-4 border-t md:border-t-0 bg-zinc-50/30">
                <div className="text-lg font-semibold mb-2">₪7,000–₪12,000</div>
                <ul className="list-disc pr-5 space-y-1 text-sm text-zinc-700 mb-4">
                  <li>כולל הכנת נספח סניטרי</li>
                  <li>הגשה ומעקב עד אישור</li>
                </ul>
                <div className="flex flex-col sm:flex-row gap-4 mt-auto items-center">
                  <a 
                    href="#contact" 
                    className="btn text-center py-2 px-4 text-sm flex-2"
                  >
                    קבלו הצעה
                  </a>
                  <a 
                    href="https://wa.me/0546314848" 
                    target="_blank" 
                    rel="noreferrer" 
                    className="text-xs text-center py-2 text-zinc-600 hover:text-zinc-900 underline"
                  >
                    או ב‑WhatsApp
                  </a>
                </div>
              </div>
            </div>

            {/* Row: בניין מגורים משותף */}
            <div className="grid grid-cols-1 md:grid-cols-[minmax(150px,200px)_1fr_1fr] border-t">
              <div className="p-3 md:p-4 font-semibold bg-zinc-50 md:bg-white text-center md:text-right">
                בניין מגורים משותף
              </div>
              
              {/* Without approvals */}
              <div className="p-4 border-t md:border-t-0 md:border-r">
                <div className="mb-2">
                  <div className="text-lg font-semibold">₪2,000–₪2,600</div>
                  <div className="text-xs text-zinc-500 mt-0.5">לח״ד</div>
                  <div className="text-xs text-zinc-500">או ₪90,000–₪140,000 סכום קבוע</div>
                </div>
                <ul className="list-disc pr-5 space-y-1 text-sm text-zinc-700 mb-4">
                  <li>תכנון מערכות בניין משותף</li>
                  <li>ללא תהליך אישורים מול תאגיד</li>
                </ul>
                <div className="flex flex-col sm:flex-row gap-4 mt-auto items-center">
                  <a 
                    href="#contact" 
                    className="btn-outline text-center py-2 px-4 text-sm flex-2"
                  >
                    קבלו הצעה
                  </a>
                  <a 
                    href="https://wa.me/0546314848" 
                    target="_blank" 
                    rel="noreferrer" 
                    className="text-xs text-center py-2 text-zinc-600 hover:text-zinc-900 underline"
                  >
                    או ב‑WhatsApp
                  </a>
                </div>
              </div>

              {/* With approvals */}
              <div className="p-4 border-t md:border-t-0 bg-zinc-50/30">
                <div className="mb-2">
                  <div className="text-lg font-semibold">₪3,000–₪3,500</div>
                  <div className="text-xs text-zinc-500 mt-0.5">לח״ד</div>
                  <div className="text-xs text-zinc-500">או ₪140,000–₪230,000 סכום קבוע</div>
                </div>
                <ul className="list-disc pr-5 space-y-1 text-sm text-zinc-700 mb-4">
                  <li>כולל נספח סניטרי מלא</li>
                  <li>הגשה/תיקונים/מעקב עד אישור</li>
                </ul>
                <div className="flex flex-col sm:flex-row gap-4 mt-auto items-center">
                  <a 
                    href="#contact" 
                    className="btn text-center py-2 px-4 text-sm flex-2"
                  >
                    קבלו הצעה
                  </a>
                  <a 
                    href="https://wa.me/0546314848" 
                    target="_blank" 
                    rel="noreferrer" 
                    className="text-xs text-center py-2 text-zinc-600 hover:text-zinc-900 underline"
                  >
                    או ב‑WhatsApp
                  </a>
                </div>
              </div>
            </div>

            {/* Row: בניין תעשייתי/מסחרי */}
            <div className="grid grid-cols-1 md:grid-cols-[minmax(150px,200px)_1fr_1fr] border-t">
              <div className="p-3 md:p-4 font-semibold bg-zinc-50 md:bg-white text-center md:text-right">
                בניין תעשייתי/מסחרי
              </div>
              
              {/* Without approvals */}
              <div className="p-4 border-t md:border-t-0 md:border-r">
                <div className="text-lg font-semibold mb-2">₪90,000–₪180,000</div>
                <ul className="list-disc pr-5 space-y-1 text-sm text-zinc-700 mb-4">
                  <li>תכנון מערכות לפי ייעוד</li>
                  <li>ללא מסמכי אישור לרשויות</li>
                </ul>
                <div className="flex flex-col sm:flex-row gap-4 mt-auto items-center">
                  <a 
                    href="#contact" 
                    className="btn-outline text-center py-2 px-4 text-sm flex-2"
                  >
                    קבלו הצעה
                  </a>
                  <a 
                    href="https://wa.me/0546314848" 
                    target="_blank" 
                    rel="noreferrer" 
                    className="text-xs text-center py-2 text-zinc-600 hover:text-zinc-900 underline"
                  >
                    או ב‑WhatsApp
                  </a>
                </div>
              </div>

              {/* With approvals */}
              <div className="p-4 border-t md:border-t-0 bg-zinc-50/30">
                <div className="text-lg font-semibold mb-2">₪140,000–₪260,000</div>
                <ul className="list-disc pr-5 space-y-1 text-sm text-zinc-700 mb-4">
                  <li>כולל נספח/מפרט לרשויות</li>
                  <li>הגשה/מעקב/עדכון מול תאגיד/עיריה</li>
                </ul>
                <div className="flex flex-col sm:flex-row gap-4 mt-auto items-center">
                  <a 
                    href="#contact" 
                    className="btn text-center py-2 px-4 text-sm flex-2"
                  >
                    קבלו הצעה
                  </a>
                  <a 
                    href="https://wa.me/0546314848" 
                    target="_blank" 
                    rel="noreferrer" 
                    className="text-xs text-center py-2 text-zinc-600 hover:text-zinc-900 underline"
                  >
                    או ב‑WhatsApp
                  </a>
                </div>
              </div>
            </div>

            {/* Row: Custom */}
            <div className="grid grid-cols-1 md:grid-cols-[minmax(150px,200px)_1fr_1fr] border-t">
              <div className="p-3 md:p-4 font-semibold bg-zinc-50 md:bg-white text-center md:text-right">
              תאם אישית
              </div>
              
              {/* Without approvals */}
              <div className="p-4 border-t md:border-t-0 md:border-r">
                <div className="text-lg font-semibold mb-2">₪1,500–₪6,000 למסמך/חישוב</div>
                <p className="text-sm text-zinc-700 mb-4">
                  פתרון נקודתי ללא תהליך אישורים (לדוגמה: חישוב ספיקות, סכמת מים, חישוב מאגר).
                </p>
                <div className="flex flex-col sm:flex-row gap-4 mt-auto items-center">
                  <a 
                    href="#contact" 
                    className="btn-outline text-center py-2 px-4 text-sm flex-2"
                  >
                    קבלו הצעה
                  </a>
                  <a 
                    href="https://wa.me/0546314848" 
                    target="_blank" 
                    rel="noreferrer" 
                    className="text-xs text-center py-2 text-zinc-600 hover:text-zinc-900 underline"
                  >
                    או ב‑WhatsApp
                  </a>
                </div>
              </div>

              {/* With approvals */}
              <div className="p-4 border-t md:border-t-0 bg-zinc-50/30">
                <div className="text-lg font-semibold mb-2">₪4,000–₪12,000 לחבילה</div>
                <p className="text-sm text-zinc-700 mb-4">
                  תכנון + הכנת מסמכי אישור לרשות/תאגיד לפי דרישה (נספח, מפרט, תיאום יועצים).
                </p>
                  <div className="flex flex-col sm:flex-row gap-4 mt-auto items-center ">
                  <a 
                    href="#contact" 
                    className="btn text-center py-2 px-4 text-sm flex-2"
                  >
                    קבלו הצעה
                  </a>
                  <a 
                    href="https://wa.me/0546314848" 
                    target="_blank" 
                    rel="noreferrer" 
                    className="text-xs text-center py-2 text-zinc-600 hover:text-zinc-900 underline"
                  >
                    או ב‑WhatsApp
                  </a>
                </div>
              </div>
            </div>
          </div>

          <p className="mt-3 text-xs text-zinc-500">
            * טווחים נגזרו מהצעות מחיר לדוגמה (איה הנדסה, אירנה דוביצקי, אילנה סאפ, אבנר וישקין) ומעודכנים ל‑2025.
          </p>
          <div className="rounded-2xl border p-4 mt-6 text-sm bg-white">
            <p className="text-zinc-700">
              * המחירים משתנים לפי רשות, שטח בנוי, היקף מערכות (כיבוי, ספרינקלרים, BIM) והיסטוריית פרויקט. ההצעה המחייבת תינתן רק לאחר קבלת פרטים מלאים.
            </p>
          </div>
        </div>
      </section>


      {/* Process */}
      <section id="process" className="section">
        <div className="container">
          <h2 className="text-2xl md:text-3xl font-bold mb-8">כך זה עובד</h2>
          <div className="grid md:grid-cols-3 gap-4">
            {[
              { icon: Upload, title: "איסוף", desc: "מקבלים מכם תכניות ומסמכים." },
              { icon: FileText, title: "הגשה", desc: "מייצרים חבילת הגשה מלאה." },
              { icon: Clock, title: "מעקב", desc: "תיקונים מהירים ועד האישור." },
            ].map((s) => (
              <div key={s.title} className="rounded-2xl border p-6">
                <s.icon className="w-6 h-6 mb-2" />
                <h3 className="font-semibold">{s.title}</h3>
                <p className="muted mt-1">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cases */}
      <section id="cases" className="section bg-zinc-50">
        <div className="container">
          <h2 className="text-2xl md:text-3xl font-bold mb-8">מקרי בוחן</h2>
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

      {/* Contact */}
      <section id="contact" className="section">
        <div className="container grid md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold mb-4">צור קשר</h2>
            <p className="muted mb-6">השאירו פרטים ונחזור אליכם עם צ'ק ליסט מותאם לעיר שלכם.</p>
            <LeadForm />
          </div>
          <div className="rounded-2xl border p-6">
            <h3 className="font-semibold mb-4 text-xl">פרטי קשר</h3>

            <ul className="space-y-3 text-sm text-zinc-700">
              <li className="flex items-center justify-between md:justify-start gap-3">
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-zinc-500" aria-hidden />
                  <span className="text-zinc-500">טלפון</span>
                </div>
                <a href="tel:0546314848" className="font-medium hover:underline">0546314848</a>
              </li>
              <li className="flex items-center justify-between md:justify-start gap-3">
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-zinc-500" aria-hidden />
                  <span className="text-zinc-500">אימייל</span>
                </div>
                <a href="mailto:hello@sycamore.co.il" className="font-medium hover:underline">hello@sycamore.co.il</a>
              </li>
              <li className="flex items-center justify-between md:justify-start gap-3">
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-zinc-500" aria-hidden />
                  <span className="text-zinc-500">שעות פעילות</span>
                </div>
                <span className="font-medium">א׳–ה׳ 9:00–18:00</span>
              </li>
              <li className="flex items-center justify-between md:justify-start gap-3">
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-zinc-500" aria-hidden />
                  <span className="text-zinc-500">אזור שירות</span>
                </div>
                <span className="font-medium">מרכז + גוש דן</span>
              </li>
            </ul>

            <div className="mt-6 flex flex-col sm:flex-row gap-2">
              <a href="tel:0546314848" className="btn-outline sm:flex-1 text-center" aria-label="התקשרו אלינו">התקשרו</a>
              <a href="mailto:hello@sycamore.co.il" className="btn-outline sm:flex-1 text-center" aria-label="כתבו לנו אימייל">מייל</a>
              <a href="https://wa.me/0546314848" target="_blank" rel="noreferrer" className="btn sm:flex-1 text-center" aria-label="פתיחת WhatsApp">WhatsApp</a>
            </div>

            <p className="text-xs text-zinc-500 mt-3">מענה מהיר ב-WhatsApp ובשעות הפעילות בטלפון.</p>
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
