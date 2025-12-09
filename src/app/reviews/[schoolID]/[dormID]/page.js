import { getDormNameFromDormID } from "@/app/lib/reads";
import { getReviews } from "@/app/lib/reads";
import { getSchoolFromSchoolID } from "@/app/lib/reads";
import { WriteReview } from "@/app/containers/Reviews/WriteReview";
import Link from "next/link";

export async function generateMetadata({ params }) {
  const { dormID } = await params;
  const dormName = await getDormNameFromDormID(dormID);
  return {
    title: `${dormName.dormName} Reviews`,
    description: `${dormName.dormName} reviews`,
  };
}

export default async function Page({ params }) {
  const { dormID } = await params;
  const dorm = await getDormNameFromDormID(dormID);
  const reviews = await getReviews(dormID);
  const school = await getSchoolFromSchoolID(dorm.schoolID);
  console.log(reviews, school, dorm);
  return (
    <div className="space-y-8">
      <div className="space-y-2">
        <Link
          className="block text-sm hover:underline"
          href={`/dorms/${dorm.schoolID}`}
        >
          &#8592; {school.schoolName} Dorms
        </Link>

        <h1 className="text-3xl font-bold">{dorm.dormName} Reviews</h1>
      </div>
      <WriteReview dorm={dorm} school={school} />
      <div className="space-y-4">
        {reviews && reviews.length > 0 ? (
          reviews.map((review) => <div key={review.uid}>{review.comment}</div>)
        ) : (
          <p>No reviews yet</p>
        )}
      </div>
    </div>
  );
}
