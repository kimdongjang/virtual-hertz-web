import React from "react";
import "./section-css.css"

export default () => {
    return (
        <section className="bg-white h-screen w-screen flex relative">
            <div className="max-w-5xl px-6 py-16 mx-auto">
                <h2 className="text-3xl font-semibold text-gray-800">Virtual Hertz</h2>
                <p className="max-w-lg mx-auto mt-4 text-gray-600">Duis aute irure dolor in reprehenderit in voluptate velit esse
                    cillum
                    dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum.</p>
            </div>
        </section>
    );
};
