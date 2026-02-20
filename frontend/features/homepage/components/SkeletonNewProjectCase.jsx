import { Skeleton } from "./ui/skeleton"

export function SkeletonNewProjectCase() {
    return (
        <div className="block w-full max-w-4xl mx-auto">
            <div className="group relative flex flex-col justify-start items-start w-full h-auto min-h-[380px] bg-green_darker shadow-lg rounded-xl overflow-hidden">
                <div className='absolute top-[6.6rem] left-4 w-full h-full'>
                    <Skeleton className="w-full h-full" />
                </div>
                <div className="relative z-10 flex flex-col justify-start items-start gap-2 w-full p-6">
                    <Skeleton className="h-6 w-3/4" />
                    <Skeleton className="h-4 w-60" />
                    <div className="flex justify-between items-center w-full mt-2">
                        <Skeleton className="h-8 w-8 rounded-full" />
                    </div>
                </div>
            </div>
        </div>
    );
}
