import AddProductsList from "@/components/configuration/provider/products/addProductsList";
import { SelectedProductsSheet } from "@/components/configuration/provider/products/selecedProductsSheet";
import ErrorMessage from "@/components/errorMessage";
import LoadingIndicator from "@/components/loadingIndicator";
import { Button } from "@/components/ui/button";
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { UseNewProductSearch } from "@/hooks/useNewProductSearch";
import { ProviderProductSearch, ProviderProductSearchType } from "@/lib/schemas";
import { useProductStore } from "@/store/addProductItem.store";
import UseCompanyStore from "@/store/company.store";
import { zodResolver } from "@hookform/resolvers/zod";
import { Search, SearchX, X } from "lucide-react";
import { useEffect, useState } from "react";
import { FormProvider, useForm } from "react-hook-form";


export default function UploadManualProducts() {
    const { getAllProducts, addProduct, removeProduct, removeAllProducts } = useProductStore();
    const allProducts = getAllProducts();
    const [formSubmited, setFormSubmited] = useState(false);
    const { company } = UseCompanyStore();
    const { data, isLoading, isError, handleSearch, resetSearch } = UseNewProductSearch();
    const filteredProducts = data?.products.filter(product => !allProducts.some(p => p.gtin === product.gtin)) || [];

    const form = useForm<ProviderProductSearchType>({
        resolver: zodResolver(ProviderProductSearch),
        disabled: isLoading,
    });
    const { name, brand, ean } = form.watch();
    const isDisabled = !name && !brand && !ean; // Disable if both fields are empty
    const companyId = company?.id ?? undefined;

    async function onSubmit(fields: ProviderProductSearchType) {
        const { name, brand, ean } = fields;

        if (!name && !brand && !ean) {
            resetSearch();
            setFormSubmited(false);
        } else {
            try {
                await handleSearch({ name, brand, ean, companyId });
                setFormSubmited(true);
            } catch (error) {
                // Reset form error state to allow resubmission
                form.clearErrors();
                // Enable the form
                form.reset(fields, {
                    keepValues: true,
                    keepDirty: true,
                });
            }
        }
    }

    function resetField(field: "name" | "brand" | "ean") {
        form.setValue(field, "");

        const fields = {
            name: field == "name" ? "" : name,
            brand: field == "brand" ? "" : brand,
            ean: field == "ean" ? "" : ean,
            includeInventory: false,
            companyId
        }
        onSubmit(fields)
    }

    function savedProductsCallback() {
        form.reset({
            name: "",
            brand: "",
            ean: ""
        });
        resetSearch()
        removeAllProducts();
    }

    useEffect(() => {
        return () => {
            removeAllProducts();
        }
    }, [])

    return (
        <div className="grid grid-rows-[auto,1fr] h-[calc(100vh-250px)]">
            <div className="pl-10 shadow rounded mx-10 mt-5 p-5">
                <div className="w-full flex justify-between items-center">
                    <h1 className="text-base font-bold text-nowrap">Busca el producto por nombre, marca o codigo EAN</h1>
                    <SelectedProductsSheet
                        companyId={company?.id}
                        products={allProducts}
                        triggerButton={
                            <Button variant="outlineSecondary" className="space-x-2">
                                {allProducts.length > 0 &&
                                    <div className="w-3 h-3 rounded bg-info animate-pulse duration-700"></div>
                                }
                                <p>Ver productos seleccionados</p>
                            </Button>
                        }
                        removeProduct={removeProduct}
                        onSaveCallback={savedProductsCallback}
                    />
                </div>
                <div>
                    <FormProvider {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)}
                            className=" mt-5 p-2 flex justify-start gap-5 [&>div]:multi-[flex;flex-row;gap-2;text-nowrap;items-center;] [&>div>input]:multi-[w-[300px]]">
                            <FormField
                                control={form.control}
                                name="name"
                                render={({ field }) => (
                                    <FormItem>
                                        <div className="flex items-center gap-2 w-fit">
                                            <FormLabel id='name'>Nombre</FormLabel>
                                            <div className="relative">
                                                <FormControl>
                                                    <Input {...field} className="w-72" />
                                                </FormControl>
                                                {field.value && field.value?.length > 0 &&
                                                    <Button
                                                        type="button"
                                                        variant='ghost'
                                                        className="absolute right-0 top-[50%] -translate-y-[50%]"
                                                        onClick={() => resetField(field.name)}
                                                    >
                                                        <X size={20} strokeWidth={3} />
                                                    </Button>
                                                }
                                            </div>
                                            <FormMessage />
                                        </div>
                                    </FormItem>
                                )}
                            />

                            <FormField
                                control={form.control}
                                name="brand"
                                render={({ field }) => (
                                    <FormItem>
                                        <div className="flex items-center gap-2 w-fit">
                                            <FormLabel id='brand'>Marca</FormLabel>
                                            <div className="relative">
                                                <FormControl>
                                                    <Input {...field} className="w-72 pr-14" />
                                                </FormControl>
                                                {field.value && field.value?.length > 0 &&
                                                    <Button
                                                        type="button"
                                                        variant='ghost'
                                                        className="absolute right-0 top-[50%] -translate-y-[50%]"
                                                        onClick={() => resetField(field.name)}
                                                    >
                                                        <X size={20} strokeWidth={3} />
                                                    </Button>
                                                }
                                            </div>
                                            <FormMessage />
                                        </div>
                                    </FormItem>
                                )}
                            />

                            <div>o</div>

                            <FormField
                                control={form.control}
                                name="ean"
                                render={({ field }) => (
                                    <FormItem>
                                        <div className="flex items-center gap-2 w-fit">
                                            <FormLabel id='brand'>Código Ean</FormLabel>
                                            <div className="relative">
                                                <FormControl>
                                                    <Input {...field} className="w-72 pr-14" />
                                                </FormControl>
                                                {field.value && field.value?.length > 0 &&
                                                    <Button
                                                        type="button"
                                                        variant='ghost'
                                                        className="absolute right-0 top-[50%] -translate-y-[50%]"
                                                        onClick={() => resetField(field.name)}
                                                    >
                                                        <X size={20} strokeWidth={3} />
                                                    </Button>
                                                }
                                            </div>
                                            <FormMessage />
                                        </div>
                                    </FormItem>
                                )}
                            />

                            <Button
                                type="submit"
                                className="flex gap-3 px-10"
                                disabled={isDisabled}
                            >
                                <Search />
                                Buscar
                            </Button>
                        </form>
                    </FormProvider>
                </div>

            </div >
            <div className="mx-10 bg-border/50 mt-5 rounded overflow-y-auto">
                {isError && <ErrorMessage />}
                {isLoading &&
                    <div className="w-full h-full flex justify-center items-center">

                        <div className="bg-white rounded shadow py-5 px-8 flex flex-col justify-center items-center gap-y-4">
                            <LoadingIndicator />
                            <p>
                                Buscando...
                            </p>
                        </div>
                    </div>
                }

                {!data && (
                    <div className="w-full h-full flex justify-center items-center">
                        <div className="w-fit h-fit bg-white shadow rounded p-10 flex gap-5 items-center">
                            <div>Tienes que usar el buscador para ver resultados!</div>
                        </div>
                    </div>
                )}
                {data && data.products.length === 0 && (name || brand || ean) && formSubmited && (
                    <div className="w-full h-full flex justify-center items-center">

                        <div className="w-fit h-fit bg-white shadow rounded p-10 flex gap-5 items-center">

                            <div className="bg-destructive w-fit h-fit p-2 rounded">
                                <SearchX size={36} strokeWidth={1.5} className="text-white" />
                            </div>
                            <div>
                                <p>
                                    No se encontraron productos con esos parametros!
                                </p>
                                <p>
                                    Intentalo nuevamente.
                                </p>
                            </div>
                        </div>
                    </div>
                )
                }
                {data && data.products.length > 0 && (
                    <AddProductsList
                        data={filteredProducts}
                        addProduct={addProduct}
                    />
                )}
            </div>
        </div >
    )
}