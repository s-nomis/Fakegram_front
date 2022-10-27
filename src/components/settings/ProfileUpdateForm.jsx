import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateUser } from "../../redux/features/authSlice";
import LoadingSpinner from "../LoadingSpinner";
import Avatar from "../profil/Avatar";

const ProfileUpdateForm = () => {
    const dispatch = useDispatch();

    const { loading, user } = useSelector((state) => state.auth);

    const [userInfos, setUserInfos] = useState({
        fullname: "",
        username: "",
        website: "",
        bio: "",
        email: "",
        phone: "",
        genre: "",
    });

    const handleSubmit = (e) => {
        e.preventDefault();

        dispatch(updateUser({ userId: user._id, data: userInfos }));
    };

    useEffect(() => {
        if (user) {
            setUserInfos({
                ...userInfos,
                fullname: user.fullname,
                username: user.username,
                website: user.website,
                bio: user.bio,
                email: user.email,
                phone: user.phone,
                genre: user.genre,
            });
        }
    }, [user]);

    return (
        <div className="flex-col g-16 width-100 mt-32 mb-32">
            {loading ? (
                <LoadingSpinner />
            ) : user ? (
                <>
                    <div className="flex-row width-100">
                        <div className="aside flex-row flex-justify-end">
                            <Avatar avatar={user.avatar}>
                                <img
                                    src={user.avatar}
                                    alt=""
                                    className="avatar"
                                    width={38}
                                />
                            </Avatar>
                        </div>

                        <div className="input-update-container">
                            <h1 className="title fw-400">{user.username}</h1>
                            <Avatar avatar={user.avatar}>
                                <span className="btn btn-tertiary fw-600">
                                    Modifier la photo de profil
                                </span>
                            </Avatar>
                        </div>
                    </div>

                    <form
                        className="flex-col g-16 width-100"
                        onSubmit={handleSubmit}
                    >
                        <div className="flex-row">
                            <aside className="aside">
                                <label htmlFor="">Nom</label>
                            </aside>
                            <div className="input-update-container">
                                <input
                                    type="text"
                                    placeholder="Nom"
                                    className="input-update"
                                    defaultValue={userInfos.fullname}
                                    onChange={(e) =>
                                        setUserInfos({
                                            ...userInfos,
                                            fullname: e.target.value,
                                        })
                                    }
                                />
                                <div className="text-small gray fw-400 mt-16 mb-8">
                                    <div className="mb-16">
                                        Aidez les gens à trouver votre compte à
                                        l'aide de votre nom le plus connu, que
                                        ce soit votre nom complet, votre surnom
                                        ou votre nom d'entreprise.
                                    </div>
                                    <div>
                                        Vous pouvez uniquement changer votre nom
                                        deux fois tous les 14 jours.
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="flex-row">
                            <aside className="aside">
                                <label htmlFor="">Nom d'utilisateur</label>
                            </aside>
                            <div className="input-update-container">
                                <input
                                    type="text"
                                    placeholder="Nom d'utilisateur"
                                    defaultValue={userInfos.username}
                                    className="input-update"
                                    onChange={(e) =>
                                        setUserInfos({
                                            ...userInfos,
                                            username: e.target.value,
                                        })
                                    }
                                />
                                <div className="text-small gray fw-400 mt-16 mb-8">
                                    Dans la plupart des cas, vous pourrez
                                    reprendre votre nom d'utilisateur
                                    user.username pendant encore 14 jours. En
                                    savoir plus
                                </div>
                            </div>
                        </div>

                        <div className="flex-row">
                            <aside className="aside">
                                <label htmlFor="">Site web</label>
                            </aside>
                            <div className="input-update-container">
                                <input
                                    type="text"
                                    placeholder="Site web"
                                    className="input-update"
                                    defaultValue={userInfos.website}
                                    onChange={(e) =>
                                        setUserInfos({
                                            ...userInfos,
                                            website: e.target.value,
                                        })
                                    }
                                />
                            </div>
                        </div>

                        <div className="flex-row">
                            <aside className="aside">
                                <label htmlFor="">Bio</label>
                            </aside>
                            <div className="input-update-container">
                                <input
                                    type="text"
                                    defaultValue={userInfos.bio}
                                    className="input-update"
                                    onChange={(e) =>
                                        setUserInfos({
                                            ...userInfos,
                                            bio: e.target.value,
                                        })
                                    }
                                />
                            </div>
                        </div>

                        <div className="flex-row">
                            <aside className="aside">
                                <label htmlFor=""></label>
                            </aside>
                            <div className="input-update-container">
                                <div className="text-small gray fw-400 mt-16">
                                    <h2 className="text-medium fw-600 mb-4">
                                        Informations personnelles
                                    </h2>
                                    <div>
                                        Fournissez vos informations
                                        personnelles, mêmes si le compt est
                                        utilisé par une entreprise, un animal ou
                                        autre chose. Elles n'apparaîtront pas
                                        sur votre profil public.
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="flex-row">
                            <aside className="aside">
                                <label htmlFor="">Adresse e-mail</label>
                            </aside>
                            <div className="input-update-container">
                                <input
                                    type="text"
                                    placeholder="Adresse e-mail"
                                    className="input-update"
                                    defaultValue={userInfos.email}
                                    onChange={(e) =>
                                        setUserInfos({
                                            ...userInfos,
                                            email: e.target.value,
                                        })
                                    }
                                />
                            </div>
                        </div>

                        <div className="flex-row">
                            <aside className="aside">
                                <label htmlFor="">Numéro de téléphone</label>
                            </aside>
                            <div className="input-update-container">
                                <input
                                    type="text"
                                    placeholder="Numéro de téléphone"
                                    className="input-update"
                                    defaultValue={userInfos.phone}
                                    onChange={(e) =>
                                        setUserInfos({
                                            ...userInfos,
                                            phone: e.target.value,
                                        })
                                    }
                                />
                            </div>
                        </div>

                        <div className="flex-row">
                            <aside className="aside">
                                <label htmlFor="">Genre</label>
                            </aside>
                            <div className="input-update-container">
                                <input
                                    type="text"
                                    placeholder="Genre"
                                    className="input-update"
                                />
                            </div>
                        </div>

                        <div className="flex-row">
                            <aside className="aside">
                                <label htmlFor=""></label>
                            </aside>
                            <div className="mt-16">
                                <button
                                    className="btn btn-primary btn-small fw-600"
                                    type="submit"
                                >
                                    Envoyer
                                </button>
                            </div>
                        </div>
                    </form>
                </>
            ) : (
                <NotFound />
            )}
        </div>
    );
};

export default ProfileUpdateForm;
