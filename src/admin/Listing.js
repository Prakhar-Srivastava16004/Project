import { connect } from "react-redux";

function gotoProduct(){
    window.location.href = '/product';
}

const Listing = (props) =>{
    console.log(props.listing);
    return (
      <div className="Listing">
          <button onClick={gotoProduct}>Add Product</button>
          {props.listing.map((product, index) => {
            return <div>{index}:{product}</div>;
          })}
      </div>
    );
  }
  
  const mapStateToProps = state => {
    return {
      listing: state.productList
    };
  };
  
  export default connect(
    mapStateToProps
  )(Listing);