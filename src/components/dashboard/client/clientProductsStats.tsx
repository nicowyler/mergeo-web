import RandomStatsline from "@/components/dashboard/client/randomStatsLine";
import { Card, CardContent } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { getClientProductsStats } from "@/lib/dashboard";
import { formatToArgentinianPesos } from "@/lib/utils";
import { useQuery } from "@tanstack/react-query";
import { TbPaperBag } from "react-icons/tb";

export default function ClientProductsStats({ companyId }: { companyId: string }) {

    const { data, isLoading } = useQuery({
        queryKey: ["client-products-stats", companyId],
        queryFn: () => getClientProductsStats(companyId),
    });

    if (isLoading) {
        return (
            <div className="grid grid-cols-5 grid-rows-1 gap-4">
                <Skeleton className="w-full h-[10.125rem] col-span-2" />
                <Skeleton className="w-full h-[10.125rem]" />
                <Skeleton className="w-full h-[10.125rem]" />
                <Skeleton className=" w-full h-[10.125rem]" />
            </div>
        )
    }

    return (
        <div className="grid grid-cols-5 grid-rows-1 gap-4">
            <Card className="w-full h-full col-span-2 py-4">
                <CardContent className="h-full pb-0 relative">
                    <RandomStatsline />

                    <div className="h-full flex justify-center">
                        {Object.values(data?.totalBuyedProducts || {}).map((item, index) => {
                            return (
                                <div className="flex flex-col items-center justify-center h-full">
                                    <span className="text-3xl font-bold">
                                        {item}
                                    </span>
                                    <span className="text-sm text-center">
                                        productos comprados en {
                                            index === 0 ? 'la Semana' : index === 1 ? 'el Mes' : index === 2 ? 'el Año' : ""
                                        }
                                    </span>

                                </div>
                            )
                        }
                        )}
                    </div>

                </CardContent>
            </Card>
            {
                data && data?.mostBuyedProducts.length > 0
                    ? data?.mostBuyedProducts.map((item, index) => (
                        <Card className={`col-start-${4 + index}`} key={index}>
                            <CardContent className='flex h-40 items-start justify-between py-5 relative'>
                                <div className='text-sm font-medium flex flex-col'>
                                    <p className="text-sm font-black">{item.product.name}</p>
                                    <p className='text-sm text-black/60'>{item.product.brand}</p>
                                    <p className='text-sm text-black/60'>{item.product.netContent} {item.product.measurementUnit}</p>
                                </div>
                                <div>
                                    <p className='text-3xl font-bold'>{item.totalBuyed}</p>
                                </div>
                                <p className='absolute bottom-5 right-5 text-md text-primary'>{formatToArgentinianPesos(item.spent)}</p>
                            </CardContent>
                        </Card>
                    ))
                    : <Card className="col-span-3">
                        <CardContent className="h-full">
                            <div className="h-full flex justify-center items-center">
                                <div className="text-base text-black/60 font-medium flex flex-col items-center gap-2 mt-4">
                                    <TbPaperBag size={30} />
                                    <p className="text-destructive font-base">Aun no tienes compras</p>
                                </div>
                            </div>
                        </CardContent>
                    </Card>

            }
        </div>

    );
}