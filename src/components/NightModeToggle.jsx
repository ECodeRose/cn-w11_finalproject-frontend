import { useState } from "react";
import { IoMdSunny, IoMdMoon } from "react-icons/io";

export const NightModeToggle = () => {
    const [nightMode, setMode] = useState(false);

    return (
        <div className="nightmode-toggle" onClick={()=>setMode(!nightMode)}>
            {!nightMode ?
                <IoMdSunny />
                :
                <IoMdMoon />
            }
        </div>
    )
}

export default NightModeToggle