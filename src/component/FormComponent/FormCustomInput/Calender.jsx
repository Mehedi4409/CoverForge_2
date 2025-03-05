import { useEffect, useRef } from "react";
import Pikaday from "pikaday";

const Calender = () => {
    // const myDatepicker = useRef(null);
    // useEffect(() => {
    //     const picker = new Pikaday({
    //         field: myDatepicker.current,
    //         format: 'DD MM YYYY',  // This will work with Moment.js
    //     });
    //     return () => picker.destroy(ref={myDatepicker});
    // }, []);
    return (
        <input type="date" className="input pika-single col-span-3" placeholder="DD-MM-YYYY"  />
    );
};

export default Calender;
