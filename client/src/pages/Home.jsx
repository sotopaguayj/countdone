import { Link } from "react-router-dom";
import useCountdown from "../hooks/useCountdown";
import useDate from "../hooks/useDate";
import Digit from "../components/Digit";
import Loader from "../components/Loader";
import Alert from "../components/Alert";
import NavButton from "../components/NavButton";

function MainPage() {
  const { isError, isLoading } = useDate();
  const { daysLeft, monthsLeft } = useCountdown();

  return (
    <>
      <header className="text-5xl uppercase text-slate-50 text-center">
        MainPage
      </header>
      <section className="text-center">
        {isLoading ? (
          <div className="grid place-content-center">
            <Loader />
          </div>
        ) : !isError ? (
          <>
            <div className="flex justify-center gap-x-4">
              <Digit value={monthsLeft} name="Meses" />
              <Digit value={daysLeft} name="Días" />
            </div>
            <NavButton
              path="confirm_assist"
              text="Confirma tu asistencia aqui!"
            />
          </>
        ) : (
          <div className="grid place-content-center">
            <Alert
              type="error"
              title="Ha ocurrido un error"
              message="Sin conexión al servidor"
            />
          </div>
        )}
      </section>
    </>
  );
}

export default MainPage;
