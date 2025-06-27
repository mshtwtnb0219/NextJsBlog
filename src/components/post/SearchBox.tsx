'use client'
import { useState ,useEffect } from "react"
import { useRouter } from "next/navigation"
import { Input } from "@/components/ui/input"

export default function SearchBox() {
const [search ,setSearch] = useState('')
const [debouncedSearch,setDebouncedSearch] = useState('')
const router = useRouter()

// デバウンス
// 監視対象を設定　searchが更新されたら実行する
useEffect(() => {
    const timer = setTimeout(() => {
        setDebouncedSearch(search)
    },500)
    return () => {
        clearTimeout(timer)
    }

}, [search])

// デバウンス度サーチが更新されたら実行
useEffect(() => {
    if(debouncedSearch.trim()) {
        router.push(`/?search=${debouncedSearch.trim()}`)
    } else {
        router.push('/')
    }
})


    return (
        <>
            <Input placeholder="記事を検索"
                className="w-[200px] lg:w-[300px]" 
                value={search}
                // 文字が検索されたタイミングで更新する
                onChange={(e) => setSearch(e.target.value)}/>
        </>
    )
}
