import ReviewForm from "@/components/ReviewForm";
import { authOptions } from "@/lib/nextAuthAdapter";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

async function ReviewPage() {
    const session = await getServerSession(authOptions);
    if (!session?.user) {
        redirect('/auth/signin')
    }

    return (

        <div className="container mx-auto ">
            <ReviewForm category={'Support'} contact={session.user.email as string} name={session.user.name as string} />
        </div>
    );
}

export default ReviewPage;