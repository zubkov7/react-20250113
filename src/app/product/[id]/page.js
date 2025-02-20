const ProductPage = async ({ params }) => {
  const { id } = await params;

  // only in client components
  //   const { id } = useParams();

  return <div>product id - {id}</div>;
};

export default ProductPage;
