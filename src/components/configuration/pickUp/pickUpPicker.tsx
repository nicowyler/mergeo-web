
import { EditPickUp } from "@/components/configuration/pickUp/editPickUpPoint"
import { NewPickUpPoint } from "@/components/configuration/pickUp/newPickUpPoint"
import LoadingIndicator from "@/components/loadingIndicator"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import { getPickUpPoints } from "@/lib/configuration/pickUp"
import { PickUpSchemaType } from "@/lib/schemas"
import { useQuery } from "@tanstack/react-query"
import { Plus } from "lucide-react"
import { useState } from "react"

type Props = {
    companyId: string | undefined,
    disabled: boolean,
    className?: string,
    notFoundMessage?: string,
    newEntry?: {
        title?: string,
        subTitle?: string,
        icon?: React.ReactElement,
    },
    onLoading?: () => void,
    callback?: () => void,
}

type EditEntry = {
    entryData: PickUpSchemaType | null,
    isOpen: boolean,
}

export function PickUpPicker({ className, companyId, disabled, notFoundMessage, newEntry, onLoading, callback }: Props) {
    const [editEntry, setEditEntry] = useState<EditEntry>({ entryData: null, isOpen: false });

    const { data: pickUpResult, isLoading, isError, refetch } = useQuery({
        queryKey: ['pickUp', companyId],
        queryFn: () => companyId ? getPickUpPoints({ companyId }) : Promise.reject(new Error('Company ID is undefined')),
    });

    const pickUpPoints = pickUpResult?.data;
    const handleEditPickUp = async (pickUp: PickUpSchemaType) => {
        setEditEntry({ entryData: pickUp, isOpen: true });
    }

    if (isError) {
        return (
            <>
                <p>Algo salio mal vuelve a intentarlo</p>
                <Button onClick={() => refetch()}>Volver a intentat</Button>
            </>
        )
    }

    async function pickUpAdded() {
        await refetch();
        callback && callback();
    }

    async function pickUpEdited() {
        setEditEntry({ entryData: null, isOpen: false })
        await refetch();
        callback && callback();
    }

    return (
        <div className={className}>
            <ScrollArea className="h-auto max-h-[150px] min-h-10 w-full rounded border border-input bg-background p-2 pr-10 relative">
                {isLoading
                    ?
                    <LoadingIndicator />
                    :
                    <div className="flex flex-wrap gap-1 items-center">
                        {
                            pickUpPoints && pickUpPoints.length > 0 ?
                                pickUpPoints.map((pickUp: PickUpSchemaType) => (
                                    <Badge
                                        key={pickUp.id}
                                        variant="outline"
                                        onClick={() => pickUp.id && handleEditPickUp(pickUp)}
                                        className="hover:bg-slate-200 cursor-pointer"
                                    >
                                        <span className="flex gap-2 items-center text-sm">
                                            {pickUp.name}
                                        </span>
                                    </Badge>
                                ))
                                : <p className="text-sm font-base mt-1 w-full text-center">
                                    {notFoundMessage ? notFoundMessage : 'No tienes sucursales'}
                                </p>
                        }
                        {companyId &&
                            <NewPickUpPoint
                                title={newEntry?.title}
                                subTitle={newEntry?.subTitle}
                                icon={newEntry?.icon}
                                companyId={companyId}
                                disabled={disabled}
                                triggerButton={
                                    <Button className="w-8 h-8 absolute right-1 -top-1 flex justify-center items-center p-0">
                                        <Plus size={15} className="text-white" strokeWidth={3} />
                                    </Button>
                                }
                                callback={pickUpAdded}
                                onLoading={() => onLoading && onLoading()}
                            />
                        }
                    </div>
                }

            </ScrollArea >
            {companyId &&
                <EditPickUp
                    title="Punto de PickUp"
                    subTitle={`Detalles del punto de PickUp`}
                    companyId={companyId}
                    isOpen={editEntry.isOpen}
                    pickUpData={editEntry.entryData && editEntry.entryData}
                    callback={pickUpEdited}
                    onClose={() => {
                        setEditEntry({ entryData: null, isOpen: false });
                    }}
                    onLoading={() => onLoading && onLoading()}
                />
            }
        </div>
    )
}