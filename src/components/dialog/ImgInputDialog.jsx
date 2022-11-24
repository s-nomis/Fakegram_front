import React from "react";
import DialogComponent from "./DialogComponent";

import gallery from "../../assets/icons/gallery.png";

const ImgInputDialog = ({ displayDialog, displayNextDialog, imgFile }) => {
    const handleChange = (e) => {
        const [file] = e.target.files;

        if (file) {
            imgFile(file);
        }

        console.log(file);

        displayNextDialog(true);
        displayDialog(false);
    };

    return (
        <DialogComponent displayDialog={displayDialog}>
            <div
                className="lg-container dialog-container"
                onClick={(e) => e.stopPropagation()}
            >
                <section className="dialog-header flex-row flex-center">
                    <h4 className="fw-600">Créer une nouvelle publication</h4>
                </section>
                <hr />

                <section className="flex-col flex-center g-16 width-100 height-100">
                    <div className="icon">
                        <img src={gallery} alt="" />
                    </div>

                    <h2 className="text-center fs-22 fw-300">
                        Faites glisser les photos et les vidéos ici
                    </h2>

                    <label
                        htmlFor="img-preview"
                        className="btn btn-primary btn-small fw-600 mt-10"
                    >
                        Sélectionner sur l'ordinateur
                    </label>
                    <input
                        type="file"
                        id="img-preview"
                        className="hidden"
                        onChange={handleChange}
                    />
                </section>
            </div>
        </DialogComponent>
    );
};

export default ImgInputDialog;
