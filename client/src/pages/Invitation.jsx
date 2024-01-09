import confeti from "canvas-confetti";
import { useLocation } from "react-router-dom";
import GraduationCanvas from "../components/canvas/Graduation";
import { useEffect } from "react";

function Invitation() {
  const location = useLocation();
  const { name } = location.state;

  // ↓↓ Activate to run wrapped effect ↓↓

  // let wrapper;
  // let card;
  // let h;
  // let w;
  // let halfH;
  // let halfW;

  // const handleMove = (e) => {
  //   const { movementX, movementY } = e;
  //   const rotX = ((movementX - halfW) / halfW) * 10;
  //   const rotY = ((movementY - halfH) / halfH) * 10;
  //   card.style.transform = `rotateX(${rotX}deg) rotateY(${rotY}deg)`;
  // };

  // useEffect(() => {
  //   wrapper = document.getElementById("wrapper");
  //   card = document.getElementById("card");
  //   h = wrapper.getBoundingClientRect().height;
  //   w = wrapper.getBoundingClientRect().width;
  //   halfH = h / 2;
  //   halfW = w / 2;
  // }, []);

  confeti();

  return (
    <main className="h-screen grid place-content-center">
      {/* add to wrapper ->  onMouseMove={handleMove} */}
      <div id="wrapper" className="max-w-3xl">
        <div
          id="card"
          className=" border-sky-500 border-4 relative mx-auto text-white m-5 shadow-xl shadow-black/50 rounded"
        >
          <header className=" flex justify-between items center">
            <div className="flex items-center gap-2 pl-5">
              <img src="/vite.svg" />
              <div className="pt-2">
                <p className="uppercase">{name}</p>
                <p className="opacity-80">Invitado Especial</p>
              </div>
            </div>
            <div className="asd bg-sky-500/10 backdrop-blur-sm  px-5 grid place-content-center">
              <span className="text-sky-500 font-semibold">#1124078241</span>
            </div>
          </header>
          <section className="flex justify-around items-center">
            <div className="">
              <GraduationCanvas />
            </div>
            <div className="flex gap-2 flex-col items-center pr-5">
              <div className="bg-gradient-to-bl from-sky-900 via-sky-700 to-sky-500 bg-clip-text">
                <span className="text-transparent font-bold text-5xl">
                  Fiesta de Grado
                </span>
              </div>
              <span className=" text-xl">
                📆 Marzo 15{" "}
                <a
                  className="hover:text-sky-400 transition-colors"
                  href="https://maps.app.goo.gl/mbhnRYatpSbzPrVGA"
                  target="_blank"
                >
                  📍 Cra 12 #9-31
                </a>{" "}
                ⌚ 7 PM
              </span>
            </div>
          </section>
          <section className="flex flex-col items-center text-center py-5 mx-auto gap-2">
            <p className="opacity-80">
              Es de mi agrado invitarte a la celebración de mi grado como
              ingeniero de sistemas, este es un logro muy importante para mi y
              quiero compartirlo contigo, no olvides confirmar tu asistencia.
            </p>
            <a
              href="https://w.app/0SqOJv"
              target="_blank"
              className="bg-sky-600 hover:bg-sky-800 transition-colors text-sky-950 text-xl font-semibold px-2 py-1 rounded"
            >
              CONFIRMAR
            </a>
          </section>
          <div className="absolute blur-lg w-full h-full -z-10 top-0 bg-sky-500/10"></div>
        </div>
      </div>
    </main>
  );
}

export default Invitation;
