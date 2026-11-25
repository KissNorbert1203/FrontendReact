export default function Footer() {
    return (
        <>
            <p>C 2026 Frontend</p>
            <section className="card">
                <h2>Kiss Péter</h2>
                <img
                    src="profile.jpg"
                    alt="Profilkép" />

                <p>
                    Frontend fejlesztő
                </p>
            </section>

            <div className="courses">
                <h1>Kurzusok</h1>
                <ul>
                    <li>JavaScript</li>
                    <li>React</li>
                    <li>Node.js</li>
                </ul>
            </div>

            <div className="container">
                <label for="name">
                    Név
                </label>
                <input
                    type="text"
                    id="name"
                />
                <hr />
                <img
                    src="student.jpg"
                    alt="tanuló" />
            </div>
        </>
    )
}

