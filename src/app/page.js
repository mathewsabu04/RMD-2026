import { getSchools } from "./lib/reads";
export default async function Home() {
  const schools = await getSchools();
  return (
    <div>
      <h1 className="text-2xl font-bold">Rate College Dorms at RMD </h1>
      <div>
        <p className="font-medium text-lg, mb-2">Select your school</p>
      </div>
      {schools.map((school) => (
        <div key={school.id}>{school.schoolName}</div>
      ))}
    </div>
  );
}
