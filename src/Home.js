import Navbar from "./Navbar";
import Footer from "./Footer";
import { useState } from "react";
import { Dialog } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Import style
import { Carousel } from "react-responsive-carousel";
import { Link } from "react-router-dom";

export default function Example() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div>
      <header className="fixed top-0 left-0 right-0 z-10 shadow-md space-y-14">
        <Navbar />
      </header>
      <div className="flex justify-center items-center h-screen bg-gradient-to-b">
        <div
          style={{
            backgroundImage:
              'url("https://images.unsplash.com/photo-1491466424936-e304919aada7?auto=format&fit=crop&q=80&w=2069&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")',
            backgroundSize: "cover",
            backgroundPosition: "center",
            height: "100%",
            width: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            color: "white",
            textShadow:
              "2px 2px 4px rgba(0, 0, 83), -2px -2px 4px rgba(0, 0, 83)",
            padding: "10%",
            fontSize: "4vw",
            fontFamily: "Arial, sans-serif",
            textAlign: "center",
          }}
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">
            <span className="font-bold text-teal-400">WELCOME TO </span>MOGENS
            CASUAL
          </h1>
          <p className="text-xl md:text-2xl lg:text-3xl font-mono">
            "Elevate Your{" "}
            <span className="font-bold text-teal-400">Everyday Style"</span>
          </p>
        </div>
      </div>
      <div className="w-full bg-gradient-to-b from-cyan-500 to-blue-500 sm:py-16 md:py-16">
        <div className="max-w-screen-2xl mx-auto p-4 sm:p-8 md:p-16 lg:p-20 flex flex-col md:flex-row md:space-x-40 py-16">
          <div className="md:w-3/5 text-white">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-4">
              Mari Berbelanja Di Mogens Store
            </h2>
            <p className="text-base sm:text-xl md:text-2xl text-justify">
              Jelajahi koleksi pakaian kasual terbaru di toko Mogens, di mana
              Anda dapat menemukan beragam pilihan gaya yang tidak hanya nyaman,
              tetapi juga sangat fashionable. Dengan koleksi ini, Anda akan
              memiliki kesempatan untuk tampil elegan setiap hari, menjadikan
              setiap momen Anda menjadi istimewa dan stylish. Dengan berbagai
              pilihan yang tersedia, Anda dapat menciptakan penampilan yang
              sesuai dengan kepribadian dan selera Anda, memberikan sentuhan
              gaya pribadi yang unik pada setiap hari Anda. Jangan lewatkan
              kesempatan untuk memperbarui Koleksi Outfit Anda dengan
              pilihan-pilihan terbaru dari toko Mogens!
            </p>
            <Link to="/Product">
              <button className="font-bold text-white rounded-md mt-6 w-32 h-12 bg-teal-400 hover:bg-blue-500">
                Lihat Product
              </button>
            </Link>
          </div>
          <div className="md:w-96 mt-5 md:mt-0">
            <Carousel
              autoPlay={true}
              interval={2500}
              infiniteLoop={true}
              showArrows={true}
              transitionTime={900}
            >
              <div>
                <img
                  src="https://img.freepik.com/free-photo/model-tying-shoelaces-suede-sneaker_53876-97147.jpg?w=360&t=st=1698382616~exp=1698383216~hmac=9162a0bd3932ee4512cf2095d04332d5a2f9ce5eb324a9d2e28ca60b7335fc17"
                  alt="Carousel Image 1"
                  className="w-full max-w-full mx-auto my-4"
                />
              </div>
              <div>
                <img
                  src="https://img.freepik.com/free-photo/shirt-mockup-concept-with-plain-clothing_23-2149448748.jpg?size=626&ext=jpg&ga=GA1.1.43023405.1698334116&semt=ais"
                  alt="Carousel Image 2"
                  className="w-full max-w-full mx-auto my-4"
                />
              </div>
              <div>
                <img
                  src="https://img.freepik.com/free-photo/close-up-portrait-man-shirt-mockup_23-2149260967.jpg?w=360&t=st=1698550466~exp=1698551066~hmac=749d266742693e83efb75ae0e64fdb2550d6284d9f5cfe0a70a35ec27a6c80d2"
                  alt="Carousel Image 3"
                  className="w-full max-w-full mx-auto my-4"
                />
              </div>
              <div>
                <img
                  src="https://img.freepik.com/free-photo/still-life-with-classic-shirts_23-2150828593.jpg?size=626&ext=jpg&ga=GA1.1.43023405.1698334116&semt=ais"
                  alt="Carousel Image 1"
                  className="w-full max-w-full mx-auto my-4"
                />
              </div>
              <div>
                <img
                  src="https://img.freepik.com/free-photo/medium-shot-young-man-wearing-trucker-hat_23-2149410237.jpg?size=626&ext=jpg&ga=GA1.1.43023405.1698334116&semt=ais"
                  alt="Carousel Image 2"
                  className="w-full max-w-full mx-auto my-4"
                />
              </div>
              <div>
                <img
                  src="https://img.freepik.com/free-photo/modern-man-with-sunglasses-city_23-2147961048.jpg?size=626&ext=jpg&ga=GA1.1.43023405.1698334116&semt=ais"
                  alt="Carousel Image 3"
                  className="w-full max-w-full mx-auto my-4"
                />
              </div>
              <div>
                <img
                  src="https://img.freepik.com/free-photo/white-sneakers-woman-model_53876-97149.jpg?w=360&t=st=1698550605~exp=1698551205~hmac=ac30ccc50b9513d8222b9bc1d3e3e10c3468ca18bddf22d7328c2670339f7215"
                  alt="Carousel Image 1"
                  className="w-full max-w-full mx-auto my-4"
                />
              </div>
              <div>
                <img
                  src="https://img.freepik.com/free-photo/close-up-portrait-man-shirt-mockup_23-2149260967.jpg?w=360&t=st=1698550466~exp=1698551066~hmac=749d266742693e83efb75ae0e64fdb2550d6284d9f5cfe0a70a35ec27a6c80d2"
                  alt="Carousel Image 2"
                  className="w-full max-w-full mx-auto my-4"
                />
              </div>
              <div>
                <img
                  src="https://i.pinimg.com/564x/b1/0c/41/b10c418127602231eff45b03c2210be9.jpg"
                  alt="Carousel Image 3"
                  className="w-full max-w-full mx-auto my-4"
                />
              </div>
            </Carousel>
          </div>
        </div>
      </div>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}
