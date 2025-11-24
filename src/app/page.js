export default function Home() {
  const schools = getSchools();
  console.log(schools);
  return (
    <div>
      {schools.map((school) => (
        <div>
         {school.name}
        </div>
      ))}
    </div>
  );
}
