import Link from "next/link";

export default function FaloraPrivacyPage() {
  return (
    <main className="mx-auto min-h-screen w-full max-w-4xl px-6 py-12 md:px-10">
      <header className="fixed inset-x-0 top-4 z-30 mx-auto flex w-[calc(100%-2rem)] max-w-4xl flex-wrap items-center justify-between gap-3 rounded-2xl border border-zinc-700/60 bg-zinc-900/35 px-4 py-3 shadow-[0_8px_30px_rgba(0,0,0,0.35)] backdrop-blur-xl md:px-6">
        <Link
          href="/apps/falora?lang=tr"
          className="rounded-full border border-zinc-700 px-3 py-2 text-xs text-zinc-200 transition hover:border-zinc-500 hover:text-zinc-100 sm:px-4 sm:text-sm"
        >
          Falora
        </Link>
        <Link
          href="/?lang=tr#apps"
          className="rounded-full border border-zinc-700 px-3 py-2 text-xs text-zinc-200 transition hover:border-zinc-500 hover:text-zinc-100 sm:px-4 sm:text-sm"
        >
          Ana Sayfa
        </Link>
      </header>

      <article className="mt-20 rounded-3xl border border-zinc-800 bg-zinc-950/70 p-6 text-zinc-200 backdrop-blur-sm md:p-10">
        <h1 className="text-3xl font-semibold text-white md:text-4xl">
          Falora Gizlilik Politikası
        </h1>
        <p className="mt-3 text-sm text-zinc-400">Son Güncelleme Tarihi: 31 Mayıs 2026</p>

        <p className="mt-8 leading-8">
          Falora, kişisel verilerini yalnızca uygulama deneyimini sunmak, hesabını yönetmek, fal
          yorumlarını hazırlamak, satın alma ve kredi hareketlerini takip etmek, destek taleplerini
          yanıtlamak ve güvenliği sağlamak amacıyla işler.
        </p>

        <section className="mt-8 space-y-4 leading-8">
          <h2 className="text-2xl font-semibold text-white">1. Toplanan Bilgiler</h2>
          <p>
            Toplanan bilgiler; ad, soyad, e-posta adresi, doğum tarihi, ilişki durumu, ilgi
            alanları, uygulama içi tercihler, fal için yüklediğin görseller, fal geçmişin, kredi ve
            satın alma hareketlerin, bildirim tercihlerin ve destek mesajların olabilir.
          </p>
        </section>

        <section className="mt-8 space-y-4 leading-8">
          <h2 className="text-2xl font-semibold text-white">2. Yüklenen Görseller</h2>
          <p>
            Kahve falı için yüklediğin görseller yalnızca ilgili fal yorumunun hazırlanması, fal
            geçmişinde gösterilmesi ve gerekli destek süreçlerinin yürütülmesi için kullanılır. Bu
            görseller herkese açık şekilde paylaşılmaz.
          </p>
        </section>

        <section className="mt-8 space-y-4 leading-8">
          <h2 className="text-2xl font-semibold text-white">3. Veri İşleme ve Üçüncü Taraflar</h2>
          <p>
            Falora, kişisel verilerini uygulamanın çalışması, güvenliğin sağlanması, ödeme ve satın
            alma işlemlerinin doğrulanması, bildirimlerin gönderilmesi ve fal yorumlarının
            oluşturulması için güvenli hizmet sağlayıcılarla işleyebilir. Bu süreçte yalnızca
            gerekli veriler kullanılır.
          </p>
        </section>

        <section className="mt-8 space-y-4 leading-8">
          <h2 className="text-2xl font-semibold text-white">4. Veri Saklama</h2>
          <p>
            Hesap aktif olduğu sürece profil bilgilerin, kredi hareketlerin, fal geçmişin, bildirim
            kayıtların ve destek taleplerin saklanabilir. Hesabını sildiğinde, hesabına bağlı
            uygulama verilerinin kalıcı olarak kaldırılması amaçlanır. Bazı ödeme ve işlem kayıtları
            yasal yükümlülükler veya uygulama mağazası kuralları nedeniyle belirli sürelerle
            saklanabilir.
          </p>
        </section>

        <section className="mt-8 space-y-4 leading-8">
          <h2 className="text-2xl font-semibold text-white">5. Bildirimler</h2>
          <p>
            Bildirim izni verirsen Falora sana fal sonucunun hazır olması, destek talebinin
            güncellenmesi, kampanya veya uygulama içi duyurular gibi konularda bildirim gönderebilir.
            Bildirim izinlerini cihaz ayarlarından istediğin zaman değiştirebilirsin.
          </p>
        </section>

        <section className="mt-8 space-y-4 leading-8">
          <h2 className="text-2xl font-semibold text-white">6. Teknik Veriler</h2>
          <p>
            Falora, hizmet güvenliğini sağlamak, kötüye kullanımı önlemek, ödeme doğrulamalarını
            yapmak ve uygulama deneyimini iyileştirmek için teknik kayıtlar ve kullanım verileri
            işleyebilir.
          </p>
        </section>

        <section className="mt-8 space-y-4 leading-8">
          <h2 className="text-2xl font-semibold text-white">7. Haklarınız</h2>
          <p>
            Kişisel bilgilerini uygulama içinden güncelleyebilir, bildirim izinlerini cihaz
            ayarlarından yönetebilir, destek üzerinden veri taleplerini iletebilir ve Ayarlar
            ekranından hesabını silebilirsin.
          </p>
        </section>

        <section className="mt-8 space-y-4 leading-8">
          <h2 className="text-2xl font-semibold text-white">8. İletişime Geçin</h2>
          <p>
            Gizlilik, veri işleme veya hesap silme konularında uygulamadaki{" "}
            <strong>Bize Ulaş</strong> ekranından destek talebi oluşturabilirsin.
          </p>
        </section>
      </article>
    </main>
  );
}
