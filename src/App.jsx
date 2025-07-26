import "./App.css";
import cartIcon from "./assets/icon-cart.svg";
// NOTE: Make sure these are the correct image paths
import mobileImg from "./assets/images/image-product-mobile.jpg";
import desktopImg from "./assets/images/image-product-desktop.jpg";

function App() {
  return (
    <>
      {/* Kartı dikeyde ortalamak yerine, içeriğin ekranı tamamen kaplamasını ve kaydırılabilir olmasını sağlar. */}
      <div className="flex justify-center items-center h-screen w-full p-4 overflow-y-auto bg-[#f8f8f8]">
        <div className="bg-white rounded-lg shadow-lg w-full max-w-sm md:max-w-[650px] flex flex-col md:flex-row overflow-hidden">
          <div className="md:w-1/2">
            <picture>
              <source srcSet={desktopImg} media="(min-width: 768px)" />
              <img
                className="w-full h-full object-cover rounded-t-lg md:rounded-l-lg md:rounded-tr-none"
                src={mobileImg}
                alt="product"
              />
            </picture>
          </div>
          <div className="md:w-1/2 p-6 md:p-8 flex flex-col">
            {/* Boşlukları daha küçük ekranlarda azaltır */}
            <div className="space-y-2 md:space-y-4">
              <h2 className="text-gray-500 tracking-[0.3em] text-xs uppercase font-montserrat">
                P E R F U M E
              </h2>
              {/* Başlık fontunu küçültür */}
              <h1 className="text-2xl md:text-3xl leading-none font-bold font-fraunces text-gray-800">
                Gabrielle <br className="hidden md:block" /> Essence Eau{" "}
                <br className="hidden md:block" />
                De Parfum
              </h1>
              {/* Paragraf fontunu küçültür */}
              <p className="text-xs md:text-sm font-montserrat text-gray-500 leading-relaxed">
                A floral, solar and voluptuous interpretation composed by{" "}
                <br className="hidden md:block" /> Oliver Polge,
                Perfumer-Creator <br className="hidden md:block" /> for the
                House of CHANEL.
              </p>
            </div>

            {/* Fiyat boşluğunu küçültür */}
            <div className="flex items-center gap-3 md:gap-5 mt-4 md:mt-30">
              <p className="text-2xl md:text-3xl text-[#3d8168] font-fraunces font-bold">
                $149.99
              </p>
              <p className="line-through text-gray-400 text-xs md:text-sm">
                $169.99
              </p>
            </div>

            <button className="bg-[#3d8168] text-white font-bold w-full py-3 rounded-lg hover:bg-[#1a4031] transition duration-300 flex justify-center items-center gap-2 mt-4 md:mt-6">
              <img src={cartIcon} alt="" className="w-4 h-4" />
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
