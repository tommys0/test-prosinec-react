import { ProductInfo } from "./components/ProductInfo.jsx";
import { Offers } from "./components/Offers.jsx";
import { ProductImage } from "./components/ProductImage.jsx";

function App() {
    return (
        <>
            <div className="product-info-container">
                <div className="left">
                    <ProductImage />
                </div>
                <div className="right">
                    <ProductInfo />
                </div>
            </div>

            <div className="offers-container">
                <div className="offers">
                    <Offers />
                </div>
            </div>
        </>
    );
}

export default App;
