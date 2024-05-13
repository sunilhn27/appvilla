//ServerClient
export default function postID({ params ,searchParams}: any) {
  console.log(params.id);

  console.log(searchParams.name)
  return (
    <>
      <h1>Post iD {params.id}</h1>
    </>
  );
}
