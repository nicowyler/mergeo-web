import { CardFooter } from "@/components/card"
import LoadingIndicator from "@/components/loadingIndicator"
import { Avatar } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { getUsers } from "@/lib/configuration/users"
import { colorClasses } from "@/lib/constants"
import { cn, formatDate } from "@/lib/utils"
import UseCompanyStore from "@/store/company.store"
import { useQuery } from "@tanstack/react-query"
import { Pencil, Trash2, UserRoundPlus } from "lucide-react"
import { RoleDetail } from "@/components/configuration/users/roles/roleDetail"
import { AddUserSheet } from "@/components/configuration/users/addUserSheet"
import { DeleteUserSheet } from "@/components/configuration/users/deleteUserSheet"
import { EditUserSheet } from "@/components/configuration/users/editUserSheet"
import { RoleSchemaType, UserSchemaType } from "@/lib/schemas"

export function Users() {
    const { company } = UseCompanyStore();

    const { data: usersData, isLoading, isError, refetch } = useQuery({
        queryKey: ['users', company?.id],
        queryFn: ({ queryKey }) => {
            const companyId = queryKey[1];
            if (!companyId) {
                // Return a rejected promise if companyId is undefined
                return Promise.reject(new Error('Company ID is undefined'));
            }
            return getUsers(companyId);
        },
        enabled: !!company?.id, // Ensure the query runs only if company ID exists
    });
    const usersArray: UserSchemaType[] = Array.isArray(usersData?.data?.data) ? usersData.data.data : [];

    const sortedUsers = usersArray.sort((a, b) => {
        if (a.isActive !== b.isActive) {
            return a.isActive ? -1 : 1;
        }
        // Then sort by created date
        return new Date(a.created).getTime() - new Date(b.created).getTime();
    });

    const userNameInitials = (username: string) => {
        const words = username
            .split(' ')
            .filter(word => /^[a-zA-Z]/.test(word)); // Only words starting with letters

        const firstInitial = words[0]?.charAt(0).toUpperCase() ?? '';
        const secondInitial = words[1]?.charAt(0).toUpperCase() ?? '';

        return firstInitial + secondInitial;
    };

    if (isError) return <div>Hubo un error</div>;

    console.log("USERS :: ", usersData)

    return (
        <div className="flex w-full h-full">
            <div className="flex flex-col justify-between w-full">
                <div className="flex gap-20 m-10">
                    <Table>
                        <TableHeader>
                            <TableRow className="hover:bg-white">
                                <TableHead className="w-4 p-0 m-0"></TableHead>
                                <TableHead className="">Nombre</TableHead>
                                <TableHead className="">Email</TableHead>
                                <TableHead className="">Estado</TableHead>
                                <TableHead className="">Roles</TableHead>
                                <TableHead className="text-center">Creado</TableHead>
                                <TableHead className="text-center">Editado</TableHead>
                                <TableHead className="w-2"></TableHead>
                                <TableHead className="w-2"></TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody className="h-full overflow-auto">
                            {isLoading
                                ? <TableRow>
                                    <TableCell>
                                        <LoadingIndicator />
                                    </TableCell>
                                </TableRow>
                                : sortedUsers.map((user: UserSchemaType) => (
                                    <TableRow key={user.id} className="hover:bg-accent">
                                        <TableCell>
                                            <Avatar>
                                                <div className="flex items-center justify-center w-full h-full rounded-full bg-info text-white font-bold">
                                                    {userNameInitials(user.name)}
                                                </div>
                                            </Avatar>
                                        </TableCell>
                                        <TableCell className="font-base">
                                            {user.name}
                                        </TableCell>
                                        <TableCell className="">{user.email}</TableCell>
                                        <TableCell className={cn('text-primary', {
                                            'text-highlight': !user.isActive
                                        })}>
                                            {
                                                user.isActive
                                                    ? "ACTIVO"
                                                    : "INACTIVO"}
                                        </TableCell>
                                        <TableCell>
                                            <div className="flex gap-2 items-center">
                                                {user.roles.length ?
                                                    user.roles.map((role: RoleSchemaType, index: number) => (
                                                        <HoverCard key={role.id}>
                                                            <HoverCardTrigger>
                                                                <Badge className={`text-sm cursor-pointer ${colorClasses[index]} hover:opacity-70 hover:${colorClasses[index]}`}>{role.name}</Badge>
                                                            </HoverCardTrigger>
                                                            <HoverCardContent className="w-96">
                                                                <div className="flex flex-col">
                                                                    {
                                                                        <RoleDetail role={role} />
                                                                    }
                                                                </div>
                                                            </HoverCardContent>
                                                        </HoverCard>
                                                    )
                                                    )
                                                    : "-"
                                                }
                                            </div>
                                        </TableCell>
                                        <TableCell className="text-center">{formatDate(user.created)}</TableCell>
                                        <TableCell className="text-center">{formatDate(user.updated)}</TableCell>
                                        <TableCell className="text-right">
                                            <EditUserSheet
                                                userId={user.id}
                                                data={user}
                                                title="Editar usuario"
                                                subTitle="Actualiza los datos del usuario"
                                                icon={<Pencil size={20} />}
                                                callback={refetch}
                                                triggerButton={
                                                    <Button variant='ghost' size='sm'>
                                                        <Pencil size={18} />
                                                    </Button>
                                                } />
                                        </TableCell>
                                        <TableCell className="text-right">
                                            {user.roles.find((role: RoleSchemaType) => role.name.toUpperCase() === "ADMIN") ?
                                                <Button variant='ghost' size='sm' disabled>
                                                    <Trash2 size={18} />
                                                </Button>
                                                :
                                                <DeleteUserSheet
                                                    userId={user.id}
                                                    userData={user}
                                                    title="Eliminar usuario"
                                                    subTitle="¿Deseas borrar este usuario?"
                                                    triggerButton={
                                                        <Button variant='ghost' size='sm'>
                                                            <Trash2 size={18} />
                                                        </Button>}
                                                    callback={refetch}
                                                />
                                            }
                                        </TableCell>
                                    </TableRow>
                                ))
                            }
                        </TableBody>
                    </Table>
                </div>
                <CardFooter className='w-full'>
                    <div className='flex flex-col-reverse md:flex-row justify-end items-center min-h-20'>
                        <AddUserSheet
                            callback={refetch}
                            triggerButton={
                                <Button variant='outline' className='min-w-[200px] flex gap-2'>
                                    <span>
                                        Agregar un usuario
                                    </span>
                                    <UserRoundPlus size={18} />
                                </Button>
                            } />
                    </div>
                </CardFooter>
            </div >
        </div >
    )
}