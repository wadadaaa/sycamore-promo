import Nav from "@/components/Nav";
import LeadForm from "@/components/LeadForm";
import { CheckCircle2, FileText, Upload, Clock } from "lucide-react";

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
            <h3 className="font-semibold mb-2">פרטי קשר</h3>
            <p className="muted">טלפון: 03-1234567<br/>מייל: hello@sycamore.co.il</p>
            <div className="mt-4">
              <a className="btn-outline" href="https://wa.me/972501234567" target="_blank">WhatsApp</a>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t">
        <div className="container py-8 text-sm flex flex-col md:flex-row gap-2 justify-between">
          <span>© {new Date().getFullYear()} Sycamore</span>
          <a href="#" className="muted">Privacy</a>
        </div>
      </footer>
    </main>
  );
}
