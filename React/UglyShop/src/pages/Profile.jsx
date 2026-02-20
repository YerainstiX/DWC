import React, { useEffect, useState } from "react"
import useSession from "../hooks/useSession"
import useProfile from "../hooks/useProfile"
import { validateNameForm } from "../lib/validations"
import "./Profile.css"

const Profile = () => {
    const { getProfile, editProfile, profile } = useProfile()
    const { user } = useSession()
    //If there is no avatar it will show this one
    const withoutAvatar =
        "https://i.pinimg.com/474x/0e/16/cc/0e16cc66e2b4da46ce88355100a5c69e.jpg"

    const [myProfile, setMyProfile] = useState(null)

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

    //The method to manage all the logic of updating the profile
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

        await editProfile(formData, userId)
        setErrors({ display_name: "", status: "" })

        setErrors((prev) => ({
            ...prev,
            status: "Profile updated successfully",
        }))
        setEditing(false)
        setTimeout(() => {
            setErrors({ display_name: "", status: "" })
        }, 3000)
    }

    useEffect(() => {
        if (!userId) return
        getProfile()
    }, [userId])

    //Due to the policies the admin can see all the profiles, so in case the user is an admin,
    //I've done this logic
    useEffect(() => {
        if (!profile || !userId) return

        const found = profile.find((p) => p.user_id === userId)

        if (found) {
            setMyProfile(found)
            setFormData({
                display_name: found.display_name || "",
                description: found.description || "",
                avatar_url: found.avatar_url || "",
            })
        }
    }, [profile, userId])

    return (
        <div className="profile_container">
            {changeImage && (
                <div className="profile_modal_overlay">
                    <div className="profile_popup">
                        <label htmlFor="avatar_url">AVATAR URL</label>
                        <input
                            type="text"
                            name="avatar_url"
                            value={formData.avatar_url}
                            disabled={!editing}
                            onChange={handleChange}
                        />
                        <button
                            className="profile_confirm_btn"
                            onClick={() => setChangeImage(false)}
                        >
                            Confirm
                        </button>
                        <button
                            className="profile_cancel_btn"
                            onClick={() => {
                                setChangeImage(false)
                                setFormData((prev) => ({
                                    ...prev,
                                    avatar_url: myProfile?.avatar_url || "",
                                }))
                            }}
                        >
                            Cancel
                        </button>
                    </div>
                </div>
            )}
            <div className={`profile_img ${editing ? "editing" : ""}`}>
                <img
                    src={
                        myProfile?.avatar_url
                            ? myProfile?.avatar_url
                            : withoutAvatar
                    }
                    alt="avatar"
                    onClick={() => {
                        editing && setChangeImage(true)
                    }}
                />
            </div>
            <div className="profile_info">
                <input
                    className="profile_name"
                    name="display_name"
                    type="text"
                    disabled={!editing}
                    value={formData.display_name}
                    onChange={handleChange}
                />
                {errors.display_name && (
                    <p className="profile_errors">{errors.display_name}</p>
                )}
                <p className="profile_email">{myProfile?.email}</p>
                <p className="profile_created">
                    CREATED:{" "}
                    {new Date(myProfile?.created_at).toLocaleDateString(
                        "es-ES",
                    )}
                </p>
                <label htmlFor="description">DESCRIPTION</label>
                <textarea
                    className="profile_description"
                    name="description"
                    type="text"
                    disabled={!editing}
                    value={formData?.description || ""}
                    onChange={handleChange}
                />

                {editing ? (
                    <>
                        <div>
                            <button
                                className="profile_confirm_btn"
                                onClick={handleSave}
                            >
                                Save
                            </button>
                            <button
                                className="profile_cancel_btn"
                                onClick={() => {
                                    setEditing(false)
                                    setFormData({
                                        display_name:
                                            myProfile?.display_name || "",
                                        description:
                                            myProfile?.description || "",
                                        avatar_url: myProfile?.avatar_url || "",
                                    })
                                }}
                            >
                                Cancel
                            </button>
                        </div>
                    </>
                ) : (
                    <>
                        <button
                            className="profile_edit_btn"
                            onClick={() => setEditing(true)}
                        >
                            Edit
                        </button>
                    </>
                )}
            </div>
            {errors.status && <p className="profile_errors">{errors.status}</p>}
        </div>
    )
}

export default Profile
