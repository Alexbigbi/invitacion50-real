"use client";

import { Button } from "./ui/button";
import { useState } from "react";

import ConfirmationDialog from "~/components/dialogs/confirmationDialog";

const ConfirmAssistance = () => {
    let [open, setOpen] = useState(false);
    return (
        <>
            <Button className="bg-amber-500 text-amber-900 text-2xl drop-shadow-md font-elegant py-2 px-4 rounded-lg shadow-md hover:bg-amber-600 transition duration-200" 
            onClick={() => setOpen(true)}> 
            Confirmar Asistencia 
            </Button>
            <ConfirmationDialog open={open} setOpen={setOpen} />
        </>
    );
};

export default ConfirmAssistance;
