import { usePathname, useRouter } from "next/navigation"

export function useSyncSearchParams() {
    const pathname = usePathname();
    const { replace } = useRouter();

    return function sync(params: URLSearchParams) {
        replace(`${pathname}?${params.toString()}`)
    }
}