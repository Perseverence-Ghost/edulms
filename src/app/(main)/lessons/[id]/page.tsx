export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const id = (await params).id;
  return (
    <section>
      <h1>Hello world lesson with {id}</h1>
    </section>
  );
}
