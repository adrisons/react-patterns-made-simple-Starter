const product = {
  image:
    "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  name: "Product 1",
  description: "This is a product description",
  price: 100,
  isNew: true,
};


const ProductImage = ({ src, alt }) => (
  <img src={src} alt={alt} className="card-image" />
);

const ProductBadge = ({ isNew }) => (
  <div className={`card-badge ${isNew ? "new" : ""}`}>
    {isNew ? "NEW" : ""}
  </div>
);

const ProductHeader = ({ image, name, isNew }) => (
  <div className="card-header">
    <ProductImage src={image} alt={name} />
    <ProductBadge isNew={isNew} />
  </div>
);

const ProductPrice = ({ price }) => (
  <div className="card-price">${price}</div>
);

const ProductBody = ({ name, description, price }) => (
  <div className="card-body">
    <h3>{name}</h3>
    <p>{description}</p>
    <ProductPrice price={price} />
  </div>
);

const ProductFooter = () => (
  <div className="card-footer">
    <button>Add to Cart</button>
    <button>View Details</button>
  </div>
);

const ProductCard = ({ product }) => (
  <div className="card">
    <ProductHeader image={product.image} name={product.name} isNew={product.isNew} />
    <ProductBody name={product.name} description={product.description} price={product.price} />
    <ProductFooter />
  </div>
);

// Monolithic card component
const App = () => {
  return (
    <main className="container text-amber-50">
      <ProductCard product={product} />
    </main>
  );
};

export default App;
