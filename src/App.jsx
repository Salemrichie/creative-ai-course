import { useState } from "react";
import StatsCard from "./components/StatsCard";

export default function App() {
  const [page, setPage] = useState("home");

  const weeks = [
    {
      id: 1,
      title: "إتقان أدوات الكتابة بالذكاء الاصطناعي",
      topics: [
        "مقدمة إلى أدوات الذكاء الاصطناعي للنصوص",
        "مقارنة بين ChatGPT، Claude، Gemini",
        "كتابة أوامر (Prompts) فعّالة",
        "تحويل الأفكار إلى محتوى",
      ],
      exercise: "إنشاء 5 منشورات لوسائل التواصل حول موضوع مختار، وكتابة مقال بسيط (600-800 كلمة).",
      resources: ["دليل أفضل 10 Prompts", "قالب كتابة الأوامر"],
    },
    {
      id: 2,
      title: "أنواع المحتوى الإبداعي",
      topics: [
        "أنواع المحتوى: منشورات، مقالات، سكريبتات، إيميلات، كتب قصيرة",
        "الفرق بين المحتوى التعليمي، الترفيهي، والتسويقي",
        "التركيب البصري والنصي للمحتوى",
      ],
      exercise: "إنشاء مجموعة محتوى متكاملة (3 منشورات + سكريبت فيديو قصير)، وتخطيط أسبوع من المحتوى.",
      resources: ["قالب خطة أسبوعية", "أمثلة على محتوى متنوع"],
    },
    {
      id: 3,
      title: "الأتمتة وإنتاج المحتوى",
      topics: [
        "مقدمة إلى الأتمتة (Automation)",
        "ربط الأدوات: فكرة → نص → صورة → منشور",
        "أهمية المراجعة البشرية",
      ],
      exercise: "بناء تدفق عمل بسيط باستخدام Google Forms وSheets، وتنفيذ مشروع تجريبي.",
      resources: ["دليل ربط الأدوات", "نموذج Google Form جاهز"],
    },
    {
      id: 4,
      title: "بناء المشروع الشخصي",
      topics: [
        "تحويل المهارات إلى مشروع شخصي",
        "بناء ملف تعريفي (Portfolio)",
        "مشاركة المحتوى بمسؤولية",
      ],
      exercise: "إعداد ملف تعريفي يعرض 3 عيّنات من المحتوى، وكتابة مقدمة شخصية.",
      resources: ["قالب Portfolio على Notion", "نموذج Bio"],
    },
  ];

  const renderPage = () => {
    // الصفحة الرئيسية
    if (page === "home") {
      return (
        <section className="bg-white rounded-2xl shadow-xl p-8 border border-slate-200 text-center max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-indigo-600 mb-6">مرحباً بك في المسار التجريبي</h2>
          <p className="text-lg text-slate-700 leading-relaxed mb-8">
            هذا مسار تعليمي تجريبي لتعلم كيفية استخدام الذكاء الاصطناعي في الكتابة الإبداعية، بدون أي هدف ربحي.
          </p>
          
          {/* إحصائيات المسار */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
            <StatsCard icon="📅" title="أسابيع" value="4" color="indigo" />
            <StatsCard icon="📚" title="موضوع" value="16" color="green" />
            <StatsCard icon="🎯" title="تمارين" value="4" color="blue" />
            <StatsCard icon="📦" title="موارد" value="8" color="purple" />
          </div>
          <div className="grid md:grid-cols-2 gap-6 mt-10">
            {[
              { key: "syllabus", title: "الهيكل الأسبوعي", icon: "📅" },
              { key: "project", title: "المشروع النهائي", icon: "🏁" },
              { key: "resources", title: "الموارد", icon: "📦" },
              { key: "about", title: "عن المسار", icon: "ℹ️" },
            ].map((item) => (
              <button
                key={item.key}
                onClick={() => setPage(item.key)}
                className="p-6 bg-slate-50 hover:bg-indigo-50 rounded-xl border border-slate-200 text-right transition-all duration-300 text-lg font-semibold text-slate-800 flex items-center justify-between transform hover:scale-105 hover:shadow-lg"
              >
                <span>{item.title}</span>
                <span className="text-2xl">{item.icon}</span>
              </button>
            ))}
          </div>
        </section>
      );
    }

    // الهيكل الأسبوعي
    if (page === "syllabus") {
      const [openWeek, setOpenWeek] = useState(null);
      return (
        <section className="bg-white rounded-2xl shadow-xl p-8 border border-slate-200">
          <h2 className="text-3xl font-bold text-indigo-600 mb-8 flex items-center justify-between">
            <span>الهيكل الأسبوعي</span>
            <button
              onClick={() => setPage("home")}
              className="text-sm bg-slate-200 hover:bg-slate-300 px-4 py-2 rounded-full"
            >
              العودة
            </button>
          </h2>
          <div className="space-y-4">
            {weeks.map((week) => (
              <div
                key={week.id}
                className="border border-slate-200 rounded-xl overflow-hidden hover:shadow-lg transition-shadow"
              >
                <button
                  onClick={() => setOpenWeek(openWeek === week.id ? null : week.id)}
                  className="w-full px-6 py-5 text-right bg-slate-50 hover:bg-indigo-50 flex justify-between items-center font-bold text-lg text-slate-800"
                >
                  <span>الأسبوع {week.id}: {week.title}</span>
                  <span className="text-2xl">{openWeek === week.id ? "−" : "+"}</span>
                </button>
                {openWeek === week.id && (
                  <div className="p-6 bg-white space-y-5 border-t border-slate-100 pr-5">
                    <h3 className="text-xl font-bold text-indigo-700">المواضيع:</h3>
                    <ul className="space-y-2 pr-5">
                      {week.topics.map((topic, idx) => (
                        <li key={idx} className="text-slate-600 flex items-start">
                          <span className="inline-block w-1.5 h-1.5 bg-indigo-400 rounded-full mt-2 ml-3"></span>
                          {topic}
                        </li>
                      ))}
                    </ul>
                    <h3 className="text-xl font-bold text-indigo-700">التمرين:</h3>
                    <p className="text-slate-600 pr-5">{week.exercise}</p>
                    <h3 className="text-xl font-bold text-indigo-700">الموارد:</h3>
                    <ul className="pr-5 space-y-1">
                      {week.resources.map((res, idx) => (
                        <li key={idx} className="text-indigo-600 underline decoration-dashed">
                          {res} (نموذج تجريبي)
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>
      );
    }

    // المشروع النهائي
    if (page === "project") {
      return (
        <section className="bg-white rounded-2xl shadow-xl p-8 border border-slate-200">
          <h2 className="text-3xl font-bold text-indigo-600 mb-6 flex items-center justify-between">
            <span>المشروع النهائي</span>
            <button
              onClick={() => setPage("home")}
              className="text-sm bg-slate-200 hover:bg-slate-300 px-4 py-2 rounded-full"
            >
              العودة
            </button>
          </h2>
          <div className="space-y-6 text-lg text-slate-700 leading-relaxed pr-5">
            <p>
              <strong>المطلوب:</strong> إعداد "مجموعة محتوى متكاملة" حول موضوع تختاره (مثلاً: الصحة النفسية، التعلم الذاتي).
            </p>
            <ul className="space-y-3 pr-5">
              {[
                "3 منشورات نصية + مرئية",
                "سكريبت فيديو قصير (نصي)",
                "خطة نشر أسبوعية (جدول بسيط)",
                "ملف تعريفي (Portfolio) يعرض العمل",
              ].map((item, idx) => (
                <li key={idx} className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-green-400 rounded-full mt-3 ml-3"></span>
                  {item}
                </li>
              ))}
            </ul>
            <div className="bg-indigo-50 p-6 rounded-xl border border-indigo-200">
              <h3 className="font-bold text-indigo-800 mb-2">ملاحظة:</h3>
              <p className="text-indigo-700">
                عند الإكمال، يمكنك حفظ المشروع كجزء من سيرتك الذاتية أو ملفك التعليمي.
              </p>
            </div>
          </div>
        </section>
      );
    }

    // الموارد
    if (page === "resources") {
      return (
        <section className="bg-white rounded-2xl shadow-xl p-8 border border-slate-200">
          <h2 className="text-3xl font-bold text-indigo-600 mb-6 flex items-center justify-between">
            <span>الموارد التجريبية</span>
            <button
              onClick={() => setPage("home")}
              className="text-sm bg-slate-200 hover:bg-slate-300 px-4 py-2 rounded-full"
            >
              العودة
            </button>
          </h2>
          <ul className="space-y-4 pr-5 text-lg">
            {[
              "دليل المتدرب (PDF تجريبي)",
              "قوالب Prompts جاهزة",
              "قالب خطة محتوى (Google Sheet)",
              "قالب Portfolio على Notion",
              "نموذج تدفق عمل بسيط",
              "أمثلة على محتوى متنوع",
            ].map((item, idx) => (
              <li key={idx} className="p-4 bg-slate-50 rounded-lg border border-slate-200 flex items-center">
                <span className="inline-block w-2 h-2 bg-indigo-500 rounded-full ml-4"></span>
                {item}
                <span className="mr-auto text-sm text-slate-500">(متاح كنموذج)</span>
              </li>
            ))}
          </ul>
          <div className="mt-8 text-center">
            <button
              onClick={() => {
                // محاكاة عملية التحميل
                const btn = event.target;
                const originalText = btn.textContent;
                btn.textContent = "⏳ جاري التحميل...";
                btn.disabled = true;
                setTimeout(() => {
                  btn.textContent = "✅ تم التحميل!";
                  setTimeout(() => {
                    btn.textContent = originalText;
                    btn.disabled = false;
                  }, 2000);
                }, 1500);
              }}
              className="bg-indigo-600 hover:bg-indigo-700 disabled:bg-gray-400 text-white font-semibold px-8 py-3 rounded-xl transition transform hover:scale-105 active:scale-95"
            >
              📥 تنزيل الحزمة التجريبية
            </button>
          </div>
        </section>
      );
    }

    // عن المسار
    if (page === "about") {
      return (
        <section className="bg-white rounded-2xl shadow-xl p-8 border border-slate-200 max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-indigo-600 mb-6 flex items-center justify-between">
            <span>عن المسار</span>
            <button
              onClick={() => setPage("home")}
              className="text-sm bg-slate-200 hover:bg-slate-300 px-4 py-2 rounded-full"
            >
              العودة
            </button>
          </h2>
          <div className="space-y-5 text-lg text-slate-700 pr-5 leading-relaxed">
            <p>
              هذا مسار تجريبي غير ربحي مصمم لمساعدة الأفراد على تطوير مهاراتهم في استخدام الذكاء الاصطناعي للإنتاج الإبداعي.
            </p>
            <p>
              <strong>الهدف:</strong> تمكينك من استخدام الأدوات الحديثة لإنتاج محتوى نصي ومرئي بجودة عالية، وفهم كيفية ربط الأدوات في سير عمل متكامل.
            </p>
            <p>
              <strong>الجمهور:</strong> كتاب، محتوو، طلاب، أو أي شخص مهتم بالكتابة والابتكار الرقمي.
            </p>
            <p className="text-slate-500 text-base">
              لا يُسمح بالاستخدام التجاري. جميع الموارد تُستخدم لأغراض تعليمية وتجرِبية فقط.
            </p>
          </div>
        </section>
      );
    }
  };

  return (
    <div
      dir="rtl"
      className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 text-slate-800"
    >
      {/* Header */}
      <header className="bg-white shadow-lg border-b-4 border-indigo-500">
        <div className="max-w-6xl mx-auto px-6 py-6 text-center">
          <h1 className="text-3xl font-extrabold text-indigo-700">
            الكاتب الإبداعي بالذكاء الاصطناعي
          </h1>
          <p className="text-lg text-slate-600">مسار تدريبي تجريبي — غير ربحي</p>
        </div>
      </header>

      {/* Navigation Pills */}
      <nav className="max-w-6xl mx-auto px-6 py-4">
        <div className="flex flex-wrap justify-center gap-3 text-sm">
          {[
            { key: "home", label: "الرئيسية" },
            { key: "syllabus", label: "الهيكل" },
            { key: "project", label: "المشروع" },
            { key: "resources", label: "الموارد" },
            { key: "about", label: "عن المسار" },
          ].map((nav) => (
            <button
              key={nav.key}
              onClick={() => setPage(nav.key)}
              className={`px-5 py-2 rounded-full font-medium transition-all duration-300 transform hover:scale-105 ${
                page === nav.key
                  ? "bg-indigo-600 text-white shadow-lg"
                  : "bg-white text-slate-700 hover:bg-slate-100 shadow hover:shadow-md"
              }`}
            >
              {nav.label}
            </button>
          ))}
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-6 py-8">
        {renderPage()}
      </main>

      {/* Footer */}
      <footer className="bg-slate-800 text-white text-center py-6 mt-16">
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-sm">
            منصة تعليمية تجريبية — مشروع تطوير مهارات الذكاء الاصطناعي الإبداعي
          </p>
          <p className="text-xs text-slate-400 mt-1">
            لا يُسمح بالاستخدام التجاري. جميع الحقوق محفوظة.
          </p>
        </div>
      </footer>
    </div>
  );
}