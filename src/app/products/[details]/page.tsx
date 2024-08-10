type ProductDetailsProps = {
  params: {
    details: string;
  };
};

function ProductDetails({ params }: ProductDetailsProps) {
  return <div>Product details : {params.details}</div>;
}
export default ProductDetails;
