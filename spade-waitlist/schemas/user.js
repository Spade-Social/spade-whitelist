export default {
    name: "user",
    title: "User",
    type: "document",
    fields: [
        {
            name: "name",
            title: "Full Name",
            type: "string"
        },
        {
            name: "email",
            title: "User Email",
            type: "email"
        },
        {
            name: "activationKey",
            title: "Activation Key",
            type: "number"
        },
        {
            name: "country",
            title: "Country",
            type: "string"
        }
    ]
}