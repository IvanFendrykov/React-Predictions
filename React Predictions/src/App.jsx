import { useState } from "react";
import Container from "./components/Container";
import Title from "./components/Title";
import Select from "./components/Select";
import Button from "./components/Button";
import Answer from "./components/Answers";
import Loader from "./components/Loader";

import LOADER_STEPS from "./constants/loaderSteps";
import useLoadingSteps from "./hooks/useLoading";
import { getTomorrowName } from "./utils/calendar";
import days from "./days.json";

export default function App() {
  const [dayIdx, setDayIdx] = useState("");
  const [answer, setAnswer] = useState(
    "Please choose the day and click on Check"
  );

  const {
    loading,
    text: loaderText,
    start: startLoading,
  } = useLoadingSteps(LOADER_STEPS, {
    duration: 5000,
    stepInterval: 1670,
  });

  const handleConfirm = () => {
    if (dayIdx === "") return;
    setAnswer("");
    startLoading();

    setTimeout(() => {
      const i = Number(dayIdx);
      setAnswer(`Tomorrow ${getTomorrowName(i)}`);
    }, 5000);
  };

  return (
    <Container>
      <Title />
      <div className="group">
        <Select value={dayIdx} onChange={setDayIdx} disabled={loading} />
        <Button onClick={handleConfirm} disabled={loading || dayIdx === ""}>
          {dayIdx === ""
            ? "Підтвердити"
            : `Підтвердити (${days[Number(dayIdx)]})`}
        </Button>
      </div>

      {loading && <Loader text={loaderText} />}
      {!loading && answer && <Answer data={answer} />}
    </Container>
  );
}
