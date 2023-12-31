import { Header } from "@/components/header"
import { Chat } from "./Chat"

export default async function ChatGPTWithX() {

    return (
        <main className="min-h-screen flex flex-col items-center justify-center w-full h-full">
            <Header
                heading="ChatGPT with X"
                subheading="A ChatGPT app that lets you chat with documents."
            />
            <Chat />
        </main>
    )
}