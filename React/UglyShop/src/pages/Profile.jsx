import React, { useEffect, useState } from "react"
import useSession from "../hooks/useSession"
import useProfile from "../hooks/useProfile"
import { validateNameForm } from "../lib/validations"

const Profile = () => {
    const { getProfile, editProfile, profile } = useProfile()
    const { isAdmin, sessionData, user } = useSession()
    const withoutAvatar =
        "https://i.pinimg.com/474x/0e/16/cc/0e16cc66e2b4da46ce88355100a5c69e.jpg"

    const [editing, setEditing] = useState(false)

    const [changeImage, setChangeImage] = useState(false)

    const userId = user?.id

    const [formData, setFormData] = useState({
        display_name: "",
        avatar_url: "",
        description: "",
    })

    const [errors, setErrors] = useState({
        display_name: "",
        status: "",
    })

    const handleChange = (e) => {
        const { name, value } = e.target

        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }))
    }

    const handleSave = async () => {
        const { newErrors, valid } = validateNameForm(formData)

        if (!valid) {
            setErrors(newErrors)
            setErrors({
                ...newErrors,
                status: "Cannot update the profile",
            })
            return
        }
        console.log(user?.id)
        await editProfile(formData, userId)
        setErrors({ display_name: "", status: "" })

        setErrors((prev) => ({
            ...prev,
            status: "Profile updated successfully",
        }))
        setEditing(false)
        setTimeout(() => {
            setErrors({ display_name: "", status: "" })
        }, 1500)
    }

    useEffect(() => {
        if (!userId) return
        getProfile()
    }, [isAdmin, userId])

    useEffect(() => {
        if (!profile || !userId) return

        // Buscamos el objeto cuyo user_id coincida con el ID de la sesión
        const myProfile = profile.find((p) => p.user_id === userId)

        if (myProfile) {
            setFormData({
                display_name: myProfile.display_name || "",
                description: myProfile.description || "",
                avatar_url: myProfile.avatar_url || "",
            })
        }
    }, [profile, userId])

    return (
        <div>
            {changeImage && (
                <div className="profile_popup">
                    <label htmlFor="avatar_url">AVATAR URL</label>
                    <input
                        type="text"
                        name="avatar_url"
                        value={formData.avatar_url}
                        disabled={!editing}
                        onChange={handleChange}
                    />
                    <button onClick={() => setChangeImage(false)}>
                        CONFIRM
                    </button>
                    <button
                        onClick={() => {
                            setChangeImage(false)
                            setFormData((prev) => ({
                                ...prev,
                                avatar_url: profile?.[0]?.avatar_url || "",
                            }))
                        }}
                    >
                        CANCEL
                    </button>
                </div>
            )}
            <img
                src={
                    profile?.[0]?.avatar_url
                        ? profile?.[0]?.avatar_url
                        : withoutAvatar
                }
                alt="avatar"
                onClick={() => {
                    editing && setChangeImage(true)
                }}
            />

            <input
                name="display_name"
                type="text"
                disabled={!editing}
                value={formData.display_name}
                onChange={handleChange}
            />
            {errors.display_name && <p>{errors.display_name}</p>}
            <p>{profile?.[0]?.email}</p>
            <p>
                CREATED:{" "}
                {new Date(profile?.[0]?.created_at).toLocaleDateString("es-ES")}
            </p>
            <label htmlFor="description">DESCRIPTION</label>
            <input
                name="description"
                type="text"
                disabled={!editing}
                value={formData?.description || ""}
                onChange={handleChange}
            />
            {editing ? (
                <>
                    <div>
                        <button onClick={handleSave}>Save</button>
                        <button
                            onClick={() => {
                                setEditing(false)
                                setFormData({
                                    display_name: profile[0].display_name || "",
                                    description: profile[0].description || "",
                                    avatar_url: profile[0].avatar_url || "",
                                })
                            }}
                        >
                            Cancel
                        </button>
                    </div>
                    {errors.status && <p>{errors.status}</p>}
                </>
            ) : (
                <>
                    <button onClick={() => setEditing(true)}>Edit</button>
                </>
            )}
        </div>
    )
}

export default Profile
