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
              אדריכלות רישוי חכמה שמקצרת זמן לאישור
            </h1>
            <p className="muted text-lg">
              אוספים, מגישים, עוקבים — ואתם מתמקדים בתכנון. ממוצע 21 ימים לאישור, 98% הצלחה.
            </p>
            <div className="flex gap-3">
              <a href="#contact" className="btn">קבלו שיחה חוזרת</a>
              <a href="#process" className="btn-outline">כך זה עובד</a>
            </div>
            <div className="flex gap-6 pt-4 text-sm">
              <div className="flex items-center gap-2"><CheckCircle2 className="w-5 h-5" /> 98% הצלחה</div>
              <div className="flex items-center gap-2"><Clock className="w-5 h-5" /> בממוצע 21 ימים</div>
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

      {/* Services */}
      <section id="services" className="section bg-zinc-50">
        <div className="container">
          <h2 className="text-2xl md:text-3xl font-bold mb-8">שירותים עיקריים</h2>
          <div className="grid md:grid-cols-4 gap-4">
            {[
              { title: "היתר בנייה", desc: "איסוף חכם, הגשה מסודרת ומעקב." },
              { title: "טופס 4", desc: "סגירת התיקים והשלמות." },
              { title: "שינוי ייעוד", desc: "תיאומים וסטטוס מול רשות." },
              { title: "סניטריה/תשתיות", desc: "תכניות, אישורים ויועצים." },
            ].map((s) => (
              <div key={s.title} className="rounded-2xl border p-6 bg-white">
                <h3 className="font-semibold text-lg">{s.title}</h3>
                <p className="muted mt-2">{s.desc}</p>
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
          {/* two-column headers */}
          <div className="grid md:grid-cols-2 gap-8 items-start mb-2">
            <h3 className="text-xl font-bold md:mb-0 mb-4 text-right">בית פרטי</h3>
            <h3 className="text-xl font-bold md:mb-0 mb-4">בית משותף</h3>
          </div>

          {/* Row 1 — Basic */}
          <div className="grid md:grid-cols-2 gap-8">
            {/* Private Basic */}
            <div className="rounded-2xl border p-6 bg-white h-full flex flex-col">
              <h4 className="font-semibold text-lg">Basic — מבנה בלבד</h4>
              <div className="mt-2 space-y-3 text-sm text-zinc-600">
                <div>
                  <p className="font-medium">עם מרתף</p>
                  <p className="text-2xl font-bold">₪1,800–₪2,400</p>
                </div>
                <div>
                  <p className="font-medium">עם בריכה</p>
                  <p className="text-2xl font-bold">₪2,200–₪2,800</p>
                </div>
              </div>
              <ul className="mt-3 text-sm text-zinc-600 space-y-1">
                <li>• כיסוי מבנה בסיסי</li>
                <li>• אופציה להוספת צד ג׳ / מים</li>
              </ul>
              {/* spacer to push CTA if added later */}
              <div className="mt-auto pt-4 flex flex-row gap-2 items-center">
                <a href="#contact" className="btn-outline inline-block w-full md:w-auto px-4 py-2 text-sm text-center">קבלו הצעה</a>
                <a href="https://wa.me/0546314848" target="_blank" rel="noreferrer" className="text-xs underline text-zinc-600 w-full md:w-auto inline-block text-center">או ב‑WhatsApp</a>
              </div>
            </div>

            {/* Shared Basic */}
            <div className="rounded-2xl border p-6 bg-white h-full flex flex-col">
              <h4 className="font-semibold text-lg">Basic — מבנה בלבד</h4>
              <div className="mt-2 space-y-3 text-sm text-zinc-600">
                <div>
                  <p className="font-medium">עם חניה תת קרקעית</p>
                  <p className="text-2xl font-bold">₪1,100–₪1,500</p>
                </div>
                <div>
                  <p className="font-medium">עם גג משותף</p>
                  <p className="text-2xl font-bold">₪1,200–₪1,600</p>
                </div>
              </div>
              <ul className="mt-3 space-y-1">
                <li>• כיסוי מבנה משותף</li>
                <li>• אופציה להרחבת צד ג׳</li>
              </ul>
              <div className="mt-auto pt-4 flex flex-row gap-2 items-center">
                <a href="#contact" className="btn-outline inline-block w-full md:w-auto px-4 py-2 text-sm">קבלו הצעה</a>
                <a href="https://wa.me/0546314848" target="_blank" rel="noreferrer" className="mt-2 text-xs underline text-zinc-600 w-full md:w-auto inline-block text-center">או ב‑WhatsApp</a>
              </div>
            </div>
          </div>

          {/* Row 2 — Plus */}
          <div className="grid md:grid-cols-2 gap-8 mt-6">
            {/* Private Plus */}
            <div className="rounded-2xl border p-6 bg-zinc-50 h-full flex flex-col">
              <span className="self-start mb-2 inline-flex items-center rounded-full bg-black text-white text-xs px-3 py-1">מומלץ</span>
              <h4 className="font-semibold text-lg">Plus — משולב</h4>
              <div className="mt-2 space-y-3 text-sm text-zinc-600">
                <div>
                  <p className="font-medium">עם מרתף</p>
                  <p className="text-2xl font-bold">₪3,200–₪4,600</p>
                </div>
                <div>
                  <p className="font-medium">עם בריכה</p>
                  <p className="text-2xl font-bold">₪3,800–₪5,200</p>
                </div>
              </div>
              <ul className="mt-3 text-sm text-zinc-600 space-y-1">
                <li>• מבנה + תכולה</li>
                <li>• כולל צד ג׳ ומים/צנרת</li>
              </ul>
              <div className="mt-auto pt-4 flex flex-row gap-2 items-center">
                <a href="#contact" className="btn inline-block w-full md:w-auto px-4 py-2 text-sm">קבלו הצעה</a>
                <a href="https://wa.me/0546314848" target="_blank" rel="noreferrer" className="mt-2 text-xs underline text-zinc-600 w-full md:w-auto inline-block text-center">או ב‑WhatsApp</a>
              </div>
            </div>

            {/* Shared Plus */}
            <div className="rounded-2xl border p-6 bg-zinc-50 h-full flex flex-col">
              <span className="self-start mb-2 inline-flex items-center rounded-full bg-black text-white text-xs px-3 py-1">מומלץ</span>
              <h4 className="font-semibold text-lg">Plus — משולב</h4>
              <div className="mt-2 space-y-3 text-sm text-zinc-600">
                <div>
                  <p className="font-medium">עם חניה תת קרקעית</p>
                  <p className="text-2xl font-bold">₪2,300–₪2,900</p>
                </div>
                <div>
                  <p className="font-medium">עם גג משותף</p>
                  <p className="text-2xl font-bold">₪2,500–₪3,100</p>
                </div>
              </div>
              <ul className="mt-3 space-y-1">
                <li>• מבנה + תכולה</li>
                <li>• כולל מים/צנרת</li>
              </ul>
              <div className="mt-auto pt-4 flex flex-row gap-2 items-center">
                <a href="#contact" className="btn inline-block w-full md:w-auto px-4 py-2 text-sm">קבלו הצעה</a>
                <a href="https://wa.me/0546314848" target="_blank" rel="noreferrer" className="mt-2 text-xs underline text-zinc-600 w-full md:w-auto inline-block text-center">או ב‑WhatsApp</a>
              </div>
            </div>
          </div>

          {/* Row 3 — Premium */}
          <div className="grid md:grid-cols-2 gap-8 mt-6">
            {/* Private Premium */}
            <div className="rounded-2xl border p-6 bg-white h-full flex flex-col">
              <h4 className="font-semibold text-lg">Premium — מלא</h4>
              <div className="mt-2 space-y-3 text-sm text-zinc-600">
                <div>
                  <p className="font-medium">עם מרתף</p>
                  <p className="text-2xl font-bold">₪5,500–₪7,500</p>
                </div>
                <div>
                  <p className="font-medium">עם בריכה</p>
                  <p className="text-2xl font-bold">₪6,200–₪8,000</p>
                </div>
              </div>
              <ul className="mt-3 text-sm text-zinc-600 space-y-1">
                <li>• מבנה + תכולה + צד ג׳ מוגדל</li>
                <li>• כולל רעידת אדמה והרחבות</li>
              </ul>
              <div className="mt-auto pt-4 flex flex-row gap-2 items-center">
                <a href="#contact" className="btn-outline inline-block w-full md:w-auto px-4 py-2 text-sm">קבלו הצעה</a>
                <a href="https://wa.me/0546314848" target="_blank" rel="noreferrer" className="mt-2 text-xs underline text-zinc-600 w-full md:w-auto inline-block text-center">או ב‑WhatsApp</a>
              </div>
            </div>

            {/* Shared Premium */}
            <div className="rounded-2xl border p-6 bg-white h-full flex flex-col">
              <h4 className="font-semibold text-lg">Premium — מלא</h4>
              <div className="mt-2 space-y-3 text-sm text-zinc-600">
                <div>
                  <p className="font-medium">עם חניה תת קרקעית</p>
                  <p className="text-2xl font-bold">₪3,200–₪4,200</p>
                </div>
                <div>
                  <p className="font-medium">עם גג משותף</p>
                  <p className="text-2xl font-bold">₪3,600–₪4,800</p>
                </div>
              </div>
              <ul className="mt-3 space-y-1">
                <li>• מבנה + תכולה + צד ג׳ מוגדל</li>
                <li>• רעידת אדמה והרחבות</li>
              </ul>
              <div className="mt-auto pt-4 flex flex-row gap-2 items-center">
                <a href="#contact" className="btn-outline inline-block w-full md:w-auto px-4 py-2 text-sm">קבלו הצעה</a>
                <a href="https://wa.me/0546314848" target="_blank" rel="noreferrer" className="mt-2 text-xs underline text-zinc-600 w-full md:w-auto inline-block text-center">או ב‑WhatsApp</a>
              </div>
            </div>
          </div>
          <div className="rounded-2xl border p-4 mt-6 text-sm bg-white">
            <p className="text-zinc-700">
              * המחירים משתנים לפי רשות, שטח בנוי, היסטוריית תביעות ודרישות בנק. ההצעה המחייבת תינתן רק לאחר קבלת פרטים מלאים.
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
              { icon: Clock, title: "מעקב 21 ימים", desc: "תיקונים מהירים ועד האישור." },
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
