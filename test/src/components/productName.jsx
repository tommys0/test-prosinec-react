export function ProductName({ name, description }) {
    return (
        <div className="product-details">
            <p className="product-name">{name}</p>
            <p className="product-description">{description}</p>
        </div>
    );
}
