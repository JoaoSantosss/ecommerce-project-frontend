export async function RegisterUserCommon(endpoint: string, PushData: any) {
    try {
        const res = await fetch(endpoint, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(PushData)
        })

        if(!res.ok) {
            throw new Error(res.statusText)
        }

        const data = await res.json()
        return data

    } catch (error) {
        console.log('Erro POST user common', error)
    }
}