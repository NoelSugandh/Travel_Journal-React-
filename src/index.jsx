import Header from "./components/Header"
import Entry from "./components/Entry"
import data from './data'

export default function Index() {

    const Trip = data.map((details) => {
        return <Entry 
                    key={details.id} 
                    details={details}
               />
    }) 

    return (
        <>
            <Header />
            <main className="container">
                {Trip}
            </main>
        </>
    )
}