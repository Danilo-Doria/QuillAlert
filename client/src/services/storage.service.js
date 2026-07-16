
import { supabase } from "../config/supabase.client.js";


export const uploadReportImage = async (base64Image) => {

    if (!base64Image) {
        return null;
    }


    // quitar encabezado:
    // data:image/jpeg;base64,
    const base64Data = base64Image.replace(
        /^data:image\/\w+;base64,/,
        ""
    );


    const buffer = Buffer.from(
        base64Data,
        "base64"
    );


    const fileName = `report-${Date.now()}.jpg`;


    const { data, error } = await supabase
        .storage
        .from("imgReports")
        .upload(
            fileName,
            buffer,
            {
                contentType: "image/jpeg",
                upsert: false
            }
        );
    if(error){
        throw error;
    }
    const { data:publicUrl } = supabase
        .storage
        .from("imgReports")
        .getPublicUrl(
            data.path
        );
    return publicUrl.publicUrl;
};