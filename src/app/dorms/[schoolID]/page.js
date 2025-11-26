import { getSchoolFromSchoolID, getDorms } from "../../lib/reads";

import Link from "next/link";
export async function generateMetadata({ params }) {
  const { schoolID } = await params;
  const school = await getSchoolFromSchoolID(schoolID);
  const schoolName = school?.schoolName || "School";

  return {
    title: `${schoolName} Dorms`,
    description: `${schoolName} dorm reviews`,
  };
}

export default async function Page({ params }) {
  const { schoolID } = await params;
  const dorms = await getDorms(schoolID);
  console.log(dorms);

  const school = await getSchoolFromSchoolID(schoolID);


  return (
    <div className="space-y-8">
      <div className="space-y-2">
        <Link className="block text-sm hover:underline py-2" href={`/`}>
          &#8592; All Schools
        </Link>

        <h1 className="text-3xl font-bold">{school.schoolName} Dorms</h1>

        <p>
          Browse {dorms.length} dorm{dorms.length !== 1 && <>s</>}
        </p>
      </div>
      <ul>
        {dorms.map((dorm) => (
          <li key={dorm.id}>
            <Link
              className="block text-sm hover:underline py-2"
              href={`/reviews/${schoolID}/${dorm.dormID}`}
            >
              {dorm.dormName}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
