import Link from "next/link"
import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuList,
} from "@/components/ui/navigation-menu"
import Setting from './Setting'
import { auth } from '@/auth'

export default async function PrivateHeader() {

    const session = await auth()
    if (!session?.user?.email) throw new Error("不正なリクエストです")

    return (
        <header className="border-b bg-blue-200">
            <div className="container mx-auto px-4 py-4 items-center justify-between">
                <NavigationMenu>
                    <NavigationMenuList>
                        <NavigationMenuItem>
                            {/* Link コンポーネントに className を直接渡す */}
                            <Link href="/dashboard" className="font-bold text-xl">
                                管理ページ
                            </Link>
                        </NavigationMenuItem>
                    </NavigationMenuList>
                </NavigationMenu>
                <Setting session={session} />
            </div>
        </header>
    )
}
