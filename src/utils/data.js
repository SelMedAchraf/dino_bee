import svc1 from '@/assets/services/service-1.jpg'
import svc2 from '@/assets/services/service-2.jpg'
import svc3 from '@/assets/services/service-3.jpg'
import prd1 from '@/assets/products/product-1.jpg'
import prd2 from '@/assets/products/product-2.jpg'
import prd3 from '@/assets/products/product-3.jpg'
import prd4 from '@/assets/products/product-4.jpg'
import book1 from '@/assets/library/book-1.jpg'
import book2 from '@/assets/library/book-2.jpg'
import book3 from '@/assets/library/book-3.jpg'

export const stats = {
  activeBeehives: 150,
  servicesCompleted: 500,
  expertsAvailable: 20,
}

export const services = [
  {
    id: 'svc-1',
    title: 'خدمة تربية النحل',
    description: 'إدارة عامة للخلايا، الإعداد والصيانة لضمان صحة المستعمرات.',
    mediaType: 'image',
    mediaUrl: svc1,
  },
  {
    id: 'svc-2',
    title: 'استخلاص سم النحل',
    description: 'استخلاص آمن للاستخدام الطبي والبحثي بواسطة خبراء.',
    mediaType: 'image',
    mediaUrl: svc2,
  },
  {
    id: 'svc-3',
    title: 'المراقبة والعلاج البيولوجي',
    description: 'مكافحة الآفات وفحوصات صحية بطرق صديقة للبيئة.',
    mediaType: 'image',
    mediaUrl: svc3,
  },
  {
    id: 'svc-4',
    title: 'تركيب خلايا جديدة',
    description: 'تجهيز مواقع جديدة وتركيب خلايا مناسبة للبيئة المحلية.',
    mediaType: 'image',
    mediaUrl: svc1,
  },
  {
    id: 'svc-5',
    title: 'تفقد موسمي',
    description: 'تفقد شامل للخلايا قبل المواسم لضمان الإنتاجية.',
    mediaType: 'image',
    mediaUrl: svc2,
  },
  {
    id: 'svc-6',
    title: 'خدمة تدريب للمبتدئين',
    description: 'جلسات تدريب عملية على إدارة الخلايا وأساسيات السلامة.',
    mediaType: 'image',
    mediaUrl: svc3,
  },
]

export const products = [
  { id: 'prd-1', name: 'عسل الزهور البرية الخام', description: 'عبوة 500 جم من العسل الطبيعي الخام.', price: 12.99, image: prd1 },
  { id: 'prd-2', name: 'عدة بداية خلية نحل', description: 'مجموعة كاملة للمبتدئين في تربية النحل.', price: 179.0, image: prd2 },
  { id: 'prd-3', name: 'بدلة حماية للنحل', description: 'بدلة كاملة مع قناع للحماية.', price: 89.5, image: prd3 },
  { id: 'prd-4', name: 'مدخن تفقد الخلية', description: 'مدخن من الستانلس ستيل لفحص الخلية.', price: 29.99, image: prd4 },
  { id: 'prd-5', name: 'إطار شمعي', description: 'إطار شمعي عالي الجودة لبناء الأقراص.', price: 8.75, image: prd3 },
  { id: 'prd-6', name: 'مغذّي خلايا', description: 'مغذّي عملي لدعم الخلايا في الشتاء.', price: 14.25, image: prd2 },
]

export const experts = [
  { id: 'exp-1', name: 'د. أبيس ميليفيرا' },
  { id: 'exp-2', name: 'بيـا كيبر' },
  { id: 'exp-3', name: 'هاني كامبسون' },
]

export const weatherTips = [
  { condition: 'clear', tip: 'Ideal for hive inspection and honey harvesting.' },
  { condition: 'rain', tip: 'Avoid opening hives; bees are defensive during rain.' },
  { condition: 'wind', tip: 'Secure hive lids and reduce entrances.' },
]

export const libraryDocs = [
  { id: 'doc-1', title: 'دليل أساسيات تربية النحل', description: 'مقدمة لأفضل ممارسات تربية النحل.', url: 'https://example.com/beekeeping-basics.pdf', image: book1 },
  { id: 'doc-2', title: 'فوائد سم النحل', description: 'نظرة عامة على الأبحاث الطبية والتطبيقات.', url: 'https://example.com/bee-venom-benefits.pdf', image: book2 },
  { id: 'doc-3', title: 'العلاجات البيولوجية', description: 'أساليب صديقة للبيئة للحفاظ على صحة الخلايا.', url: 'https://example.com/biological-treatments.pdf', image: book3 },
  { id: 'doc-4', title: 'جدولة التفقد الموسمي', description: 'خطة عملية لإدارة التفقد خلال السنة.', url: 'https://example.com/seasonal-inspection.pdf', image: book1 },
  { id: 'doc-5', title: 'سلامة مربّي النحل', description: 'إرشادات السلامة أثناء التعامل مع الخلايا.', url: 'https://example.com/beekeeper-safety.pdf', image: book2 },
] 