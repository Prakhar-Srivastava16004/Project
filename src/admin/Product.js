import { connect } from "react-redux";


let newVal = '';
function handleValueChange(e){
  newVal = e.target.value;
}
let globalProps;
const Product = (props) => {
  globalProps = props;
    return (
      <div className="Product">
        <input type="text" onChange={handleValueChange}></input>
        <button onClick={onProductAdd}>addProduct</button>
      </div>
    );
  }
  
  function onProductAdd(){
    globalProps.onAdd();
    window.location.href = '/listing';
  }

  const mapStateToProps = state => {
    return {
      listing: state.productList
    };
  };

  const mapDispachToProps = dispatch => {
    return {
      onAdd: () => dispatch({ type: "ADD", value: newVal }),
    };
  };

  export default connect(
    mapStateToProps,
    mapDispachToProps
  )(Product);