import axios from "axios";
import { useEffect, useState } from "react";

const App = () => {
    // console.log(process.env.REACT_APP_BASE_URL);
    const [date, setDate] = useState(null);
    const [time, setTime] = useState(null);

    const GetClock = async () => {
        const { data } = await axios.get(
            `${process.env.REACT_APP_BASE_URL}/clock`
        );
        setDate(data.date);
        setTime(data.time);
    };

    useEffect(() => {
        if (!date && !time) GetClock();
    }, []);

    setInterval(() => {
        GetClock();
    }, 1000);

    return (
        <div>
            <h1>Live Date And Time App</h1>
            <h4>{date && date}</h4>
            <h2>{time && time}</h2>
        </div>
    );
};

export default App;
