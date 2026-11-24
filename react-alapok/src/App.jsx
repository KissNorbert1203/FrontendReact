export default function App(){
  return(
    <>
      <Header />
      <StudentList />
      <Footer />
    </>
  )
}

function StudentList() {
  return(
    <>
      <StudentCard />
      <StudentCard />
      <StudentCard />
    </>
  )
}

function StudentCard(){
  return(
    <>
    <p>Dominik</p>
    <p>Szoftverfejlesztő</p>
    <p>Python</p>
    </>
  )
}

function Header() {
  return(
    <>
      <p>Tanulói kurzuskatalógus <hr /></p>
    </>
  )
}
function Footer() {
  return(
    <>
      <p>C 2026 Frontend</p>
    </>
  )
}




/* 
export default function Udvozlet(){
  return (
  <>
    <h1>Üdv React!</h1>
    <p>Ez a JavaScriptből került az oldalra.</p>
  </>
  )
}
 */

/* export default function StudentCard(){
  return(
    <>
      <h2>Név: Dávid</h2>
      <h3>Évfolyam: 13.</h3>
      <p>Kedvenc programozási nyelv: js</p>
      <p>Hobbi: vakarózás</p>
    </>
  )
} */