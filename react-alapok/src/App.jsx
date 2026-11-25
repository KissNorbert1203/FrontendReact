import Header from './components/Header'
import Footer from './components/Footer';
import StudentList from './components/StudentList'


export default function App(){
  return(
    <>
      <Header />
      <StudentList />
      <Footer />
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