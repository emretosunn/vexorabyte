import Link from "next/link";

export default function VellumPrivacyPage() {
  return (
    <main className="mx-auto min-h-screen w-full max-w-4xl px-6 py-12 md:px-10">
      <header className="fixed inset-x-0 top-4 z-30 mx-auto flex w-[calc(100%-2rem)] max-w-4xl flex-wrap items-center justify-between gap-3 rounded-2xl border border-zinc-700/60 bg-zinc-900/35 px-4 py-3 shadow-[0_8px_30px_rgba(0,0,0,0.35)] backdrop-blur-xl md:px-6">
        <Link href="/apps/vellum?lang=tr" className="rounded-full border border-zinc-700 px-3 py-2 text-xs text-zinc-200 transition hover:border-zinc-500 hover:text-zinc-100 sm:px-4 sm:text-sm">
          Vellum
        </Link>
        <Link href="/?lang=tr#apps" className="rounded-full border border-zinc-700 px-3 py-2 text-xs text-zinc-200 transition hover:border-zinc-500 hover:text-zinc-100 sm:px-4 sm:text-sm">
          Ana Sayfa
        </Link>
      </header>

      <article className="mt-20 rounded-3xl border border-zinc-800 bg-zinc-950/70 p-6 text-zinc-200 backdrop-blur-sm md:p-10">
        <h1 className="text-3xl font-semibold text-white md:text-4xl">Vellum Gizlilik Politikası</h1>
        <p className="mt-3 text-sm text-zinc-400">Son Güncelleme Tarihi: 15 Nisan 2026</p>

        <p className="mt-8 leading-8">
          Vexorabyte (&quot;biz&quot;, &quot;tarafımız&quot; veya &quot;Vellum&quot;) olarak, kullanıcılarımızın gizliliğine büyük önem
          veriyoruz. Bu Gizlilik Politikası, Vellum mobil uygulamasını kullandığınızda bilgilerinizin nasıl
          toplandığını, kullanıldığını ve korunduğunu açıklar.
        </p>

        <section className="mt-8 space-y-4 leading-8">
          <h2 className="text-2xl font-semibold text-white">1. Toplanan Bilgiler</h2>
          <p>Vellum&apos;u kullandığınızda aşağıdaki bilgiler toplanabilir:</p>
          <p>
            <strong>Hesap Bilgileri:</strong> Supabase aracılığıyla giriş yaptığınızda e-posta adresiniz ve kullanıcı
            adınız.
          </p>
          <p>
            <strong>İçerik Verileri:</strong> Yazdığınız kitaplar, bölümler ve kütüphanenize eklediğiniz eserler.
          </p>
          <p>
            <strong>Ödeme Bilgileri:</strong> Uygulama içi satın alımlar (Premium) tamamen Google Play Faturalandırma
            Sistemi üzerinden yürütülür. Finansal verileriniz (kredi kartı vb.) tarafımızca görülmez veya
            saklanmaz.
          </p>
          <p>
            <strong>Cihaz Bilgileri:</strong> Uygulama performansı ve hata takibi için cihaz modeli, işletim sistemi
            sürümü gibi teknik veriler.
          </p>
        </section>

        <section className="mt-8 space-y-4 leading-8">
          <h2 className="text-2xl font-semibold text-white">2. Bilgilerin Kullanımı</h2>
          <p>Topladığımız bilgiler şu amaçlarla kullanılır:</p>
          <ul className="list-disc space-y-2 pl-6">
            <li>Hizmetlerimizi sağlamak ve yönetmek.</li>
            <li>Premium aboneliklerinizi doğrulamak.</li>
            <li>Uygulama deneyimini kişiselleştirmek ve hataları gidermek.</li>
            <li>İnternetsiz okuma (Offline Reading) özelliğini optimize etmek.</li>
          </ul>
        </section>

        <section className="mt-8 space-y-4 leading-8">
          <h2 className="text-2xl font-semibold text-white">3. Veri Saklama ve Güvenlik</h2>
          <p>
            <strong>Supabase:</strong> Kullanıcı verileriniz dünya standartlarında güvenlik sertifikalarına sahip
            olan Supabase altyapısında saklanmaktadır.
          </p>
          <p>
            <strong>Yerel Depolama:</strong> İnternetsiz okuma için indirilen içerikler cihazınızın özel alanında
            (Sandbox) saklanır ve uygulama silindiğinde otomatik olarak temizlenir.
          </p>
        </section>

        <section className="mt-8 space-y-4 leading-8">
          <h2 className="text-2xl font-semibold text-white">4. Üçüncü Taraf Hizmetleri</h2>
          <p>Uygulamamız aşağıdaki üçüncü taraf hizmetlerini kullanmaktadır:</p>
          <ul className="list-disc space-y-2 pl-6">
            <li>Google Play Hizmetleri: Uygulama dağıtımı ve analitiği için.</li>
            <li>Google Play Faturalandırma: Satın alma işlemleri için.</li>
            <li>Supabase: Veritabanı ve kimlik doğrulama işlemleri için.</li>
          </ul>
        </section>

        <section className="mt-8 space-y-4 leading-8">
          <h2 className="text-2xl font-semibold text-white">5. Çocukların Gizliliği</h2>
          <p>
            Vellum, 13 yaşın altındaki çocuklara doğrudan hitap etmemektedir. Bilerek 13 yaş altındaki çocuklardan
            kişisel bilgi toplamıyoruz.
          </p>
        </section>

        <section className="mt-8 space-y-4 leading-8">
          <h2 className="text-2xl font-semibold text-white">6. Haklarınız</h2>
          <p>
            Kullanıcılar, istedikleri zaman hesaplarını silme veya verilerinin kaldırılmasını talep etme hakkına
            sahiptir. Hesap silme işlemi için uygulama içi ayarları kullanabilir veya bizimle iletişime
            gecebilirsiniz.
          </p>
        </section>

        <section className="mt-8 space-y-4 leading-8">
          <h2 className="text-2xl font-semibold text-white">7. İletişime Geçin</h2>
          <p>Bu gizlilik politikası ile ilgili sorularınız için bizimle şu adresten iletişime geçebilirsiniz:</p>
          <p>
            E-posta:{" "}
            <a href="mailto:info@vexorabyte.com" className="underline decoration-zinc-500 underline-offset-4">
              info@vexorabyte.com
            </a>
          </p>
        </section>
      </article>
    </main>
  );
}
