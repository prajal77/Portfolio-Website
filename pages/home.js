import NavBar from "@/components/navbar";

const Home = () => {
    return <>
        <NavBar />
        <section className="flex w-full text-white bg-black">
            <div className="w-full bg-red-950">
                <h1>Hello! I'm  Prajwol Basnet</h1>
                <p>Frontend Developer</p>
            </div>
            <div className="w-full bg-red-500">
                <img src="/photo.png" />
            </div>
        </section>
    </>
}
export default Home;