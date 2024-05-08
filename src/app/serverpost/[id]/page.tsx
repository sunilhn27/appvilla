//ServerClient
export default function postID({ params }: any) {
  console.log(params.id);
  return (
    <>
      <h1>Post iD {params.id}</h1>
    </>
  );
}
