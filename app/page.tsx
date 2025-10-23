import Nav from "@/components/Nav";
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

      {/* Pricing / Price Declaration - ОБНОВЛЕННЫЕ ЦЕНЫ */}
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

            {/* Row: בניין מגורים משותף - ОБНОВЛЕНО */}
            <div className="grid grid-cols-1 md:grid-cols-[minmax(150px,200px)_1fr_1fr] border-t">
              <div className="p-3 md:p-4 font-semibold bg-zinc-50 md:bg-white text-center md:text-right">
                בניין מגורים משותף
              </div>
              
              {/* Without approvals - ОБНОВЛЕНО */}
              <div className="p-4 border-t md:border-t-0 md:border-r">
                <div className="mb-2">
                  <div className="text-lg font-semibold">₪2,000–₪2,400</div>
                  <div className="text-xs text-zinc-500 mt-0.5">לח״ד</div>
                  <div className="text-xs text-zinc-500">או ₪80,000–₪120,000 סכום קבוע</div>
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

              {/* With approvals - ОБНОВЛЕНО */}
              <div className="p-4 border-t md:border-t-0 bg-zinc-50/30">
                <div className="mb-2">
                  <div className="text-lg font-semibold">₪2,800–₪3,200</div>
                  <div className="text-xs text-zinc-500 mt-0.5">לח״ד</div>
                  <div className="text-xs text-zinc-500">או ₪120,000–₪200,000 סכום קבוע</div>
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
                Custom
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
          
          {/* NEW: Блок со скидками на объем */}
          <div className="rounded-2xl border p-4 mt-4 text-sm bg-blue-50 border-blue-200">
            <p className="font-semibold text-blue-900 mb-2">💡 הנחות על פי היקף הפרויקט</p>
            <ul className="text-blue-800 space-y-1">
              <li>• פרויקטים עד 20 יח״ד: מחיר בסיסי</li>
              <li>• פרויקטים 21-50 יח״ד: הנחה של 10%</li>
              <li>• פרויקטים 51-80 יח״ד: הנחה של 15%</li>
              <li>• פרויקטים מעל 80 יח״ד: הצעת מחיר אישית</li>
            </ul>
          </div>

          <div className="rounded-2xl border p-4 mt-4 text-sm bg-white">
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
      <section id="contact" className="section bg-gradient-to-b from-white to-zinc-50">
        <div className="container max-w-5xl">
          {/* Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">בואו נדבר</h2>
            <p className="text-lg text-zinc-600 max-w-2xl mx-auto">
              השאירו פרטים ונחזור אליכם תוך 24 שעות עם הצעת מחיר מדויקת
            </p>
          </div>

          {/* Main Contact Card */}
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            {/* Quick Contact - Prominent CTA */}
            <div className="rounded-3xl bg-gradient-to-br from-green-500 to-green-600 p-8 text-white shadow-xl">
              <div className="mb-6">
                <h3 className="text-2xl font-bold mb-2">רוצים להתחיל מהר?</h3>
                <p className="text-green-100">שלחו לנו הודעה ב-WhatsApp ונחזור תוך דקות</p>
              </div>
              
              <a 
                href="https://wa.me/0546314848" 
                target="_blank" 
                rel="noreferrer"
                className="flex items-center justify-center gap-3 bg-white text-green-600 font-semibold py-4 px-6 rounded-2xl hover:bg-green-50 transition-all hover:scale-105 shadow-lg mb-4"
              >
                <MessageCircle className="w-6 h-6" />
                <span className="text-lg">שלח הודעה ב-WhatsApp</span>
              </a>

              <div className="space-y-3 pt-4 border-t border-green-500">
                <div className="flex items-center gap-3 text-green-50">
                  <Phone className="w-5 h-5" />
                  <a href="tel:0546314848" className="hover:text-white text-lg">0546314848</a>
                </div>
                <div className="flex items-center gap-3 text-green-50">
                  <Mail className="w-5 h-5" />
                  <a href="mailto:hello@sycamore.co.il" className="hover:text-white">hello@sycamore.co.il</a>
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

          {/* Alternative Contact Methods */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="tel:0546314848" 
              className="btn-outline px-8 py-4 text-center text-lg hover:bg-zinc-50"
            >
              <Phone className="w-5 h-5 inline-block ml-2" />
              התקשרו עכשיו
            </a>
            <a 
              href="mailto:hello@sycamore.co.il" 
              className="btn-outline px-8 py-4 text-center text-lg hover:bg-zinc-50"
            >
              <Mail className="w-5 h-5 inline-block ml-2" />
              שלחו אימייל
            </a>
          </div>

          {/* Trust Indicators */}
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