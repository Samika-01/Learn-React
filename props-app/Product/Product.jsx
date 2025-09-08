
function Product(props){
    return(
        <div>
            <h2>title:{props.title} </h2>
            <p>price:{props.price}</p>
            <p>{props.desc} </p>
        </div>
    );
}

export default Product;