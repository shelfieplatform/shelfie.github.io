import React, { createContext, useContext, useState, ReactNode } from 'react';

export type Language = 'en' | 'tr';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// Translation keys
const translations = {
  en: {
    // Header
    'header.logo': 'Shelfie',
    'header.joinWaitlist': 'Join Waitlist',
    'header.join': 'Join',
    
    // Hero
    'hero.welcome': 'Welcome to',
    'hero.subtitle': 'Curate and Build Your Digital Shelf of Favorites',
    'hero.joinWaitlist': 'Join the Waitlist',
    
    // How It Works
    'howItWorks.step1.title': 'Add Your Favorites',
    'howItWorks.step1.description': 'Start by adding books, movies, music, and TV shows you love to your digital shelf.',
    'howItWorks.step2.title': 'Connect with Friends',
    'howItWorks.step2.description': 'Share your shelf with friends and discover their favorite content through social connections.',
    'howItWorks.step3.title': 'Discover & Organize',
    'howItWorks.step3.description': 'Get personalized recommendations and organize your collection with smart categorization.',
    
    // Features
    'features.title': 'Everything You Love,',
    'features.organized': 'Organized',
    'features.subtitle': 'Build your digital shelf and share your passions with the world',
    
    // Footer
    'footer.description': 'Build your digital shelf of favorites. Organize, share, and discover books, movies, music, and TV shows with friends.',
    'footer.contact': 'Contact',
    'footer.contactDescription': 'Get in touch with us:',
    'footer.copyright': 'All rights reserved.',
    'footer.privacyPolicy': 'Privacy Policy',
    'footer.termsOfService': 'Terms of Service',
    
    // Waitlist Modal
    'waitlist.title': 'Join the Waitlist',
    'waitlist.description': 'Be the first to know when Shelfie launches and get early access to organize your digital shelf!',
    'waitlist.name': 'Name',
    'waitlist.email': 'Email',
    'waitlist.namePlaceholder': 'Your name',
    'waitlist.emailPlaceholder': 'your@email.com',
    'waitlist.submit': 'Join Waitlist',
    'waitlist.submitting': 'Joining...',
    'waitlist.success': 'Welcome to the waitlist! 🎉',
    'waitlist.successDescription': "We'll notify you when Shelfie launches.",
    'waitlist.error': 'Missing information',
    'waitlist.errorDescription': 'Please fill in both your name and email.',
    
    // Privacy Policy
    'privacy.title': 'Privacy Policy',
    'privacy.back': 'Back',
    
    // Terms of Service
    'terms.title': 'Terms of Service',
    'terms.back': 'Back',
    'terms.welcome': 'Welcome to',
    'terms.intro': 'These Terms of Service ("Terms") govern your use of the Shelfie mobile application and related services (collectively, the "Service") operated by Shelfie Inc. ("we," "our," or "us").',
    'terms.lastUpdated': 'Last updated:',
    'terms.contact': 'Contact Information',
    'terms.contactDescription': 'If you have any questions about these Terms of Service, please contact us:',
    'terms.contactSupport': 'Contact Support',
  },
  tr: {
    // Header
    'header.logo': 'Shelfie',
    'header.joinWaitlist': 'Bekleme Listesine Katıl',
    'header.join': 'Katıl',
    
    // Hero
    'hero.welcome': 'Hoş geldin',
    'hero.subtitle': 'Favorilerini ekle ve kendi dijital rafını oluştur',
    'hero.joinWaitlist': 'Bekleme Listesine Katıl',
    
    // How It Works
    'howItWorks.step1.title': 'Favorilerini Ekle',
    'howItWorks.step1.description': 'Sevdiğin kitapları, filmleri, müzikleri, dizileri ve podcastleri dijital favori rafına ekleyerek başla.',
    'howItWorks.step2.title': 'Arkadaşlarınla Takipleş',
    'howItWorks.step2.description': 'Favorilerini arkadaşlarınla paylaş ve onların favorilerini keşfet.',
    'howItWorks.step3.title': 'Keşfet ve Düzenle',
    'howItWorks.step3.description': 'Sana özel öneriler al, favori koleksiyonunu düzenle.',
    
    // Features
    'features.title': 'Sevdiğin Her Şey,',
    'features.organized': 'Tek Yerde',
    'features.subtitle': 'Favorilerin ile dijital rafını oluştur, tutkularını dünyayla paylaş.',
    
    // Footer
    'footer.description': 'Favorilerinden dijital rafını oluştur. Kitapları, filmleri, müzikleri ve dizileri arkadaşlarınla paylaş ve keşfet.',
    'footer.contact': 'İletişim',
    'footer.contactDescription': 'İletişim:',
    'footer.copyright': 'Tüm hakları saklıdır.',
    'footer.privacyPolicy': 'Gizlilik Politikası',
    'footer.termsOfService': 'Kullanım Şartları',
    
    // Waitlist Modal
    'waitlist.title': 'Bekleme Listesine Katıl',
    'waitlist.description': 'Shelfie yayına girdiğinde ilk sen öğren, favorilerin ile dijital rafını erkenden düzenlemeye başla!',
    'waitlist.name': 'Ad',
    'waitlist.email': 'E-posta',
    'waitlist.namePlaceholder': 'Adınız',
    'waitlist.emailPlaceholder': 'eposta@ornek.com',
    'waitlist.submit': 'Listeye Katıl',
    'waitlist.submitting': 'Katılıyor...',
    'waitlist.success': 'Bekleme listesine hoş geldin! 🎉',
    'waitlist.successDescription': 'Shelfie yayına girdiğinde sana haber vereceğiz.',
    'waitlist.error': 'Eksik bilgi',
    'waitlist.errorDescription': 'Lütfen adını ve e-postanı doldur.',
    
    // Error Messages
    'error.title': 'Hata',
    'error.description': 'Bir şeyler ters gitti. Lütfen tekrar dene.',
    
    // Privacy Policy
    'privacy.title': 'Gizlilik Politikası',
    'privacy.back': 'Geri',
    'privacy.lastUpdated': 'Son Güncelleme: 29 Aralık 2024',
    'privacy.intro': 'Bu Gizlilik Politikası, Shelfie ("biz", "bize", "bizim") olarak mobil uygulamamızı ve web sitemizi (topluca "Hizmet") kullandığınızda kişisel verilerinizi nasıl topladığımızı, kullandığımızı ve paylaştığımızı açıklar. Hizmeti kullanarak, bilgilerin bu politika uyarınca toplanmasını ve kullanılmasını kabul etmiş olursunuz.',
    'privacy.section1.title': '1. Topladığımız Bilgiler',
    'privacy.section1.intro': 'Hizmetimizi kullanırken veya bizimle iletişime geçtiğinizde bize doğrudan sağladığınız bilgileri toplarız.',
    'privacy.section1.accountInfoTitle': 'Hesap Bilgileri:',
    'privacy.section1.accountInfo1': 'Ad, e-posta adresi, kullanıcı adı ve şifre',
    'privacy.section1.accountInfo2': 'Profil fotoğrafı ve biyografi bilgileri',
    'privacy.section1.accountInfo3': 'Doğum tarihi ve konum bilgileri',
    'privacy.section1.accountInfo4': 'Telefon numarası (iki faktörlü doğrulama için verilmişse)',
    'privacy.section1.contentInfoTitle': 'İçerik Bilgileri:',
    'privacy.section1.contentInfo1': 'Favori kitaplar, filmler, diziler, müzikler ve podcastler',
    'privacy.section1.contentInfo2': 'Oluşturduğunuz gönderiler, yorumlar ve incelemeler',
    'privacy.section1.contentInfo3': 'Diğer kullanıcılarla mesajlar ve yazışmalar',
    'privacy.section1.contentInfo4': 'Paylaştığınız fotoğraflar, videolar ve diğer medya',
    'privacy.section1.usageInfoTitle': 'Kullanım Bilgileri:',
    'privacy.section1.usageInfo1': 'Hizmetle etkileşim şekliniz',
    'privacy.section1.usageInfo2': 'Ziyaret edilen sayfalar, kullanılan özellikler, geçirilen süre',
    'privacy.section1.usageInfo3': 'Cihaz bilgileri ve IP adresi',
    'privacy.section1.usageInfo4': 'Konum verileri (konum servislerini etkinleştirdiyseniz)',
    'privacy.section2.title': '2. Bilgilerinizi Nasıl Kullanıyoruz',
    'privacy.section2.intro': 'Topladığımız bilgileri Hizmeti sunmak, sürdürmek ve geliştirmek için kullanırız:',
    'privacy.section2.use1': 'Hizmeti sağlamak ve işletmek',
    'privacy.section2.use2': 'Hesabınızı oluşturmak ve yönetmek',
    'privacy.section2.use3': 'İşlemleri gerçekleştirmek ve ilgili bilgileri göndermek',
    'privacy.section2.use4': 'Teknik bildirimler, güncellemeler ve destek mesajları iletmek',
    'privacy.section2.use5': 'Yorumlarınıza ve sorularınıza yanıt vermek',
    'privacy.section2.use6': 'Kişiselleştirilmiş içerik ve öneriler sunmak',
    'privacy.section2.use7': 'Trendleri ve kullanım verilerini izlemek ve analiz etmek',
    'privacy.section2.use8': 'Teknik sorunları tespit etmek, önlemek ve çözmek',
    'privacy.section2.use9': 'Güvenliği sağlamak ve dolandırıcılığı önlemek',
    'privacy.section3.title': '3. Bilgilerinizi Nasıl Paylaşıyoruz',
    'privacy.section3.intro': 'Bilgilerinizi aşağıdaki durumlarda paylaşabiliriz:',
    'privacy.section3.consentTitle': 'Onayınızla:',
    'privacy.section3.consent1': 'Açık onay verdiğinizde',
    'privacy.section3.consent2': 'İçeriğinizi herkese açık olarak paylaştığınızda',
    'privacy.section3.otherUsersTitle': 'Diğer Kullanıcılarla:',
    'privacy.section3.otherUsers1': 'Herkese açık profil bilgileri ve gönderiler',
    'privacy.section3.otherUsers2': 'Diğer kullanıcılara gönderilen mesajlar',
    'privacy.section3.otherUsers3': 'Kamuya açık içerik üzerindeki yorumlar ve etkileşimler',
    'privacy.section3.serviceProvidersTitle': 'Hizmet Sağlayıcılarla:',
    'privacy.section3.serviceProviders1': 'Bulut depolama ve barındırma hizmetleri',
    'privacy.section3.serviceProviders2': 'Analitik ve performans izleme araçları',
    'privacy.section3.serviceProviders3': 'Müşteri destek ve iletişim hizmetleri',
    'privacy.section3.serviceProviders4': 'Ödeme işleme (varsa)',
    'privacy.section3.legalTitle': 'Yasal Gereklilikler:',
    'privacy.section3.legal1': 'Yasal yükümlülüklere uymak',
    'privacy.section3.legal2': 'Haklarımızı ve mülkiyetimizi korumak',
    'privacy.section3.legal3': 'Dolandırıcılığı veya suistimali önlemek',
    'privacy.section3.legal4': 'Acil durum veya güvenlik gerekçesiyle',
    'privacy.section4.title': '4. Veri Güvenliği',
    'privacy.section4.intro': 'Bilgilerinizi korumak için uygun teknik ve organizasyonel önlemler uygularız:',
    'privacy.section4.security1': 'Veri aktarımı ve saklamada şifreleme',
    'privacy.section4.security2': 'Düzenli güvenlik değerlendirmeleri ve güncellemeler',
    'privacy.section4.security3': 'Erişim kontrolleri ve kimlik doğrulama',
    'privacy.section4.security4': 'Güvenli veri merkezleri ve altyapı',
    'privacy.section4.security5': 'Veri koruma konusunda personel eğitimi',
    'privacy.section4.warning': 'Ancak, internet üzerinden iletim veya elektronik depolama yöntemleri %100 güvenli değildir. Bilgilerinizi korumaya özen göstersek de, mutlak güvenlik garanti edilemez.',
    'privacy.section5.title': '5. Haklarınız ve Seçenekleriniz',
    'privacy.section5.intro': 'Kişisel verilerinizle ilgili belirli haklara sahipsiniz:',
    'privacy.section5.rights1': 'Erişim: Kişisel verilerinizin bir kopyasını talep etme',
    'privacy.section5.rights2': 'Düzeltme: Hatalı bilgilerin düzeltilmesini isteme',
    'privacy.section5.rights3': 'Silme: Kişisel verilerinizin silinmesini talep etme',
    'privacy.section5.rights4': 'Taşınabilirlik: Verilerinizi makine tarafından okunabilir bir formatta talep etme',
    'privacy.section5.rights5': 'Kısıtlama: İşleme faaliyetlerini sınırlama',
    'privacy.section5.rights6': 'İtiraz: Belirli işlemlere itiraz etme',
    'privacy.section5.requestData': 'Verilerinizi Talep Etme',
    'privacy.section6.title': '6. Veri Saklama',
    'privacy.section6.content': 'Bilgilerinizi, Hizmetimizi sağlamak ve bu Gizlilik Politikasında belirtilen amaçları yerine getirmek için gerekli olduğu sürece saklarız. Yasal veya düzenleyici gereklilik olmadıkça, artık gerekli olmadığında bilgilerinizi siler veya anonimleştiririz.',
    'privacy.section7.title': '7. Çocukların Gizliliği',
    'privacy.section7.content': 'Hizmetimiz 13 yaş altındaki çocuklara yönelik değildir. 13 yaş altındaki çocuklardan bilerek bilgi toplamıyoruz. Ebeveyn veya vasiyseniz ve çocuğunuzun bize bilgi verdiğini düşünüyorsanız, lütfen bizimle iletişime geçin.',
    'privacy.section8.title': '8. Uluslararası Veri Aktarımları',
    'privacy.section8.content': 'Bilgileriniz, bulunduğunuz ülke dışındaki ülkelere aktarılabilir ve işlenebilir. Bu tür aktarımların geçerli veri koruma yasalarına uygun olmasını ve uygun güvenlik önlemleriyle korunmasını sağlarız.',
    'privacy.section9.title': '9. Üçüncü Taraf Hizmetleri',
    'privacy.section9.intro': 'Hizmetimiz üçüncü taraf web sitelerine veya hizmetlerine bağlantılar içerebilir. Bu üçüncü tarafların gizlilik uygulamalarından sorumlu değiliz. Bilgi vermeden önce ilgili gizlilik politikalarını okumanızı tavsiye ederiz.',
    'privacy.section9.integratedServicesTitle': 'Entegre Hizmetler:',
    'privacy.section9.integratedServices1': 'Spotify (müzik önerileri için)',
    'privacy.section9.integratedServices2': 'Goodreads (kitap önerileri için)',
    'privacy.section9.integratedServices3': 'Letterboxd (film önerileri için)',
    'privacy.section9.integratedServices4': 'Apple Music (müzik entegrasyonu için)',
    'privacy.section10.title': '10. Bu Gizlilik Politikasındaki Değişiklikler',
    'privacy.section10.content': 'Zaman zaman bu Gizlilik Politikasını güncelleyebiliriz. Değişiklikler, bu sayfada yeni politikanın yayınlanması ve "Son Güncelleme" tarihinin yenilenmesi ile duyurulur.',
    'privacy.section11.title': '11. Kaliforniya Gizlilik Hakları',
    'privacy.section11.intro': 'Eğer Kaliforniya sakiniyseniz, California Consumer Privacy Act (CCPA) kapsamında ek haklara sahipsiniz:',
    'privacy.section11.rights1': 'Toplanan kişisel bilgileri bilme hakkı',
    'privacy.section11.rights2': 'Kişisel bilgilerin silinmesini talep etme hakkı',
    'privacy.section11.rights3': 'Kişisel bilgilerin satışına itiraz etme hakkı',
    'privacy.section11.rights4': 'Gizlilik haklarını kullanma nedeniyle ayrımcılığa uğramama hakkı',
    'privacy.section12.title': '12. Avrupa Birliği Gizlilik Hakları',
    'privacy.section12.intro': 'Eğer Avrupa Ekonomik Alanı\'nda (EEA) ikamet ediyorsanız, GDPR kapsamında şu haklara sahipsiniz:',
    'privacy.section12.rights1': 'Kişisel verilere erişim hakkı',
    'privacy.section12.rights2': 'Yanlış verilerin düzeltilmesi hakkı',
    'privacy.section12.rights3': 'Silme hakkı ("unutulma hakkı")',
    'privacy.section12.rights4': 'İşlemenin kısıtlanması hakkı',
    'privacy.section12.rights5': 'Veri taşınabilirliği hakkı',
    'privacy.section12.rights6': 'İşlemeye itiraz hakkı',
    'privacy.contactUsTitle': 'İletişim',
    'privacy.contactUsIntro': 'Sorularınız için bizimle iletişime geçebilirsiniz:',
    'privacy.contactUsEmail': 'E-posta: shelfieplatform@gmail.com',
    'privacy.contactUsWebsite': 'Web Sitesi: https://shelfieplatform.github.io/shelfie.github.io/',
    'privacy.contactPrivacyTeam': 'Privacy Team ile İletişim Kurun',
    
    // Terms of Service
    'terms.title': 'Kullanım Şartları',
    'terms.back': 'Geri',
    'terms.welcome': 'Shelfie\'ye Hoş Geldiniz',
    'terms.intro': 'Bu Kullanım Şartları ("Şartlar"), Shelfie Inc. ("biz", "bize", "bizim") tarafından işletilen Shelfie mobil uygulaması ve ilgili hizmetlerin (topluca "Hizmet") kullanımını düzenler.',
    'terms.lastUpdated': 'Son Güncelleme: Aralık 2024',
    'terms.contact': 'İletişim Bilgileri',
    'terms.contactDescription': 'Bu Kullanım Şartları hakkında soruların varsa bizimle iletişime geç:',
    'terms.contactSupport': 'Destek ile İletişime Geç',
    'terms.viewPrivacyPolicy': 'Gizlilik Politikasını Gör →',
    'terms.section1.title': '1. Şartların Kabulü',
    'terms.section1.content1': 'Hizmetimize erişerek veya onu kullanarak bu Şartlara bağlı kalmayı kabul etmiş olursunuz. Şartların herhangi bir bölümünü kabul etmiyorsanız Hizmete erişmemelisiniz.',
    'terms.section1.content2': 'Bu Şartları zaman zaman bildirim yapmaksızın güncelleme ve değiştirme hakkımız saklıdır. Hizmete eklenen her yeni özellik bu Şartlara tabidir.',
    'terms.section2.title': '2. Hizmetin Tanımı',
    'terms.section2.content1': 'Shelfie, kullanıcıların favori kitaplarını, filmlerini, dizilerini, müziklerini ve podcastlerini paylaşmasına ve keşfetmesine olanak tanıyan bir sosyal medya platformudur. Hizmet şunları içerir:',
    'terms.section2.list1': 'Kişisel profiller oluşturma ve yönetme',
    'terms.section2.list2': 'Favori içerikleri toplulukla paylaşma',
    'terms.section2.list3': 'Öneriler aracılığıyla yeni içerikler keşfetme',
    'terms.section2.list4': 'Diğer kullanıcıları takip etme ve bağlantı kurma',
    'terms.section2.list5': 'Kişiselleştirilmiş içerik akışına erişim',
    'terms.section2.list6': 'Topluluk tartışmalarına katılma',
    'terms.section3.title': '3. Kullanıcı Hesapları',
    'terms.section3.content1': 'Hizmetin belirli özelliklerine erişmek için hesap açmanız gerekir. Bununla birlikte:',
    'terms.section3.list1': 'Doğru ve güncel bilgiler vermeyi',
    'terms.section3.list2': 'Hesap bilgilerinizi güncel tutmayı',
    'terms.section3.list3': 'Şifrenizi gizli ve güvenli tutmayı',
    'terms.section3.list4': 'Hesabınız altındaki tüm faaliyetlerden sorumlu olmayı',
    'terms.section3.list5': 'Yetkisiz kullanım durumunda derhal bizi bilgilendirmeyi kabul edersiniz.',
    'terms.section3.content2': 'Hesap açmak için en az 13 yaşında olmalısınız. 18 yaş altı kullanıcıların ebeveyn onayı gereklidir.',
    'terms.section4.title': '4. Kullanıcı İçeriği ve Davranışı',
    'terms.section4.content1': 'Kullanıcı olarak paylaştığınız tüm içerikten siz sorumlusunuz. Aşağıdakileri yapmamayı kabul edersiniz:',
    'terms.section4.list1': 'Yasadışı, zararlı veya başkalarının haklarını ihlal eden içerik paylaşmak',
    'terms.section4.list2': 'Telif hakkıyla korunan materyalleri izinsiz paylaşmak',
    'terms.section4.list3': 'Spam, yanıltıcı veya aldatıcı içerik göndermek',
    'terms.section4.list4': 'Diğer kullanıcılara taciz veya zarar vermek',
    'terms.section4.list5': 'Başkalarını taklit etmek veya sahte hesap oluşturmak',
    'terms.section4.list6': 'İzin olmadan ticari amaçlarla hizmeti kullanmak',
    'terms.section4.content2': 'Bu Şartları ihlal eden içerikleri kaldırma ve hesapları askıya alma hakkımız saklıdır.',
    'terms.section5.title': '5. Gizlilik ve Veri Koruma',
    'terms.section5.content1': 'Gizliliğiniz bizim için önemlidir. Kişisel verilerinizin toplanması ve kullanımı, Gizlilik Politikamızda açıklanmıştır. Hizmeti kullanarak Gizlilik Politikamızı kabul etmiş olursunuz.',
    'terms.section6.title': '6. Fikri Mülkiyet',
    'terms.section6.content1': 'Hizmet ve orijinal içerikleri, özellikleri ve işlevleri Shelfie Inc.\'e aittir ve uluslararası telif hakkı, marka, patent ve diğer fikri mülkiyet yasaları ile korunmaktadır.',
    'terms.section6.content2': 'Kullanıcı olarak oluşturduğunuz içerik size aittir, ancak bu içerikleri Hizmet kapsamında kullanmamız, görüntülememiz ve dağıtmamız için bize lisans vermiş olursunuz.',
    'terms.section7.title': '7. Yasaklı Kullanımlar',
    'terms.section7.content1': 'Hizmeti aşağıdaki amaçlarla kullanamazsınız:',
    'terms.section7.list1': 'Yasadışı faaliyetler veya başkalarını yasadışı eyleme teşvik',
    'terms.section7.list2': 'Ulusal veya uluslararası yasa ve düzenlemeleri ihlal',
    'terms.section7.list3': 'Başkalarının fikri mülkiyet haklarını ihlal',
    'terms.section7.list4': 'Hakaret, taciz, tehdit, ayrımcılık veya kötüye kullanım',
    'terms.section7.list5': 'Yanlış veya yanıltıcı bilgi sağlama',
    'terms.section7.list6': 'Virüs veya zararlı kod yükleme veya iletme',
    'terms.section8.title': '8. Hizmetin Kullanılabilirliği',
    'terms.section8.content1': 'Sürekli hizmet sağlamaya özen göstersek de kesintisiz erişim garantisi veremeyiz. Bakım, teknik arızalar veya diğer nedenlerle hizmeti değiştirme, askıya alma veya sonlandırma hakkımız saklıdır.',
    'terms.section8.content2': 'Hizmeti istediğimiz zaman değiştirme, askıya alma veya sonlandırma hakkımız saklıdır.',
    'terms.section9.title': '9. Sorumluluk Reddi ve Sınırlamalar',
    'terms.section9.content1': 'Hizmet, "OLDUĞU GİBİ" ve "MEVCUT DURUMDA" sunulmaktadır. Açık veya zımni hiçbir garanti vermeyiz.',
    'terms.section9.content2': 'Shelfie Inc., dolaylı, tesadüfi, özel, sonuçsal veya cezai zararlardan sorumlu değildir.',
    'terms.section10.title': '10. Fesih',
    'terms.section10.content1': 'Hesabınızı, bu Şartların ihlali dahil olmak üzere, herhangi bir nedenle ve önceden bildirimde bulunmaksızın askıya alma veya sonlandırma hakkımız vardır.',
    'terms.section10.content2': 'Hesabınızı kapatmak isterseniz Hizmeti kullanmayı bırakabilir veya bize başvurarak silme talebinde bulunabilirsiniz.',
    'terms.section11.title': '11. Geçerli Hukuk',
    'terms.section11.content': 'Bu Şartlar, Kaliforniya Eyaleti (ABD) yasalarına tabi olup, kanunlar ihtilafı hükümleri dikkate alınmaksızın yorumlanır.',
    'terms.section12.title': '12. Şartlardaki Değişiklikler',
    'terms.section12.content1': 'Bu Şartları istediğimiz zaman değiştirme veya güncelleme hakkımız saklıdır. Önemli değişiklikler için en az 30 gün önceden bildirim yapılacaktır.',
    'terms.section12.content2': 'Değişikliklerden sonra Hizmeti kullanmaya devam ederek yeni şartları kabul etmiş sayılırsınız.',
    'terms.loading': 'Kullanım şartları yükleniyor...',
  }
};

interface LanguageProviderProps {
  children: ReactNode;
}

export function LanguageProvider({ children }: LanguageProviderProps) {
  const [language, setLanguage] = useState<Language>('en');

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations[typeof language]] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
