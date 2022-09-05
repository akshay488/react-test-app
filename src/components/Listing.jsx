import clientdata from "./data/clientdata"
import Card from "./Card"
import Nav from "./Nav";

export default function Listing() {
    return(
        <div className="container-fluid p-3">
            <Nav/>
            <div className="row gap-3 ">
            { clientdata.map(x=> {return <Card
             key={x.id}
             fullname={x.name}
            country={x.country}
              pic={x.img}
             />})}
                
            </div>
        </div>
    )
}