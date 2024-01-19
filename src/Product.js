import React, { useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

const products = [
  {
    id: 1,
    name: "Kaos Polos",
    href: "#",
    price: "Rp.150.000",
    imageSrc:
      "https://img.freepik.com/free-photo/shirt-mockup-concept-with-plain-clothing_23-2149448748.jpg?size=626&ext=jpg&ga=GA1.1.43023405.1698334116&semt=ais",
    Description:
      "Kaos polos dengan bahan katun lembut yang memberikan kenyamanan sepanjang hari. Tersedia dalam berbagai warna yang dapat disesuaikan dengan gaya pribadi. Cocok untuk digunakan sebagai pakaian dasar atau dapat dipadukan dengan jaket atau flanel untuk tampilan berlapis yang keren.",
    colors: ["Merah", "Biru", "Hitam"],
    sizes: ["S", "M", "L", "XL"],
  },
  {
    id: 2,
    name: "Kemeja Casual",
    href: "#",
    price: "Rp.170.000",
    imageSrc:
      "https://img.freepik.com/free-photo/still-life-with-classic-shirts_23-2150828593.jpg?size=626&ext=jpg&ga=GA1.1.43023405.1698334116&semt=ais",
    Description:
      "Kemeja casual dengan potongan yang modis dan bahan katun ringan yang memberikan kenyamanan maksimal. Desain yang simpel membuatnya mudah dipadukan dengan berbagai bawahan, memberikan tampilan santai namun tetap stylish.",
    colors: ["Merah", "Biru", "Hitam"],
    sizes: ["S", "M", "L", "XL"],
  },
  {
    id: 3,
    name: "Sepatu Casual High",
    href: "#",
    price: "Rp.3.100.000",
    imageSrc:
      "https://img.freepik.com/free-photo/model-tying-shoelaces-suede-sneaker_53876-97147.jpg?w=360&t=st=1698382616~exp=1698383216~hmac=9162a0bd3932ee4512cf2095d04332d5a2f9ce5eb324a9d2e28ca60b7335fc17",
    Description:
      "Sepatu casual tinggi dengan desain modern yang menonjolkan gaya trendi. Terbuat dari bahan sintetis atau kulit sintetis berkualitas tinggi, memberikan kenyamanan dan daya tahan ekstra. Sol yang empuk dan tinggi memberikan dukungan yang baik untuk kaki, membuatnya cocok untuk tampilan kasual yang lebih modis. Sepatu ini tidak hanya memberikan kenyamanan saat dipakai, tetapi juga menjadi pernyataan gaya yang kuat.",
    colors: ["Merah", "Biru", "Hitam"],
    sizes: ["38", "39", "40", "43"],
  },
  {
    id: 4,
    name: "Topi Casual",
    href: "#",
    price: "Rp.90.000",
    imageSrc:
      "https://img.freepik.com/free-photo/medium-shot-young-man-wearing-trucker-hat_23-2149410237.jpg?size=626&ext=jpg&ga=GA1.1.43023405.1698334116&semt=ais",
    Description:
      "Topi casual dengan desain yang simpel namun tetap trendi. Terbuat dari bahan katun atau denim yang ringan, topi ini memberikan sentuhan gaya tambahan pada setiap penampilan kasual. Cocok untuk melengkapi tampilan santai sehari-hari.",
    colors: ["Merah", "Biru", "Hitam"],
    sizes: ["S", "M", "L", "XL"],
  },
  {
    id: 5,
    name: "Jaket Levis Casual",
    href: "#",
    price: "Rp.350.000",
    imageSrc:
      "https://img.freepik.com/free-photo/modern-man-with-sunglasses-city_23-2147961048.jpg?size=626&ext=jpg&ga=GA1.1.43023405.1698334116&semt=ais",
    Description:
      "Jaket denim Levis casual dengan potongan yang modis dan kenyamanan yang luar biasa. Terbuat dari bahan denim berkualitas tinggi, jaket ini memberikan tampilan yang kasual dan effortlessly cool. Cocok untuk melengkapi gaya santai sehari-hari.",
    colors: ["Merah", "Biru", "Hitam"],
    sizes: ["S", "M", "L", "XL"],
  },
  {
    id: 6,
    name: "Sepatu Casual",
    href: "#",
    price: "Rp.1.499.000",
    imageSrc:
      "https://img.freepik.com/free-photo/white-sneakers-woman-model_53876-97149.jpg?w=360&t=st=1698550605~exp=1698551205~hmac=ac30ccc50b9513d8222b9bc1d3e3e10c3468ca18bddf22d7328c2670339f7215",
    Description:
      " Sepatu casual dengan desain modern yang memberikan kenyamanan maksimal. Terbuat dari bahan sintetis atau kulit sintetis berkualitas tinggi, dengan sol yang nyaman dan tahan lama. Sepatu ini cocok untuk digunakan sehari-hari atau acara santai, menambahkan sentuhan gaya yang trendi pada setiap langkah.",
    colors: ["Merah", "Biru", "Hitam"],
    sizes: ["38", "39", "40", "43"],
  },
  {
    id: 7,
    name: "Kaos Kaki",
    href: "#",
    price: "Rp.15.000",
    imageSrc:
      "https://img.freepik.com/free-photo/couple-with-feet-wall-valentines-day_23-2148383150.jpg?w=360&t=st=1698400583~exp=1698401183~hmac=58369b0ac6fbfcb9489956ccadd925cf9b396015e925a1a94bb53509383e0ac8",
    Description:
      "Kaos kaki ini memberikan dukungan ekstra pada kaki dengan campuran serat elastis yang nyaman. Tersedia dalam berbagai warna dan desain, membuatnya cocok untuk dipadukan dengan sepatu casual apa pun. Ideal untuk pemakaian sehari-hari, kaos kaki ini juga memberikan sentuhan gaya tambahan.",
    colors: ["Merah", "Biru", "Hitam"],
    sizes: ["S", "M", "L", "XL"],
  },
  {
    id: 8,
    name: "Celana Levis",
    href: "#",
    price: "Rp.400.000",
    imageSrc:
      "https://i.pinimg.com/564x/af/d0/41/afd041d86e5ddacdc6c20411ee2fb31d.jpg",
    Description:
      "Celana jeans Levis klasik dengan potongan slim fit yang terbuat dari denim berkualitas tinggi. Kombinasi kenyamanan dan gaya membuatnya pilihan sempurna untuk tampilan kasual sehari-hari. Cocok dipadukan dengan berbagai jenis pakaian, memberikan kesan yang selalu modis.",
    colors: ["Merah", "Biru", "Hitam"],
    sizes: ["32", "34", "37", "39"],
  },
  {
    id: 9,
    name: "Celana Pendek",
    href: "#",
    price: "Rp.100.000",
    imageSrc:
      "https://i.pinimg.com/564x/41/c1/17/41c117f9794060850bdd2557597b8478.jpg",
    Description:
      " Celana pendek ini cocok untuk cuaca hangat dengan bahan katun ringan yang memberikan kesejukan. Dengan potongan yang modis dan nyaman, celana pendek ini dapat dikenakan untuk berbagai kegiatan santai seperti piknik atau berjalan-jalan di sepanjang pantai.",
    colors: ["Merah", "Biru", "Hitam"],
    sizes: ["S", "M", "L", "XL"],
  },
  {
    id: 10,
    name: "Celana Cargo",
    href: "#",
    price: "Rp.200.000",
    imageSrc:
      "https://i.pinimg.com/564x/10/cb/30/10cb30e5d758ffcd6eb93e929eb3e6bb.jpg",
    Description:
      "Celana cargo yang praktis dan tahan lama ini terbuat dari kanvas berkualitas tinggi. Desainnya yang penuh kantong memberikan kemudahan membawa barang-barang kecil saat bepergian. Potongan longgar memberikan kenyamanan dan fleksibilitas gerak, menjadikannya pilihan ideal untuk kegiatan outdoor atau tampilan kasual sehari-hari.",
    colors: ["Merah", "Biru", "Hitam"],
    sizes: ["32", "34", "37", "39"],
  },
  {
    id: 11,
    name: "Flanel",
    href: "#",
    price: "Rp.250.000",
    imageSrc:
      "https://i.pinimg.com/564x/b1/0c/41/b10c418127602231eff45b03c2210be9.jpg",
    Description:
      "Flanel ini terbuat dari katun berkualitas tinggi, memberikan sensasi hangat dan nyaman. Dengan motif kotak-kotak yang klasik, flanel ini bukan hanya pilihan fungsional untuk suhu dingin, tetapi juga menambahkan sentuhan gaya retro. Cocok digunakan sebagai lapisan tambahan di musim dingin atau sebagai outerwear untuk tampilan santai yang tetap terlihat modis.",
    colors: ["Merah", "Biru", "Hitam"],
    sizes: ["S", "M", "L", "XL"],
  },
  {
    id: 12,
    name: "Sweeter Casual",
    href: "#",
    price: "Rp.300.000",
    imageSrc:
      "https://img.freepik.com/free-photo/close-up-portrait-man-shirt-mockup_23-2149260967.jpg?w=360&t=st=1698550466~exp=1698551066~hmac=749d266742693e83efb75ae0e64fdb2550d6284d9f5cfe0a70a35ec27a6c80d2",
    Description:
      "Sweater casual ini dirancang untuk memberikan kenyamanan ekstra dalam gaya santai. Terbuat dari campuran katun dan polyester yang lembut di kulit, memberikan kehangatan tanpa kelebihan berat. Desainnya yang simpel dengan warna netral membuatnya mudah dipadukan dengan berbagai pakaian, seperti celana jeans atau celana cargo, sehingga cocok untuk berbagai kesempatan santai.",
    colors: ["Merah", "Biru", "Hitam"],
    sizes: ["S", "M", "L", "XL"],
  },
];

export default function Example() {
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleDetailClick = (productId) => {
    setSelectedProduct(products.find((product) => product.id === productId));
  };

  const handleCloseDetail = () => {
    setSelectedProduct(null);
  };

  const handleBuyProduct = () => {
    // Add logic to handle the buying process
    console.log("Buying product...");
  };

  return (
    <div
      style={{
        backgroundImage:
          'url("https://images.unsplash.com/photo-1491466424936-e304919aada7?auto=format&fit=crop&q=80&w=2069&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")',
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
       <div className="min-h-screen flex flex-col">
      <header className="fixed top-0 left-0 right-0 z-10 bg-white shadow-md">
        <Navbar />
      </header>
      <main className="flex-grow">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <h2 className="sr-only">Products</h2>
          <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
            {products.map((product) => (
              <div key={product.id} className="group relative">
                <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                  <img
                    src={product.imageSrc}
                    alt={product.imageAlt}
                    className="h-full w-full object-cover object-center border-2 border-teal-400"
                  />
                </div>
                <h3 className="mt-4 text-sm text-white">{product.name}</h3>
                <p className="mt-1 text-lg font-medium text-white">
                  {product.price}
                </p>
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <button
                    className="bg-teal-500 text-white px-4 py-2 mr-2 rounded hover:bg-teal-600 focus:outline-none"
                    onClick={() => handleDetailClick(product.id)}
                  >
                    Lihat Detail / Beli
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
        {selectedProduct && (
          <div className="fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center bg-gray-800 bg-opacity-75">
            <div className="bg-white p-8 rounded-lg">
              <h2 className="text-2xl font-bold mb-4">
                {selectedProduct.name}
              </h2>
              <div className="flex items-center justify-center mb-4">
                <img
                  src={selectedProduct.imageSrc}
                  alt={selectedProduct.imageAlt}
                  className="rounded-lg w-64 h-96 object-cover"
                />
                <div className="ml-4">
                  <p className="mb-4 max-w-prose text-justify">
                    <header className="font-bold">Deskripsi</header>
                    {selectedProduct.Description}
                  </p>
                  <p className="text-lg mb-2">
                  <header className="font-bold">Harga</header>
                    {selectedProduct.price}</p>

                  {/* Pilihan Warna */}
                  <div className="mb-4">
                    <header className="font-bold mb-2">Pilih Warna:</header>
                    <div className="flex space-x-2">
                      {selectedProduct.colors.map((color, index) => (
                        <button
                          key={index}
                          className={`h-8 w-8 rounded-full border-2 border-gray-500 ${
                            selectedProduct.selectedColor === color
                              ? "border-teal-500"
                              : ""
                          }`}
                          style={{ backgroundColor: color }}
                          onClick={() => {
                            console.log(
                              "Selected Color:",
                              selectedProduct.selectedColor
                            );
                            console.log("Colors:", selectedProduct.colors);
                            setSelectedProduct({
                              ...selectedProduct,
                              selectedColor: color,
                            });
                          }}
                        />
                      ))}
                    </div>
                  </div>

                  {/* Pilihan Ukuran */}
                  <div className="mb-4">
                    <header className="font-bold mb-2">Pilih Ukuran:</header>
                    <select
                      className="p-2 border border-gray-500 rounded"
                      value={selectedProduct.selectedSize}
                      onChange={(e) =>
                        setSelectedProduct({
                          ...selectedProduct,
                          selectedSize: e.target.value,
                        })
                      }
                    >
                      {selectedProduct.sizes.map((size, index) => (
                        <option key={index} value={size}>
                          {size}
                        </option>
                      ))}
                    </select>
                  </div>

                  <button
                    className="bg-gray-500 text-white px-4 py-2 mt-1 rounded hover:bg-gray-600"
                    onClick={handleCloseDetail}
                  >
                    Tutup Detail
                  </button>
                  <button
                    className="bg-blue-500 text-white px-4 py-2 mt-1 ml-2 rounded hover:bg-blue-600"
                    onClick={handleBuyProduct} // Gantilah dengan fungsi yang sesuai untuk memproses pembelian
                  >
                    Beli
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </main>
      </div>
      <footer className="h-2 py-20">
        <Footer />
      </footer>
    </div>
  );
}
