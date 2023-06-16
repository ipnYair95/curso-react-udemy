export const fileUpload = async (file) =>{

    if( !file ){
        throw new Error("No tenemos ningún archivo a subir");
    }

    const cloudUrl = 'https://api.cloudinary.com/v1_1/daijgyraz/upload';

    const formData = new FormData();

    formData.append('file', file );
    formData.append('upload_preset', 'react-journal');

    try {

        const resp = await fetch( cloudUrl, {
            method: 'POST',
            body: formData
        });

        console.log(resp);

        if( !resp.ok ){
            throw new Error("No se pudo subir imagen");
        }

        const cloudResp = await resp.json();
        console.log(cloudResp);

        return cloudResp.secure_url;
        
    } catch (error) {
        console.error(error);
        throw new Error( error.message );
    }


}