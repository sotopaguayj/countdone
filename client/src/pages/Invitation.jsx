import confeti from "canvas-confetti";
import { useLocation } from "react-router-dom";

function Invitation() {
  const location = useLocation();
  const { id, name } = location.state;
  confeti();
  return (
    <main className="h-screen grid place-content-center">
      <div className="grid grid-cols-2 bg-slate-900 text-white text-xl p-5 rounded-sm">
        <header className="col-span-3 h-14 flex justify-between items-center ">
          <div>Queride {name}</div>
          <img
            src="https://creazilla-store.fra1.digitaloceanspaces.com/emojis/52921/graduation-cap-emoji-clipart-md.png"
            className="col-span-1  w-14"
          />
        </header>
        <div className="col-span-3 flex gap-5 items-center">
          <img src="/bob.png" className="w-40" />
          <div className="font-semibold  flex flex-col items-start">
            <p>
              El dia de: <span className="underline font-normal">today</span>
            </p>
            <p>
              a las:{" "}
              <span className="underline font-normal">ya mosmi paisano</span>
            </p>
            <p>
              se realizara en:{" "}
              <span className="underline font-normal">
                mi casa pos donde mas
              </span>
            </p>
            <p>y quiero que estes ahí</p>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Invitation;
