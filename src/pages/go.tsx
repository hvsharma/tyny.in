import { useRouter } from "next/router";
import { useEffect, useRef, useState } from "react";
import Countdown from "react-countdown";


function Go() {

  const router = useRouter();
  const { id } = router.query;
  const [redirected, setRedirected] = useState(false);
  const countdownComponentRef = useRef<Countdown>(null);

  useEffect(() => {
    if (id && !redirected) {
      setRedirected(true);
    }
  }, [id, redirected]);

  useEffect(() => {
    if (redirected) {
      countdownComponentRef?.current?.start();
    }
  }, [redirected]);

  return <>
    <div className="flex flex-col justify-center items-center min-h-screen">
      <div className="flex flex-row items-baseline">
        <span>
          Redirecting in
        </span>
        <Countdown
          ref={countdownComponentRef}
          date={Date.now() + 5000}
          autoStart={false}
          renderer={({ seconds }) => {
            return <span className="text-5xl mx-3 text-cyan-400">{seconds}</span>
          }}
          onComplete={() =>
            window.location.replace("https:///www.google.com")
          } />
        <span>
          seconds...
        </span>
      </div>
    </div>
  </>
}

export default Go;