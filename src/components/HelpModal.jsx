import React from 'react';

const HelpModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white dark:bg-slate-800 rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto animate-fade-in">
        <div className="p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-indigo-600 dark:text-indigo-400">
              🆘 مساعدة ودليل الاستخدام
            </h2>
            <button
              onClick={onClose}
              className="text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-200 text-2xl font-bold"
            >
              ×
            </button>
          </div>
          
          <div className="space-y-6 text-slate-700 dark:text-slate-300">
            <section>
              <h3 className="text-lg font-bold text-indigo-600 dark:text-indigo-400 mb-3">
                📝 كيفية استخدام المسار
              </h3>
              <ul className="space-y-2 pr-4">
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-indigo-400 rounded-full mt-2 ml-3"></span>
                  ابدأ من الصفحة الرئيسية لفهم نظرة عامة عن المسار
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-indigo-400 rounded-full mt-2 ml-3"></span>
                  تصفح الهيكل الأسبوعي للتعرف على المحتوى التفصيلي
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-indigo-400 rounded-full mt-2 ml-3"></span>
                  تابع تقدمك في صفحة "التقدم"
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-indigo-400 rounded-full mt-2 ml-3"></span>
                  احصل على الموارد التعليمية من صفحة "الموارد"
                </li>
              </ul>
            </section>

            <section>
              <h3 className="text-lg font-bold text-indigo-600 dark:text-indigo-400 mb-3">
                🎯 نصائح للنجاح
              </h3>
              <div className="bg-indigo-50 dark:bg-slate-700 p-4 rounded-lg">
                <ul className="space-y-2 pr-4">
                  <li>• خصص 2-3 ساعات أسبوعياً لكل أسبوع من المسار</li>
                  <li>• اطبق ما تتعلمه عملياً في التمارين</li>
                  <li>• احتفظ بملاحظاتك وأمثلة أعمالك</li>
                  <li>• لا تتردد في تكرار المواد الصعبة</li>
                </ul>
              </div>
            </section>

            <section>
              <h3 className="text-lg font-bold text-indigo-600 dark:text-indigo-400 mb-3">
                ⚡ اختصارات مفيدة
              </h3>
              <div className="grid md:grid-cols-2 gap-4 text-sm">
                <div className="bg-slate-50 dark:bg-slate-700 p-3 rounded-lg">
                  <div className="font-semibold mb-1">🌙 الوضع الليلي</div>
                  <div>انقر على أيقونة القمر/الشمس في الأعلى</div>
                </div>
                <div className="bg-slate-50 dark:bg-slate-700 p-3 rounded-lg">
                  <div className="font-semibold mb-1">📱 متجاوب</div>
                  <div>يعمل على جميع أحجام الشاشات</div>
                </div>
              </div>
            </section>
          </div>

          <div className="mt-8 text-center">
            <button
              onClick={onClose}
              className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-3 rounded-xl transition transform hover:scale-105"
            >
              فهمت! 👍
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HelpModal;