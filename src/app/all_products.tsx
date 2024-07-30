import Categories from "./categories";
import Products from "./products";



export default function Allproducts() {
    return (
        <>
        <table style={{border:"2px Solid black"}}>
            <thead>
                <tr >
                    <th style={{border:"2px Solid black"}}>S.No.</th>
                    <th style={{border:"2px Solid black"}}>Name</th>
                    <th style={{border:"2px Solid black"}}>Price</th>
                </tr>
            </thead>
            <tbody>
                <Products />
            </tbody>
        </table>
        </>
    )
}