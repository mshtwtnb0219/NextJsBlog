import { writeFile } from "fs/promises";
import path from "path";

export async function saveImage(file: File): Promise<string | null> {


    const buffer = Buffer.from(await file.arrayBuffer())
    const fileName = `${Date.now()}_${file.name}`
    const uploadDir = path.join(process.cwd(), "public/images")


    try {
        const filePath = path.join(uploadDir,fileName)
        await writeFile(filePath,buffer)
        return `/images/${fileName}`

    } catch (error) {
        return null

    }



}