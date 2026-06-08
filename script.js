// تشغيل مكتبة أنميشن التمرير AOS بشكل تلقائي وناعم عند تحميل واجهة الاستخدام
document.addEventListener("DOMContentLoaded", function () {
  AOS.init({
    duration: 800,
    easing: 'ease-in-out',
    once: true,
    mirror: false
  });
});

// تفعيل وإغلاق القائمة المتنقلة للهواتف الذكية بمرونة
const menuBtn = document.getElementById('menuBtn');
const mobileMenu = document.getElementById('mobileMenu');

menuBtn.addEventListener('click', (e) => {
  e.stopPropagation();
  mobileMenu.classList.toggle('hidden');
});

// إغلاق قائمة الجوال تلقائياً عند الضغط خارج النطاق الفعلي لها لحماية الواجهة
document.addEventListener('click', (e) => {
  if (!mobileMenu.classList.contains('hidden') && !e.target.closest('#mobileMenu') && !e.target.closest('#menuBtn')) {
    mobileMenu.classList.add('hidden');
  }
});

// دالة التمرير الانسيابي المطور (Smooth Scrolling) إلى الأقسام
function scrollToSection(id) {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}

// دالة التحكم التفاعلي بفتح وإغلاق الأسئلة الشائعة (Accordion)
function toggleFaq(cardElement) {
  const paragraph = cardElement.querySelector('p');
  const icon = cardElement.querySelector('i');
  
  if (paragraph.classList.contains('hidden')) {
    paragraph.classList.remove('hidden');
    icon.classList.add('rotate-180', 'text-amber-500');
    cardElement.classList.add('border-amber-500');
  } else {
    paragraph.classList.add('hidden');
    icon.classList.remove('rotate-180', 'text-amber-500');
    cardElement.classList.remove('border-amber-500');
  }
}

// دالة معالجة إرسال طلب الصيانة والخدمات لواتساب المؤسسة الرئيسي بدقة
function handleSubmit(e) {
  e.preventDefault();
  const name = document.getElementById('name').value.trim();
  const phone = document.getElementById('phone').value.trim();
  const service = document.getElementById('service').value;
  const message = document.getElementById('message').value.trim();
  
  // صياغة احترافية ومقنعة للرسالة المرسلة لواتساب الإدارة لسرعة الرد
  const text = `السلام عليكم ورحمة الله، أريد طلب خدمة من مؤسسة الشعب للمقاولات.\n\n` +
               `🔹 نوع الخدمة المطلوبة: ${service}\n` +
               `👤 اسم العميل: ${name}\n` +
               `📞 رقم الهاتف: ${phone}\n` +
               `📝 تفاصيل إضافية: ${message || 'لا توجد تفاصيل إضافية مضافة'}`;
               
  // استخدام رقم واتساب المؤسسة الموثق بالملفات القديمة
  const targetWhatsapp = "967770569067";
  window.open(`https://wa.me/${targetWhatsapp}?text=${encodeURIComponent(text)}`, '_blank');
}
