import Footer from "../components/Footer"

function Contact() {
    return (
        <div>
            <div className="bg-[#1A1A2E] min-h-screen">
                <div className="p-8 cursor-default">

                    <section className="mb-12">
                        <h1 className="text-5xl font-bold text-white mb-8">Contactez-moi</h1>

                    </section>

                    <section>
                        <div className="my-5 p-4 bg-[#252539] rounded-2xl">
                            <h3 className="text-2xl font-semibold text-white mb-6">Mes coordonées</h3>
                            <ul className="list-disc ml-8 space-y-1 text-justify text-sm text-[#94A3B8] mb-8">
                                <li><strong>Email : </strong>n.merhand44@gmail.com</li>
                                <li><strong>Téléphone : </strong>06.33.42.97.84</li>
                                <li><strong>Linkedln : </strong><a href="https://www.linkedin.com/in/nora-merhand-a372432aa/" target='_blank' className="hover:text-pink-400 transition">Nora MERHAND</a></li>
                            </ul>
                        </div>
                    </section>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Contact