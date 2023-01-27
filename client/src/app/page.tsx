import { api } from '@services/api'

export default async function Index() {
    await api.signIn.post()

    return (
        <h1 className="flex justify-center items-center w-full h-screen text-blue-500 text-2xl">
            Hi friends!
        </h1>
    )
}
