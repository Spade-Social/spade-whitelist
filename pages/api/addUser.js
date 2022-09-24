import sanityClient from "@sanity/client"

const config = {
    dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
    useCdn: process.env.NODE_ENV || "production",
    token: process.env.SANITY_API_TOKEN
}

const client = sanityClient(config)

export default async function createUser(req, res){
    const { name, email, activationKey, country } = JSON.parse(req.body)
    try {
        await client.create({
            _type: "user",
            name,
            email,
            activationKey,
            country
        })
    } catch (error) {
        return res.status(500).json({ message: "Could not create user", error })
    }
    return res.status(200).json({ message: "User created" })
}