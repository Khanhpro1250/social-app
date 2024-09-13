import { validateRequest } from "@/auth"
import prisma from "@/lib/prisma"
import { userDataSelect } from "@/lib/types"

export default function TrendsSidebar() {
    return (
        <div className="sticky top-[5.25rem] hidden h-fit w-72 flex-none space-y-5 md:block lg:w-89">
            <WhoToFollow />
        </div>
    )

}

const WhoToFollow = async () => {
    const { user } = await validateRequest()
    const userToFollow = await prisma.user.findMany({
        where: {
            NOT: {
                id: user?.id
            }
        },
        select: userDataSelect,
        take: 5
    })


    return (
        <div className="space-y-5 rounded-2xl bg-card p-5 shadow-sm">
            <div className="text-xl fotn-bold">Who to follow</div>
        </div>
    )
}