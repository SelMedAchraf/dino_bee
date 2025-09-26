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
    mediaUrl: 'https://thumbs.dreamstime.com/b/bumblebee-vetch-gathering-nectar-blossom-41776449.jpg',
    // Image of a beekeeper managing beehives in an apiary
  },
  {
    id: 'svc-2',
    title: 'استخلاص سم النحل',
    description: 'استخلاص آمن للاستخدام الطبي والبحثي بواسطة خبراء.',
    mediaType: 'image',
    mediaUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQ-Vzq3l3_lF0pisOmR-opmnTQdPz5exieXSF4yXm9ec-YP9Uw-bTZZg0&s',
    // Close-up of a bee, emphasizing the stinger area relevant to venom extraction
  },
  {
    id: 'svc-3',
    title: 'المراقبة والعلاج البيولوجي',
    description: 'مكافحة الآفات وفحوصات صحية بطرق صديقة للبيئة.',
    mediaType: 'image',
    mediaUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDcvIezwJuX9LDK3C8zEzLk8tLka5i0g0t0w&s',
    // Image of a beekeeper inspecting a honeycomb frame for health and pest control
  },
  {
    id: 'svc-4',
    title: 'تركيب خلايا جديدة',
    description: 'تجهيز مواقع جديدة وتركيب خلايا مناسبة للبيئة المحلية.',
    mediaType: 'image',
    mediaUrl: 'https://www.shutterstock.com/image-photo/man-bee-veil-jacket-removing-600nw-2158794229.jpg',
    // Image of beehives set up in a natural environment, suitable for new hive installation
  },
  {
    id: 'svc-5',
    title: 'تفقد موسمي',
    description: 'تفقد شامل للخلايا قبل المواسم لضمان الإنتاجية.',
    mediaType: 'image',
    mediaUrl: 'https://thumbs.dreamstime.com/b/close-up-view-bee-foraging-bright-yellow-flower-its-body-covered-pollen-close-up-bee-apis-sp-bright-404682890.jpg?w=992',
    // Image of a beekeeper performing seasonal hive inspection
  },
  {
    id: 'svc-6',
    title: 'خدمة تدريب للمبتدئين',
    description: 'جلسات تدريب عملية على إدارة الخلايا وأساسيات السلامة.',
    mediaType: 'image',
    mediaUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBKB04b1kal9Y2ETAsgU6QfF5Pxf2eh2ySTQ&s',
  },
];

export const products = [
  { 
    id: 'prd-1', 
    name: 'عسل الزهور البرية الخام', 
    description: 'عبوة 500 جم من العسل الطبيعي الخام.', 
    price: 12.99, 
    image: 'https://hilltopfarmboxford.com/cdn/shop/products/image_1024x1024@2x.jpg?v=1607523091' // honey jar example
  },
  { 
    id: 'prd-2', 
    name: 'عدة بداية خلية نحل', 
    description: 'مجموعة كاملة للمبتدئين في تربية النحل.', 
    price: 179.0, 
    image: 'https://m.media-amazon.com/images/I/71R7ehQNHGL.jpg' // starter hive kit
  },
  { 
    id: 'prd-3', 
    name: 'بدلة حماية للنحل', 
    description: 'بدلة كاملة مع قناع للحماية.', 
    price: 89.5, 
    image: 'https://beebuilt.com/cdn/shop/products/fullsuit_lifestyle_website-3_aa352a23-12ba-476d-ba8a-b19cc79c8379_720x.jpg?v=1623516984' // beekeeper suit
  },
  { 
    id: 'prd-4', 
    name: 'مدخن تفقد الخلية', 
    description: 'مدخن من الستانلس ستيل لفحص الخلية.', 
    price: 29.99, 
    image: 'https://badbeekeepingblog.com/wp-content/uploads/2018/06/cool-smoke.jpg?w=640&h=475' // stainless smoker
  },
  { 
    id: 'prd-5', 
    name: 'إطار شمعي', 
    description: 'إطار شمعي عالي الجودة لبناء الأقراص.', 
    price: 8.75, 
    image: 'https://i0.wp.com/www.honeybeesuite.com/wp-content/uploads/2010/10/bees-on-partially-capped-comb-pixabay.jpg?fit=810%2C540&ssl=1' // wax frame
  },
  { 
    id: 'prd-6', 
    name: 'مغذّي خلايا', 
    description: 'مغذّي عملي لدعم الخلايا في الشتاء.', 
    price: 14.25, 
    image: 'https://bellhoney.com/cdn/shop/articles/bellhoney-341568-royaljellyhivecells-blogbanner1.jpg?v=1731512302&width=1100' // bee feeder
  },
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
  {
    id: 'doc-1',
    title: 'دليل أساسيات تربية النحل',
    description: 'مقدمة لأفضل ممارسات تربية النحل.',
    url: 'https://www.fao.org/3/i8489en/I8489EN.pdf',
    image: 'https://donlambees.com/wp-content/uploads/2018/02/Beekeepers_handbook-1.jpg' // Beekeeping basics
  },
  {
    id: 'doc-2',
    title: 'فوائد سم النحل',
    description: 'نظرة عامة على الأبحاث الطبية والتطبيقات.',
    url: 'https://www.ncbi.nlm.nih.gov/pmc/articles/PMC3901579/pdf/nihms-549159.pdf',
    image: 'https://d28hgpri8am2if.cloudfront.net/book_images/onix/cvr9781681881546/beekeeping-9781681881546_hr.jpg' // Honeybee venom / science theme
  },
  {
    id: 'doc-3',
    title: 'العلاجات البيولوجية',
    description: 'أساليب صديقة للبيئة للحفاظ على صحة الخلايا.',
    url: 'https://www.beeculture.com/wp-content/uploads/2019/02/OrganicBeekeeping.pdf',
    image: 'https://backyardhive.com/cdn/shop/products/michael-bush_practical-beekeeper_full_600x.jpg?v=1511536627' // Eco beekeeping
  },
  {
    id: 'doc-4',
    title: 'جدولة التفقد الموسمي',
    description: 'خطة عملية لإدارة التفقد خلال السنة.',
    url: 'https://www.chroniclebooks.com/cdn/shop/files/9781797224831_1_1200x1200.jpg?v=1699638719',
    image: 'https://cdn11.bigcommerce.com/s-dhdy1goaa7/products/5099/images/11296/BM995_Beekeeping_in_Northern_Climates__55054.1736870666.386.513.jpg?c=1' // Seasonal hive check
  },
  {
    id: 'doc-5',
    title: 'سلامة مربّي النحل',
    description: 'إرشادات السلامة أثناء التعامل مع الخلايا.',
    url: 'https://www.ars.usda.gov/ARSUserFiles/60500500/pdf/Safety%20Guidelines%20for%20Beekeepers.pdf',
    image: 'https://backyardhive.com/cdn/shop/products/michael-bush_practical-beekeeper_full_600x.jpg?v=1511536627' // Beekeeper safety
  }
];
