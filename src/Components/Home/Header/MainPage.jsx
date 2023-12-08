import { ProductInfo} from "./Product_Info/product_info";
import {OurParents} from "./Parents/Parents";
import {ArdeskAutodeskNews} from "./News/ArdeskAutodeskNews";
import {Footer} from "../../Footer/Footer";
import { ProductItem } from "./Products/Product_item";
export default function MainPage({handleOpenModal}) {
    return (
        <>
            <ProductInfo/>
            <ProductItem handleOpenModal={handleOpenModal}/>
            <OurParents/>
            <ArdeskAutodeskNews/>
            <Footer/>
        </>
    )
}
