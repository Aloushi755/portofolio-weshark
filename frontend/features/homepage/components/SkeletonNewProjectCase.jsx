import { Skeleton } from "./ui/skeleton"

export function SkeletonNewProjectCase() {
    return (
        <div className="block w-full max-w-md mx-auto">
            <div className="flex flex-col-reverse justify-start items-start w-full h-auto bg-green_darker shadow-lg rounded-xl overflow-hidden">
                <div className='flex justify-end w-full z-10'>
                    <Skeleton className="w-[18rem] h-[21rem] sm:h-72" />
                </div>
                <div className="flex flex-col justify-start items-start gap-2 w-full pt-6 px-6 sm:p-6">
                    <Skeleton className="h-6 w-3/4" />
                    <Skeleton className="h-4 w-full" />
                    <div className="flex justify-between items-center w-full mt-2">
                        <Skeleton className="h-8 w-8 rounded-full" />
                    </div>
                </div>
            </div>
        </div>
    );
}
