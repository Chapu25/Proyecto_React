import { Card } from "../../common/card/Card"
import "./itemListContainer.css"


export const ItemListContainer = ( {title} ) => {
return (
    <>
        <div className="Itemcontainer">
            <h1>{title}</h1>
        </div>

        {/* <div className="Cardcontainer">
            <Card title="Fernet" price={10000} stock={9} />
            <Card title="Gancia" price={4500} stock={4} />
            <Card title="Smirnoff" price={6000} stock={5} />
            <Card title="Wishky" price={15000} stock={2} />
            <Card title="B.U.H.O" price={9000} stock={6} />
        </div> */}
    </>
)
}
