import About from "./About";
import ProductView from "./ProductView";

const Body = () => {
  return (
    <div>
      <div className="flex flex-col items-center justify-center h-screen bg-[#a1decf]">
        <h1
          data-aos="zoom-in"
          data-aos-duration="500"
          data-aos-once="true"
          className="text-4xl font-bold font-mono mb-4"
        >
          Welcome to S-TOYS
        </h1>
        <img
          data-aos="zoom-in"
          data-aos-once="true"
          src="image/download.png"
          alt="Toy"
          className="w-64 h-64 rounded-full mb-4 spin"
        />
        <p
          data-aos="fade-up"
          data-aos-duration="500"
          data-aos-delay="100"
          className="text-lg text-gray-700 font-mono"
        >
          We have a wide range of toys for all ages!
        </p>
      </div>
      <div>
        <About />
      </div>
      <div>
        <ProductView />
      </div>
    </div>
  );
};

export default Body;
