import { ArrowPathIcon, CloudArrowUpIcon, FingerPrintIcon, LockClosedIcon, ShoppingCartIcon, SparklesIcon, TruckIcon } from '@heroicons/react/24/outline'
import Navbar from './Navbar';
import Footer from './Footer';

const features = [
  {
    name: 'Koleksi Terbaru',
    description:
      'Lihatlah koleksi terbaru kami yang selalu diperbarui dengan tren fashion terkini. Kami menawarkan berbagai gaya pakaian kasual untuk pria dan wanita.',
    icon: ShoppingCartIcon,
  },
  {
    name: 'Kualitas Bahan Terbaik',
    description:
      'Pakaian kami terbuat dari bahan berkualitas tinggi yang nyaman dipakai sehari-hari. Kami menekankan kualitas dalam setiap produk kami.',
    icon: SparklesIcon,
  },
  {
    name: 'Pilihan Ukuran dan Warna',
    description:
      'Temukan pakaian favorit Anda dalam beragam pilihan ukuran dan warna. Kami berusaha untuk memenuhi kebutuhan setiap pelanggan.',
    icon: ArrowPathIcon,
  },
  {
    name: 'Pengiriman Cepat dan Mudah',
    description:
      'Kami menyediakan pengiriman cepat ke seluruh wilayah dengan berbagai opsi pengiriman. Anda dapat memilih metode pengiriman yang paling sesuai untuk Anda.',
    icon: TruckIcon,
  },
]

export default function Example() {
  return (
    <div
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1491466424936-e304919aada7?auto=format&fit=crop&q=80&w=2069&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")',
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "100",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
      <header className="fixed top-0 left-0 right-0 z-10 shadow-md">
      <Navbar/>
      </header>
      
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-32 mt-18 mb-0">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-indigo-600"></h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl ">
           MOGENS CASUAL STORE
          </p>
          <p className="mt-6 text-lg leading-8 text-white">
          Mogens Casual Store adalah toko pakaian yang menawarkan koleksi 
          pakaian kasual dengan gaya yang trendi dan santai. Toko ini menyediakan 
          berbagai pilihan pakaian seperti jeans, kaos, jaket, dan sepatu yang cocok 
          untuk gaya sehari-hari yang nyaman dan stylish.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
            {features.map((feature) => (
              <div key={feature.name} className="relative pl-16">
                <dt className="text-base font-bold leading-7 text-white">
                  <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-teal-400">
                    <feature.icon className="h-6 w-6 text-white" aria-hidden="true" />
                  </div>
                  {feature.name}
                </dt>
                <dd className="mt-2 text-base leading-7 text-white">{feature.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
      <footer class='h-2 py-20'>
        <Footer/>
      </footer>
    </div>
  )
}
