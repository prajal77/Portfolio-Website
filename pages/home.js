import NavBar from "@/components/navbar";

const Home = () => {
    return <>
        <NavBar />
        <section className="flex w-full text-white bg-black">
            <div className="flex flex-row items-center w-full bg-red-950">
                <div className="">
                    <h1 className="text-xl">Hello!</h1>
                    <br />
                    <h1 className="text-6xl font-bold"> I'm  Prajwol Basnet</h1>
                </div>
                <br />
                <div className="inline-block">
                    <p>Frontend Developer</p>
                </div>
            </div>
            <div className="w-full bg-red-500">
                <img src="/photo.png" />
            </div>
        </section>
    </>
}
export default Home;