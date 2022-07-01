import React, { forwardRef } from "react";
import "./section-css.css"


const SecondSection = forwardRef((prpos, ref) => {
    return (
        <section className="h-screen w-screen flex relative" ref={ref}>
            <div className="max-w-5xl px-6 py-16 mx-auto my-8">
                <h2 className="text-3xl font-semibold text-gray-800">Virtual Hertz</h2>
                <p className="max-w-lg mx-auto mt-4 text-gray-600">Duis aute irure dolor in reprehenderit in voluptate velit esse
                    cillum
                    dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum.</p>
            </div>
        </section>
    )
})
export default SecondSection;
