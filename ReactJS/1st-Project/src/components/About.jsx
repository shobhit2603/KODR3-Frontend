export default function About() {
    return (
        <section className="my-35 mx-10 px-30 flex flex-col gap-15">
            <div className="flex gap-30 items-end">
                <div className="">
                    <h1 className="text-8xl font-bold tracking-tight">Designed to<br />Help You Do More <span className="instrument">With Less Stress</span></h1>
                </div>
                <div className="pb-20">
                    <p className="text-3xl font-medium tracking-tighter leading-10">Our productivity app is built for modern professionals who<br />want to stay organized,<br />focused, and in control. </p>
                </div>
            </div>
            <div className="flex gap-12">
                <div>
                    <h3 className="text-2xl font-bold mb-3 tracking-tighter">Smart Task Management</h3>
                    <p>Easily create, categorize, and prioritize tasks with a drag-and-drop interface that adapts to your workflow.</p>
                </div>
                <div>
                    <h3 className="text-2xl font-bold mb-3 tracking-tighter">Integrated Calendar & Deadlines</h3>
                    <p>Stay ahead of your schedule with a built-in calendar that syncs across all your devices and reminds you before deadlines hit.</p>
                </div>
                <div>
                    <h3 className="text-2xl font-bold mb-3 tracking-tighter">Focus Mode</h3>
                    <p>Eliminate distractions with a minimalist interface and time-blocking tools that help you get into deep work—fast.</p>
                </div>
            </div>
            <div class="bg-linear-to-l from-[#FCDD42] via-[#FF0077] to-[#9E00A1] blur-[100px] opacity-100 h-30 w-full -mb-40"></div>
        </section>
    )
}
