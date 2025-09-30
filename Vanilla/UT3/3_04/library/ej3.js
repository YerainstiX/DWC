export const users = [
    {
        nombre: "Luis",
        preferencias: { tema: "oscuro", idioma: "español", edad: 25 },
        contacto: {
            direccion: {
                calle: "Calle falsa, 666",
                localidad: "Elda",
                pais: "España",
            },
            correoelectronico: "correofalso@yahoo.com",
            telefono: "123456789",
        },
    },
    {
        nombre: "Marta",
        preferencias: { tema: "claro", idioma: "catalán", edad: 15 },
        contacto: {
            direccion: {
                calle: "Calle también falsa, 123",
                localidad: "Andorra la Vella",
                pais: "Andorra",
            },
            correoelectronico: "correoandorrano@gmail.com",
            telefono: "",
        },
    },
    {
        nombre: "Alberto",
        preferencias: { tema: "oscuro", idioma: "español", edad: 56 },
        contacto: {
            direccion: {
                calle: "Elm Street, 666",
                localidad: "Petrer",
                pais: "España",
            },
            correoelectronico: "correonulo@yahoo.com",
            telefono: "548632478",
        },
    },
    {
        nombre: "Jacinto",
        preferencias: { tema: "claro", idioma: "inglés", edad: 17 },
        contacto: {
            direccion: {
                calle: "Elm Street, 667",
                localidad: "Elda",
                pais: "España",
            },
            correoelectronico: "correofalso@gmail.com",
            telefono: "",
        },
    },
    {
        nombre: "Rigoberta",
        preferencias: { tema: "claro", idioma: "francés", edad: 34 },
        contacto: {
            direccion: {
                calle: "Calle inexistente, 6",
                localidad: "Burdeos",
                pais: "Francia",
            },
            correoelectronico: "correofalso@gmail.com",
            telefono: "232547859",
        },
    },
    {
        nombre: "Sandra",
        preferencias: { tema: "oscuro", idioma: "español", edad: 18 },
        contacto: {
            direccion: {
                calle: "Calle de mentira, s/n",
                localidad: "Petrer",
                pais: "España",
            },
            correoelectronico: "estecorreonoexiste@gmail.com",
            telefono: "452158697",
        },
    },
    {
        nombre: "Sandra",
        preferencias: { tema: "oscuro", idioma: "español", edad: 18 },
        contacto: {
            direccion: {
                calle: "Calle existente, 34",
                localidad: "Petrer",
                pais: "España",
            },
            correoelectronico: "correoinexistente@yahoo.com",
            telefono: "",
        },
    },
]

export const addUser = (user) => {
    return [...users, user]
}

export const plus18 = (users) => {
    if (!isJSONArray(users)) {
        return "No es un objeto JSON, poco agraciado a la vista"
    }
    return users.filter((user) => user.preferencias.edad > 18)
}

export const yahooServer = (users) => {
    if (!isJSONArray(users)) {
        return "No es un objeto JSON, poco agraciado a la vista"
    }
    return users.filter((user) =>
        user.contacto.correoelectronico.includes("@yahoo")
    )
}

export const megaFilter = (users) => {
    if (!isJSONArray(users)) {
        return "No es un objeto JSON, poco agraciado a la vista"
    }
    return plus18(users).filter(
        (user) =>
            user.preferencias.tema === "claro" &&
            user.contacto.direccion.pais === "España"
    )
}
/*In this function I use destructuring to extract directly the data from the object, I extract
the same way the data from preferencias, I use "|| {}"" to make sure that preferencias is not
undefined, and it that way it don't explodes when destructuring.*/
export const missingData = (users) => {
    if (!isJSONArray(users)) {
        return "No es un objeto JSON, poco agraciado a la vista"
    }
    return users.filter(({ nombre, preferencias, contacto }) => {
        const { tema, idioma, edad } = preferencias || {}
        const { direccion, correoelectronico, telefono } = contacto || {}
        const { calle, localidad, pais } = direccion || {}

        const datos = [
            nombre,
            tema,
            idioma,
            edad,
            calle,
            localidad,
            pais,
            correoelectronico,
            telefono,
        ]

        return datos.some((dato) => dato === undefined || dato === "")
    })
}

export const addLastName = (users) => {
    if (!isJSONArray(users)) {
        return "No es un objeto JSON, poco agraciado a la vista"
    }
    return users.map((user) => ({ ...user, apellido: "No definido" }))
}

export const addPostalCode = (users) => {
    if (!isJSONArray(users)) {
        return "No es un objeto JSON, poco agraciado a la vista"
    }
    return users.map((user) => ({
        ...user,
        contacto: {
            ...user.contacto,
            direccion: {
                ...user.direccion,
                codigo: "00000",
            },
        },
    }))
}
//Function to prove that we are receiving a Array with JSON objects inside
const isJSONArray = (array) => {
    return (
        Array.isArray(array) &&
        array.every(
            (object) => typeof object === "object" && !Array.isArray(object)
        )
    )
}
