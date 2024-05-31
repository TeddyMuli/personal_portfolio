"use client"

import CountUp from "react-countup"

const year = new Date().getFullYear()

const stats = [
    { num: year - 2021, text: "Years of experience" },
    { num: 6, text: "Projects completed" },
    { num: 8, text: "Technologies mastered" },
    { num:  1000, text: "Code commits" },
]
const Stats = () => {
    return (
        <section>
            <div>
                <div className="flex flex-wrap gap-6 max-w-[80vw] mx-auto xl:max-w-none">
                    {stats.map((stat, index) => {
                        return <div key={index} className="flex-1 flex gap-4 items-center" >
                            <CountUp
                                end={stat.num}
                                duration={5}
                                delay={2}
                                className="text-4xl xl:text-6xl font-extrabold" />
                        </div>
                    })}
                </div>
            </div>
        </section>
    );
}

export default Stats;
