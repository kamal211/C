import { cleanup } from '@testing-library/react';
import React , {useState, useEffect} from 'react';
import { NavLink, Outlet, useParams } from 'react-router-dom';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css'

const Product = () => {

    const[data, setdata] = useState([]);
    const[filter, setfilter] = useState(data);
    const[loading, setloading] = useState(false);
    let componentMounted = true;
    let param = useParams();
    console.log(param)
    useEffect(() => {
      const getProducts = async() => {
 setloading(true);
 const response = await fetch("https://fakestoreapi.com/products");
 if(componentMounted){
  setdata(await response.clone().json());
  setfilter(await response.json());
  setloading(false);
  console.log(filter)
 }
 return () => {
  componentMounted = false;
 }
      }
      getProducts();
    }, []);
    

const Loading = ()  => {
  return (
    <>
  <div className="col-md-3">
    <Skeleton height={350}/>
  </div>
  <div className="col-md-3">
    <Skeleton height={350}/>
  </div>
  <div className="col-md-3">
    <Skeleton height={350}/>
  </div>
  <div className="col-md-3">
    <Skeleton height={350}/>
  </div>
    </>
  );
};
const filterProduct = (cat) => {
  const updatedList = data.filter((x)=> x.category === cat);
  setfilter(updatedList);
}
const ShowProduct = () => {
  return (
    <>
  <div className="buttons d-flex justify-content-center mb-5 pb-5">
    <button className="btn btn-outline-dark me-2" onClick={() =>setfilter(data)}>All</button> 
    <button className="btn btn-outline-dark me-2" onClick={() =>filterProduct("men's clothing")}>Men's clothing</button>
    <button className="btn btn-outline-dark me-2" onClick={() =>filterProduct("women's clothing")}>Women's clothing</button>
    <button className="btn btn-outline-dark me-2" onClick={() =>filterProduct("jewelery")}>Jwelery</button>
    <button className="btn btn-outline-dark me-2" onClick={() =>filterProduct("electronics")}>Electronic</button>

  </div>
  {filter.map((product)=>{
    return (
      <>
      <div className="col-md-3 mb-4">
      <div className="card h-100 text-center p-4" key={product.id}>
  <img src={product.image} class="card-img-top " alt={product.title} height='350px' />
  <div className="card-body">
    <h5 className="card-title mb-0">{product.title.substring(0,20)}</h5>
    <p className="card-text lead fw-bold">${product.price}</p>
    <NavLink to={`/products/${product.id}`} className="btn btn-outline-dark">Buy Now</NavLink>
  </div>
</div>
      </div>
      </>
    )
  })}
  </>
);
};
  return param.productid?<Outlet/>: (
    <div>
      
      <div className="container my-5 py-5">
        <div className="row">
          <div className="col-12 mb-5">
            <h1 className='display-6 fw-bolder text-center'>latest Product</h1>
         <hr />
          </div>
        </div>
      <div className=' row justify-content-center'>
      {loading ? <Loading/> : <ShowProduct/>}
      </div>
      </div>
     

    </div>
  );
}

export default Product;
